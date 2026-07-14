import { cn } from "@/lib/utils"

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
    <div
      className={cn("w-full max-w-md rounded-2xl border bg-card p-6", className)}
    >
      <h2 className="font-semibold tracking-tight">Skills</h2>
      <div className="mt-5 flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-[width] duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
