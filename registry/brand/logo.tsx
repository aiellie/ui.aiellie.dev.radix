import * as React from "react"

import { cn } from "@/lib/utils"
import { Ellie } from "./ellie"

/**
 * Logo — the AIEllie brand lockup: the Ellie orb mark beside the wordmark and
 * an optional version/subtitle. Use it in a site header, a sidebar header, or
 * anywhere you need the brand to sign off. Collapses to just the mark when
 * `showWordmark` is false.
 */
export function Logo({
  title = "aiellie ui",
  subtitle = "v1.0.1",
  size = 32,
  showWordmark = true,
  href,
  className,
  ...props
}: {
  title?: string
  subtitle?: string
  size?: number
  showWordmark?: boolean
  href?: string
} & Omit<React.ComponentProps<"a">, "href">) {
  const content = (
    <>
      <div className="flex aspect-square items-center justify-center">
        <Ellie size={size} expression="calm" bob={false} blink={false} />
      </div>
      {showWordmark ? (
        <div className="flex flex-col gap-0.5 leading-none">
          <span className="font-semibold tracking-tight">{title}</span>
          {subtitle ? (
            <span className="text-sm text-muted-foreground">{subtitle}</span>
          ) : null}
        </div>
      ) : null}
    </>
  )

  const classes = cn(
    "inline-flex items-center gap-2 text-foreground",
    href && "transition-opacity hover:opacity-80",
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <span className={classes} {...(props as React.ComponentProps<"span">)}>
      {content}
    </span>
  )
}

export default Logo
