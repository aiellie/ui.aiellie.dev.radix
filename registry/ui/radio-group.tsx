"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const options = [
  { value: "concise", label: "Concise", desc: "A few sentences, straight to the point." },
  { value: "balanced", label: "Balanced", desc: "A clear answer with brief context." },
  { value: "detailed", label: "Detailed", desc: "Thorough, with examples and caveats." },
]

export default function RadioGroupExample() {
  const [value, setValue] = React.useState("balanced")

  return (
    <div className="w-full max-w-md space-y-3">
      <p className="text-sm font-medium">Response length</p>
      <RadioGroup value={value} onValueChange={setValue} className="gap-2">
        {options.map((o) => (
          <Label
            key={o.value}
            htmlFor={o.value}
            className="flex items-start gap-3 rounded-lg border p-3 has-data-checked:border-primary/40 has-data-checked:bg-primary/5"
          >
            <RadioGroupItem value={o.value} id={o.value} className="mt-0.5" />
            <div className="grid gap-0.5 leading-snug">
              <span className="text-sm font-medium">{o.label}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {o.desc}
              </span>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}
