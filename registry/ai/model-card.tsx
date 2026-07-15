"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Brain02Icon,
  Globe02Icon,
  ViewIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  ModelCard as ModelCardRoot,
  ModelCardAction,
  ModelCardBadge,
  ModelCardCapabilities,
  ModelCardCapability,
  ModelCardContent,
  ModelCardDescription,
  ModelCardFooter,
  ModelCardHeader,
  ModelCardLogo,
  ModelCardProvider,
  ModelCardStat,
  ModelCardStats,
  ModelCardTitle,
} from "@/components/ai/model-card"

export interface ModelCardCapabilityItem {
  label: string
  icon?: IconSvgElement
}

export interface ModelCardModel {
  id: string
  name: string
  /** Display name of the model creator, e.g. "Anthropic". */
  provider: string
  /** Logo slug, e.g. "anthropic" or "openai". */
  providerSlug: string
  description: string
  badge?: string
  /** Context window size, in tokens. */
  contextWindow: number
  /** Maximum output size, in tokens. */
  maxOutputTokens: number
  /** USD per 1M input tokens. */
  inputPricePerMTok: number
  /** USD per 1M output tokens. */
  outputPricePerMTok: number
  knowledgeCutoff: string
  capabilities: ModelCardCapabilityItem[]
}

const DEFAULT_MODEL: ModelCardModel = {
  badge: "New",
  capabilities: [
    { icon: ViewIcon, label: "Vision" },
    { icon: Wrench01Icon, label: "Tool use" },
    { icon: Brain02Icon, label: "Reasoning" },
    { icon: Globe02Icon, label: "Web search" },
  ],
  contextWindow: 200_000,
  description:
    "Balanced intelligence, speed, and cost for agents, coding, and high-volume production workloads.",
  id: "claude-sonnet-5",
  inputPricePerMTok: 3,
  knowledgeCutoff: "Jan 2026",
  maxOutputTokens: 64_000,
  name: "Claude Sonnet 5",
  outputPricePerMTok: 15,
  provider: "Anthropic",
  providerSlug: "anthropic",
}

const tokenCount = new Intl.NumberFormat("en-US", { notation: "compact" })

export function ModelCard({
  model = DEFAULT_MODEL,
  onSelect,
  className,
}: {
  model?: ModelCardModel
  onSelect?: (model: ModelCardModel) => void
  className?: string
}) {
  return (
    <ModelCardRoot className={cn("max-w-sm", className)}>
      <ModelCardHeader>
        <div className="flex items-center gap-3">
          <ModelCardLogo provider={model.providerSlug} />
          <div className="flex min-w-0 flex-col">
            <ModelCardTitle className="truncate">{model.name}</ModelCardTitle>
            <ModelCardProvider className="truncate">
              {model.provider} · <span className="font-mono">{model.id}</span>
            </ModelCardProvider>
          </div>
        </div>
        {model.badge ? (
          <ModelCardAction>
            <ModelCardBadge>{model.badge}</ModelCardBadge>
          </ModelCardAction>
        ) : null}
        <ModelCardDescription>{model.description}</ModelCardDescription>
      </ModelCardHeader>
      <ModelCardContent>
        <ModelCardCapabilities>
          {model.capabilities.map((capability) => (
            <ModelCardCapability key={capability.label}>
              {capability.icon ? (
                <HugeiconsIcon icon={capability.icon} />
              ) : null}
              {capability.label}
            </ModelCardCapability>
          ))}
        </ModelCardCapabilities>
        <ModelCardStats>
          <ModelCardStat
            label="Context"
            value={`${tokenCount.format(model.contextWindow)} tokens`}
          />
          <ModelCardStat
            label="Max output"
            value={`${tokenCount.format(model.maxOutputTokens)} tokens`}
          />
          <ModelCardStat
            label="Input"
            value={`$${model.inputPricePerMTok} / 1M`}
          />
          <ModelCardStat
            label="Output"
            value={`$${model.outputPricePerMTok} / 1M`}
          />
        </ModelCardStats>
      </ModelCardContent>
      <ModelCardFooter>
        <span className="text-xs text-muted-foreground">
          Knowledge cutoff {model.knowledgeCutoff}
        </span>
        <Button onClick={() => onSelect?.(model)} size="sm">
          Use model
          <HugeiconsIcon icon={ArrowRight01Icon} />
        </Button>
      </ModelCardFooter>
    </ModelCardRoot>
  )
}
