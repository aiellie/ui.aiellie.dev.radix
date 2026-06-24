"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  RefreshIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function WebPreview({
  url = "https://ui.aiellie.dev",
  children,
  className,
}: {
  url?: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="ms-1 flex items-center gap-0.5 text-muted-foreground">
          <button
            type="button"
            aria-label="Back"
            className="flex size-6 items-center justify-center rounded-md hover:bg-accent hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="Forward"
            className="flex size-6 items-center justify-center rounded-md hover:bg-accent hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="Reload"
            className="flex size-6 items-center justify-center rounded-md hover:bg-accent hover:text-foreground"
          >
            <HugeiconsIcon icon={RefreshIcon} className="size-3.5" />
          </button>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border bg-background px-2 py-1 text-xs text-muted-foreground">
          <span className="truncate">{url}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label="Open in new tab"
          className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3.5" />
        </a>
      </div>
      <div className="min-h-48">{children ?? <DefaultPage />}</div>
    </div>
  )
}

function DefaultPage() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-3 bg-gradient-to-b from-muted/30 to-background p-6 text-center">
      <span className="rounded-full border bg-card px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
        aiellieui · component registry
      </span>
      <h3 className="text-lg font-semibold tracking-tight">
        Build AI products faster
      </h3>
      <p className="max-w-xs text-xs text-muted-foreground">
        Copy-paste AI, media, and code components built on shadcn/ui.
      </p>
      <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
        Browse components
      </span>
    </div>
  )
}
