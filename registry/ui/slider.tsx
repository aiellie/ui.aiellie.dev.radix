"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function SliderExample() {
  const [temp, setTemp] = React.useState([0.7])
  const [maxTokens, setMaxTokens] = React.useState([2048])

  return (
    <div className="w-full max-w-md space-y-7">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Temperature</Label>
          <span className="font-mono text-sm text-muted-foreground">
            {temp[0].toFixed(2)}
          </span>
        </div>
        <Slider
          value={temp}
          onValueChange={setTemp}
          min={0}
          max={1}
          step={0.01}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Precise</span>
          <span>Creative</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Max output tokens</Label>
          <span className="font-mono text-sm text-muted-foreground">
            {maxTokens[0].toLocaleString()}
          </span>
        </div>
        <Slider
          value={maxTokens}
          onValueChange={setMaxTokens}
          min={256}
          max={8192}
          step={256}
        />
      </div>
    </div>
  )
}
