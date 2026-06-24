"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  SparklesIcon,
  ZapIcon,
  Wallet01Icon,
  AiBrain01Icon,
} from "@hugeicons/core-free-icons"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const specs = [
  { icon: AiBrain01Icon, label: "Context", value: "200K" },
  { icon: ZapIcon, label: "Speed", value: "Fast" },
  { icon: Wallet01Icon, label: "Cost", value: "$15 / 1M" },
]

export default function CardExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="size-4" />
          </span>
          Claude Opus 4.8
        </CardTitle>
        <CardDescription>Anthropic · frontier reasoning</CardDescription>
        <CardAction>
          <Badge variant="secondary">Selected</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-2">
        {specs.map((s) => (
          <div key={s.label} className="rounded-lg border p-2.5 text-center">
            <HugeiconsIcon
              icon={s.icon}
              strokeWidth={2}
              className="mx-auto mb-1 size-4 text-muted-foreground"
            />
            <div className="text-sm font-medium">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Use this model</Button>
      </CardFooter>
    </Card>
  )
}
