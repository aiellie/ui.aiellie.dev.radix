import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function TestimonialCard({
  quote = "Ellie is the rare engineer who ships pixel-perfect UI and rock-solid systems. She rebuilt our dashboard in six weeks and it's still the fastest thing we run.",
  name = "Marcus Reed",
  title = "CTO, Nebula",
  avatar,
  rating = 5,
  className,
}: {
  quote?: string
  name?: string
  title?: string
  avatar?: string
  rating?: number
  className?: string
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <div
      className={cn(
        "relative w-full max-w-md rounded-2xl border bg-card p-6",
        className
      )}
    >
      <HugeiconsIcon
        icon={QuoteUpIcon}
        className="size-8 text-primary/20"
        aria-hidden
      />

      {rating ? (
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <HugeiconsIcon
              key={i}
              icon={StarIcon}
              className={cn(
                "size-4",
                i < rating
                  ? "text-amber-500"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
      ) : null}

      <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
        “{quote}”
      </blockquote>

      <div className="mt-5 flex items-center gap-3 border-t pt-5">
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-semibold text-white">
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar} alt={name} className="size-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  )
}
