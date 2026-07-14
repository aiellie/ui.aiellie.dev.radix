"use client"

import { Metaballs } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type MetaballsBackgroundProps = {
  colors?: string[]
  colorBack?: string
  count?: number
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#a5b4fc", "#f0abfc", "#818cf8"]

export function MetaballsBackground({
  colors = DEFAULT_COLORS,
  colorBack = "#0b0b12",
  count = 8,
  speed = 1,
  className,
}: MetaballsBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <Metaballs
        className="absolute inset-0 size-full"
        colors={colors}
        colorBack={colorBack}
        count={count}
        size={0.8}
        speed={speed}
      />
    </div>
  )
}
