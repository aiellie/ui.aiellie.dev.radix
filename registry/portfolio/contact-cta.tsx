"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Copy01Icon,
  Mail01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ContactCta({
  heading = "Let's build something great",
  subheading = "I'm currently taking on a couple of new projects. Tell me what you're working on and I'll get back within 24 hours.",
  email = "hello@ellie.dev",
  className,
}: {
  heading?: string
  subheading?: string
  email?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  return (
    <Card
      className={cn(
        "relative w-full max-w-lg [--card-spacing:--spacing(8)] text-center",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto size-64 rounded-full bg-gradient-to-br from-violet-400/25 via-fuchsia-300/15 to-transparent blur-3xl"
      />
      <CardHeader className="relative justify-items-center">
        <span className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <HugeiconsIcon icon={Mail01Icon} className="size-6" />
        </span>
        <CardTitle className="text-xl font-bold tracking-tight">
          {heading}
        </CardTitle>
        <CardDescription className="mx-auto max-w-sm leading-relaxed">
          {subheading}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative flex flex-col items-center justify-center gap-2 sm:flex-row">
        <Button asChild className="w-full sm:w-auto">
          <a href={`mailto:${email}`}>
            Say hello
            <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
          </a>
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="w-full font-mono sm:w-auto"
              onClick={() => {
                navigator.clipboard?.writeText(email)
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
            >
              <HugeiconsIcon
                icon={copied ? Tick02Icon : Copy01Icon}
                data-icon="inline-start"
                className={cn(copied && "text-emerald-500")}
              />
              {email}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copied ? "Copied!" : "Copy email"}</TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  )
}
