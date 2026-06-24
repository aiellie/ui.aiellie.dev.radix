"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  Copy01Icon,
  RefreshIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  VolumeHighIcon,
} from "@hugeicons/core-free-icons"

import { ButtonGroup } from "@/components/ui/button-group"
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
          className={active ? "text-primary" : undefined}
        >
          <HugeiconsIcon icon={icon} strokeWidth={2} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

export default function ButtonGroupExample() {
  const [vote, setVote] = React.useState<"up" | "down" | null>(null)

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="max-w-sm rounded-xl rounded-bl-sm bg-muted px-3.5 py-2.5 text-sm">
        Here&apos;s a tighter version of your function — it memoizes the result and
        exits early on empty input.
      </p>
      <ButtonGroup>
        <Action icon={Copy01Icon} label="Copy" />
        <Action icon={RefreshIcon} label="Regenerate" />
        <Action icon={VolumeHighIcon} label="Read aloud" />
        <Action
          icon={ThumbsUpIcon}
          label="Good response"
          active={vote === "up"}
          onClick={() => setVote(vote === "up" ? null : "up")}
        />
        <Action
          icon={ThumbsDownIcon}
          label="Bad response"
          active={vote === "down"}
          onClick={() => setVote(vote === "down" ? null : "down")}
        />
      </ButtonGroup>
    </div>
  )
}
