import { HugeiconsIcon } from "@hugeicons/react"
import {
  Briefcase01Icon,
  Coffee02Icon,
  MapPinIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Separator } from "@/components/ui/separator"

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
    <Card
      className={cn("w-full max-w-md [--card-spacing:--spacing(6)]", className)}
    >
      <CardHeader>
        <Badge variant="secondary" className="mb-2 w-fit text-primary">
          <HugeiconsIcon icon={SparklesIcon} />
          About {name.split(" ")[0]}
        </Badge>
        <CardTitle className="text-lg font-semibold tracking-tight">
          {headline}
        </CardTitle>
        <CardDescription className="leading-relaxed">{bio}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <ItemGroup className="gap-2">
          {facts.map((fact) => (
            <Item key={fact.label} size="xs" className="px-0">
              <ItemMedia
                variant="icon"
                className="size-8 rounded-lg bg-muted text-muted-foreground"
              >
                <HugeiconsIcon icon={fact.icon} className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="font-normal">{fact.label}</ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
