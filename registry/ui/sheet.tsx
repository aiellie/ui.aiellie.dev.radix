"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Settings01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SheetExample() {
  const [temp, setTemp] = React.useState([0.7])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
          Model settings
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Model settings</SheetTitle>
          <SheetDescription>Tune how the assistant responds in this chat.</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 gap-6 px-4">
          <div className="grid gap-2">
            <Label>Model</Label>
            <Select defaultValue="opus">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opus">Claude Opus 4.8</SelectItem>
                <SelectItem value="sonnet">Claude Sonnet 4.6</SelectItem>
                <SelectItem value="haiku">Claude Haiku 4.5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <Label>Temperature</Label>
              <span className="font-mono text-sm text-muted-foreground">
                {temp[0].toFixed(2)}
              </span>
            </div>
            <Slider value={temp} onValueChange={setTemp} min={0} max={1} step={0.01} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-web">Web search</Label>
            <Switch id="sheet-web" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-mem">Use memory</Label>
            <Switch id="sheet-mem" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Save changes</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
