"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function TextareaExample() {
  const [value, setValue] = React.useState(
    "You are a concise senior engineer. Answer with runnable code first, then a one-line explanation."
  )
  const tokens = Math.max(1, Math.round(value.trim().length / 4))

  return (
    <div className="w-full max-w-xl space-y-2">
      <label htmlFor="system-prompt" className="text-sm font-medium">
        System prompt
      </label>
      <Textarea
        id="system-prompt"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        placeholder="Describe how the assistant should behave…"
        className="resize-none"
      />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>~{tokens.toLocaleString()} tokens</span>
        <Button size="sm" disabled={!value.trim()}>
          Save prompt
        </Button>
      </div>
    </div>
  )
}
