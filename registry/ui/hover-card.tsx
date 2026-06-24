"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Globe02Icon } from "@hugeicons/core-free-icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"

export default function HoverCardExample() {
  return (
    <p className="max-w-md text-pretty text-sm leading-relaxed">
      Next.js 16 makes the App Router the default and ships Turbopack as the
      stable bundler
      <HoverCard>
        <HoverCardTrigger asChild>
          <sup>
            <button className="ms-0.5 inline-flex size-4 cursor-pointer items-center justify-center rounded bg-primary/10 align-super text-[0.6rem] font-semibold text-primary hover:bg-primary/20">
              1
            </button>
          </sup>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} className="size-3.5" />
              nextjs.org
            </div>
            <Badge variant="secondary">98% relevant</Badge>
          </div>
          <p className="mt-2 text-sm font-medium">Next.js 16 — Release Blog</p>
          <p className="mt-1 text-xs text-muted-foreground">
            “Turbopack is now stable for both development and production builds,
            delivering faster cold starts and incremental compilation.”
          </p>
        </HoverCardContent>
      </HoverCard>{" "}
      for production builds — hover the citation to preview the source.
    </p>
  )
}
