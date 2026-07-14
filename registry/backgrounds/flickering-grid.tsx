"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type FlickeringGridProps = {
  /** Square size, in px. */
  squareSize?: number
  /** Gap between squares, in px. */
  gap?: number
  /** Chance per second that a square changes opacity. */
  flickerChance?: number
  /** Max opacity of a lit square. */
  maxOpacity?: number
  /** Square color (any CSS color the canvas understands). */
  color?: string
  className?: string
}

/**
 * A grid of squares that randomly flicker on a canvas. Drop it inside a
 * `relative` container; it fills its parent and resizes with it.
 */
export function FlickeringGrid({
  squareSize = 4,
  gap = 6,
  flickerChance = 0.3,
  maxOpacity = 0.35,
  color = "#8b5cf6",
  className,
}: FlickeringGridProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let cols = 0
    let rows = 0
    let squares = new Float32Array(0)
    let rafId = 0
    let last = 0
    const dpr = window.devicePixelRatio || 1
    const cell = squareSize + gap

    const setup = () => {
      const w = container.offsetWidth
      const h = container.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      cols = Math.ceil(w / cell)
      rows = Math.ceil(h / cell)
      squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity
      }
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * dt) {
          squares[i] = Math.random() * maxOpacity
        }
        const col = i % cols
        const row = Math.floor(i / cols)
        ctx.globalAlpha = squares[i]
        ctx.fillStyle = color
        ctx.fillRect(
          col * cell * dpr,
          row * cell * dpr,
          squareSize * dpr,
          squareSize * dpr
        )
      }
      ctx.globalAlpha = 1
    }

    const loop = (time: number) => {
      const dt = last ? (time - last) / 1000 : 0
      last = time
      draw(dt)
      rafId = requestAnimationFrame(loop)
    }

    setup()
    rafId = requestAnimationFrame(loop)

    const ro = new ResizeObserver(setup)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [squareSize, gap, flickerChance, maxOpacity, color])

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}
