import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  Comment01Icon,
  GitBranchIcon,
  GitMergeIcon,
  GitPullRequestIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

type Status = "open" | "merged" | "draft"

const STATUS: Record<
  Status,
  { label: string; className: string; icon: typeof GitPullRequestIcon }
> = {
  open: {
    label: "Open",
    className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    icon: GitPullRequestIcon,
  },
  merged: {
    label: "Merged",
    className: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    icon: GitMergeIcon,
  },
  draft: {
    label: "Draft",
    className: "bg-muted text-muted-foreground",
    icon: GitPullRequestIcon,
  },
}

export function PullRequestCard({
  number = 1242,
  title = "Add registry build step and v0 deep links",
  author = "aiellie",
  base = "main",
  head = "feat/registry",
  status = "open",
  additions = 248,
  deletions = 31,
  comments = 6,
  reviewers = ["AL", "JS", "MK"],
  className,
}: {
  number?: number
  title?: string
  author?: string
  base?: string
  head?: string
  status?: Status
  additions?: number
  deletions?: number
  comments?: number
  reviewers?: string[]
  className?: string
}) {
  const meta = STATUS[status]

  return (
    <Card className={cn("w-full max-w-md gap-0 rounded-2xl py-0 shadow-sm", className)}>
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex items-start gap-3">
          <Badge className={cn("gap-1 capitalize", meta.className)}>
            <HugeiconsIcon icon={meta.icon} className="size-3.5" />
            {meta.label}
          </Badge>
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="text-sm leading-snug font-medium">
              {title}{" "}
              <span className="font-normal text-muted-foreground">
                #{number}
              </span>
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              opened by {author}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1 rounded-md bg-muted px-1.5 py-1 font-mono">
            <HugeiconsIcon
              icon={GitBranchIcon}
              className="size-3.5 text-muted-foreground"
            />
            {head}
          </span>
          <span className="text-muted-foreground">→</span>
          <span className="flex items-center gap-1 rounded-md bg-muted px-1.5 py-1 font-mono">
            <HugeiconsIcon
              icon={GitBranchIcon}
              className="size-3.5 text-muted-foreground"
            />
            {base}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-4" />
            All checks passed
          </span>
          <span className="flex items-center gap-1">
            <HugeiconsIcon icon={Comment01Icon} className="size-4" />
            {comments}
          </span>
          <span className="font-mono">
            <span className="text-emerald-600 dark:text-emerald-400">
              +{additions}
            </span>{" "}
            <span className="text-rose-600 dark:text-rose-400">
              −{deletions}
            </span>
          </span>
        </div>
      </CardContent>

      <CardFooter className="justify-between">
        <div className="flex items-center">
          {reviewers.map((r, i) => (
            <Avatar
              key={r}
              className={cn("size-7 border-2 border-card", i > 0 && "-ms-2")}
            >
              <AvatarFallback className="bg-primary/10 text-[10px] font-semibold text-primary">
                {r}
              </AvatarFallback>
            </Avatar>
          ))}
          <span className="ms-2 text-xs text-muted-foreground">
            {reviewers.length} reviewers
          </span>
        </div>
        <Button size="sm" disabled={status === "merged"}>
          <HugeiconsIcon icon={GitMergeIcon} data-icon="inline-start" />
          {status === "merged" ? "Merged" : "Merge"}
        </Button>
      </CardFooter>
    </Card>
  )
}
