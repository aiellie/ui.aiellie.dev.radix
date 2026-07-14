"use client"

import { GrainGradient } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type GrainGradientBackgroundProps = {
  colors?: string[]
  colorBack?: string
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#4f46e5", "#a855f7", "#ec4899"]

export function GrainGradientBackground({
  colors = DEFAULT_COLORS,
  colorBack = "#0b0b12",
  speed = 0.6,
  className,
}: GrainGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <GrainGradient
        className="absolute inset-0 size-full"
        colors={colors}
        colorBack={colorBack}
        softness={0.7}
        intensity={0.35}
        noise={0.4}
        speed={speed}
      />
    </div>
  )
}
