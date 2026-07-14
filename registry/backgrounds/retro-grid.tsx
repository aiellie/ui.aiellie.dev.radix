import { cn } from "@/lib/utils"

type RetroGridProps = {
  /** Grid tilt in degrees. */
  angle?: number
  /** Cell size, in px. */
  cellSize?: number
  /** Line color (any CSS color). */
  color?: string
  className?: string
}

/**
 * An animated, perspective "retro" grid that scrolls toward the horizon.
 * Drop it inside a `relative overflow-hidden` container.
 */
export function RetroGrid({
  angle = 65,
  cellSize = 60,
  color = "#8b5cf6",
  className,
}: RetroGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-60 [perspective:200px]",
        className
      )}
      style={{ ["--ae-grid-angle" as string]: `${angle}deg` }}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--ae-grid-angle))]">
        <div
          className="absolute [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600%] animate-[ae-retro-grid_18s_linear_infinite]"
          style={{
            height: "300%",
            backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 0), linear-gradient(to bottom, ${color} 1px, transparent 0)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <style>{`
        @keyframes ae-retro-grid {
          0% { transform: translateY(0); }
          100% { transform: translateY(${cellSize}px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[ae-retro-grid_18s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  )
}
