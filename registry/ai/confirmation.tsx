"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlertDiamondIcon,
  Cancel01Icon,
  CheckmarkCircle02Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Decision = "pending" | "approved" | "rejected"

export function Confirmation({
  title = "Run terminal command",
  description = "The agent wants to run a command in your workspace.",
  command = "rm -rf .next && pnpm build",
  onApprove,
  onReject,
  className,
}: {
  title?: string
  description?: string
  command?: string
  onApprove?: () => void
  onReject?: () => void
  className?: string
}) {
  const [decision, setDecision] = React.useState<Decision>("pending")

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-start gap-3 p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
          <HugeiconsIcon icon={AlertDiamondIcon} className="size-5" />
        </span>
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          {command ? (
            <code
              dir="ltr"
              className="mt-1.5 block overflow-x-auto rounded-lg border bg-muted/50 px-2.5 py-1.5 font-mono text-xs whitespace-nowrap"
            >
              {command}
            </code>
          ) : null}
        </div>
      </div>

      {decision === "pending" ? (
        <div className="flex items-center justify-end gap-2 border-t bg-muted/30 px-4 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setDecision("rejected")
              onReject?.()
            }}
          >
            <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            Reject
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setDecision("approved")
              onApprove?.()
            }}
          >
            <HugeiconsIcon icon={Tick02Icon} className="size-4" />
            Approve
          </Button>
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center gap-2 border-t px-4 py-3 text-sm font-medium",
            decision === "approved"
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-red-500/10 text-red-600 dark:text-red-400"
          )}
        >
          <HugeiconsIcon
            icon={decision === "approved" ? CheckmarkCircle02Icon : Cancel01Icon}
            className="size-4"
          />
          {decision === "approved" ? "Approved — running command" : "Rejected"}
        </div>
      )}
    </div>
  )
}
