"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Settings02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function PopoverExample() {
  const [temp, setTemp] = React.useState([0.7])
  const [topP, setTopP] = React.useState([0.9])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
          Parameters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Generation</PopoverTitle>
          <PopoverDescription>Applies to your next message only.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-5 pt-3">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label>Temperature</Label>
              <span className="font-mono text-xs text-muted-foreground">
                {temp[0].toFixed(2)}
              </span>
            </div>
            <Slider value={temp} onValueChange={setTemp} min={0} max={1} step={0.01} />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label>Top-p</Label>
              <span className="font-mono text-xs text-muted-foreground">
                {topP[0].toFixed(2)}
              </span>
            </div>
            <Slider value={topP} onValueChange={setTopP} min={0} max={1} step={0.05} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
