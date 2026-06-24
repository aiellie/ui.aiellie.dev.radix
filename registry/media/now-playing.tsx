"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Backward01Icon,
  Forward01Icon,
  HeartIcon,
  MusicNote03Icon,
  PauseIcon,
  PlayIcon,
  RepeatIcon,
  ShuffleIcon,
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

export function NowPlaying({
  title = "Midnight City Lights",
  artist = "The Violet Hour",
  duration = 214,
  gradient = "from-fuchsia-500 via-purple-600 to-indigo-700",
  className,
}: {
  title?: string
  artist?: string
  duration?: number
  gradient?: string
  className?: string
}) {
  const [playing, setPlaying] = React.useState(true)
  const [progress, setProgress] = React.useState(86)
  const [liked, setLiked] = React.useState(false)
  const [shuffle, setShuffle] = React.useState(false)
  const [repeat, setRepeat] = React.useState(false)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => (p >= duration ? 0 : p + 1))
    }, 1000)
    return () => clearInterval(id)
  }, [playing, duration])

  return (
    <Card className={cn("w-full max-w-xs gap-0 rounded-3xl py-0 shadow-sm", className)}>
      <CardContent className="flex flex-col gap-4 p-4">
        <div
          className={cn(
            "flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner",
            gradient
          )}
        >
          <HugeiconsIcon
            icon={MusicNote03Icon}
            className="size-10 text-white/50"
          />
        </div>

        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-semibold">{title}</span>
            <span className="truncate text-sm text-muted-foreground">
              {artist}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Like"
            aria-pressed={liked}
            onClick={() => setLiked((l) => !l)}
            className={cn("shrink-0 text-muted-foreground", liked && "text-rose-500")}
          >
            <HugeiconsIcon icon={HeartIcon} />
          </Button>
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
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Shuffle"
            aria-pressed={shuffle}
            onClick={() => setShuffle((s) => !s)}
            className={cn("text-muted-foreground", shuffle && "text-primary")}
          >
            <HugeiconsIcon icon={ShuffleIcon} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Previous">
            <HugeiconsIcon icon={Backward01Icon} className="size-5" />
          </Button>
          <Button
            size="icon-lg"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => setPlaying((p) => !p)}
            className="rounded-full"
          >
            <HugeiconsIcon icon={playing ? PauseIcon : PlayIcon} className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Next">
            <HugeiconsIcon icon={Forward01Icon} className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Repeat"
            aria-pressed={repeat}
            onClick={() => setRepeat((r) => !r)}
            className={cn("text-muted-foreground", repeat && "text-primary")}
          >
            <HugeiconsIcon icon={RepeatIcon} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
