"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Robot01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/* ─── Glass avatar engine (DiceBear "glass" faithful re-implementation) ─── */

const SHAPE_VARIANTS: Record<string, string> = {
  a: "M42.6 147.4H0L48 1.9h54l48 145.5h-42.7L75.5 42h-1.1zm-8-57.4h80.1v29.6h-80z",
  d: "M67 147.4H11V1.9h55.4q22.5 0 38.8 8.8a60 60 0 0 1 25.3 25q9 16.2 9 39 0 22.7-9 39a61 61 0 0 1-25 25 81 81 0 0 1-38.5 8.7m-16.5-33.5h15a44 44 0 0 0 18.5-3.5q7.6-3.4 11.6-12t4-23.7-4-23.7a24 24 0 0 0-12-12 47 47 0 0 0-19.2-3.5H50.5z",
  e: "M22.2 147.4V1.9H127v31.9H61.7v25h59.9v31.8h-60v25h65.1v31.8z",
  g: "M101.6 50a20 20 0 0 0-14.7-14.6q-3.9-1-8.5-1-10 0-17 4.7a30 30 0 0 0-10.6 13.7q-3.6 9-3.6 21.6 0 12.8 3.5 21.9 3.4 9 10.3 13.9a29 29 0 0 0 17.2 4.8q9 0 15-2.6 6-2.7 9-7.5t3-11.3l6.8.7H78.7V66.2h64.5v20.1q0 20-8.4 34a56 56 0 0 1-23.2 21.6Q97 149.4 78 149.4q-21.3 0-37.3-9t-25-25.7-9-39.7A87 87 0 0 1 12 43 67 67 0 0 1 50 5q13-5 27.6-5 12.9 0 24 3.7 11.1 3.6 19.7 10.3a50 50 0 0 1 20.2 36z",
  i: "M94.8 2v145.4H55.3V1.9z",
  n: "M138 2v145.4h-33L52.5 71h-1v76.4H12.2V1.9h33.5l51.7 76.2h1.2V1.9z",
  r: "M17.6 147.4V1.9h62.8q16.2 0 28.3 6 12 5.8 18.9 17a50 50 0 0 1 6.7 26.5q0 15.6-7 26.3A43 43 0 0 1 108 94q-12.5 5.5-29 5.5H41.3V68.7H71q7 0 11.8-1.7a15 15 0 0 0 7.6-5.6 17 17 0 0 0 2.7-10q0-6.3-2.7-10.2a15 15 0 0 0-7.6-5.8q-4.9-2-11.8-2H57v114zm85.2-66.8 36.4 66.8h-43L60.9 80.6z",
  t: "M11.7 33.8V1.9h126.5v31.9H94.4v113.6h-39V33.8z",
}

const GLASS_COLORS = [
  "eb4747","eb6247","7eeb47","62eb47","47eb47","47eb62","47eb7e","47eb99",
  "47ebb4","47ebd0","47ebeb","47d0eb","eb7e47","47b4eb","4799eb","477eeb",
  "4762eb","4747eb","6247eb","7e47eb","9947eb","b447eb","d047eb","eb9947",
  "eb47eb","eb47d0","eb4799","eb477e","eb4762","ebb447","ebd047","ebeb47",
  "d0eb47","b4eb47","99eb47",
]

function xfnv1a(str: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < str.length; i++)
    h = Math.imul(h ^ str.charCodeAt(i), 16777619)
  return h >>> 0
}

function mulberry32(a: number) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function buildGlassSVG(seed: string): string {
  const rng = mulberry32(xfnv1a(seed || "seed"))
  const cA = GLASS_COLORS[Math.floor(rng() * GLASS_COLORS.length)]

  const makeShape = (filterId: string) => {
    const keys = Object.keys(SHAPE_VARIANTS)
    const key = keys[Math.floor(rng() * keys.length)]
    const d = SHAPE_VARIANTS[key]
    const rot = -160 + rng() * 320
    const tx = -50 + rng() * 100
    const ty = -50 + rng() * 100
    return `<g style="mix-blend-mode:screen" opacity=".6" filter="url(#${filterId})">
      <g transform="translate(${tx.toFixed(1)} ${ty.toFixed(1)}) rotate(${rot.toFixed(1)} 50 50)">
        <g transform="translate(-25 -24.4)">
          <path d="${d}" fill="white"/>
        </g>
      </g>
    </g>`
  }

  const s2 = makeShape("gA")
  const s1 = makeShape("gB")

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none">
  <defs>
    <filter id="gA" x="-57" y="-56.4" width="214" height="213.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="16"/>
    </filter>
    <filter id="gB" x="-57" y="-56.4" width="214" height="213.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="16"/>
    </filter>
    <clipPath id="gClip"><circle cx="50" cy="50" r="50"/></clipPath>
  </defs>
  <g clip-path="url(#gClip)">
    <rect width="100" height="100" fill="#${cA}"/>
    ${s2}
    ${s1}
  </g>
</svg>`
}

/* ─── Component ─── */

export interface ChatMessageProps extends React.ComponentProps<"div"> {
  role?: "user" | "assistant"
  name?: string
  avatar?: string
  glassSeed?: string
  timestamp?: string
}

export function ChatMessage({
  role = "assistant",
  name,
  avatar,
  glassSeed,
  timestamp,
  className,
  children,
  ...props
}: ChatMessageProps) {
  const isUser = role === "user"

  const glassSVG = React.useMemo(() => {
    if (!isUser) return null
    const seed = glassSeed ?? name ?? "user"
    return buildGlassSVG(seed)
  }, [isUser, glassSeed, name])

  return (
    <div
      data-role={role}
      className={cn(
        "group flex w-full gap-3",
        isUser && "flex-row-reverse",
        className
      )}
      {...props}
    >
      <Avatar className="size-8 shrink-0">
        {avatar ? (
          <AvatarImage src={avatar} alt={name} />
        ) : null}
        <AvatarFallback className="overflow-hidden p-0">
          {isUser && glassSVG ? (
            <span
              className="size-full"
              dangerouslySetInnerHTML={{ __html: glassSVG }}
            />
          ) : (
            <span className="flex size-full items-center justify-center bg-muted">
              <HugeiconsIcon icon={Robot01Icon} className="size-4 text-foreground" />
            </span>
          )}
        </AvatarFallback>
      </Avatar>

      <div
        className={cn(
          "flex max-w-[80%] flex-col gap-1",
          isUser ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "w-fit rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
            isUser
              ? "rounded-se-md bg-primary text-primary-foreground"
              : "rounded-ss-md bg-muted text-foreground"
          )}
        >
          {children}
        </div>
        {timestamp ? (
          <span className="px-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
            {timestamp}
          </span>
        ) : null}
      </div>
    </div>
  )
}