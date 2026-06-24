"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  File01Icon,
  FileCodeIcon,
  Folder01Icon,
  FolderOpenIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface TreeNode {
  name: string
  type: "file" | "folder"
  children?: TreeNode[]
  /** Folders open by default when true. */
  open?: boolean
}

const DEFAULT_TREE: TreeNode[] = [
  {
    name: "app",
    type: "folder",
    open: true,
    children: [
      { name: "layout.tsx", type: "file" },
      { name: "page.tsx", type: "file" },
      { name: "globals.css", type: "file" },
    ],
  },
  {
    name: "components",
    type: "folder",
    open: true,
    children: [
      {
        name: "ui",
        type: "folder",
        children: [
          { name: "button.tsx", type: "file" },
          { name: "card.tsx", type: "file" },
        ],
      },
      { name: "app-sidebar.tsx", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
]

function isCode(name: string) {
  return /\.(tsx?|jsx?|mjs|css)$/.test(name)
}

function Node({
  node,
  depth,
  active,
  onSelect,
}: {
  node: TreeNode
  depth: number
  active: string
  onSelect: (name: string) => void
}) {
  const [open, setOpen] = React.useState(node.open ?? false)

  if (node.type === "folder") {
    return (
      <li>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center gap-1.5 rounded-md py-1 pe-2 text-sm transition-colors hover:bg-accent"
          style={{ paddingInlineStart: `${depth * 14 + 8}px` }}
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className={cn(
              "size-3.5 shrink-0 text-muted-foreground transition-transform rtl:rotate-180",
              open && "rotate-90 rtl:rotate-90"
            )}
          />
          <HugeiconsIcon
            icon={open ? FolderOpenIcon : Folder01Icon}
            className="size-4 shrink-0 text-sky-500"
          />
          <span className="truncate">{node.name}</span>
        </button>
        {open && node.children ? (
          <ul>
            {node.children.map((child) => (
              <Node
                key={child.name}
                node={child}
                depth={depth + 1}
                active={active}
                onSelect={onSelect}
              />
            ))}
          </ul>
        ) : null}
      </li>
    )
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(node.name)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-md py-1 pe-2 text-sm transition-colors hover:bg-accent",
          active === node.name &&
            "bg-accent font-medium text-accent-foreground"
        )}
        style={{ paddingInlineStart: `${depth * 14 + 26}px` }}
      >
        <HugeiconsIcon
          icon={isCode(node.name) ? FileCodeIcon : File01Icon}
          className="size-4 shrink-0 text-muted-foreground"
        />
        <span className="truncate">{node.name}</span>
      </button>
    </li>
  )
}

export function FileTree({
  tree = DEFAULT_TREE,
  defaultActive = "page.tsx",
  className,
}: {
  tree?: TreeNode[]
  defaultActive?: string
  className?: string
}) {
  const [active, setActive] = React.useState(defaultActive)

  return (
    <nav
      className={cn(
        "w-full max-w-xs rounded-xl border bg-card p-2 shadow-sm",
        className
      )}
    >
      <ul>
        {tree.map((node) => (
          <Node
            key={node.name}
            node={node}
            depth={0}
            active={active}
            onSelect={setActive}
          />
        ))}
      </ul>
    </nav>
  )
}
