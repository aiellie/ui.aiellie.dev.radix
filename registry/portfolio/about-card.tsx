import { HugeiconsIcon } from "@hugeicons/react"
import {
  Briefcase01Icon,
  Coffee02Icon,
  MapPinIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

type Fact = { icon: typeof Briefcase01Icon; label: string }

export function AboutCard({
  name = "Ellie Nakamura",
  headline = "Design engineer who cares about the details",
  bio = "I've spent the last 8 years turning fuzzy product ideas into polished, production web apps. I love TypeScript, design systems, and shaving milliseconds off render times. When I'm not shipping, I'm mentoring juniors and rebuilding my keyboard for the nth time.",
  facts = [
    { icon: Briefcase01Icon, label: "8+ years building for the web" },
    { icon: MapPinIcon, label: "Based in Lisbon, works remotely" },
    { icon: Coffee02Icon, label: "Fueled by cortados & side projects" },
  ],
  className,
}: {
  name?: string
  headline?: string
  bio?: string
  facts?: Fact[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-2xl border bg-card p-6",
        className
      )}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        <HugeiconsIcon icon={SparklesIcon} className="size-3.5" />
        About {name.split(" ")[0]}
      </span>
      <h2 className="mt-4 text-lg font-semibold tracking-tight">{headline}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bio}</p>
      <ul className="mt-5 flex flex-col gap-3 border-t pt-5">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="flex items-center gap-3 text-sm text-foreground"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <HugeiconsIcon icon={fact.icon} className="size-4" />
            </span>
            {fact.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
