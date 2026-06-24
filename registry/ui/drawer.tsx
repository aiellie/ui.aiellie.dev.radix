"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Book01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const prompts = [
  { title: "Summarize this thread", desc: "Bullet points + action items" },
  { title: "Rewrite more formally", desc: "Keep meaning, raise the register" },
  { title: "Explain like I'm five", desc: "Simple words, one analogy" },
  { title: "Find the bug", desc: "Review the pasted code for errors" },
]

export default function DrawerExample() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <HugeiconsIcon icon={Book01Icon} strokeWidth={2} />
          Prompt library
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Prompt library</DrawerTitle>
            <DrawerDescription>
              Tap a saved prompt to drop it into the composer.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-2 px-4">
            {prompts.map((p) => (
              <button
                key={p.title}
                className="flex items-center gap-3 rounded-lg border p-3 text-start transition-colors hover:bg-accent"
              >
                <div className="flex-1">
                  <div className="text-sm font-medium">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.desc}</div>
                </div>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  strokeWidth={2}
                  className="size-4 text-muted-foreground rtl:rotate-180"
                />
              </button>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
