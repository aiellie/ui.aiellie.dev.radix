import { cn } from "@/lib/utils"

type GridPatternProps = {
  /** Cell size, in px. */
  size?: number
  /** Line thickness, in px. */
  lineWidth?: number
  /** Fade the grid toward the edges with a radial mask. */
  fade?: boolean
  className?: string
}

/**
 * A theme-aware grid background layer. Drop it inside a `relative` container.
 * Uses `currentColor`, so set the color with a text utility (e.g. `text-foreground/10`).
 */
export function GridPattern({
  size = 40,
  lineWidth = 1,
  fade = true,
  className,
}: GridPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 text-foreground/10",
        fade &&
          "[mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, currentColor ${lineWidth}px, transparent ${lineWidth}px), linear-gradient(to bottom, currentColor ${lineWidth}px, transparent ${lineWidth}px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}
