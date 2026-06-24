"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const modes = ["Concise", "Balanced", "Creative"]

export default function ToggleGroupExample() {
  const [mode, setMode] = React.useState("Balanced")

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-medium">Answer mode</span>
      <ToggleGroup
        type="single"
        variant="outline"
        value={mode}
        onValueChange={(v) => v && setMode(v)}
      >
        {modes.map((m) => (
          <ToggleGroupItem
            key={m}
            value={m}
            className="px-4 data-[state=on]:bg-primary/10 data-[state=on]:text-primary"
          >
            {m}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Temperature is tuned automatically for{" "}
        <span className="font-medium text-foreground">{mode}</span>.
      </p>
    </div>
  )
}
