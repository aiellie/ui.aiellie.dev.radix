"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface Citation {
  title: string
  url: string
  snippet?: string
}

const DEFAULT_CITATIONS: Citation[] = [
  {
    title: "Caching is now opt-in — Next.js 15 release notes",
    url: "https://nextjs.org/blog/next-15",
    snippet:
      "fetch requests are no longer cached by default. GET route handlers and the client Router Cache are also uncached by default.",
  },
  {
    title: "Turbopack is the default dev bundler",
    url: "https://nextjs.org/docs/architecture/turbopack",
    snippet:
      "New applications created with create-next-app use Turbopack in development for significantly faster local iteration.",
  },
]

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

function CitationMarker({
  index,
  citation,
}: {
  index: number
  citation: Citation
}) {
  return (
    <span className="group/cite relative inline-block align-baseline">
      <button
        type="button"
        className="mx-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-[5px] bg-primary/10 px-1 align-[2px] text-[10px] font-semibold text-primary tabular-nums transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {index}
      </button>
      <span className="pointer-events-none absolute bottom-[calc(100%+6px)] start-1/2 z-20 w-64 -translate-x-1/2 rounded-xl border bg-popover p-3 text-start opacity-0 shadow-lg transition-opacity group-hover/cite:opacity-100 group-focus-within/cite:opacity-100 rtl:translate-x-1/2">
        <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <span className="truncate">{hostname(citation.url)}</span>
          <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3" />
        </span>
        <span className="mt-1 block text-sm leading-snug font-medium">
          {citation.title}
        </span>
        {citation.snippet ? (
          <span className="mt-1 line-clamp-3 block text-xs leading-relaxed text-muted-foreground">
            {citation.snippet}
          </span>
        ) : null}
      </span>
    </span>
  )
}

export function InlineCitation({
  citations = DEFAULT_CITATIONS,
  className,
}: {
  citations?: Citation[]
  className?: string
}) {
  return (
    <p
      className={cn(
        "max-w-prose text-sm leading-7 text-foreground",
        className
      )}
    >
      Next.js 15 made caching opt-in rather than opt-out
      <CitationMarker index={1} citation={citations[0]} />, reversing one of the
      most criticized defaults of the previous release. New apps also use
      Turbopack as the default development bundler
      <CitationMarker index={2} citation={citations[1]} /> for noticeably faster
      local iteration.
    </p>
  )
}
