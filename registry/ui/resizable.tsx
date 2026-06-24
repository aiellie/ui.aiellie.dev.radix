"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { CodeIcon } from "@hugeicons/core-free-icons"

import { CodeBlock } from "@/components/ui/code/code-block"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableExample() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-[24rem] w-full max-w-2xl rounded-xl border"
    >
      <ResizablePanel defaultSize={45} minSize={28}>
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium text-muted-foreground">Chat</span>
          <div className="ms-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
            Build me a counter component.
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm">
            Done — open the artifact on the right and drag the divider to resize.
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55} minSize={28}>
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 border-b px-3 py-2 text-xs font-medium text-muted-foreground">
            <HugeiconsIcon icon={CodeIcon} strokeWidth={2} className="size-4" />
            Counter.tsx · Artifact
          </div>
          <CodeBlock
            className="flex-1 p-3"
            language="tsx"
            code={`export function Counter() {
  const [n, setN] = useState(0)
  return (
    <button onClick={() => setN(n + 1)}>
      Count: {n}
    </button>
  )
}`}
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
