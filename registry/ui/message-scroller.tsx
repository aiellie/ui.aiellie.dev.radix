"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { createGlassAvatarUri } from "@/lib/glass"

const assistantAvatar = createGlassAvatarUri("assistant", { fill: "gradient" })
const userAvatar = createGlassAvatarUri("ellie")

const conversation: { role: "user" | "assistant"; text: string }[] = [
  { role: "user", text: "What's the difference between RAG and fine-tuning?" },
  {
    role: "assistant",
    text: "RAG retrieves relevant documents at query time and feeds them into the prompt, so knowledge stays fresh and editable. Fine-tuning bakes new behavior into the weights — great for style and format, weaker for fast-changing facts.",
  },
  { role: "user", text: "When would I reach for fine-tuning instead?" },
  {
    role: "assistant",
    text: "When you need a consistent tone, a strict output schema, or lower latency than stuffing context allows. If the underlying facts change weekly, prefer RAG or combine both.",
  },
  { role: "user", text: "Can I use them together?" },
  {
    role: "assistant",
    text: "Absolutely. Fine-tune for the shape of the answer, then use RAG to ground each response in current, authoritative sources. That combo is common in production assistants.",
  },
  { role: "user", text: "Got it — thanks for breaking it down." },
  {
    role: "assistant",
    text: "Anytime. Scroll up to re-read anything; the viewport stays put while you read and only snaps back when you hit the button below.",
  },
]

export default function MessageScrollerExample() {
  return (
    <MessageScrollerProvider>
      <div className="h-96 w-full max-w-sm overflow-hidden rounded-xl border bg-card">
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {conversation.map((m, i) => (
                <MessageScrollerItem
                  key={i}
                  scrollAnchor={m.role === "user"}
                >
                  <Message align={m.role === "user" ? "end" : "start"}>
                    <MessageAvatar>
                      <Avatar>
                        <AvatarImage
                          src={m.role === "user" ? userAvatar : assistantAvatar}
                          alt={m.role === "user" ? "You" : "Assistant"}
                        />
                        <AvatarFallback>
                          {m.role === "user" ? "EL" : "AI"}
                        </AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                    <MessageContent>
                      <Bubble variant={m.role === "user" ? "default" : "muted"}>
                        <BubbleContent>{m.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </div>
    </MessageScrollerProvider>
  )
}
