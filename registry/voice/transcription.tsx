"use client"

import * as React from "react"
import { CaptionsIcon } from "lucide-react"

import {
  Transcription as TranscriptionRoot,
  TranscriptionSegment,
} from "@/components/ai-elements/transcription"
import { cn } from "@/lib/utils"

export interface TranscriptSegment {
  speaker: string
  time: string
  text: string
  /** Tailwind text-color class for the speaker label. */
  color: string
  startSecond?: number
  endSecond?: number
}

const DEFAULT_SEGMENTS: TranscriptSegment[] = [
  {
    speaker: "Agent",
    time: "0:00",
    color: "text-violet-500",
    text: "Thanks for calling support, how can I help you today?",
  },
  {
    speaker: "Caller",
    time: "0:04",
    color: "text-sky-500",
    text: "Hi, I was double charged for my subscription this month.",
  },
  {
    speaker: "Agent",
    time: "0:09",
    color: "text-violet-500",
    text: "I'm sorry about that. Let me pull up your account and take a look.",
  },
]

const WORD_DURATION = 0.32
const SEGMENT_GAP = 0.2

function buildTimedSegments(segments: TranscriptSegment[]) {
  let cursor = 0

  return segments.map((segment) => {
    if (segment.startSecond != null && segment.endSecond != null) {
      cursor = segment.endSecond + SEGMENT_GAP
      return {
        segment,
        ai: {
          endSecond: segment.endSecond,
          startSecond: segment.startSecond,
          text: segment.text,
        },
      }
    }

    const duration = segment.text.split(" ").length * WORD_DURATION
    const startSecond = cursor
    const endSecond = startSecond + duration
    cursor = endSecond + SEGMENT_GAP

    return {
      segment,
      ai: {
        endSecond,
        startSecond,
        text: segment.text,
      },
    }
  })
}

export function Transcription({
  segments = DEFAULT_SEGMENTS,
  className,
}: {
  segments?: TranscriptSegment[]
  className?: string
}) {
  const timedSegments = React.useMemo(
    () => buildTimedSegments(segments),
    [segments]
  )
  const duration =
    timedSegments.at(-1)?.ai.endSecond ?? WORD_DURATION

  const [currentTime, setCurrentTime] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime((time) => (time >= duration + 1 ? 0 : time + WORD_DURATION))
    }, WORD_DURATION * 1000)

    return () => clearInterval(id)
  }, [duration])

  return (
    <div className={cn("w-full max-w-md rounded-xl border bg-card", className)}>
      <div className="flex items-center gap-2.5 border-b px-4 py-3">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <CaptionsIcon className="size-3.5" />
        </span>
        <span className="text-sm font-medium">Transcript</span>
        <span className="ms-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
          Live
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {timedSegments.map(({ segment, ai }, index) => (
          <div key={`${segment.speaker}-${index}`} className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs">
              <span className={cn("font-semibold", segment.color)}>
                {segment.speaker}
              </span>
              <span className="font-mono text-muted-foreground tabular-nums">
                {segment.time}
              </span>
            </div>

            <TranscriptionRoot
              className="gap-0"
              currentTime={currentTime}
              onSeek={setCurrentTime}
              segments={[ai]}
            >
              {(transcriptSegment, segmentIndex) => (
                <TranscriptionSegment
                  key={segmentIndex}
                  index={segmentIndex}
                  segment={transcriptSegment}
                />
              )}
            </TranscriptionRoot>
          </div>
        ))}
      </div>
    </div>
  )
}
