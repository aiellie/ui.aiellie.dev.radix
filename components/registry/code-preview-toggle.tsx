"use client"

import { Code, Eye } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CodePreviewToggleProps {
  view: "code" | "preview"
  onViewChange: (view: "code" | "preview") => void
}

export function CodePreviewToggle({
  view,
  onViewChange,
}: CodePreviewToggleProps) {
  const views = [
    ["preview", Eye, "Preview"] as const,
    ["code", Code, "Code"] as const,
  ]

  return (
    <TooltipProvider>
      <div
        className="inline-flex shrink-0 items-center rounded-lg border p-0"
        data-view-toggle=""
      >
        {views.map(([key, Icon, tooltipText]) => (
          <Tooltip key={key}>
            <TooltipTrigger asChild>
              <Button
                size="icon-sm"
                variant="ghost"
                aria-label={tooltipText}
                className={cn(
                  "size-6.5 rounded-full p-1.5",
                  view === key
                    ? "bg-primary-foreground text-primary [&_svg]:text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => onViewChange(key)}
              >
                <HugeiconsIcon icon={Icon} className="size-full" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
