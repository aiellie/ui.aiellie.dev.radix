"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Backward01Icon,
  Forward01Icon,
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeOffIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function MediaPlayer({
  title = "Late Night Tape",
  subtitle = "Aurora Sessions",
  duration = 225,
  className,
}: {
  title?: string
  subtitle?: string
  duration?: number
  className?: string
}) {
  const [playing, setPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(72)
  const [muted, setMuted] = React.useState(false)
  const [volume, setVolume] = React.useState(70)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => (p >= duration ? 0 : p + 1))
    }, 1000)
    return () => clearInterval(id)
  }, [playing, duration])

  return (
    <Card className={cn("w-full max-w-md gap-0 rounded-2xl py-0 shadow-sm", className)}>
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium">{title}</span>
          <span className="truncate text-xs text-muted-foreground">
            {subtitle}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <Slider
            value={[progress]}
            max={duration}
            step={1}
            onValueChange={([v]) => setProgress(v)}
            aria-label="Seek"
          />
          <div className="flex justify-between font-mono text-[11px] text-muted-foreground tabular-nums">
            <span>{formatTime(progress)}</span>
            <span>-{formatTime(duration - progress)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" aria-label="Previous">
            <HugeiconsIcon icon={Backward01Icon} />
          </Button>
          <Button
            size="icon-lg"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => setPlaying((p) => !p)}
            className="rounded-full"
          >
            <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Next">
            <HugeiconsIcon icon={Forward01Icon} />
          </Button>

          <div className="ms-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={muted ? "Unmute" : "Mute"}
              onClick={() => setMuted((m) => !m)}
            >
              <HugeiconsIcon icon={muted ? VolumeOffIcon : VolumeHighIcon} />
            </Button>
            <Slider
              value={[muted ? 0 : volume]}
              max={100}
              step={1}
              onValueChange={([v]) => {
                setVolume(v)
                setMuted(v === 0)
              }}
              className="w-20"
              aria-label="Volume"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
