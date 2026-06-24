import { readFileSync, writeFileSync } from "fs"

const items = [
  ["accordion", "Accordion", "Collapsible sections for AI answer metadata such as sources, follow-ups, and how the response was generated.", ["accordion"], []],
  ["alert-dialog", "Alert Dialog", "Destructive confirmation dialog for clearing a conversation, with a toast on confirm.", ["alert-dialog", "button"], ["sonner", "@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["alert", "Alert", "Informational and destructive alerts for AI disclaimers and usage limits, including an optional action button.", ["alert", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["aspect-ratio", "Aspect Ratio", "Fixed 16:9 frame for an AI-generated image preview with overlay badge and prompt caption.", ["aspect-ratio", "badge"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["avatar", "Avatar", "Assistant and user avatars with online badges and a grouped avatar stack for collaborators.", ["avatar"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["badge", "Badge", "Status and metadata badges for plans, models, context limits, grounding, and token throughput.", ["badge"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["breadcrumb", "Breadcrumb", "Hierarchical navigation trail from workspace to agent to the current chat thread.", ["breadcrumb"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["button-group", "Button Group", "Grouped message actions with tooltips and toggle state.", ["button-group", "button", "tooltip"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["button", "Button", "Primary chat actions and secondary prompt shortcuts across multiple button variants and sizes.", ["button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["calendar", "Calendar", "Single-date calendar paired with an assistant suggestion to schedule a design review.", ["calendar"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["card", "Card", "Model selection card showing specs, a selected badge, and a call-to-action.", ["card", "badge", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["carousel", "Carousel", "Swipeable carousel of image-generation variations with previous/next controls.", ["carousel"], []],
  ["chart", "Chart", "Stacked bar chart of weekly token usage by model inside a card with legend and tooltip.", ["card", "chart"], ["recharts"]],
  ["checkbox", "Checkbox", "Multi-select checklist for enabling agent tools like web search and file analysis.", ["checkbox", "label"], []],
  ["collapsible", "Collapsible", "Expandable reasoning trace showing step-by-step chain-of-thought before the final answer.", ["collapsible"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["combobox", "Combobox", "Searchable model picker built from popover, command list, and combobox-style trigger button.", ["button", "command", "popover"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["command", "Command", "Command palette with AI actions, shortcuts, and recent chats grouped in a searchable menu.", ["command"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["context-menu", "Context Menu", "Right-click menu on an assistant message with copy, quote, regenerate, and report actions.", ["context-menu"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["data-table", "Data Table", "Sortable, selectable agent-runs table with status badges and per-row action dropdown.", ["table", "badge", "button", "checkbox", "dropdown-menu"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["date-picker", "Date Picker", "Popover date picker for filtering conversations by day with formatted display text.", ["button", "calendar", "label", "popover"], ["date-fns", "@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["dialog", "Dialog", "Share-chat modal with read-only link input and copy-to-clipboard toast feedback.", ["button", "dialog", "input"], ["sonner", "@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["direction", "Direction", "LTR/RTL toggle showing mirrored chat bubbles, input placeholder, and send icon alignment.", ["direction", "toggle-group"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["drawer", "Drawer", "Bottom sheet prompt library listing saved prompts to insert into the composer.", ["button", "drawer"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["dropdown-menu", "Dropdown Menu", "Message options menu with copy, regenerate, nested model selection, and report.", ["button", "dropdown-menu"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["empty", "Empty", "Empty chat state with icon, title, description, and suggested starter prompts.", ["empty", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["field", "Field", "Structured settings form with legends, horizontal switch fields, and a stop-sequence input.", ["field", "input", "switch"], []],
  ["hover-card", "Hover Card", "Inline citation superscript that previews source title, relevance score, and excerpt on hover.", ["hover-card", "badge"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["input-group", "Input Group", "Chat composer with textarea, attach/search/dictate buttons, shortcut hint, and send control.", ["input-group"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["input-otp", "Input OTP", "Six-digit verification code input with grouped slots and a disabled-until-complete unlock button.", ["input-otp", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["input", "Input", "Single-line ask-anything input with send button disabled until text is entered.", ["input", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["item", "Item", "List of retrieved sources with icons, metadata, relevance scores, and link-style rows.", ["item", "badge", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["kbd", "Kbd", "Keyboard shortcut reference list for send, command bar, new chat, and stop actions.", ["kbd"], []],
  ["label", "Label", "Form labels paired with required agent name and masked API key inputs.", ["label", "input"], []],
  ["menubar", "Menubar", "Desktop-style menubar for chat, model selection with radio items, and view toggles.", ["menubar"], []],
  ["native-select", "Native Select", "Native HTML select with optgroups for choosing a model tier on mobile-friendly forms.", ["native-select", "label"], []],
  ["navigation-menu", "Navigation Menu", "Site navigation with a models mega-menu dropdown plus Pricing and Docs links.", ["navigation-menu"], []],
  ["pagination", "Pagination", "Paged navigation for retrieved RAG passages with previous, numbered, and ellipsis links.", ["pagination"], []],
  ["popover", "Popover", "Generation parameters popover with temperature and top-p sliders for the next message.", ["button", "popover", "label", "slider"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["progress", "Progress", "Animated fine-tuning job progress bar with percentage and estimated time remaining.", ["progress"], []],
  ["radio-group", "Radio Group", "Card-style radio options for choosing assistant response length.", ["radio-group", "label"], []],
  ["resizable", "Resizable", "Split chat and code-artifact panels with a draggable handle and syntax-highlighted code block.", ["resizable", "code-block"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["scroll-area", "Scroll Area", "Scrollable chat transcript container with alternating user and assistant message bubbles.", ["scroll-area"], []],
  ["select", "Select", "Grouped model dropdown separating frontier and fast models with controlled selection.", ["select", "label"], []],
  ["separator", "Separator", "Horizontal and vertical dividers for chat date labels, context boundaries, and model stats.", ["separator"], []],
  ["sheet", "Sheet", "Side panel for model settings including model select, temperature slider, and feature toggles.", ["button", "sheet", "label", "slider", "switch", "select"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["sidebar", "Sidebar", "Chat app sidebar layout with new chat, search, grouped history, and user profile footer.", ["button", "avatar"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["skeleton", "Skeleton", "Loading placeholder mimicking an in-progress assistant response with text and image skeletons.", ["skeleton"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["slider", "Slider", "Dual sliders for temperature and max output tokens with live numeric readouts.", ["slider", "label"], []],
  ["sonner", "Sonner", "Toast notifications for copy, save, error, and promise-based async actions via Sonner.", ["button"], ["sonner"]],
  ["spinner", "Spinner", "Loading spinners for thinking state, in-progress tool steps, and disabled generate button.", ["spinner", "button"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["switch", "Switch", "Toggle switches for web search and pro mode with contextual helper text.", ["switch", "label"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["table", "Table", "Per-turn token and cost breakdown table with model badges and footer totals.", ["table", "badge"], []],
  ["tabs", "Tabs", "Chat, code, and preview tabs for an assistant response with a code block in the code tab.", ["tabs", "code-block"], []],
  ["textarea", "Textarea", "Editable system prompt textarea with approximate token count and save button.", ["textarea", "button"], []],
  ["toggle", "Toggle", "Single pressed-state toggle for enabling deep research mode with dynamic description.", ["toggle"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
  ["toggle-group", "Toggle Group", "Single-select toggle group for answer mode (Concise, Balanced, Creative).", ["toggle-group"], []],
  ["tooltip", "Tooltip", "Icon toolbar with tooltips for attach, image, web search, dictate, and deep reasoning tools.", ["button", "tooltip"], ["@hugeicons/react", "@hugeicons/core-free-icons"]],
]

const registryJsonItems = items.map(([name, title, description, registryDependencies, dependencies]) => {
  const entry = {
    name,
    type: "registry:component",
    title,
    description,
    files: [{ path: `registry/ui/${name}.tsx`, type: "registry:component" }],
  }
  if (registryDependencies.length) entry.registryDependencies = registryDependencies
  if (dependencies.length) entry.dependencies = dependencies
  return entry
})

const tsItems = items
  .map(([slug, title, description, registryDependencies, dependencies]) => {
    const lines = [
      "  {",
      `    slug: "${slug}",`,
      `    title: "${title}",`,
      `    description: "${description.replace(/"/g, '\\"')}",`,
      `    category: "ui",`,
      `    icon: CursorPointer01Icon,`,
    ]
    if (registryDependencies.length) {
      lines.push(
        `    registryDependencies: [${registryDependencies.map((d) => `"${d}"`).join(", ")}],`
      )
    }
    if (dependencies.length) {
      lines.push(`    dependencies: [${dependencies.map((d) => `"${d}"`).join(", ")}],`)
    }
    lines.push("  },")
    return lines.join("\n")
  })
  .join("\n")

writeFileSync(
  "lib/ui-items.ts",
  `import { CursorPointer01Icon } from "@hugeicons/core-free-icons"

import type { RegistryItem } from "@/lib/registry"

export const uiItems: RegistryItem[] = [
${tsItems}
]
`
)

const registryPath = "registry.json"
const registry = JSON.parse(readFileSync(registryPath, "utf8"))
const withoutUi = registry.items.filter((item) => !item.files?.some((f) => f.path?.startsWith("registry/ui/")))
registry.items = [...withoutUi, ...registryJsonItems]
writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`)

console.log(`Added ${items.length} UI items to registry.json and lib/ui-items.ts`)
