"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlertCircleIcon,
  ArrowDown01Icon,
  PlusSignIcon,
  Robot01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { ChatMessage } from "@/registry/ai/chat-message"
import { PromptInput } from "@/registry/ai/prompt-input"
import { PromptSuggestions } from "@/registry/ai/prompt-suggestions"
import { Attachments } from "@/registry/ai/attachments"
import { ModelSelector } from "@/registry/ai/model-selector"
import { ReasoningPanel } from "@/registry/ai/reasoning-panel"
import { Tool } from "@/registry/ai/tool"
import { Sources } from "@/registry/ai/sources"
import { CitationList } from "@/registry/ai/citation-list"
import { MessageActions } from "@/registry/ai/message-actions"
import { TypingIndicator } from "@/registry/ai/typing-indicator"
import { Checkpoint } from "@/registry/ai/checkpoint"
import { CodeBlockExample } from "@/registry/code/code-block"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface Turn {
  id: number
  role: "user" | "assistant"
  text: string
  time?: string
  reasoning?: string[]
  tool?: {
    name: string
    status: "pending" | "running" | "complete" | "error"
    parameters: Record<string, unknown>
    result?: unknown
  }
  sources?: { title: string; url: string }[]
  citations?: { title: string; url: string; snippet?: string }[]
  code?: { filename: string; language: string; code: string }
  /** Render a restore-point divider after this turn. */
  checkpointAfter?: boolean
}

/* -------------------------------------------------------------------------- */
/*  Seed conversation — showcases the assistant building blocks               */
/* -------------------------------------------------------------------------- */

const SEED: Turn[] = [
  {
    id: 1,
    role: "user",
    time: "2:14 PM",
    text: "Give me a quick rundown of App Router caching — then I'll want to force a route to always be dynamic.",
  },
  {
    id: 2,
    role: "assistant",
    time: "2:14 PM",
    reasoning: [
      "Identifying the four distinct cache layers the App Router exposes.",
      "Separating server-side caches from the client Router Cache.",
      "Noting which knobs opt a route out of caching for the follow-up.",
    ],
    text: "There are **four caching layers**, two on the server and two closer to the client:\n\n**Request Memoization** dedupes identical `fetch` calls within a single render. The **Data Cache** persists fetch results across requests and deployments. The **Full Route Cache** stores the rendered HTML/RSC payload at build time. Finally the client **Router Cache** keeps visited routes in memory for instant back/forward.\n\nTo always serve fresh data you opt out of the **Data** and **Full Route** caches — which is exactly the knob you'll want next.",
    sources: [
      {
        title: "App Router caching documentation",
        url: "https://nextjs.org/docs/app/building-your-application/caching",
      },
      { title: "Next.js — release notes", url: "https://nextjs.org/blog/next-15" },
      {
        title: "Data fetching & revalidating",
        url: "https://nextjs.org/docs/app/building-your-application/data-fetching",
      },
    ],
    checkpointAfter: true,
  },
  {
    id: 3,
    role: "user",
    time: "2:16 PM",
    text: "Perfect. Show me the code to opt one route out of caching.",
  },
  {
    id: 4,
    role: "assistant",
    time: "2:16 PM",
    text: "Export `dynamic = \"force-dynamic\"` from the route segment, and pass `cache: \"no-store\"` to any fetch you never want cached:",
    code: {
      filename: "app/feed/page.tsx",
      language: "tsx",
      code: `// Opt the whole segment out of the Full Route Cache
export const dynamic = "force-dynamic"

export default async function Feed() {
  // Always refetch — never served from the Data Cache
  const res = await fetch("https://api.site.com/feed", {
    cache: "no-store",
  })
  return <List items={await res.json()} />
}`,
    },
  },
  {
    id: 5,
    role: "user",
    time: "2:18 PM",
    text: "And what does the research actually say about RAG?",
  },
  {
    id: 6,
    role: "assistant",
    time: "2:18 PM",
    tool: {
      name: "search_papers",
      status: "complete",
      parameters: { query: "retrieval augmented generation", limit: 3 },
      result: { found: 3, ranked_by: "relevance" },
    },
    text: "The literature converges on a simple idea: pair a parametric model with a non-parametric retriever so the model can ground its answers in fresh, citable context instead of relying on memorized weights.",
    citations: [
      {
        title: "Retrieval-Augmented Generation",
        url: "https://ai.meta.com/research/rag",
        snippet:
          "Combines a parametric model with a non-parametric retriever for knowledge-intensive tasks.",
      },
      {
        title: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
        snippet:
          "Introduces the Transformer, the backbone architecture behind modern retrieval-augmented models.",
      },
    ],
  },
]

/* Canned assistant replies cycled through as the user sends new prompts. */
const REPLIES: Omit<Turn, "id" | "role" | "time">[] = [
  {
    reasoning: [
      "Restating the question to lock in what a good answer looks like.",
      "Pulling the two or three constraints that actually matter here.",
      "Drafting a tight answer and checking it against those constraints.",
    ],
    text: "Good question. The short version: **start with the smallest thing that works**, measure it, and only add complexity once the data asks for it. Want me to turn that into a concrete checklist?",
  },
  {
    tool: {
      name: "web_search",
      status: "complete",
      parameters: { query: "latest best practices", recency: "30d" },
      result: { results: 5, top_domain: "nextjs.org" },
    },
    text: "I pulled a few recent sources — here's the consensus, with the primary references attached so you can dig in.",
    citations: [
      {
        title: "Official documentation",
        url: "https://nextjs.org/docs",
        snippet: "The canonical reference for the APIs involved.",
      },
    ],
  },
  {
    text: "Here's a minimal, copy-pasteable starting point:",
    code: {
      filename: "example.ts",
      language: "ts",
      code: `// A small, focused helper you can drop in
export function debounce<T extends (...a: never[]) => void>(fn: T, ms = 200) {
  let t: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), ms)
  }
}`,
    },
  },
  {
    text: "Happy to help with that. Give me a bit more detail about the **goal** and any **constraints**, and I'll tailor the answer to your setup.",
  },
]

/* -------------------------------------------------------------------------- */
/*  Lightweight inline markdown (bold + inline code)                          */
/* -------------------------------------------------------------------------- */

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`)/g

function formatInline(text: string) {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

function Prose({ text }: { text: string }) {
  const paragraphs = text.trim().split(/\n\n+/)
  return (
    <div className="space-y-3 text-sm leading-relaxed text-foreground">
      {paragraphs.map((p, i) => (
        <p key={i}>{formatInline(p)}</p>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Assistant turn — composes the AI building blocks                          */
/* -------------------------------------------------------------------------- */

function AssistantAvatar() {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-muted text-foreground">
      <HugeiconsIcon icon={Robot01Icon} className="size-4" />
    </span>
  )
}

function AssistantTurn({
  turn,
  onRegenerate,
}: {
  turn: Turn
  onRegenerate?: () => void
}) {
  return (
    <div className="flex w-full gap-3">
      <AssistantAvatar />
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex items-center gap-2 px-0.5 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Assistant</span>
          {turn.time ? <span>{turn.time}</span> : null}
        </div>

        {turn.reasoning ? (
          <ReasoningPanel
            steps={turn.reasoning}
            duration={turn.reasoning.length + 1}
            className="max-w-xl"
          />
        ) : null}

        {turn.tool ? (
          <Tool
            name={turn.tool.name}
            status={turn.tool.status}
            parameters={turn.tool.parameters}
            result={turn.tool.result}
            defaultOpen={false}
          />
        ) : null}

        <Prose text={turn.text} />

        {turn.code ? (
          <CodeBlockExample
          />
        ) : null}

        {turn.sources ? (
          <Sources sources={turn.sources} className="max-w-xl" />
        ) : null}

        {turn.citations ? <CitationList citations={turn.citations} /> : null}

        <MessageActions value={turn.text} onRegenerate={onRegenerate} />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Chat block                                                                */
/* -------------------------------------------------------------------------- */

function timeNow() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  })
}

export function Chat({ className }: { className?: string }) {
  const [turns, setTurns] = React.useState<Turn[]>(SEED)
  const [pending, setPending] = React.useState(false)
  const [atBottom, setAtBottom] = React.useState(true)

  const scrollRef = React.useRef<HTMLDivElement>(null)
  const nextId = React.useRef(SEED.length + 1)
  const replyIndex = React.useRef(0)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const isEmpty = turns.length === 0

  const scrollToBottom = React.useCallback((behavior: ScrollBehavior = "smooth") => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior })
  }, [])

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 32)
  }

  React.useEffect(() => {
    scrollToBottom("auto")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (atBottom) scrollToBottom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turns.length, pending])

  React.useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const send = React.useCallback((value: string) => {
    const text = value.trim()
    if (!text) return

    setTurns((prev) => [
      ...prev,
      { id: nextId.current++, role: "user", text, time: timeNow() },
    ])
    setPending(true)

    timer.current = setTimeout(() => {
      const reply = REPLIES[replyIndex.current % REPLIES.length]
      replyIndex.current += 1
      setTurns((prev) => [
        ...prev,
        { ...reply, id: nextId.current++, role: "assistant", time: timeNow() },
      ])
      setPending(false)
    }, 1100)
  }, [])

  const newChat = () => {
    if (timer.current) clearTimeout(timer.current)
    setPending(false)
    setTurns([])
    replyIndex.current = 0
  }

  return (
    <div className={cn("flex h-full flex-col bg-background", className)}>
      {/* Thread toolbar */}
      <div className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
            <HugeiconsIcon icon={SparklesIcon} className="size-3.5" />
          </span>
          <span className="text-sm font-medium">New chat</span>
        </div>
        <div className="ms-auto flex items-center gap-1.5">
          <ModelSelector />
          <Button
            variant="ghost"
            size="sm"
            onClick={newChat}
            className="gap-1.5 text-muted-foreground"
          >
            <HugeiconsIcon icon={PlusSignIcon} />
            <span className="hidden sm:inline">New chat</span>
          </Button>
        </div>
      </div>

      {/* Scrollable conversation */}
      <div className="relative min-h-0 flex-1">
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="h-full overflow-y-auto"
        >
          <div className="mx-auto w-full max-w-3xl px-4 py-6">
            {isEmpty ? (
              <div className="flex min-h-[55vh] flex-col items-center justify-center gap-6 text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={SparklesIcon} className="size-7" />
                </span>
                <div className="space-y-1.5">
                  <h2 className="text-xl font-semibold tracking-tight">
                    How can I help you today?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Ask anything, or start with one of these.
                  </p>
                </div>
                <PromptSuggestions
                  className="w-full max-w-xl"
                  onSelect={(s) => send(`${s.title} ${s.subtitle}`)}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {turns.map((turn) => (
                  <React.Fragment key={turn.id}>
                    {turn.role === "user" ? (
                      <ChatMessage role="user" name="You" timestamp={turn.time}>
                        {turn.text}
                      </ChatMessage>
                    ) : (
                      <AssistantTurn turn={turn} onRegenerate={() => {}} />
                    )}
                    {turn.checkpointAfter ? (
                      <Checkpoint
                        label="Checkpoint"
                        detail="Before the code answer"
                      />
                    ) : null}
                  </React.Fragment>
                ))}

                {pending ? (
                  <div className="flex w-full gap-3">
                    <AssistantAvatar />
                    <TypingIndicator label="Thinking…" />
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>

        {/* Floating scroll-to-bottom */}
        <button
          type="button"
          onClick={() => scrollToBottom()}
          aria-label="Scroll to bottom"
          className={cn(
            "absolute bottom-4 start-1/2 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-md transition-all hover:text-foreground rtl:translate-x-1/2",
            atBottom
              ? "pointer-events-none translate-y-2 opacity-0"
              : "opacity-100"
          )}
        >
          <HugeiconsIcon icon={ArrowDown01Icon} className="size-4" />
        </button>
      </div>

      {/* Composer */}
      <div className="shrink-0 border-t bg-background px-4 pt-3 pb-4">
        <div className="mx-auto w-full max-w-3xl space-y-2.5">
          <Attachments
            attachments={[
              { id: "a1", name: "design-spec.pdf", size: "240 KB", kind: "pdf" },
              { id: "a2", name: "use-chat.ts", size: "3.1 KB", kind: "code" },
            ]}
          />
          <PromptInput onSend={send} placeholder="Message the assistant…" />
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <HugeiconsIcon icon={AlertCircleIcon} className="size-3.5" />
            The assistant can make mistakes. Double-check important info.
          </p>
        </div>
      </div>
    </div>
  )
}
