"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, Queue02Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

const DEFAULT_ITEMS = [
  "Summarize the Q3 board deck into five bullets",
  "Draft a reply to the design-review thread",
  "Generate unit tests for use-chat.ts",
]

export function Queue({
  items = DEFAULT_ITEMS,
  className,
}: {
  items?: string[]
  className?: string
}) {
  const [queue, setQueue] = React.useState(items)

  return (
    <div className={cn("w-full max-w-md rounded-xl border bg-card", className)}>
      <div className="flex items-center gap-2.5 border-b px-4 py-3">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={Queue02Icon} className="size-3.5" />
        </span>
        <span className="text-sm font-medium">Queue</span>
        <span className="ms-auto rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground tabular-nums">
          {queue.length} queued
        </span>
      </div>

      {queue.length === 0 ? (
        <p className="px-4 py-7 text-center text-sm text-muted-foreground">
          The queue is empty.
        </p>
      ) : (
        <ul className="flex flex-col p-2">
          {queue.map((item, i) => (
            <li
              key={item}
              className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-accent"
            >
              <span
                className="grid shrink-0 grid-cols-2 gap-0.5 text-muted-foreground/40"
                aria-hidden
              >
                {Array.from({ length: 6 }).map((_, d) => (
                  <span key={d} className="size-1 rounded-full bg-current" />
                ))}
              </span>
              <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-[11px] text-muted-foreground tabular-nums">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm">{item}</span>
              <button
                type="button"
                onClick={() => setQueue((q) => q.filter((x) => x !== item))}
                aria-label="Remove from queue"
                className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition hover:bg-background hover:text-foreground group-hover:opacity-100"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="size-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
