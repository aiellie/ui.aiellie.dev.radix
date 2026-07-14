import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
}

/**
 * Soft, drifting light blooms — a gentle spotlight ambience for hero sections.
 * Drop it inside a `relative overflow-hidden` container.
 */
export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-1/3 -left-1/4 h-2/3 w-2/3 animate-[ae-spotlight_9s_ease-in-out_infinite] rounded-full bg-violet-500/25 blur-[90px]" />
      <div className="absolute -right-1/4 -bottom-1/3 h-2/3 w-2/3 animate-[ae-spotlight_11s_ease-in-out_infinite_reverse] rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <div className="absolute top-1/4 left-1/3 h-1/2 w-1/2 animate-[ae-spotlight_13s_ease-in-out_infinite] rounded-full bg-indigo-500/15 blur-[100px]" />
      <style>{`
        @keyframes ae-spotlight {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(6%, 8%) scale(1.15); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[ae-spotlight"] { animation: none; }
        }
      `}</style>
    </div>
  )
}
