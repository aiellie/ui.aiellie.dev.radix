"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Mic01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  MicSelector as MicSelectorRoot,
  MicSelectorContent,
  MicSelectorEmpty,
  MicSelectorInput,
  MicSelectorItem,
  MicSelectorLabel,
  MicSelectorList,
  MicSelectorTrigger,
  MicSelectorValue,
} from "@/components/ai-elements/mic-selector"

export function MicSelector({ className }: { className?: string }) {
  const [level, setLevel] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => setLevel(Math.random()), 150)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={cn("w-full max-w-xs", className)}>
      <MicSelectorRoot>
        <MicSelectorTrigger
          className="h-auto w-full justify-start gap-2.5 rounded-xl border bg-card px-3 py-2.5 text-start text-sm hover:bg-accent"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={Mic01Icon} className="size-4" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-[10px] tracking-wide text-muted-foreground uppercase">
              Microphone
            </span>
            <MicSelectorValue className="truncate font-medium" />
          </span>
        </MicSelectorTrigger>
        <MicSelectorContent>
          <MicSelectorInput />
          <MicSelectorList>
            {(devices) =>
              devices.map((device) => (
                <MicSelectorItem key={device.deviceId} value={device.deviceId}>
                  <MicSelectorLabel device={device} />
                </MicSelectorItem>
              ))
            }
          </MicSelectorList>
          <MicSelectorEmpty />
        </MicSelectorContent>
      </MicSelectorRoot>

      <div className="mt-2 flex items-center gap-1.5 px-1">
        <HugeiconsIcon icon={Mic01Icon} className="size-3.5 shrink-0 text-muted-foreground" />
        <div className="flex h-1.5 flex-1 items-center gap-0.5 overflow-hidden rounded-full bg-muted">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-full flex-1 rounded-full transition-colors",
                i / 16 < level
                  ? i > 12
                    ? "bg-red-500"
                    : i > 9
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  : "bg-transparent"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
