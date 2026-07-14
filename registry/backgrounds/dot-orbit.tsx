"use client"

import { DotOrbit } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type DotOrbitBackgroundProps = {
  colors?: string[]
  colorBack?: string
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#a5b4fc", "#c4b5fd", "#f0abfc", "#4f46e5"]

export function DotOrbitBackground({
  colors = DEFAULT_COLORS,
  colorBack = "#0b0b12",
  speed = 1,
  className,
}: DotOrbitBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <DotOrbit
        className="absolute inset-0 size-full"
        colors={colors}
        colorBack={colorBack}
        size={0.6}
        sizeRange={0.5}
        spreading={0.8}
        speed={speed}
      />
    </div>
  )
}
