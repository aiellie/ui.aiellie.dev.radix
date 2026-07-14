import { HugeiconsIcon } from "@hugeicons/react"
import { Building01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Role = {
  company: string
  title: string
  period: string
  description: string
  current?: boolean
}

const defaultRoles: Role[] = [
  {
    company: "Vercel",
    title: "Senior Software Engineer",
    period: "2023 — Present",
    description:
      "Lead the design-systems team; shipped the component registry powering thousands of internal apps.",
    current: true,
  },
  {
    company: "Linear",
    title: "Product Engineer",
    period: "2021 — 2023",
    description:
      "Built the real-time sync layer and redesigned the issue board with keyboard-first interactions.",
  },
  {
    company: "Stripe",
    title: "Frontend Engineer",
    period: "2018 — 2021",
    description:
      "Owned the Checkout UI, improving conversion by 12% through performance and accessibility work.",
  },
]

export function ExperienceTimeline({
  roles = defaultRoles,
  className,
}: {
  roles?: Role[]
  className?: string
}) {
  return (
    <Card
      className={cn("w-full max-w-md [--card-spacing:--spacing(6)]", className)}
    >
      <CardHeader>
        <CardTitle className="font-semibold tracking-tight">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol>
          {roles.map((role, i) => (
            <li
              key={role.company}
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              {i < roles.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute top-9 left-[15px] h-full w-px bg-border"
                />
              ) : null}
              <span
                className={cn(
                  "z-10 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border",
                  role.current
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <HugeiconsIcon icon={Building01Icon} className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold">{role.title}</h3>
                  {role.current ? (
                    <Badge className="border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-600 dark:text-emerald-400">
                      Current
                    </Badge>
                  ) : null}
                </div>
                <p className="text-sm font-medium text-primary">
                  {role.company}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {role.period}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
