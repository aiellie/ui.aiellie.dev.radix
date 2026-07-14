"use client"

import { Waves } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type WavesBackgroundProps = {
  colorFront?: string
  colorBack?: string
  className?: string
}

export function WavesBackground({
  colorFront = "#a5b4fc",
  colorBack = "#0b0b12",
  className,
}: WavesBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <Waves
        className="absolute inset-0 size-full"
        colorFront={colorFront}
        colorBack={colorBack}
        rotation={0}
        frequency={0.6}
        amplitude={0.4}
        spacing={0.75}
        proportion={0.48}
        softness={0.9}
      />
    </div>
  )
}
