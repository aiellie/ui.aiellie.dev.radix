"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { AiBrain01Icon } from "@hugeicons/core-free-icons"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleExample() {
  const [on, setOn] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      <Toggle
        variant="outline"
        size="lg"
        pressed={on}
        onPressedChange={setOn}
        aria-label="Toggle deep research"
        className="data-[state=on]:border-primary/40 data-[state=on]:bg-primary/10 data-[state=on]:text-primary"
      >
        <HugeiconsIcon icon={AiBrain01Icon} strokeWidth={2} />
        Deep research
      </Toggle>
      <p className="text-sm text-muted-foreground">
        {on
          ? "The agent will plan, browse, and synthesize multiple sources."
          : "Off — the assistant answers directly."}
      </p>
    </div>
  )
}
