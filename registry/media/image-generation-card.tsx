"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Download01Icon,
  HeartIcon,
  MoreHorizontalIcon,
  RefreshIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function ImageGenerationCard({
  prompt = "A bioluminescent jellyfish drifting through a midnight ocean, cinematic, 35mm",
  model = "Imagine v3",
  aspect = "1:1",
  gradient = "from-cyan-400 via-blue-500 to-indigo-700",
  className,
}: {
  prompt?: string
  model?: string
  aspect?: string
  gradient?: string
  className?: string
}) {
  const [liked, setLiked] = React.useState(false)

  return (
    <Card
      className={cn(
        "w-full max-w-xs gap-0 rounded-2xl py-0 shadow-sm",
        className
      )}
    >
      <div className="relative aspect-square">
        <div
          className={cn("size-full bg-gradient-to-br", gradient)}
          aria-hidden
        />
        <Badge className="absolute start-2.5 top-2.5 gap-1 bg-black/55 text-white backdrop-blur">
          <HugeiconsIcon icon={SparklesIcon} className="size-3" />
          AI
        </Badge>
        <Badge
          variant="secondary"
          className="absolute end-2.5 top-2.5 bg-black/55 font-mono text-white backdrop-blur"
        >
          {aspect}
        </Badge>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <p className="line-clamp-2 text-sm leading-relaxed text-foreground">
          {prompt}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {model}
          </span>
          <div className="flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Like"
              aria-pressed={liked}
              onClick={() => setLiked((l) => !l)}
              className={cn(
                "text-muted-foreground",
                liked && "text-rose-500"
              )}
            >
              <HugeiconsIcon icon={HeartIcon} />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Make variations"
              className="text-muted-foreground"
            >
              <HugeiconsIcon icon={RefreshIcon} />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Download"
              className="text-muted-foreground"
            >
              <HugeiconsIcon icon={Download01Icon} />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="More"
              className="text-muted-foreground"
            >
              <HugeiconsIcon icon={MoreHorizontalIcon} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
