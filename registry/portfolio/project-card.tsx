"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Github01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ProjectCard({
  title = "Nebula Analytics",
  description = "Real-time product analytics dashboard with sub-second queries over billions of events.",
  tags = ["Next.js", "TypeScript", "ClickHouse", "tRPC"],
  liveUrl = "#",
  repoUrl = "#",
  stars = 1284,
  featured = true,
  accent = "from-violet-500 to-fuchsia-500",
  className,
}: {
  title?: string
  description?: string
  tags?: string[]
  liveUrl?: string
  repoUrl?: string
  stars?: number
  featured?: boolean
  accent?: string
  className?: string
}) {
  return (
    <Card
      className={cn(
        "group w-full max-w-sm pt-0 transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          accent
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]"
        />
        <span className="relative text-3xl font-bold tracking-tight text-white/90">
          {title.split(" ")[0]}
        </span>
        {featured ? (
          <Badge className="absolute top-3 left-3 border-white/10 bg-black/30 text-white backdrop-blur">
            Featured
          </Badge>
        ) : null}
      </div>

      <CardHeader>
        <CardTitle className="font-semibold tracking-tight">{title}</CardTitle>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>
        {typeof stars === "number" ? (
          <CardAction>
            <Badge variant="ghost" className="text-muted-foreground">
              <HugeiconsIcon icon={StarIcon} className="text-amber-500" />
              {stars.toLocaleString()}
            </Badge>
          </CardAction>
        ) : null}
      </CardHeader>

      <CardContent className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="bg-muted/40 font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="gap-2 border-t-0 bg-transparent pt-0">
        <Button asChild className="flex-1">
          <a href={liveUrl}>
            Live demo
            <HugeiconsIcon icon={ArrowUpRight01Icon} data-icon="inline-end" />
          </a>
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="outline" size="icon">
              <a href={repoUrl} aria-label="View source">
                <HugeiconsIcon icon={Github01Icon} />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>View source</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  )
}
