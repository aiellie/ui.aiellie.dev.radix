import { HugeiconsIcon } from "@hugeicons/react"
import { Github01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Deterministic pseudo-random so the grid is stable between renders.
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const levelClass = [
  "bg-muted",
  "bg-emerald-500/30",
  "bg-emerald-500/50",
  "bg-emerald-500/70",
  "bg-emerald-500",
]

export function GithubContributions({
  weeks = 26,
  total = 1248,
  username = "ellie",
  className,
}: {
  weeks?: number
  total?: number
  username?: string
  className?: string
}) {
  const days = Array.from({ length: weeks * 7 }, (_, i) => {
    const r = seeded(i)
    return r > 0.82 ? 4 : r > 0.68 ? 3 : r > 0.5 ? 2 : r > 0.28 ? 1 : 0
  })

  return (
    <Card
      className={cn("w-full max-w-2xl [--card-spacing:--spacing(6)]", className)}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <HugeiconsIcon icon={Github01Icon} className="size-5" />@{username}
        </CardTitle>
        <CardAction>
          <Badge variant="secondary" className="font-normal">
            {total.toLocaleString()} contributions this year
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent>
        <ScrollArea className="w-full">
          <div
            className="grid w-max grid-flow-col gap-1 pb-1"
            style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
          >
            {days.map((level, i) => (
              <span
                key={i}
                className={cn("size-2.5 rounded-[3px]", levelClass[level])}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="mt-4 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
          Less
          {levelClass.map((c, i) => (
            <span key={i} className={cn("size-2.5 rounded-[3px]", c)} />
          ))}
          More
        </div>
      </CardContent>
    </Card>
  )
}
