"use client"

import * as React from "react"
import { ChevronsUpDown, Check } from "lucide-react"

import { Ellie, type EllieExpression } from "./ellie"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * EllieSidebarHeader — the AIEllie brand lockup sized for a shadcn sidebar
 * header. Ellie (the orb character) takes the `size-8` icon-tile slot, the
 * wordmark + subtitle sit in the leading-none label stack. Collapses cleanly:
 * when the sidebar is icon-only, just Ellie remains.
 *
 * Drop it at the top of your <SidebarHeader>, exactly where a VersionSwitcher
 * or team-switcher would go.
 */
export function EllieSidebarHeader({
  title = "AIEllie UI",
  subtitle = "v1.0.1",
  expression = "calm",
  href = "/",
}: {
  title?: string
  subtitle?: string
  expression?: EllieExpression
  href?: string
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <a href={href}>
            <div className="flex aspect-square size-8 items-center justify-center">
              {/* the orb is its own shape — no tile background behind it */}
              <Ellie size={32} expression={expression} bob={false} blink={false} />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold tracking-tight">{title}</span>
              <span className="text-muted-foreground">{subtitle}</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

/**
 * EllieVersionSwitcher — the AIEllie brand as a version-switcher dropdown,
 * a drop-in replacement for the shadcn `VersionSwitcher`. Same structure and
 * behaviour; the GalleryVerticalEnd icon tile is swapped for Ellie and the
 * title reads "AIEllie UI".
 */
export function EllieVersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[]
  defaultVersion: string
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center">
                <Ellie size={32} expression="calm" bob={false} blink={false} />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold tracking-tight">AIEllie UI</span>
                <span>v{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => setSelectedVersion(version)}
              >
                v{version}{" "}
                {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default EllieSidebarHeader
