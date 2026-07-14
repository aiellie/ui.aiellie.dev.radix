import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Tick02Icon } from "@hugeicons/core-free-icons"
import { PaintBoardIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function ServiceCard({
  icon = PaintBoardIcon,
  title = "Design Engineering",
  description = "I bridge design and code — turning Figma files into accessible, animated, production-ready interfaces.",
  features = [
    "Design systems & component libraries",
    "Pixel-perfect responsive layouts",
    "Micro-interactions & motion",
  ],
  price = "from $6k",
  href = "#",
  className,
}: {
  icon?: typeof PaintBoardIcon
  title?: string
  description?: string
  features?: string[]
  price?: string
  href?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "group flex w-full max-w-sm flex-col rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg",
        className
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <HugeiconsIcon icon={icon} className="size-5.5" />
      </span>
      <h3 className="mt-4 font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <HugeiconsIcon
              icon={Tick02Icon}
              className="mt-0.5 size-4 shrink-0 text-emerald-500"
            />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t pt-4">
        <span className="text-sm font-semibold">{price}</span>
        <a
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:opacity-80"
        >
          Learn more
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  )
}
