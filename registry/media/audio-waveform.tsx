"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { PauseIcon, PlayIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const BAR_COUNT = 56

function useBars(count: number) {
  return React.useMemo(() => {
    // Deterministic pseudo-random heights so SSR and client match.
    return Array.from({ length: count }, (_, i) => {
      const v = Math.sin(i * 0.5) * Math.cos(i * 0.13) * 0.5 + 0.5
      return 0.25 + v * 0.75
    })
  }, [count])
}

export function AudioWaveform({
  duration = 168,
  className,
}: {
  duration?: number
  className?: string
}) {
  const bars = useBars(BAR_COUNT)
  const [playing, setPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0.4)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 1 / duration))
    }, 1000)
    return () => clearInterval(id)
  }, [playing, duration])

  const played = Math.round(progress * BAR_COUNT)

  return (
    <Card className={cn("w-full max-w-md gap-0 rounded-2xl py-0 shadow-sm", className)}>
      <CardContent className="flex items-center gap-3 p-3">
        <Button
          size="icon-lg"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying((p) => !p)}
          className="shrink-0 rounded-full"
        >
          <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} />
        </Button>

        <div
          className="flex h-12 flex-1 items-center gap-[2px]"
          role="slider"
          aria-label="Seek"
          aria-valuenow={Math.round(progress * 100)}
        >
          {bars.map((h, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              onClick={() => setProgress(i / BAR_COUNT)}
              className={cn(
                "min-w-0 flex-1 rounded-full transition-colors",
                i <= played ? "bg-primary" : "bg-muted-foreground/25"
              )}
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>

        <span className="shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums">
          {Math.floor((duration * progress) / 60)}:
          {Math.floor((duration * progress) % 60)
            .toString()
            .padStart(2, "0")}
        </span>
      </CardContent>
    </Card>
  )
}
