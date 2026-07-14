"use client"

import { NeuroNoise } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type NeuroNoiseBackgroundProps = {
  colorFront?: string
  colorMid?: string
  colorBack?: string
  speed?: number
  className?: string
}

export function NeuroNoiseBackground({
  colorFront = "#c4b5fd",
  colorMid = "#6d28d9",
  colorBack = "#0b0b12",
  speed = 0.7,
  className,
}: NeuroNoiseBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <NeuroNoise
        className="absolute inset-0 size-full"
        colorFront={colorFront}
        colorMid={colorMid}
        colorBack={colorBack}
        brightness={1.1}
        contrast={0.9}
        speed={speed}
      />
    </div>
  )
}
