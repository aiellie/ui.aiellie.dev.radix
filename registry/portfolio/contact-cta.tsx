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
    <div
      className={cn(
        "relative w-full max-w-lg overflow-hidden rounded-2xl border bg-card p-8 text-center",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto size-64 rounded-full bg-gradient-to-br from-violet-400/25 via-fuchsia-300/15 to-transparent blur-3xl"
      />
      <span className="relative mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <HugeiconsIcon icon={Mail01Icon} className="size-6" />
      </span>
      <h2 className="relative mt-4 text-xl font-bold tracking-tight">
        {heading}
      </h2>
      <p className="relative mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {subheading}
      </p>

      <div className="relative mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
        <a
          href={`mailto:${email}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          Say hello
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
        </a>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border bg-background px-4 py-2.5 font-mono text-sm transition-colors hover:bg-accent sm:w-auto"
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            className={cn("size-4", copied && "text-emerald-500")}
          />
          {email}
        </button>
      </div>
    </div>
  )
}
