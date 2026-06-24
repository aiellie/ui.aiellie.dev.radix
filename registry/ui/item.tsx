"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  File01Icon,
  Globe02Icon,
  Book01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const sources = [
  { icon: Globe02Icon, title: "Next.js 16 release notes", meta: "nextjs.org", score: 98 },
  { icon: File01Icon, title: "internal-architecture.pdf", meta: "page 12 · uploaded", score: 91 },
  { icon: Book01Icon, title: "App Router caching guide", meta: "docs · 4 min read", score: 84 },
]

export default function ItemExample() {
  return (
    <ItemGroup className="w-full max-w-md gap-2">
      <p className="px-1 text-xs font-medium text-muted-foreground">
        Sources used in this answer
      </p>
      {sources.map((s) => (
        <Item key={s.title} variant="outline" asChild>
          <a href="#">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={s.icon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{s.title}</ItemTitle>
              <ItemDescription>{s.meta}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="secondary">{s.score}% match</Badge>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                className="size-4 text-muted-foreground rtl:rotate-180"
              />
            </ItemActions>
          </a>
        </Item>
      ))}
    </ItemGroup>
  )
}
