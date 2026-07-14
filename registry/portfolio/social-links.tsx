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
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="group flex size-10 items-center justify-center rounded-xl border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
        >
          <HugeiconsIcon
            icon={link.icon}
            className="size-5 transition-transform group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  )
}
