"use client"

import { Swirl } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type SwirlBackgroundProps = {
  colors?: string[]
  colorBack?: string
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#e0e7ff", "#a855f7", "#4f46e5"]

export function SwirlBackground({
  colors = DEFAULT_COLORS,
  colorBack = "#0b0b12",
  speed = 0.8,
  className,
}: SwirlBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <Swirl
        className="absolute inset-0 size-full"
        colors={colors}
        colorBack={colorBack}
        bandCount={4}
        twist={0.3}
        center={0.5}
        proportion={0.5}
        softness={0.6}
        speed={speed}
      />
    </div>
  )
}
