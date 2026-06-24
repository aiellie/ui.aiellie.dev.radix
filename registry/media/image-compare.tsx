"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeftRightIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function ImageCompare({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeGradient = "from-zinc-400 to-zinc-600",
  afterGradient = "from-amber-300 via-rose-400 to-fuchsia-600",
  className,
}: {
  beforeLabel?: string
  afterLabel?: string
  beforeGradient?: string
  afterGradient?: string
  className?: string
}) {
  const [position, setPosition] = React.useState(50)
  const [dragging, setDragging] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  const updateFromClientX = React.useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  React.useEffect(() => {
    if (!dragging) return
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [dragging, updateFromClientX])

  return (
    <div
      dir="ltr"
      ref={ref}
      onPointerDown={(e) => {
        setDragging(true)
        updateFromClientX(e.clientX)
      }}
      className={cn(
        "relative aspect-[4/3] w-full max-w-md touch-none overflow-hidden rounded-xl border select-none",
        className
      )}
    >
      {/* After (full background) */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", afterGradient)}>
        <span className="absolute end-3 top-3 rounded-md bg-black/45 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
          {afterLabel}
        </span>
      </div>

      {/* Before (clipped overlay) */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-br", beforeGradient)}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="absolute start-3 top-3 rounded-md bg-black/45 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          aria-label="Drag to compare"
          aria-valuenow={Math.round(position)}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          onPointerDown={(e) => {
            e.stopPropagation()
            setDragging(true)
          }}
          className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-zinc-700 shadow-md"
        >
          <HugeiconsIcon icon={ArrowLeftRightIcon} className="size-4" />
        </button>
      </div>
    </div>
  )
}
