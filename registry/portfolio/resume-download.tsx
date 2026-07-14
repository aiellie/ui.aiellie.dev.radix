import { HugeiconsIcon } from "@hugeicons/react"
import { Download04Icon, File01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function ResumeDownload({
  name = "ellie-nakamura-cv.pdf",
  meta = "PDF · 248 KB · Updated Jun 2026",
  href = "#",
  className,
}: {
  name?: string
  meta?: string
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      download
      className={cn(
        "group flex w-full max-w-sm items-center gap-3 rounded-2xl border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/40",
        className
      )}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
        <HugeiconsIcon icon={File01Icon} className="size-5.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="truncate text-xs text-muted-foreground">{meta}</p>
      </div>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <HugeiconsIcon icon={Download04Icon} className="size-4.5" />
      </span>
    </a>
  )
}
