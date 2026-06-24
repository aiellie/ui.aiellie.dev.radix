"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  AlertCircleIcon,
  ArrowDown01Icon,
  CheckmarkCircle02Icon,
  Loading03Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type ToolStatus = "pending" | "running" | "complete" | "error"

const STATUS_META: Record<
  ToolStatus,
  { label: string; icon: IconSvgElement; className: string }
> = {
  pending: {
    label: "Pending",
    icon: Loading03Icon,
    className: "text-muted-foreground",
  },
  running: { label: "Running", icon: Loading03Icon, className: "text-primary" },
  complete: {
    label: "Completed",
    icon: CheckmarkCircle02Icon,
    className: "text-emerald-500",
  },
  error: { label: "Error", icon: AlertCircleIcon, className: "text-red-500" },
}

export function Tool({
  name = "get_weather",
  status = "complete",
  parameters = { location: "San Francisco, CA", unit: "celsius" },
  result = { temperature: 18, condition: "Partly cloudy", humidity: 0.72 },
  defaultOpen = true,
  className,
}: {
  name?: string
  status?: ToolStatus
  parameters?: Record<string, unknown>
  result?: unknown
  defaultOpen?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(defaultOpen)
  const meta = STATUS_META[status]

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <CollapsibleTrigger className="flex w-full items-center gap-2.5 px-3 py-2.5 text-start text-sm transition-colors hover:bg-accent">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={Wrench01Icon} className="size-3.5" />
        </span>
        <code className="font-mono text-sm font-medium">{name}</code>
        <span
          className={cn(
            "flex items-center gap-1 text-xs font-medium",
            meta.className
          )}
        >
          <HugeiconsIcon
            icon={meta.icon}
            className={cn("size-3.5", status === "running" && "animate-spin")}
          />
          {meta.label}
        </span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={cn(
            "ms-auto size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div dir="ltr" className="space-y-3 border-t bg-muted/30 p-3">
          <div>
            <p className="mb-1.5 text-xs font-medium text-muted-foreground">
              Parameters
            </p>
            <pre className="overflow-x-auto rounded-lg border bg-background p-2.5 font-mono text-xs leading-relaxed">
              {JSON.stringify(parameters, null, 2)}
            </pre>
          </div>
          {status === "complete" ? (
            <div>
              <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                Result
              </p>
              <pre className="overflow-x-auto rounded-lg border bg-background p-2.5 font-mono text-xs leading-relaxed">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          ) : null}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
