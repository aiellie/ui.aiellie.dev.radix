"use client"

import { Ellie, type EllieExpression } from "./ellie"
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

export default EllieSidebarHeader
