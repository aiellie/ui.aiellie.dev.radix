"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  Message02Icon,
  RefreshIcon,
  VolumeHighIcon,
  Bookmark01Icon,
  Alert02Icon,
} from "@hugeicons/core-free-icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuExample() {
  return (
    <div className="flex w-full max-w-md flex-col items-start gap-2">
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="max-w-[85%] cursor-context-menu rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2.5 text-sm select-none">
            A vector database stores embeddings and lets you retrieve the most
            semantically similar items to a query.
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuItem>
            <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <HugeiconsIcon icon={Message02Icon} strokeWidth={2} />
            Quote reply
          </ContextMenuItem>
          <ContextMenuItem>
            <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
            Regenerate
          </ContextMenuItem>
          <ContextMenuItem>
            <HugeiconsIcon icon={VolumeHighIcon} strokeWidth={2} />
            Read aloud
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <HugeiconsIcon icon={Bookmark01Icon} strokeWidth={2} />
            Save to memory
          </ContextMenuItem>
          <ContextMenuItem className="text-destructive focus:text-destructive">
            <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
            Report
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <span className="ps-1 text-xs text-muted-foreground">
        Right-click the message ↑
      </span>
    </div>
  )
}
