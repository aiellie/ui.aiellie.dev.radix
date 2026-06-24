"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export interface Source {
  title: string
  url: string
}

const DEFAULT_SOURCES: Source[] = [
  { title: "Next.js 15 — release notes", url: "https://nextjs.org/blog/next-15" },
  {
    title: "App Router caching documentation",
    url: "https://nextjs.org/docs/app/building-your-application/caching",
  },
  {
    title: "Turbopack architecture overview",
    url: "https://nextjs.org/docs/architecture/turbopack",
  },
  { title: "React 19 — what's new", url: "https://react.dev/blog" },
]

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function Sources({
  sources = DEFAULT_SOURCES,
  defaultOpen = false,
  className,
}: {
  sources?: Source[]
  defaultOpen?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("w-full max-w-md rounded-xl border bg-card", className)}
    >
      <CollapsibleTrigger className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-accent">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={Globe02Icon} className="size-3.5" />
        </span>
        <span className="font-medium">Used {sources.length} sources</span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={cn(
            "ms-auto size-4 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="flex flex-col gap-1 px-2 pb-2">
          {sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-accent"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border bg-background text-[11px] font-semibold text-muted-foreground uppercase">
                  {hostname(s.url).charAt(0)}
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm leading-tight font-medium">
                    {s.title}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {hostname(s.url)}
                  </span>
                </span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
