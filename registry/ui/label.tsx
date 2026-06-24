"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function LabelExample() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="agent-name">
          Agent name
          <span className="text-destructive">*</span>
        </Label>
        <Input id="agent-name" placeholder="Research assistant" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="api-key" className="text-muted-foreground">
          Provider API key
        </Label>
        <Input
          id="api-key"
          type="password"
          defaultValue="sk-aiellie-xxxxxxxx"
          className="font-mono"
        />
      </div>
    </div>
  )
}
