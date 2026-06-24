"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowReloadHorizontalIcon,
  Location01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function Checkpoint({
  label = "Checkpoint",
  detail = "Edited prompt-input.tsx",
  onRestore,
  className,
}: {
  label?: string
  detail?: string
  onRestore?: () => void
  className?: string
}) {
  const [restored, setRestored] = React.useState(false)

  return (
    <div className={cn("flex w-full items-center gap-3", className)}>
      <span className="h-px flex-1 bg-border" />
      <div className="flex items-center gap-2 rounded-full border bg-card px-2.5 py-1 shadow-sm">
        <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HugeiconsIcon icon={Location01Icon} className="size-3" />
        </span>
        <span className="text-xs font-medium">{label}</span>
        {detail ? (
          <span className="hidden text-xs text-muted-foreground sm:inline">
            · {detail}
          </span>
        ) : null}
        <button
          type="button"
          onClick={() => {
            setRestored(true)
            onRestore?.()
          }}
          className={cn(
            "ms-1 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium transition-colors",
            restored
              ? "text-muted-foreground"
              : "text-primary hover:bg-primary/10"
          )}
        >
          <HugeiconsIcon
            icon={restored ? Tick02Icon : ArrowReloadHorizontalIcon}
            className="size-3"
          />
          {restored ? "Restored" : "Restore"}
        </button>
      </div>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
