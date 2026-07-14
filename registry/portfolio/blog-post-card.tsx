import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, Clock01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function BlogPostCard({
  title = "Building a type-safe design system with CVA",
  excerpt = "How I use class-variance-authority and Tailwind to ship a component library that's impossible to misuse.",
  tag = "Engineering",
  date = "Jun 12, 2026",
  readTime = "6 min read",
  accent = "from-violet-500 to-fuchsia-500",
  href = "#",
  className,
}: {
  title?: string
  excerpt?: string
  tag?: string
  date?: string
  readTime?: string
  accent?: string
  href?: string
  className?: string
}) {
  return (
    <a href={href} className={cn("group block w-full max-w-sm", className)}>
      <Card className="pt-0 transition-shadow group-hover:shadow-lg">
        <div
          className={cn(
            "relative flex h-32 items-center justify-center bg-gradient-to-br",
            accent
          )}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]"
          />
          <Badge className="absolute top-3 left-3 border-white/10 bg-black/25 text-white backdrop-blur">
            {tag}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="leading-snug font-semibold tracking-tight transition-colors group-hover:text-primary">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {excerpt}
          </CardDescription>
        </CardHeader>

        <CardFooter className="gap-3 border-t-0 bg-transparent pt-0 text-xs text-muted-foreground">
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon icon={Clock01Icon} className="size-3.5" />
            {readTime}
          </span>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="ms-auto size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </CardFooter>
      </Card>
    </a>
  )
}
