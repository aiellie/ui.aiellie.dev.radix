"use client"

import {
  Conversation as ConversationRoot,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation"

import { cn } from "@/lib/utils"

export interface ConversationMessage {
  role: "user" | "assistant"
  content: string
}

const DEFAULT_MESSAGES: ConversationMessage[] = [
  {
    role: "user",
    content: "Can you give me a quick rundown of App Router caching?",
  },
  {
    role: "assistant",
    content:
      "Sure — there are four layers: Request Memoization, the Data Cache, the Full Route Cache, and the client-side Router Cache.",
  },
  { role: "user", content: "Which one do I disable for always-fresh data?" },
  {
    role: "assistant",
    content:
      "Use cache: 'no-store' on the fetch, or export dynamic = 'force-dynamic' from the route to opt out of the Data and Full Route caches.",
  },
  { role: "user", content: "Perfect, thanks!" },
]

export function Conversation({
  messages = DEFAULT_MESSAGES,
  className,
}: {
  messages?: ConversationMessage[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-72 w-full max-w-md flex-col overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <ConversationRoot className="min-h-0 flex-1">
        <ConversationContent className="gap-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "flex",
                m.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                  m.role === "user"
                    ? "rounded-ee-sm bg-primary text-primary-foreground"
                    : "rounded-es-sm bg-muted"
                )}
              >
                {m.content}
              </div>
            </div>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </ConversationRoot>
    </div>
  )
}
