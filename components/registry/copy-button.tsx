"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  value: string
  onCopied?: (value: string) => void
}

export function CopyButton({
  value,
  onCopied,
  variant = "ghost",
  size = "icon-sm",
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={cn("text-muted-foreground", className)}
      onClick={() => {
        navigator.clipboard.writeText(value).then(() => {
          setCopied(true)
          onCopied?.(value)
        })
      }}
      {...props}
    >
      <HugeiconsIcon
        icon={copied ? Tick02Icon : Copy01Icon}
        className={cn(copied && "text-emerald-500")}
      />
    </Button>
  )
}
