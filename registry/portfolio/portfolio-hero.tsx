"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Mail01Icon,
  MapPinIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
    <Card
      className={cn(
        "relative w-full max-w-2xl [--card-spacing:--spacing(6)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-gradient-to-br from-violet-400/25 via-fuchsia-300/15 to-transparent blur-2xl"
      />
      <CardContent className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
        <Avatar className="size-20 shrink-0">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-semibold text-white">
            {initials}
          </AvatarFallback>
          {available ? (
            <AvatarBadge className="size-4 bg-emerald-500 ring-4 ring-card" />
          ) : null}
        </Avatar>

        <div className="flex min-w-0 flex-col items-start gap-2">
          {available ? (
            <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </Badge>
          ) : null}
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            {name}
          </h1>
          <p className="text-sm font-medium text-primary">{role}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HugeiconsIcon icon={MapPinIcon} className="size-3.5" />
            {location}
          </p>
        </div>
      </CardContent>

      <CardContent className="relative">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          {blurb}
        </p>
      </CardContent>

      <CardFooter className="relative gap-2 border-t-0 bg-transparent pt-0">
        <Button asChild>
          <a href="#contact">
            Get in touch
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="#contact">
            <HugeiconsIcon icon={Mail01Icon} data-icon="inline-start" />
            Email me
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
