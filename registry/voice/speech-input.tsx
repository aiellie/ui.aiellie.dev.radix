"use client"

import * as React from "react"

import { SpeechInput as SpeechInputButton } from "@/components/ai-elements/speech-input"
import { cn } from "@/lib/utils"

const DEFAULT_PHRASE = "Show me the revenue dashboard for last quarter"

export function SpeechInput({
  phrase = DEFAULT_PHRASE,
  className,
}: {
  phrase?: string
  className?: string
}) {
  const [text, setText] = React.useState("")

  const handleTranscriptionChange = React.useCallback((transcript: string) => {
    setText((prev) => {
      const next = prev ? `${prev} ${transcript}` : transcript
      return next.trim()
    })
  }, [])

  const handleAudioRecorded = React.useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return phrase
  }, [phrase])

  return (
    <div
      className={cn(
        "flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl border bg-card p-6",
        className
      )}
    >
      <SpeechInputButton
        aria-label="Start speech input"
        className="size-16 [&_svg]:size-7"
        onAudioRecorded={handleAudioRecorded}
        onTranscriptionChange={handleTranscriptionChange}
        size="icon-lg"
      />

      <p className="text-sm font-medium">Tap to speak</p>

      <p className="min-h-10 text-center text-sm leading-relaxed text-muted-foreground">
        {text ? (
          <>“{text}”</>
        ) : (
          <span className="text-muted-foreground/50">
            Your words will appear here.
          </span>
        )}
      </p>
    </div>
  )
}
