import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Skill = { name: string; level: number }

const defaultSkills: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "UI / Design Systems", level: 88 },
  { name: "Node.js / APIs", level: 84 },
  { name: "Databases", level: 76 },
]

export function SkillBars({
  skills = defaultSkills,
  className,
}: {
  skills?: Skill[]
  className?: string
}) {
  return (
    <Card
      className={cn("w-full max-w-md [--card-spacing:--spacing(6)]", className)}
    >
      <CardHeader>
        <CardTitle className="font-semibold tracking-tight">Skills</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <Progress
              value={skill.level}
              className="mt-1.5 h-2 *:data-[slot=progress-indicator]:rounded-full *:data-[slot=progress-indicator]:bg-gradient-to-r *:data-[slot=progress-indicator]:from-violet-500 *:data-[slot=progress-indicator]:to-fuchsia-500"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
