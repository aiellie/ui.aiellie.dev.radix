"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  BubbleChatIcon,
  DashboardSquare01Icon,
  SearchIcon,
} from "@hugeicons/core-free-icons"

import {
  categories,
  getFeaturedItems,
  getItemsByCategory,
} from "@/lib/registry"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type SearchCommandContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SearchCommandContext = React.createContext<SearchCommandContextValue | null>(
  null
)

function useSearchCommand() {
  const context = React.useContext(SearchCommandContext)
  if (!context) {
    throw new Error("SearchCommand components must be used within SearchCommandProvider")
  }
  return context
}

export function SearchCommandProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "j" &&
        (event.metaKey || event.ctrlKey) &&
        !event.shiftKey &&
        !event.altKey
      ) {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const value = React.useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open]
  )

  return (
    <SearchCommandContext.Provider value={value}>
      {children}
    </SearchCommandContext.Provider>
  )
}

export function SearchCommandTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { setOpen } = useSearchCommand()

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "hidden h-8 w-44 justify-start gap-2 px-2.5 text-muted-foreground md:inline-flex",
          className
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <HugeiconsIcon icon={SearchIcon} strokeWidth={2} className="size-4" />
        <span className="flex-1 text-left text-sm font-normal">Search…</span>
        <Kbd>⌘J</Kbd>
      </Button>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            className={cn("md:hidden", className)}
            aria-label="Search"
            onClick={() => setOpen(true)}
          >
            <HugeiconsIcon icon={SearchIcon} strokeWidth={2} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Search (⌘J)</TooltipContent>
      </Tooltip>
    </>
  )
}

export function SearchCommand() {
  const { open, setOpen } = useSearchCommand()
  const router = useRouter()
  const featuredItems = getFeaturedItems()

  const runCommand = React.useCallback(
    (command: () => void) => {
      setOpen(false)
      command()
    },
    [setOpen]
  )

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Search"
      description="Search sidebar items"
    >
      <Command className="**:data-[slot=command-input-wrapper]:h-auto">
        <CommandInput placeholder="Search sidebar…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem
              value="Browse all"
              keywords={["home", "dashboard", "components"]}
              onSelect={() => runCommand(() => router.push("/"))}
            >
              <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />
              Browse all
            </CommandItem>
            <CommandItem
              value="Chat block"
              keywords={["chat", "conversation"]}
              onSelect={() => runCommand(() => router.push("/chat"))}
            >
              <HugeiconsIcon icon={BubbleChatIcon} strokeWidth={2} />
              Chat block
            </CommandItem>
          </CommandGroup>

          {featuredItems.length > 0 ? (
            <>
              <CommandSeparator />
              <CommandGroup heading="Featured">
                {featuredItems.map((item) => (
                  <CommandItem
                    key={item.slug}
                    value={item.title}
                    keywords={[item.slug, item.description, "featured"]}
                    onSelect={() =>
                      runCommand(() => router.push(`/c/${item.slug}`))
                    }
                  >
                    <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ) : null}

          {categories.map((category) => (
            <React.Fragment key={category.id}>
              <CommandSeparator />
              <CommandGroup heading={category.label}>
                {getItemsByCategory(category.id).map((item) => (
                  <CommandItem
                    key={item.slug}
                    value={item.title}
                    keywords={[item.slug, item.description, category.label]}
                    onSelect={() =>
                      runCommand(() => router.push(`/c/${item.slug}`))
                    }
                  >
                    <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}

          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem
              value="shadcn registry docs"
              keywords={["shadcn", "documentation", "external"]}
              onSelect={() =>
                runCommand(() =>
                  window.open(
                    "https://ui.shadcn.com/docs/registry",
                    "_blank",
                    "noopener,noreferrer"
                  )
                )
              }
            >
              <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} />
              shadcn registry docs
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
