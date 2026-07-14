import { cn } from "@/lib/utils"

export function AvailabilityBadge({
  available = true,
  labelAvailable = "Available for new projects",
  labelUnavailable = "Fully booked right now",
  className,
}: {
  available?: boolean
  labelAvailable?: string
  labelUnavailable?: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium",
        available
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
        className
      )}
    >
      <span className="relative flex size-2.5">
        {available ? (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        ) : null}
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            available ? "bg-emerald-500" : "bg-amber-500"
          )}
        />
      </span>
      {available ? labelAvailable : labelUnavailable}
    </span>
  )
}
