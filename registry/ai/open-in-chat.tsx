"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  BubbleChatAddIcon,
  ArrowDown01Icon,
  GlobalIcon,
  MessageProgrammingIcon,
  BrainIcon,
  SlackIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ChatDestination = {
  label: string
  icon: typeof BubbleChatAddIcon
  href?: string
  onClick?: () => void
}

const CHAT_DESTINATIONS: ChatDestination[] = [
  {
    label: "Claude",
    icon: BrainIcon,
    href: "https://claude.ai",
  },
  {
    label: "ChatGPT",
    icon: MessageProgrammingIcon,
    href: "https://chat.openai.com",
  },
  {
    label: "chat.aiellie.dev",
    icon: GlobalIcon,
    href: "https://chat.aiellie.dev",
  },
]

const SHARE_DESTINATIONS: ChatDestination[] = [
  {
    label: "Slack",
    icon: SlackIcon,
  },
  {
    label: "Email",
    icon: Mail01Icon,
  },
]

export function OpenInChat({
  label = "Open in Chat",
  defaultHref = "https://chat.aiellie.dev",
  defaultOnClick,
  className,
}: {
  label?: string
  defaultHref?: string
  defaultOnClick?: () => void
  className?: string
}) {
  const handleDefault = () => {
    if (defaultOnClick) {
      defaultOnClick()
    } else if (defaultHref) {
      window.open(defaultHref, "_blank", "noreferrer")
    }
  }

  return (
    <ButtonGroup className={cn(className)}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleDefault}
        className="gap-1.5"
      >
        <HugeiconsIcon icon={BubbleChatAddIcon} className="size-4" />
        {label}
      </Button>

      <ButtonGroupSeparator />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="px-2"
            aria-label="Choose where to open"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
            Open in chat
          </DropdownMenuLabel>
          {CHAT_DESTINATIONS.map(({ label, icon, href, onClick }) => (
            <DropdownMenuItem
              key={label}
              onClick={() => {
                if (onClick) onClick()
                else if (href) window.open(href, "_blank", "noreferrer")
              }}
              className="gap-2"
            >
              <HugeiconsIcon icon={icon} className="size-4 text-muted-foreground" />
              {label}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
            Share
          </DropdownMenuLabel>
          {SHARE_DESTINATIONS.map(({ label, icon, onClick }) => (
            <DropdownMenuItem
              key={label}
              onClick={onClick}
              className="gap-2"
            >
              <HugeiconsIcon icon={icon} className="size-4 text-muted-foreground" />
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}