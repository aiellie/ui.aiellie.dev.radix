"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Globe02Icon } from "@hugeicons/core-free-icons"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SwitchExample() {
  const [web, setWeb] = React.useState(true)

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center justify-between rounded-xl border p-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} className="size-5" />
          </span>
          <div className="grid gap-0.5 leading-snug">
            <Label htmlFor="web-search">Web search</Label>
            <span className="text-xs text-muted-foreground">
              {web ? "Answers will cite live sources" : "Using the model's training data only"}
            </span>
          </div>
        </div>
        <Switch id="web-search" checked={web} onCheckedChange={setWeb} />
      </div>
      <div className="flex items-center justify-between px-1">
        <Label htmlFor="pro" className="text-sm font-normal text-muted-foreground">
          Pro mode (slower, deeper reasoning)
        </Label>
        <Switch id="pro" />
      </div>
    </div>
  )
}
