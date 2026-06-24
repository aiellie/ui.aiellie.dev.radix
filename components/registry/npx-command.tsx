"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Download04Icon } from "@hugeicons/core-free-icons"
import { toast } from "sonner"

import { getInstallCommand } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/registry/copy-button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function NpxCommand({
  slug,
  className,
}: {
  slug: string
  className?: string
}) {
  const command = getInstallCommand(slug)

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn("rounded-full", className)}
            >
              <HugeiconsIcon icon={Download04Icon} />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Copy install command</TooltipContent>
      </Tooltip>
      <PopoverContent align="start" className="w-auto max-w-sm">
        <div
          dir="ltr"
          className="flex h-9 items-center gap-2 rounded-lg border bg-muted/40 ps-3 pe-1"
        >
          <span className="font-mono text-sm leading-none text-muted-foreground/70 select-none">
            $
          </span>
          <code className="flex-1 overflow-x-auto font-mono text-sm whitespace-nowrap text-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {command}
          </code>
          <CopyButton
            value={command}
            className="shrink-0"
            onCopied={() =>
              toast.success("Copied install command to clipboard")
            }
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
