"use client"

import { GodRays } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type GodRaysBackgroundProps = {
  colors?: string[]
  colorBack?: string
  colorBloom?: string
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#a5b4fc", "#f0abfc", "#818cf8"]

export function GodRaysBackground({
  colors = DEFAULT_COLORS,
  colorBack = "#07070d",
  colorBloom = "#e0e7ff",
  speed = 0.5,
  className,
}: GodRaysBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <GodRays
        className="absolute inset-0 size-full"
        colors={colors}
        colorBack={colorBack}
        colorBloom={colorBloom}
        density={0.7}
        intensity={0.9}
        bloom={0.6}
        speed={speed}
      />
    </div>
  )
}
