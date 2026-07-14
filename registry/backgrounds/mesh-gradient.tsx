"use client"

import { MeshGradient } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type MeshGradientBackgroundProps = {
  colors?: string[]
  speed?: number
  className?: string
}

const DEFAULT_COLORS = ["#4f46e5", "#a855f7", "#ec4899", "#e0e7ff"]

export function MeshGradientBackground({
  colors = DEFAULT_COLORS,
  speed = 0.5,
  className,
}: MeshGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <MeshGradient
        className="absolute inset-0 size-full"
        colors={colors}
        distortion={0.8}
        swirl={0.6}
        speed={speed}
      />
    </div>
  )
}
