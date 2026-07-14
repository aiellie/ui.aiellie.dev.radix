import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
    <Card
      className={cn("w-full max-w-md [--card-spacing:--spacing(6)]", className)}
    >
      <CardContent>
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
                  i < rating ? "text-amber-500" : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
        ) : null}

        <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
          “{quote}”
        </blockquote>
      </CardContent>

      <CardFooter className="gap-3">
        <Avatar size="lg">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-violet-500 to-fuchsia-500 font-semibold text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
