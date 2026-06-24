"use client"

import { memo, useCallback, useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  BrainIcon,
  CircleIcon,
  EyeClosedIcon,
  MegaphoneIcon,
  MicIcon,
  Volume2Icon,
} from "lucide-react"

import {
  Persona as PersonaVisual,
  type PersonaState,
} from "@/components/ai-elements/persona"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const DEFAULT_TRAITS = ["Warm", "Concise", "British accent"]

type PersonaVariant =
  | "command"
  | "glint"
  | "halo"
  | "mana"
  | "obsidian"
  | "opal"

const states: {
  state: PersonaState
  icon: LucideIcon
  label: string
}[] = [
  { icon: CircleIcon, label: "Idle", state: "idle" },
  { icon: MicIcon, label: "Listening", state: "listening" },
  { icon: BrainIcon, label: "Thinking", state: "thinking" },
  { icon: MegaphoneIcon, label: "Speaking", state: "speaking" },
  { icon: EyeClosedIcon, label: "Asleep", state: "asleep" },
]

interface StateButtonProps {
  state: (typeof states)[0]
  currentState: PersonaState
  onStateChange: (state: PersonaState) => void
}

const StateButton = memo(
  ({ state, currentState, onStateChange }: StateButtonProps) => {
    const handleClick = useCallback(
      () => onStateChange(state.state),
      [onStateChange, state.state]
    )

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label={state.label}
            onClick={handleClick}
            size="icon-sm"
            variant={currentState === state.state ? "default" : "outline"}
          >
            <state.icon className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{state.label}</TooltipContent>
      </Tooltip>
    )
  }
)

StateButton.displayName = "StateButton"

export function Persona({
  name = "Aria",
  role = "Support Voice Agent",
  description = "A friendly assistant that answers billing questions and books callbacks.",
  traits = DEFAULT_TRAITS,
  defaultState = "speaking",
  variant = "obsidian",
  className,
}: {
  name?: string
  role?: string
  description?: string
  traits?: string[]
  defaultState?: PersonaState
  variant?: PersonaVariant
  className?: string
}) {
  const [currentState, setCurrentState] = useState<PersonaState>(defaultState)

  const handleStateChange = useCallback((state: PersonaState) => {
    setCurrentState(state)
  }, [])

  return (
    <div
      className={cn("w-full max-w-sm rounded-2xl border bg-card p-5", className)}
    >
      <div className="flex items-center gap-4">
        <PersonaVisual
          className="size-14"
          state={currentState}
          variant={variant}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold">{name}</h3>
            <Volume2Icon className="size-4 text-muted-foreground" />
          </div>
          <p className="truncate text-xs font-medium text-primary">{role}</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {traits.map((t) => (
          <span
            key={t}
            className="rounded-full border bg-background px-2 py-0.5 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-center border-t pt-4">
        <ButtonGroup orientation="horizontal">
          {states.map((state) => (
            <StateButton
              currentState={currentState}
              key={state.state}
              onStateChange={handleStateChange}
              state={state}
            />
          ))}
        </ButtonGroup>
      </div>
    </div>
  )
}
