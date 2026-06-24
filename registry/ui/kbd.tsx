"use client"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const shortcuts: { keys: string[]; label: string }[] = [
  { keys: ["⌘", "↵"], label: "Send message" },
  { keys: ["⌘", "K"], label: "Open command bar" },
  { keys: ["⌘", "⇧", "O"], label: "New chat" },
  { keys: ["Esc"], label: "Stop generating" },
]

export default function KbdExample() {
  return (
    <div className="w-full max-w-sm divide-y rounded-xl border">
      {shortcuts.map((s) => (
        <div
          key={s.label}
          className="flex items-center justify-between px-4 py-2.5 text-sm"
        >
          <span className="text-muted-foreground">{s.label}</span>
          <KbdGroup>
            {s.keys.map((k) => (
              <Kbd key={k}>{k}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  )
}
