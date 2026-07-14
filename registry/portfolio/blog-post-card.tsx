import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function BlogPostCard({
  title = "Building a type-safe design system with CVA",
  excerpt = "How I use class-variance-authority and Tailwind to ship a component library that's impossible to misuse.",
  tag = "Engineering",
  date = "Jun 12, 2026",
  readTime = "6 min read",
  accent = "from-violet-500 to-fuchsia-500",
  href = "#",
  className,
}: {
  title?: string
  excerpt?: string
  tag?: string
  date?: string
  readTime?: string
  accent?: string
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        "group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-32 items-center justify-center bg-gradient-to-br",
          accent
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon icon={Clock01Icon} className="size-3.5" />
            {readTime}
          </span>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="ms-auto size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </a>
  )
}
