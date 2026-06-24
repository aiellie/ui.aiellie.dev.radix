"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowExpand01Icon,
  Copy01Icon,
  CubeIcon,
  Download04Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function Artifact({
  title = "pricing-section.tsx",
  type = "React",
  children,
  className,
}: {
  title?: string
  type?: string
  children?: React.ReactNode
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2.5 border-b bg-muted/30 px-3 py-2">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={CubeIcon} className="size-3.5" />
        </span>
        <span className="truncate text-sm font-medium">{title}</span>
        <span className="rounded-full border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          {type}
        </span>
        <div className="ms-auto flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
            aria-label="Copy"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <HugeiconsIcon
              icon={copied ? Tick02Icon : Copy01Icon}
              className="size-4"
            />
          </button>
          <button
            type="button"
            aria-label="Download"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <HugeiconsIcon icon={Download04Icon} className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Expand"
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowExpand01Icon} className="size-4" />
          </button>
        </div>
      </div>
      <div className="p-4">{children ?? <DefaultArtifact />}</div>
    </div>
  )
}

function DefaultArtifact() {
  return (
    <div className="rounded-xl border bg-gradient-to-br from-muted/50 to-background p-5 text-center">
      <p className="text-xs font-medium text-primary">PRO</p>
      <p className="mt-1 text-2xl font-semibold">
        $29
        <span className="text-sm font-normal text-muted-foreground">/mo</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        Everything you need to ship.
      </p>
      <div className="mt-3 rounded-lg bg-primary py-2 text-xs font-medium text-primary-foreground">
        Get started
      </div>
    </div>
  )
}
