"use client"

import { Voronoi } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type VoronoiBackgroundProps = {
  colors?: string[]
  colorGap?: string
  colorGlow?: string
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#4f46e5", "#a855f7", "#ec4899", "#e0e7ff"]

export function VoronoiBackground({
  colors = DEFAULT_COLORS,
  colorGap = "#0b0b12",
  colorGlow = "#c4b5fd",
  speed = 0.6,
  className,
}: VoronoiBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <Voronoi
        className="absolute inset-0 size-full"
        colors={colors}
        colorGap={colorGap}
        colorGlow={colorGlow}
        distortion={0.35}
        gap={0.05}
        glow={0.4}
        speed={speed}
      />
    </div>
  )
}
