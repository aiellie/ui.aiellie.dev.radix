"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  PauseIcon,
  PlayIcon,
  Tick02Icon,
  VoiceIdIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface Voice {
  id: string
  name: string
  tags: string
  gradient: string
}

const DEFAULT_VOICES: Voice[] = [
  {
    id: "aria",
    name: "Aria",
    tags: "Female · British",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "atlas",
    name: "Atlas",
    tags: "Male · American",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    id: "nova",
    name: "Nova",
    tags: "Female · Neutral",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "echo",
    name: "Echo",
    tags: "Male · Australian",
    gradient: "from-emerald-500 to-teal-500",
  },
]

export function VoiceSelector({
  voices = DEFAULT_VOICES,
  defaultVoice = "aria",
  className,
}: {
  voices?: Voice[]
  defaultVoice?: string
  className?: string
}) {
  const [selected, setSelected] = React.useState(defaultVoice)
  const [playing, setPlaying] = React.useState<string | null>(null)

  return (
    <div
      className={cn("grid w-full max-w-md gap-2 sm:grid-cols-2", className)}
    >
      {voices.map((v) => {
        const isSelected = selected === v.id
        const isPlaying = playing === v.id
        return (
          <button
            key={v.id}
            type="button"
            onClick={() => setSelected(v.id)}
            className={cn(
              "group relative flex items-center gap-3 rounded-xl border bg-card p-3 text-start transition-colors hover:border-ring",
              isSelected && "border-primary ring-1 ring-primary"
            )}
          >
            <span className="relative shrink-0">
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-full bg-gradient-to-br text-white",
                  v.gradient
                )}
              >
                <HugeiconsIcon icon={VoiceIdIcon} className="size-4.5" />
              </span>
              {isSelected ? (
                <span className="absolute -end-1 -bottom-1 flex size-4 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={Tick02Icon} className="size-2.5" />
                </span>
              ) : null}
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium">{v.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {v.tags}
              </span>
            </span>
            <span
              role="button"
              tabIndex={0}
              aria-label={isPlaying ? "Pause sample" : "Play sample"}
              onClick={(e) => {
                e.stopPropagation()
                setPlaying(isPlaying ? null : v.id)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  e.stopPropagation()
                  setPlaying(isPlaying ? null : v.id)
                }
              }}
              className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:text-foreground"
            >
              <HugeiconsIcon
                icon={isPlaying ? PauseIcon : PlayIcon}
                className="size-3.5"
              />
            </span>
          </button>
        )
      })}
    </div>
  )
}
