"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon } from "@hugeicons/core-free-icons"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"

export default function AspectRatioExample() {
  return (
    <div className="w-full max-w-md space-y-2">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-xl border bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500"
      >
        <div className="relative size-full">
          <Badge className="absolute start-2 top-2 bg-black/40 text-white backdrop-blur-sm">
            <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
            AI generated
          </Badge>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-sm text-white">
              “A neon koi swimming through soft clouds, 35mm film”
            </p>
          </div>
        </div>
      </AspectRatio>
      <p className="text-xs text-muted-foreground">
        1024 × 576 · SDXL · seed 42 · held in a fixed 16:9 frame
      </p>
    </div>
  )
}
