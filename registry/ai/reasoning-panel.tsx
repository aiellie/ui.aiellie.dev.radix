"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  NeuralNetworkIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const DEFAULT_STEPS = [
  "Parsing the request and identifying the user's goal.",
  "Recalling the relevant constraints from earlier in the thread.",
  "Comparing two possible approaches and weighing trade-offs.",
  "Drafting a concise answer and checking it against the constraints.",
]

export function ReasoningPanel({
  steps = DEFAULT_STEPS,
  duration = 4,
  defaultOpen = false,
  className,
}: {
  steps?: string[]
  duration?: number
  defaultOpen?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("rounded-xl border bg-card", className)}
    >
      <CollapsibleTrigger className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-accent">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={NeuralNetworkIcon} className="size-3.5" />
        </span>
        <span className="font-medium">Reasoning</span>
        <span className="text-xs text-muted-foreground">
          · thought for {duration}s
        </span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={cn(
            "ms-auto size-4 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ol className="space-y-3 px-3.5 pb-3.5 ps-4">
          {steps.map((step, i) => (
            <li
              key={i}
              className="relative ps-5 text-sm leading-relaxed text-muted-foreground before:absolute before:start-0 before:top-1.5 before:size-2 before:rounded-full before:border-2 before:border-primary/40 before:bg-background after:absolute after:start-[3.5px] after:top-3.5 after:h-[calc(100%+0.25rem)] after:w-px after:bg-border last:after:hidden"
            >
              {step}
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}
