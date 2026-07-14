"use client"

import type { ReactNode } from "react"
import { Warp } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type AuroraHeroProps = {
  colors?: string[]
  speed?: number
  children?: ReactNode
  className?: string
}

const DEFAULT_COLORS = ["#4f46e5", "#a855f7", "#ec4899", "#0f172a"]

export function AuroraHero({
  colors = DEFAULT_COLORS,
  speed = 0.6,
  children,
  className,
}: AuroraHeroProps) {
  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden rounded-2xl border",
        className
      )}
    >
      <Warp
        className="absolute inset-0 -z-10 size-full"
        colors={colors}
        proportion={0.4}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="stripes"
        scale={1}
        speed={speed}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="flex min-h-64 flex-col items-start justify-end gap-2 p-8">
        {children ?? (
          <>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Design Engineer
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ellie Nakamura
            </h2>
            <p className="max-w-sm text-sm text-white/80">
              I build fast, beautiful web experiences — from the data layer to
              the last pixel.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
