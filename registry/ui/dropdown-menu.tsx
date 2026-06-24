"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MoreHorizontalIcon,
  Copy01Icon,
  RefreshIcon,
  Message02Icon,
  AiBrain01Icon,
  Alert02Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuExample() {
  const [model, setModel] = React.useState("opus")

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Answered by Opus 4.8</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Message options">
            <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuLabel>Message</DropdownMenuLabel>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
            Copy
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Message02Icon} strokeWidth={2} />
            Quote reply
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
            Regenerate
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <HugeiconsIcon icon={AiBrain01Icon} strokeWidth={2} />
              Regenerate with
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
                <DropdownMenuRadioItem value="opus">Claude Opus 4.8</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sonnet">Claude Sonnet 4.6</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="gpt">GPT-4o</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
            Report response
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
