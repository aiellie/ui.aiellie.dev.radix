"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function SelectExample() {
  const [model, setModel] = React.useState("claude-opus")

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="model">Model</Label>
      <Select value={model} onValueChange={setModel}>
        <SelectTrigger id="model" className="w-full">
          <SelectValue placeholder="Choose a model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Frontier · most capable</SelectLabel>
            <SelectItem value="claude-opus">Claude Opus 4.8</SelectItem>
            <SelectItem value="gpt-4o">GPT-4o</SelectItem>
            <SelectItem value="gemini-pro">Gemini 2.5 Pro</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Fast · low latency</SelectLabel>
            <SelectItem value="claude-haiku">Claude Haiku 4.5</SelectItem>
            <SelectItem value="gpt-4o-mini">GPT-4o mini</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        Frontier models reason more deeply; fast models reply quicker.
      </p>
    </div>
  )
}
