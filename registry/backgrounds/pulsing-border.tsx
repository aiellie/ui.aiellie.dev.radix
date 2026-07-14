"use client"

import type { ReactNode } from "react"
import { PulsingBorder } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

type PulsingBorderCardProps = {
  colors?: string[]
  speed?: number
  children?: ReactNode
  className?: string
}

const DEFAULT_COLORS = ["#a5b4fc", "#f0abfc", "#818cf8", "#4f46e5"]

export function PulsingBorderCard({
  colors = DEFAULT_COLORS,
  speed = 1,
  children,
  className,
}: PulsingBorderCardProps) {
  return (
    <div
      className={cn(
        "relative isolate w-full max-w-sm overflow-hidden rounded-2xl",
        className
      )}
    >
      <PulsingBorder
        className="absolute inset-0 -z-10 size-full"
        colors={colors}
        colorBack="#0b0b12"
        roundness={0.15}
        thickness={0.12}
        softness={0.6}
        intensity={0.55}
        bloom={0.9}
        spots={4}
        spotSize={0.35}
        pulse={0.15}
        speed={speed}
      />
      <div className="m-[3px] rounded-[calc(1rem-3px)] bg-card p-6">
        {children ?? (
          <>
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              Now available
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">
              Taking on new projects
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              A living, glowing border to make your call-to-action impossible to
              scroll past.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
