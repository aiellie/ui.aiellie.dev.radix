"use client"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

const messages: { role: "user" | "assistant"; text: string }[] = [
  { role: "user", text: "Can you explain what a vector embedding is?" },
  { role: "assistant", text: "An embedding maps text into a list of numbers so similar meanings land close together in space." },
  { role: "user", text: "How many dimensions are typical?" },
  { role: "assistant", text: "Often 256–3072. More dimensions can capture more nuance but cost more to store and compare." },
  { role: "user", text: "And how do I search them?" },
  { role: "assistant", text: "You compute the query embedding, then rank stored vectors by cosine similarity — that's nearest-neighbor search." },
  { role: "user", text: "Got it. Any libraries you'd recommend?" },
  { role: "assistant", text: "For a quick start: pgvector if you're on Postgres, or a managed vector DB if you need scale and filtering." },
]

export default function ScrollAreaExample() {
  return (
    <ScrollArea className="h-80 w-full max-w-md rounded-xl border bg-card">
      <div className="flex flex-col gap-3 p-4">
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
                "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm",
                m.role === "user"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm bg-muted"
              )}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
