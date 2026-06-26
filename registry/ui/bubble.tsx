"use client"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

export default function BubbleExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-4">
      <Bubble variant="muted">
        <BubbleContent>
          Can you summarize the latest deployment logs?
        </BubbleContent>
      </Bubble>

      <Bubble align="end">
        <BubbleContent>
          The deploy finished in 42s. All 142 checks passed.
        </BubbleContent>
        <BubbleReactions
          side="top"
          align="start"
          role="img"
          aria-label="Reactions: party popper, rocket"
        >
          <span>🎉</span>
          <span>🚀</span>
        </BubbleReactions>
      </Bubble>

      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>Nice. Any warnings I should know about?</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>And what was the cold-start time?</BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: eyes">
            <span>👀</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>

      <Bubble variant="ghost">
        <BubbleContent>
          No warnings. Cold start averaged 180&nbsp;ms across three regions, and
          the bundle shrank by 12% after tree-shaking the unused locales.
        </BubbleContent>
      </Bubble>

      <Bubble variant="destructive">
        <BubbleContent>Rate limit reached — retrying in 30s.</BubbleContent>
      </Bubble>
    </div>
  )
}
