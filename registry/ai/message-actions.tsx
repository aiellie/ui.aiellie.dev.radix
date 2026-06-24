"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  Copy01Icon,
  RefreshIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Tick02Icon,
  VolumeHighIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Action({
  icon,
  label,
  active,
  onClick,
}: {
  icon: IconSvgElement
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={label}
          aria-pressed={active}
          onClick={onClick}
          className={cn(
            "text-muted-foreground",
            active && "bg-accent text-foreground"
          )}
        >
          <HugeiconsIcon icon={icon} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

export function MessageActions({
  value = "",
  onRegenerate,
  className,
}: {
  value?: string
  onRegenerate?: () => void
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)
  const [vote, setVote] = React.useState<"up" | "down" | null>(null)

  React.useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg border bg-card p-0.5",
        className
      )}
    >
      <Action
        icon={copied ? Tick02Icon : Copy01Icon}
        label={copied ? "Copied" : "Copy"}
        onClick={() => {
          navigator.clipboard.writeText(value).then(() => setCopied(true))
        }}
      />
      <Action icon={RefreshIcon} label="Regenerate" onClick={onRegenerate} />
      <Action icon={VolumeHighIcon} label="Read aloud" />
      <span className="mx-0.5 h-5 w-px bg-border" />
      <Action
        icon={ThumbsUpIcon}
        label="Good response"
        active={vote === "up"}
        onClick={() => setVote((v) => (v === "up" ? null : "up"))}
      />
      <Action
        icon={ThumbsDownIcon}
        label="Bad response"
        active={vote === "down"}
        onClick={() => setVote((v) => (v === "down" ? null : "down"))}
      />
    </div>
  )
}
