import { HugeiconsIcon } from "@hugeicons/react"
import {
  DribbbleIcon,
  Github01Icon,
  Globe02Icon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Social = {
  label: string
  href: string
  icon: typeof Github01Icon
}

const defaultLinks: Social[] = [
  { label: "GitHub", href: "#", icon: Github01Icon },
  { label: "X", href: "#", icon: NewTwitterIcon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
  { label: "Dribbble", href: "#", icon: DribbbleIcon },
  { label: "Website", href: "#", icon: Globe02Icon },
  { label: "Email", href: "#", icon: Mail01Icon },
]

export function SocialLinks({
  links = defaultLinks,
  className,
}: {
  links?: Social[]
  className?: string
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => (
        <Tooltip key={link.label}>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="outline"
              size="icon-lg"
              className="text-muted-foreground hover:text-primary"
            >
              <a href={link.href} aria-label={link.label}>
                <HugeiconsIcon icon={link.icon} className="size-4.5" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{link.label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
