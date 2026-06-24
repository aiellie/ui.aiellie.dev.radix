"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Download04Icon,
  PauseIcon,
  PlayIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

const BARS = [
  0.3, 0.6, 0.8, 0.5, 0.9, 0.7, 1, 0.6, 0.4, 0.7, 0.9, 0.5, 0.8, 0.6, 0.3, 0.7,
  0.85, 0.5, 0.65, 0.9, 0.4, 0.7, 0.55, 0.8, 0.45, 0.7, 0.6, 0.9, 0.5, 0.75,
]

export function AudioPlayer({
  duration = "0:48",
  className,
}: {
  duration?: string
  className?: string
}) {
  const [playing, setPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0.42)
  const [speed, setSpeed] = React.useState(1)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 0.01 * speed
        if (next >= 1) {
          setPlaying(false)
          return 0
        }
        return next
      })
    }, 120)
    return () => clearInterval(id)
  }, [playing, speed])

  return (
    <div
      className={cn(
        "flex w-full max-w-md items-center gap-3 rounded-2xl border bg-card p-2.5 ps-3",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause" : "Play"}
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
      >
        <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} className="size-5" />
      </button>

      <div
        className="flex h-9 min-w-0 flex-1 items-center gap-[3px]"
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {BARS.map((h, i) => (
          <span
            key={i}
            className={cn(
              "min-w-0 flex-1 rounded-full transition-colors",
              i / BARS.length <= progress
                ? "bg-primary"
                : "bg-muted-foreground/25"
            )}
            style={{ height: `${Math.max(15, h * 100)}%` }}
          />
        ))}
      </div>

      <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
        {duration}
      </span>
      <button
        type="button"
        onClick={() =>
          setSpeed((s) => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1))
        }
        className="shrink-0 rounded-md border px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground tabular-nums transition-colors hover:bg-accent hover:text-foreground"
      >
        {speed}×
      </button>
      <button
        type="button"
        aria-label="Download"
        className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <HugeiconsIcon icon={Download04Icon} className="size-4" />
      </button>
    </div>
  )
}
