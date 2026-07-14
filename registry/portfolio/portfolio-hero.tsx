"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Mail01Icon,
  MapPinIcon,
  RadioIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function PortfolioHero({
  name = "Ellie Nakamura",
  role = "Full-Stack Engineer & Design Engineer",
  location = "Remote · Lisbon, PT",
  available = true,
  blurb = "I design and build fast, accessible web apps end-to-end — from the data layer to the last pixel of the interface.",
  avatar,
  className,
}: {
  name?: string
  role?: string
  location?: string
  available?: boolean
  blurb?: string
  avatar?: string
  className?: string
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <div
      className={cn(
        "relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-card p-6 sm:p-8",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-gradient-to-br from-violet-400/25 via-fuchsia-300/15 to-transparent blur-2xl"
      />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative shrink-0">
          <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-semibold text-white shadow-lg shadow-violet-500/20">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatar} alt={name} className="size-full object-cover" />
            ) : (
              initials
            )}
          </div>
          {available ? (
            <span className="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full border-2 border-card bg-emerald-500">
              <span className="size-2 animate-pulse rounded-full bg-white" />
            </span>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          {available ? (
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <HugeiconsIcon icon={RadioIcon} className="size-3.5" />
              Available for work
            </span>
          ) : null}
          <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
          <p className="text-sm font-medium text-primary">{role}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HugeiconsIcon icon={MapPinIcon} className="size-3.5" />
            {location}
          </p>
        </div>
      </div>

      <p className="relative mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {blurb}
      </p>

      <div className="relative mt-6 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          <HugeiconsIcon icon={Mail01Icon} className="size-4" />
          Email me
        </a>
      </div>
    </div>
  )
}
