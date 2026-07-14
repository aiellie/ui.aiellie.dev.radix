import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  PaintBoardIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <Card
      className={cn(
        "group w-full max-w-sm [--card-spacing:--spacing(6)] transition-shadow hover:shadow-lg",
        className
      )}
    >
      <CardHeader>
        <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <HugeiconsIcon icon={icon} className="size-5.5" />
        </span>
        <CardTitle className="font-semibold tracking-tight">{title}</CardTitle>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col gap-2">
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
      </CardContent>

      <CardFooter className="justify-between">
        <span className="text-sm font-semibold">{price}</span>
        <Button asChild variant="link" className="px-0">
          <a href={href}>
            Learn more
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              data-icon="inline-end"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
