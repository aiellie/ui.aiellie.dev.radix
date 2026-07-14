import { cn } from "@/lib/utils"

type DotPatternProps = {
  /** Gap between dots, in px. */
  gap?: number
  /** Dot radius, in px. */
  dotSize?: number
  /** Fade the pattern toward the edges with a radial mask. */
  fade?: boolean
  className?: string
}

/**
 * A theme-aware dotted background layer. Drop it inside a `relative` container.
 * Uses `currentColor`, so set the color with a text utility (e.g. `text-foreground/15`).
 */
export function DotPattern({
  gap = 16,
  dotSize = 1,
  fade = true,
  className,
}: DotPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 text-foreground/15",
        fade &&
          "[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(currentColor ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }}
    />
  )
}
