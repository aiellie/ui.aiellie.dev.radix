"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Github01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function ProjectCard({
  title = "Nebula Analytics",
  description = "Real-time product analytics dashboard with sub-second queries over billions of events.",
  tags = ["Next.js", "TypeScript", "ClickHouse", "tRPC"],
  liveUrl = "#",
  repoUrl = "#",
  stars = 1284,
  featured = true,
  accent = "from-violet-500 to-fuchsia-500",
  className,
}: {
  title?: string
  description?: string
  tags?: string[]
  liveUrl?: string
  repoUrl?: string
  stars?: number
  featured?: boolean
  accent?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          accent
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]"
        />
        <span className="relative text-3xl font-bold tracking-tight text-white/90">
          {title.split(" ")[0]}
        </span>
        {featured ? (
          <span className="absolute top-3 left-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            Featured
          </span>
        ) : null}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold tracking-tight">{title}</h3>
          {typeof stars === "number" ? (
            <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
              <HugeiconsIcon
                icon={StarIcon}
                className="size-3.5 text-amber-500"
              />
              {stars.toLocaleString()}
            </span>
          ) : null}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <a
            href={liveUrl}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Live demo
            <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
          </a>
          <a
            href={repoUrl}
            aria-label="View source"
            className="inline-flex size-9 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent"
          >
            <HugeiconsIcon icon={Github01Icon} className="size-4.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
