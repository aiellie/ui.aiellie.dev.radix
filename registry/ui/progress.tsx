"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export default function ProgressExample() {
  const [value, setValue] = React.useState(8)

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => (v >= 100 ? 8 : v + 4))
    }, 600)
    return () => clearInterval(id)
  }, [])

  const done = value >= 100

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Fine-tuning “support-agent-v3”</span>
        <span className="font-mono text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} />
      <p className="text-xs text-muted-foreground">
        {done
          ? "Finalizing checkpoint…"
          : `Step ${Math.round((value / 100) * 1200)} of 1,200 · ~${Math.max(
              1,
              Math.round((100 - value) / 8)
            )} min remaining`}
      </p>
    </div>
  )
}
