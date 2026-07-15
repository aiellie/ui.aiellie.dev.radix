"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Brain02Icon,
  BulbIcon,
  Globe02Icon,
  Image01Icon,
  LightbulbOffIcon,
  MusicNote03Icon,
  TextCreationIcon,
  VideoReplayIcon,
  ViewIcon,
  Wrench01Icon,
  ZapIcon,
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
  ModelCardTools,
  ModelCardTool,
} from "@/components/ai/model-card"

export interface ModelCardCapabilityItem {
  label: string
  icon?: IconSvgElement
}

export type ModelCardModality = "text" | "image" | "audio" | "video"

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
  /** Reasoning strength on a 1–5 scale. */
  reasoningLevel: number
  /** Response speed on a 1–5 scale. */
  speedLevel: number
  /** Supported input modalities. */
  inputModalities: ModelCardModality[]
  /** Supported output modalities. */
  outputModalities: ModelCardModality[]
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
  inputModalities: ["text", "image"],
  inputPricePerMTok: 3,
  knowledgeCutoff: "Jan 2026",
  maxOutputTokens: 64_000,
  name: "Claude Sonnet 5",
  outputModalities: ["text"],
  outputPricePerMTok: 15,
  provider: "Anthropic",
  providerSlug: "anthropic",
  reasoningLevel: 4,
  speedLevel: 4,
}

const tokenCount = new Intl.NumberFormat("en-US", { notation: "compact" })
const LEVEL_MAX = 5

const MODALITY_ORDER: ModelCardModality[] = ["text", "image", "audio", "video"]

const MODALITY_ICONS: Record<ModelCardModality, IconSvgElement> = {
  audio: MusicNote03Icon,
  image: Image01Icon,
  text: TextCreationIcon,
  video: VideoReplayIcon,
}

const MODALITY_LABELS: Record<ModelCardModality, string> = {
  audio: "audio",
  image: "image",
  text: "text",
  video: "video",
}

function ModelCardModalities({
  label,
  modalities,
}: {
  label: string
  modalities: ModelCardModality[]
}) {
  const enabled = new Set(modalities)

  return (
    <div
      aria-label={`${label}: ${modalities.map((modality) => MODALITY_LABELS[modality]).join(", ")}`}
      className="flex gap-1"
      role="img"
    >
      {MODALITY_ORDER.map((modality) => (
        <HugeiconsIcon
          key={modality}
          className={cn(
            "size-3.5",
            enabled.has(modality)
              ? "text-foreground"
              : "text-muted-foreground/30"
          )}
          icon={MODALITY_ICONS[modality]}
        />
      ))}
    </div>
  )
}

function ModelCardReasoningLevel({ level }: { level: number }) {
  const clampedLevel = Math.min(LEVEL_MAX, Math.max(0, Math.round(level)))

  return (
    <div
      aria-label={`Reasoning level ${clampedLevel} out of ${LEVEL_MAX}`}
      className="flex gap-0.5"
      role="img"
    >
      {Array.from({ length: LEVEL_MAX }).map((_, index) => (
        <HugeiconsIcon
          key={index}
          className={cn(
            "size-3.5",
            index < clampedLevel
              ? "text-amber-500"
              : "text-muted-foreground/30"
          )}
          icon={index < clampedLevel ? BulbIcon : LightbulbOffIcon}
        />
      ))}
    </div>
  )
}

function ModelCardSpeedLevel({ level }: { level: number }) {
  const clampedLevel = Math.min(LEVEL_MAX, Math.max(0, Math.round(level)))

  return (
    <div
      aria-label={`Speed level ${clampedLevel} out of ${LEVEL_MAX}`}
      className="flex gap-0.5"
      role="img"
    >
      {Array.from({ length: LEVEL_MAX }).map((_, index) => (
        <HugeiconsIcon
          key={index}
          className={cn(
            "size-3.5",
            index < clampedLevel
              ? "text-sky-500"
              : "text-muted-foreground/30"
          )}
          icon={ZapIcon}
        />
      ))}
    </div>
  )
}

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
        <ModelCardTools>
          <ModelCardTool
            label="Reasoning"
            value={<ModelCardReasoningLevel level={model.reasoningLevel} />}
          />
          <ModelCardTool
            label="Speed"
            value={<ModelCardSpeedLevel level={model.speedLevel} />}
          />
          <ModelCardTool
            label="Input"
            value={
              <ModelCardModalities
                label="Input"
                modalities={model.inputModalities}
              />
            }
          />
          <ModelCardTool
            label="Output"
            value={
              <ModelCardModalities
                label="Output"
                modalities={model.outputModalities}
              />
            }
          />
        </ModelCardTools>
      </ModelCardContent>
      <ModelCardFooter>
        <span className="text-xs text-muted-foreground">
        {model.knowledgeCutoff} - Knowledge cutoff
        </span>
        <Button onClick={() => onSelect?.(model)} size="sm">
          Use model
          <HugeiconsIcon icon={ArrowRight01Icon} />
        </Button>
      </ModelCardFooter>
    </ModelCardRoot>
  )
}
