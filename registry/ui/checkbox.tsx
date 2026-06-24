"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const tools = [
  { id: "web", label: "Web search", desc: "Browse the live web for fresh facts.", on: true },
  { id: "code", label: "Code interpreter", desc: "Run Python in a sandbox.", on: true },
  { id: "image", label: "Image generation", desc: "Create images from prompts.", on: false },
  { id: "files", label: "File analysis", desc: "Read uploaded documents.", on: true },
]

export default function CheckboxExample() {
  const [state, setState] = React.useState<Record<string, boolean>>(
    Object.fromEntries(tools.map((t) => [t.id, t.on]))
  )

  return (
    <div className="w-full max-w-md space-y-3">
      <p className="text-sm font-medium">Tools the agent may use</p>
      <div className="space-y-3">
        {tools.map((t) => (
          <div key={t.id} className="flex items-start gap-3">
            <Checkbox
              id={t.id}
              checked={state[t.id]}
              onCheckedChange={(v) =>
                setState((s) => ({ ...s, [t.id]: Boolean(v) }))
              }
              className="mt-0.5"
            />
            <div className="grid gap-0.5 leading-snug">
              <Label htmlFor={t.id}>{t.label}</Label>
              <span className="text-xs text-muted-foreground">{t.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
