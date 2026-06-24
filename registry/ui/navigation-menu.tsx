"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const models = [
  { title: "Opus 4.8", desc: "Deepest reasoning for hard problems." },
  { title: "Sonnet 4.6", desc: "Balanced speed and capability." },
  { title: "Haiku 4.5", desc: "Fastest, lowest cost for simple tasks." },
  { title: "Vision", desc: "Understands images, charts, and PDFs." },
]

function ListItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href="#"
          className="block space-y-1 rounded-lg p-3 leading-none no-underline transition-colors hover:bg-accent"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="line-clamp-2 text-sm text-muted-foreground">{desc}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Models</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-1 p-2 md:grid-cols-2">
              {models.map((m) => (
                <ListItem key={m.title} title={m.title} desc={m.desc} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#">Pricing</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#">Docs</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
