"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

type Project = {
  title: string
  category: string
  accent: string
  url?: string
}

const defaultProjects: Project[] = [
  { title: "Nebula Analytics", category: "SaaS · Dashboard", accent: "from-violet-500 to-fuchsia-500" },
  { title: "Orbit Design System", category: "Open Source", accent: "from-sky-500 to-cyan-500" },
  { title: "Lumen CMS", category: "Product · Web App", accent: "from-amber-500 to-orange-500" },
  { title: "Pulse Mobile", category: "React Native", accent: "from-emerald-500 to-teal-500" },
  { title: "Vertex Docs", category: "Docs · Marketing", accent: "from-rose-500 to-pink-500" },
  { title: "Cobalt API", category: "Platform · DX", accent: "from-indigo-500 to-blue-500" },
]

export function ProjectGallery({
  projects = defaultProjects,
  className,
}: {
  projects?: Project[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3",
        className
      )}
    >
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.url ?? "#"}
          className="group relative flex aspect-4/3 flex-col justify-end overflow-hidden rounded-xl border p-3"
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
              project.accent
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
          />
          <span className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
          </span>
          <div className="relative">
            <p className="text-[11px] font-medium text-white/70">
              {project.category}
            </p>
            <p className="text-sm font-semibold text-white">{project.title}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
