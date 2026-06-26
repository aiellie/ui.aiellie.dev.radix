"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  DashboardSquare01Icon,
  BubbleChatIcon,
  StarIcon,
} from "@hugeicons/core-free-icons"
import { EllieSidebarHeader } from "@/components/brand/ellie-sidebar"
import { NavUser } from "@/components/nav-user"
import {
  categories,
  getFeaturedItems,
  getItemsByCategory,
  type RegistryItem,
} from "@/lib/registry"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

function RegistryNavItem({
  item,
  pathname,
}: {
  item: RegistryItem
  pathname: string
}) {
  const href = `/c/${item.slug}`

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={pathname === href}
        tooltip={item.title}
      >
        <Link href={href}>
          <HugeiconsIcon icon={item.icon} strokeWidth={2} />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
      {item.isNew ? (
        <SidebarMenuBadge className="bg-primary/15 text-primary">
          New
        </SidebarMenuBadge>
      ) : null}
    </SidebarMenuItem>
  )
}

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const featuredItems = getFeaturedItems()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <EllieSidebarHeader title="aiellie ui" />
      </SidebarHeader>

      <SidebarContent className="group-data-[collapsible=icon]:overflow-auto">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/"}
                  tooltip="Browse all"
                >
                  <Link href="/">
                    <HugeiconsIcon icon={DashboardSquare01Icon} />
                    <span>Browse all</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/chat"}
                  tooltip="Chat block"
                >
                  <Link href="/chat">
                    <HugeiconsIcon icon={BubbleChatIcon} />
                    <span>Chat block</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {featuredItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="gap-1.5">
              <HugeiconsIcon icon={StarIcon} className="size-3.5" />
              Featured
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {featuredItems.map((item) => (
                  <RegistryNavItem key={item.slug} item={item} pathname={pathname} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {categories.map((category) => {
          const items = getItemsByCategory(category.id)

          if (items.length === 0) return null

          return (
            <SidebarGroup key={category.id}>
              <SidebarGroupLabel className="gap-1.5">
                <HugeiconsIcon icon={category.icon} className="size-3.5" />
                {category.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <RegistryNavItem key={item.slug} item={item} pathname={pathname} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={{
          name: "AIellie",
          email: "hello@aiellie.dev",
          avatar: "/aiellieavatar.png",
        }} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
