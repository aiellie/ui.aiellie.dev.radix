"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  DashboardSquare01Icon,
  File01Icon,
  Moon02Icon,
  Settings01Icon,
  SourceCodeIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu({ className }: { className?: string }) {
  return (
    <Command
      className={cn(
        "w-full max-w-md ring-1 shadow-lg ring-border",
        className
      )}
    >
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <HugeiconsIcon icon={File01Icon} />
            New file
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={SparklesIcon} />
            Ask AI to edit
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Moon02Icon} />
            Toggle theme
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navigation">
          <CommandItem>
            <HugeiconsIcon icon={DashboardSquare01Icon} />
            Go to dashboard
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={SourceCodeIcon} />
            Browse components
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Settings01Icon} />
            Open settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
