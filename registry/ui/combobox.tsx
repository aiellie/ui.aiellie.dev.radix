"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { UnfoldMoreIcon, Tick02Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const models = [
  { value: "claude-opus", label: "Claude Opus 4.8", hint: "Anthropic" },
  { value: "claude-sonnet", label: "Claude Sonnet 4.6", hint: "Anthropic" },
  { value: "gpt-4o", label: "GPT-4o", hint: "OpenAI" },
  { value: "o3", label: "o3", hint: "OpenAI" },
  { value: "gemini-pro", label: "Gemini 2.5 Pro", hint: "Google" },
  { value: "llama-70b", label: "Llama 3.1 70B", hint: "Meta" },
  { value: "mistral-large", label: "Mistral Large", hint: "Mistral" },
]

export default function ComboboxExample() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("claude-opus")
  const selected = models.find((m) => m.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[270px] justify-between font-normal"
        >
          {selected ? selected.label : "Select a model…"}
          <HugeiconsIcon
            icon={UnfoldMoreIcon}
            strokeWidth={2}
            className="text-muted-foreground"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[270px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search 100+ models…" />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            <CommandGroup>
              {models.map((m) => (
                <CommandItem
                  key={m.value}
                  value={m.value}
                  keywords={[m.label, m.hint]}
                  onSelect={(current) => {
                    setValue(current)
                    setOpen(false)
                  }}
                >
                  <span>{m.label}</span>
                  <span className="text-xs text-muted-foreground">{m.hint}</span>
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    strokeWidth={2}
                    className={cn(
                      "ms-auto size-4",
                      value === m.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
