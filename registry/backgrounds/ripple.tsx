import { cn } from "@/lib/utils"

type RippleProps = {
  /** Number of concentric rings. */
  count?: number
  /** Diameter of the innermost ring, in px. */
  baseSize?: number
  className?: string
}

/**
 * Concentric, softly pulsing rings radiating from the center. Drop it inside a
 * `relative overflow-hidden` container.
 */
export function Ripple({ count = 7, baseSize = 120, className }: RippleProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = baseSize + i * 80
        const opacity = Math.max(0.05, 0.28 - i * 0.035)
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 animate-[ae-ripple_3.5s_ease_infinite] rounded-full border border-violet-500/30 bg-violet-500/5"
            style={{
              width: size,
              height: size,
              opacity,
              animationDelay: `${i * 0.18}s`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )
      })}
      <style>{`
        @keyframes ae-ripple {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[ae-ripple_3\\.5s_ease_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  )
}
