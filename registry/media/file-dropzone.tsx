"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  CloudUploadIcon,
  File01Icon,
  Image01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface UploadFile {
  id: string
  name: string
  size: string
  progress: number
  kind: "image" | "file"
}

const INITIAL: UploadFile[] = [
  { id: "1", name: "hero-banner.png", size: "2.4 MB", progress: 100, kind: "image" },
  { id: "2", name: "annual-report.pdf", size: "8.1 MB", progress: 64, kind: "file" },
]

export function FileDropzone({ className }: { className?: string }) {
  const [files, setFiles] = React.useState<UploadFile[]>(INITIAL)
  const [dragging, setDragging] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!files.some((f) => f.progress < 100)) return
    const id = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) =>
          f.progress < 100
            ? { ...f, progress: Math.min(100, f.progress + 8) }
            : f
        )
      )
    }, 350)
    return () => clearInterval(id)
  }, [files])

  function addFiles(list: FileList | null) {
    if (!list) return
    const next = Array.from(list).map((file, i) => ({
      id: `${Date.now()}-${i}`,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      progress: 0,
      kind: file.type.startsWith("image/") ? ("image" as const) : ("file" as const),
    }))
    setFiles((prev) => [...prev, ...next])
  }

  return (
    <div className={cn("flex w-full max-w-sm flex-col gap-3", className)}>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          addFiles(e.dataTransfer.files)
        }}
        className={cn(
          "flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-colors",
          dragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-ring hover:bg-accent/50"
        )}
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HugeiconsIcon icon={CloudUploadIcon} className="size-5" />
        </span>
        <span className="text-sm font-medium">
          Drop files or{" "}
          <span className="text-primary">browse</span>
        </span>
        <span className="text-xs text-muted-foreground">
          PNG, JPG or PDF up to 10 MB
        </span>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </button>

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((file) => {
            const done = file.progress >= 100
            return (
              <li
                key={file.id}
                className="flex items-center gap-3 rounded-xl border bg-card p-2.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <HugeiconsIcon
                    icon={file.kind === "image" ? Image01Icon : File01Icon}
                    className="size-4"
                  />
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">
                      {file.name}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {file.size}
                    </span>
                  </div>
                  {done ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                      <HugeiconsIcon icon={Tick02Icon} className="size-3.5" />
                      Uploaded
                    </span>
                  ) : (
                    <Progress value={file.progress} className="h-1.5" />
                  )}
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() =>
                    setFiles((prev) => prev.filter((f) => f.id !== file.id))
                  }
                  className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
