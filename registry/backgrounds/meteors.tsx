import { cn } from "@/lib/utils"

type MeteorsProps = {
  /** Number of meteors. */
  number?: number
  className?: string
}

/**
 * A shower of diagonal meteors. Drop it inside a `relative overflow-hidden`
 * container. Positions and timings are deterministic (SSR-safe).
 */
export function Meteors({ number = 20, className }: MeteorsProps) {
  const meteors = Array.from({ length: number })

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {meteors.map((_, i) => {
        const left = `${((i + 1) / (number + 1)) * 100}%`
        const delay = `${(i % 5) * 0.8 + (i % 3) * 0.2}s`
        const duration = `${3 + (i % 5)}s`
        return (
          <span
            key={i}
            className="absolute top-[-10%] size-0.5 rotate-[215deg] animate-[ae-meteor_linear_infinite] rounded-full bg-violet-300 shadow-[0_0_6px_2px_rgba(196,181,253,0.35)] before:absolute before:top-1/2 before:h-px before:w-14 before:-translate-y-1/2 before:bg-gradient-to-r before:from-violet-300 before:to-transparent before:content-['']"
            style={{ left, animationDelay: delay, animationDuration: duration }}
          />
        )
      })}
      <style>{`
        @keyframes ae-meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-600px); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[ae-meteor_linear_infinite\\] { animation: none; opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
