import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type ModelCardProps = ComponentProps<typeof Card>

export const ModelCard = ({ className, ...props }: ModelCardProps) => (
  <Card className={cn("w-full", className)} {...props} />
)

export type ModelCardHeaderProps = ComponentProps<typeof CardHeader>

export const ModelCardHeader = (props: ModelCardHeaderProps) => (
  <CardHeader {...props} />
)

export type ModelCardLogoProps = Omit<ComponentProps<"img">, "src" | "alt"> & {
  /** Provider slug used to resolve the logo, e.g. "anthropic" or "openai". */
  provider: string
}

export const ModelCardLogo = ({
  provider,
  className,
  ...props
}: ModelCardLogoProps) => (
  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
    <img
      {...props}
      alt={`${provider} logo`}
      className={cn("size-4.5 dark:invert", className)}
      height={18}
      src={`https://models.dev/logos/${provider}.svg`}
      width={18}
    />
  </span>
)

export type ModelCardTitleProps = ComponentProps<typeof CardTitle>

export const ModelCardTitle = (props: ModelCardTitleProps) => (
  <CardTitle {...props} />
)

export type ModelCardProviderProps = ComponentProps<"span">

export const ModelCardProvider = ({
  className,
  ...props
}: ModelCardProviderProps) => (
  <span className={cn("text-xs text-muted-foreground", className)} {...props} />
)

export type ModelCardBadgeProps = ComponentProps<typeof Badge>

export const ModelCardBadge = ({
  variant = "secondary",
  ...props
}: ModelCardBadgeProps) => <Badge variant={variant} {...props} />

export type ModelCardActionProps = ComponentProps<typeof CardAction>

export const ModelCardAction = (props: ModelCardActionProps) => (
  <CardAction {...props} />
)

export type ModelCardDescriptionProps = ComponentProps<typeof CardDescription>

export const ModelCardDescription = (props: ModelCardDescriptionProps) => (
  <CardDescription {...props} />
)

export type ModelCardContentProps = ComponentProps<typeof CardContent>

export const ModelCardContent = ({
  className,
  ...props
}: ModelCardContentProps) => (
  <CardContent className={cn("flex flex-col gap-3", className)} {...props} />
)

export type ModelCardCapabilitiesProps = ComponentProps<"div">

export const ModelCardCapabilities = ({
  className,
  ...props
}: ModelCardCapabilitiesProps) => (
  <div
    className={cn("flex flex-wrap items-center gap-1.5", className)}
    {...props}
  />
)

export type ModelCardCapabilityProps = ComponentProps<typeof Badge>

export const ModelCardCapability = ({
  className,
  ...props
}: ModelCardCapabilityProps) => (
  <Badge
    className={cn("gap-1 font-normal text-muted-foreground", className)}
    variant="outline"
    {...props}
  />
)

export type ModelCardStatsProps = ComponentProps<"div">

export const ModelCardStats = ({
  className,
  ...props
}: ModelCardStatsProps) => (
  <div
    className={cn(
      "grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border",
      className
    )}
    {...props}
  />
)

export type ModelCardStatProps = Omit<ComponentProps<"div">, "children"> & {
  label: string
  value: string
}

export const ModelCardStat = ({
  label,
  value,
  className,
  ...props
}: ModelCardStatProps) => (
  <div
    className={cn("flex flex-col gap-0.5 bg-card p-2.5", className)}
    {...props}
  >
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-sm font-medium tabular-nums">{value}</span>
  </div>
)

export type ModelCardFooterProps = ComponentProps<typeof CardFooter>

export const ModelCardFooter = ({
  className,
  ...props
}: ModelCardFooterProps) => (
  <CardFooter className={cn("justify-between gap-3", className)} {...props} />
)
