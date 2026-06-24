"use client"

import * as React from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenubarExample() {
  const [model, setModel] = React.useState("opus")
  const [stream, setStream] = React.useState(true)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Chat</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New chat <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Share… <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Export transcript</MenubarItem>
          <MenubarItem variant="destructive">Clear conversation</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Model</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={model} onValueChange={setModel}>
            <MenubarRadioItem value="opus">Claude Opus 4.8</MenubarRadioItem>
            <MenubarRadioItem value="sonnet">Claude Sonnet 4.6</MenubarRadioItem>
            <MenubarRadioItem value="haiku">Claude Haiku 4.5</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarCheckboxItem checked={stream} onCheckedChange={setStream}>
            Stream responses
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Toggle sidebar <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Show token usage</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
