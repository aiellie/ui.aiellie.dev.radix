"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { PackageOpenIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const DEFAULT_KEYWORDS = ["react", "ai", "registry", "shadcn"]

export function PackageInfo({
  name = "@aiellie/ui",
  version = "1.4.0",
  description = "A registry of AI, media, and coding components for React, built on shadcn/ui.",
  downloads = "48,920",
  license = "MIT",
  size = "12.4 kB",
  updated = "3 days ago",
  keywords = DEFAULT_KEYWORDS,
  className,
}: {
  name?: string
  version?: string
  description?: string
  downloads?: string
  license?: string
  size?: string
  updated?: string
  keywords?: string[]
  className?: string
}) {
  const stats = [
    { label: "Downloads", value: downloads },
    { label: "License", value: license },
    { label: "Size", value: size },
    { label: "Updated", value: updated },
  ]

  return (
    <div
      className={cn("w-full max-w-md rounded-xl border bg-card p-4", className)}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <HugeiconsIcon icon={PackageOpenIcon} className="size-5.5" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <code className="truncate font-mono text-sm font-semibold">
              {name}
            </code>
            <Badge variant="secondary" className="font-mono text-[10px]">
              v{version}
            </Badge>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border text-xs sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5 bg-card p-2.5">
            <span className="text-[10px] tracking-wide text-muted-foreground uppercase">
              {stat.label}
            </span>
            <span className="font-medium tabular-nums">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {keywords.map((k) => (
          <span
            key={k}
            className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  )
}
