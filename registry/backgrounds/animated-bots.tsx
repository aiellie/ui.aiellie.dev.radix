import * as React from "react"

import { cn } from "@/lib/utils"

interface BotProps {
  duration: string
  delay?: string
  rest?: string
  facing?: "right" | "left"
  children: React.ReactNode
}

function Bot({ duration, delay, rest, facing = "right", children }: BotProps) {
  return (
    <div
      className={cn("bot", facing === "right" ? "bot-go-right" : "bot-go-left")}
      style={
        {
          "--bot-duration": duration,
          "--bot-delay": delay,
          "--bot-rest": rest,
        } as React.CSSProperties
      }
    >
      <div className={facing === "left" ? "-scale-x-100" : undefined}>
        {children}
      </div>
    </div>
  )
}

function CarrierBot() {
  return (
    <svg width="44" height="36" viewBox="0 0 44 36" aria-hidden="true">
      <g className="bot-bob">
        <g fill="currentColor" shapeRendering="crispEdges">
          <rect x="19" y="2" width="2" height="4" />
          <rect className="bot-light" x="17.5" y="0" width="5" height="2.5" />
          <rect x="13" y="6" width="14" height="9" rx="1" />
          <rect x="18" y="15" width="4" height="2" />
          <rect x="11" y="17" width="18" height="11" rx="1" />
          <rect x="29" y="20" width="5" height="2.5" />
          <rect x="33" y="13" width="10" height="10" rx="1" />
        </g>
        <g fill="var(--background)">
          <rect className="bot-eye" x="17" y="9" width="2.5" height="3" />
          <rect className="bot-eye" x="21.5" y="9" width="2.5" height="3" />
          <rect x="14" y="20" width="5" height="1.5" opacity="0.6" />
          <rect x="14" y="23" width="3" height="1.5" opacity="0.6" />
          <rect x="37.5" y="13" width="1.5" height="10" opacity="0.6" />
        </g>
      </g>
      <g fill="currentColor" shapeRendering="crispEdges">
        <rect className="bot-leg bot-leg-a" x="14" y="28" width="4" height="8" />
        <rect className="bot-leg bot-leg-b" x="22" y="28" width="4" height="8" />
      </g>
    </svg>
  )
}

function RollerBot() {
  return (
    <svg width="32" height="36" viewBox="0 0 32 36" aria-hidden="true">
      <g className="bot-bob">
        <g fill="currentColor" shapeRendering="crispEdges">
          <rect x="15" y="4" width="2" height="4" />
          <rect className="bot-light" x="13.5" y="2" width="5" height="2.5" />
          <rect x="8" y="8" width="16" height="12" rx="2" />
          <rect x="14" y="20" width="4" height="4" />
        </g>
        <g fill="var(--background)">
          <rect className="bot-eye" x="12" y="12" width="3" height="4" />
          <rect className="bot-eye" x="17" y="12" width="3" height="4" />
        </g>
      </g>
      <circle
        className="bot-wheel"
        cx="16"
        cy="29"
        r="5.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="4.5 4.5"
      />
      <circle cx="16" cy="29" r="1.75" fill="currentColor" />
    </svg>
  )
}

function ScoutBot() {
  return (
    <svg width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
      <g className="bot-bob">
        <g fill="currentColor" shapeRendering="crispEdges">
          <rect x="11" y="2" width="2" height="4" />
          <rect className="bot-light" x="9.5" y="0" width="5" height="2.5" />
          <rect x="6" y="6" width="12" height="14" rx="1" />
        </g>
        <g fill="var(--background)">
          <rect className="bot-eye" x="9" y="10" width="2.5" height="3" />
          <rect className="bot-eye" x="13" y="10" width="2.5" height="3" />
        </g>
      </g>
      <g fill="currentColor" shapeRendering="crispEdges">
        <rect className="bot-leg bot-leg-a" x="8" y="20" width="3" height="8" />
        <rect className="bot-leg bot-leg-b" x="13" y="20" width="3" height="8" />
      </g>
    </svg>
  )
}

const variants = {
  "hero-top": (
    <>
      <Bot duration="32s" delay="-9s" rest="72vw" facing="left">
        <ScoutBot />
      </Bot>
      <Bot duration="75s" delay="-30s" rest="14vw">
        <RollerBot />
      </Bot>
    </>
  ),
  "hero-bottom": (
    <>
      <Bot duration="52s" delay="-18s" rest="28vw">
        <CarrierBot />
      </Bot>
      <Bot duration="38s" delay="-4s" rest="55vw">
        <ScoutBot />
      </Bot>
    </>
  ),
  edge: (
    <>
      <Bot duration="64s" delay="-26s" rest="60vw">
        <CarrierBot />
      </Bot>
      <Bot duration="84s" delay="-45s" rest="20vw" facing="left">
        <RollerBot />
      </Bot>
    </>
  ),
} as const

interface AnimatedBotsProps {
  variant?: keyof typeof variants
  className?: string
}

export function AnimatedBots({
  variant = "hero-bottom",
  className,
}: AnimatedBotsProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0",
        className
      )}
    >
      {variants[variant]}
      <style>{BOT_STYLES}</style>
    </div>
  )
}

const BOT_STYLES = `
.bot {
  position: absolute;
  bottom: 0;
  will-change: left;
}
.bot-go-right {
  animation: ae-bot-right var(--bot-duration) linear var(--bot-delay, 0s) infinite;
}
.bot-go-left {
  animation: ae-bot-left var(--bot-duration) linear var(--bot-delay, 0s) infinite;
}
@keyframes ae-bot-right {
  0% { left: -60px; }
  40% { left: var(--bot-rest, 50%); }
  58% { left: var(--bot-rest, 50%); }
  100% { left: 100%; }
}
@keyframes ae-bot-left {
  0% { left: 100%; }
  40% { left: var(--bot-rest, 50%); }
  58% { left: var(--bot-rest, 50%); }
  100% { left: -60px; }
}
.bot-bob {
  transform-box: fill-box;
  transform-origin: center;
  animation: ae-bot-bob 0.55s steps(2, jump-none) infinite;
}
@keyframes ae-bot-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-1.5px); }
}
.bot-leg {
  transform-box: fill-box;
  transform-origin: top center;
}
.bot-leg-a { animation: ae-bot-step 0.5s steps(2, jump-none) infinite; }
.bot-leg-b { animation: ae-bot-step 0.5s steps(2, jump-none) infinite; animation-delay: -0.25s; }
@keyframes ae-bot-step {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
.bot-wheel {
  transform-box: fill-box;
  transform-origin: center;
  animation: ae-bot-spin 1.1s linear infinite;
}
@keyframes ae-bot-spin {
  to { transform: rotate(360deg); }
}
.bot-eye { animation: ae-bot-blink 4.2s steps(1, jump-none) infinite; }
@keyframes ae-bot-blink {
  0%, 94%, 100% { opacity: 1; }
  96% { opacity: 0.12; }
}
.bot-light { animation: ae-bot-light 1.4s ease-in-out infinite; }
@keyframes ae-bot-light {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}
@media (prefers-reduced-motion: reduce) {
  .bot, .bot-bob, .bot-leg, .bot-wheel, .bot-eye, .bot-light {
    animation: none;
  }
  .bot-go-right { left: var(--bot-rest, 50%); }
  .bot-go-left { left: var(--bot-rest, 50%); }
}
`
