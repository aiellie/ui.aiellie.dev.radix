"use client"

import { LogoIcon, LogoWordmark } from "@/registry/brand/logo"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * EllieSidebarHeader — the AIEllie brand lockup sized for a shadcn sidebar
 * header. LogoIcon takes the `size-8` icon-tile slot, the wordmark + optional
 * subtitle sit in the leading-none label stack. Collapses cleanly: when the
 * sidebar is icon-only, just the logo icon remains.
 *
 * Drop it at the top of your <SidebarHeader>, exactly where a VersionSwitcher
 * or team-switcher would go.
 */
export function EllieSidebarHeader({
  subtitle = "v1.0.1",
  href = "/",
}: {
  subtitle?: string
  href?: string
} = {}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <a href={href} className="group">
            <LogoIcon role="img" aria-label="Brand logo" />
            <div className="flex flex-col gap-0.5 leading-none">
              <LogoWordmark className="text-[1.05rem] font-semibold" />
              {subtitle ? (
                <span className="text-muted-foreground">{subtitle}</span>
              ) : null}
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default EllieSidebarHeader
