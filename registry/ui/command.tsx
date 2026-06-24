"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  SparklesIcon,
  Image01Icon,
  CodeIcon,
  Search01Icon,
  Add01Icon,
  Settings01Icon,
  AiChat02Icon,
} from "@hugeicons/core-free-icons"

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

export default function CommandExample() {
  return (
    <Command className="w-full max-w-md rounded-xl border shadow-md">
      <CommandInput placeholder="Ask AI or type a command…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Ask AI">
          <CommandItem>
            <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
            Summarize the current page
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Image01Icon} strokeWidth={2} />
            Generate an image…
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={CodeIcon} strokeWidth={2} />
            Write code for…
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
            New chat
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            Search chats
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
            Open settings
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Recent">
          <CommandItem>
            <HugeiconsIcon icon={AiChat02Icon} strokeWidth={2} />
            Onboarding email draft
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={AiChat02Icon} strokeWidth={2} />
            SQL query optimization
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
