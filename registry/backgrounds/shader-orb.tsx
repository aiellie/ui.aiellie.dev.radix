"use client"

import { Warp } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

const ORB_PARAMS = {
  colors: ["#a5b4fc", "#e0e7ff", "#4f46e5"] as [string, string, string],
  proportion: 0.35,
  softness: 1,
  distortion: 0.32,
  swirl: 1,
  swirlIterations: 0,
  shape: "edge" as const,
  shapeScale: 0,
  speed: 12.2,
  scale: 0.31,
  rotation: 176,
  offsetX: 0.65,
  offsetY: 0.09,
}

type OrbProps = {
  size?: number
  className?: string
}

export function Orb({ size = 280, className }: OrbProps) {
  return (
    <div
      className={cn("shrink-0 overflow-hidden rounded-full", className)}
      style={{ width: size, height: size }}
    >
      <Warp width={size} height={size} {...ORB_PARAMS} />
    </div>
  )
}
