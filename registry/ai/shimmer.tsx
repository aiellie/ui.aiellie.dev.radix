"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Animated loading placeholder. Render shimmering text by passing children, or
 * a set of skeleton lines by passing the `lines` prop.
 */
export function Shimmer({
  children = "Generating response…",
  lines,
  className,
}: {
  children?: React.ReactNode
  lines?: number
  className?: string
}) {
  return (
    <>
      <style>{"@keyframes aiellie-shimmer{to{background-position:-200% 0}}"}</style>
      {typeof lines === "number" ? (
        <div className={cn("flex w-full max-w-sm flex-col gap-2.5", className)}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className="h-3 rounded-full"
              style={{
                width: i === lines - 1 ? "60%" : "100%",
                backgroundImage:
                  "linear-gradient(100deg, var(--muted) 40%, var(--accent) 50%, var(--muted) 60%)",
                backgroundSize: "200% 100%",
                animation: "aiellie-shimmer 2s linear infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      ) : (
        <span
          className={cn("inline-block text-sm font-medium", className)}
          style={{
            backgroundImage:
              "linear-gradient(100deg, var(--muted-foreground) 35%, var(--foreground) 50%, var(--muted-foreground) 65%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: "aiellie-shimmer 2.2s linear infinite",
          }}
        >
          {children}
        </span>
      )}
    </>
  )
}
