"use client"

import { CodeBlock } from "@/components/ui/code/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsExample() {
  return (
    <Tabs defaultValue="chat" className="w-full max-w-md">
      <TabsList className="w-full">
        <TabsTrigger value="chat">Chat</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="chat">
        <div className="rounded-xl border bg-muted/40 p-4 text-sm">
          Sure — here&apos;s a button component that shows a loading spinner while
          your request is in flight.
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock
          className="rounded-xl border"
          language="tsx"
          code={`export function SubmitButton() {
  const [loading, setLoading] = useState(false)
  return (
    <Button disabled={loading}>
      {loading && <Spinner />}
      Ask AI
    </Button>
  )
}`}
        />
      </TabsContent>
      <TabsContent value="preview">
        <div className="flex items-center justify-center rounded-xl border bg-card p-8">
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
            Ask AI
          </button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
