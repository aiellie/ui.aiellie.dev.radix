import {
  // categories
  AiChat02Icon,
  Image02Icon,
  SourceCodeIcon,
  // ai
  BubbleChatIcon,
  SentIcon,
  Loading03Icon,
  Login03Icon,
  AiBrain01Icon,
  SparklesIcon,
  NeuralNetworkIcon,
  Comment01Icon,
  QuoteUpIcon,
  // media
  PlayIcon,
  WaveIcon,
  GalleryHorizontalIcon,
  VideoReplayIcon,
  ImageAdd01Icon,
  CloudUploadIcon,
  MusicNote03Icon,
  ArrowLeftRightIcon,
  // code
  TerminalIcon,
  GitMergeIcon,
  Folder01Icon,
  CommandIcon,
  GitPullRequestIcon,
  PackageIcon,
  FileCodeIcon,
  // voice category
  Mic02Icon,
  // new ai
  Attachment01Icon,
  Brain02Icon,
  Location01Icon,
  CheckmarkSquare02Icon,
  GaugeIcon,
  Message02Icon,
  QuoteDownIcon,
  TaskDaily01Icon,
  Queue02Icon,
  Loading02Icon,
  LoaderPinwheelIcon,
  Globe02Icon,
  Task01Icon,
  Wrench01Icon,
  BubbleChatAddIcon,
  // new code
  RoboticIcon,
  CubeIcon,
  GitCommitIcon,
  Key01Icon,
  CodeSquareIcon,
  PackageOpenIcon,
  CodeCircleIcon,
  Structure01Icon,
  Bug01Icon,
  TestTube01Icon,
  BrowserIcon,
  // voice
  VolumeHighIcon,
  Mic01Icon,
  AiUserIcon,
  VoiceIcon,
  SpeechToTextIcon,
  VoiceIdIcon,
  // media
  Image01Icon,
  ComponentIcon,
  
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"

import { uiItems } from "@/lib/ui-items"

export type Category = "ai" | "auth" | "media" | "code" | "voice" | "ui"

/** Top-level collection the switcher toggles between. */
export type Collection = "ui" | "components" | "blocks"

export type RegistryItem = {
  slug: string
  title: string
  description: string
  category: Category
  /** Which switcher collection this item belongs to. Defaults to "components". */
  collection?: Collection
  icon: IconSvgElement
  /** npm dependencies the component needs (beyond what the app already has). */
  dependencies?: string[]
  /** Other registry items this component depends on (shadcn primitives). */
  registryDependencies?: string[]
  /** Surface this item in the Featured group in the sidebar. */
  featured?: boolean
  /** Show a "New" badge on this item in the sidebar. */
  isNew?: boolean
}

export const categories: {
  id: Category
  label: string
  description: string
  icon: IconSvgElement
}[] = [
  {
    id: "ai",
    label: "AI Chat",
    description: "Building blocks for conversational AI interfaces.",
    icon: AiChat02Icon,
  },
  {
    id: "auth",
    label: "Authentication",
    description: "Authentication components for user login and registration.",
    icon: Login03Icon,
  },
  {
    id: "media",
    label: "Media",
    description: "Players, galleries, and upload surfaces for rich media.",
    icon: Image02Icon,
  },
  {
    id: "code",
    label: "Code",
    description: "Developer-facing surfaces: terminals, diffs, and snippets.",
    icon: SourceCodeIcon,
  },
  {
    id: "voice",
    label: "Voice",
    description: "Speech I/O: players, mics, transcripts, and voice pickers.",
    icon: Mic02Icon,
  },
  {
    id: "ui",
    label: "UI",
    description: "shadcn/ui primitives with AI-themed examples.",
    icon: ComponentIcon,
  },
]

export const registry: RegistryItem[] = [
  {
    slug: "agent",
    title: "Agent",
    description:
      "Live agent run card with model, status, current step, and tools.",
    category: "code",
    icon: RoboticIcon,
  },
  {
    slug: "artifact",
    title: "Artifact",
    description:
      "Framed artifact panel with a title, type badge, and copy/download actions.",
    category: "code",
    icon: CubeIcon,
  },
  {
    slug: "attachments",
    title: "Attachments",
    description:
      "Removable file chips for images, PDFs, and code attached to a prompt.",
    category: "ai",
    icon: Attachment01Icon,
  },
  {
    slug: "audio-player",
    title: "Audio Player",
    description:
      "Voice-note player with a waveform scrubber, speed control, and download.",
    category: "voice",
    icon: VolumeHighIcon,
    featured: false,
  },
  {
    slug: "audio-waveform",
    title: "Audio Waveform",
    description: "Waveform player with animated bars and seek-on-click.",
    category: "media",
    icon: WaveIcon,
    registryDependencies: ["button", "card"],
  },
  {
    slug: "chain-of-thought",
    title: "Chain of Thought",
    description:
      "Collapsible multi-step reasoning trail with statuses and search results.",
    category: "ai",
    icon: Brain02Icon,
    registryDependencies: ["collapsible"],
  },
  {
    slug: "chat-message",
    title: "Chat Message",
    description:
      "User and assistant message bubbles with avatars, timestamps, and streaming support.",
    category: "ai",
    icon: BubbleChatIcon,
    registryDependencies: ["avatar"],
    featured: false,
  },
  {
    slug: "checkpoint",
    title: "Checkpoint",
    description: "A labeled restore-point divider for rewinding a conversation.",
    category: "ai",
    icon: Location01Icon,
  },
  {
    slug: "citation-list",
    title: "Citation List",
    description:
      "Numbered source citations with favicons, titles, and snippets for RAG answers.",
    category: "ai",
    icon: QuoteUpIcon,
    registryDependencies: ["badge"],
  },
  {
    slug: "code-block",
    title: "Code Block",
    description:
      "Code surface with a filename tab, language badge, line numbers, and copy button.",
    category: "code",
    icon: SourceCodeIcon,
    registryDependencies: ["button"],
    featured: false,
  },
  {
    slug: "command-menu",
    title: "Command Menu",
    description:
      "⌘K-style command palette with grouped, keyboard-navigable actions.",
    category: "code",
    icon: CommandIcon,
    registryDependencies: ["command"],
  },
  {
    slug: "commit",
    title: "Commit",
    description:
      "Git commit card with message, author, short hash, and diff stats.",
    category: "code",
    icon: GitCommitIcon,
    registryDependencies: ["avatar"],
  },
  {
    slug: "confirmation",
    title: "Confirmation",
    description: "Approve/reject card for gating a tool call or risky action.",
    category: "ai",
    icon: CheckmarkSquare02Icon,
    registryDependencies: ["button"],
  },
  {
    slug: "context",
    title: "Context",
    description:
      "Radial gauge of context-window token usage with a per-segment legend.",
    category: "ai",
    icon: GaugeIcon,
  },
  {
    slug: "conversation",
    title: "Conversation",
    description:
      "Scrollable message thread with a floating scroll-to-bottom button.",
    category: "ai",
    icon: Message02Icon,
  },
  {
    slug: "diff-view",
    title: "Diff View",
    description:
      "Unified diff with added/removed lines, gutter markers, and a stat summary.",
    category: "code",
    icon: GitMergeIcon,
    registryDependencies: ["badge"],
  },
  {
    slug: "environment-variables",
    title: "Environment Variables",
    description: "Editable .env list with masked secrets, reveal, and copy.",
    category: "code",
    icon: Key01Icon,
  },
  {
    slug: "file-dropzone",
    title: "File Dropzone",
    description:
      "Drag-and-drop upload surface with per-file progress and status.",
    category: "media",
    icon: CloudUploadIcon,
    registryDependencies: ["progress"],
  },
  {
    slug: "file-tree",
    title: "File Tree",
    description:
      "Collapsible file explorer with folder/file icons and an active item.",
    category: "code",
    icon: Folder01Icon,
  },
  {
    slug: "image",
    title: "Image",
    description:
      "AI image frame with a loading state, AI badge, and hover actions.",
    category: "media",
    icon: Image01Icon,
  },
  {
    slug: "image-compare",
    title: "Image Compare",
    description:
      "Before/after slider for comparing two images with a draggable handle.",
    category: "media",
    icon: ArrowLeftRightIcon,
  },
  {
    slug: "image-gallery",
    title: "Image Gallery",
    description:
      "Responsive masonry gallery with hover overlays and a selectable lead image.",
    category: "media",
    icon: GalleryHorizontalIcon,
  },
  {
    slug: "image-generation-card",
    title: "Image Generation Card",
    description:
      "Generated-image result card with the prompt, variations, and quick actions.",
    category: "media",
    icon: ImageAdd01Icon,
    registryDependencies: ["badge", "button", "card"],
  },
  {
    slug: "inline-citation",
    title: "Inline Citation",
    description:
      "Inline numbered citation markers that reveal the source on hover.",
    category: "ai",
    icon: QuoteDownIcon,
  },
  {
    slug: "jsx-preview",
    title: "JSX Preview",
    description: "Preview / code toggle that renders a JSX snippet live.",
    category: "code",
    icon: CodeSquareIcon,
  },
  {
    slug: "media-player",
    title: "Media Player",
    description:
      "Compact audio/video transport with scrubber, time, and volume controls.",
    category: "media",
    icon: PlayIcon,
    registryDependencies: ["button", "card", "slider"],
    featured: false,
  },
  {
    slug: "message-actions",
    title: "Message Actions",
    description:
      "Copy, regenerate, and feedback toolbar that sits under an assistant reply.",
    category: "ai",
    icon: Comment01Icon,
    registryDependencies: ["button", "tooltip"],
  },
  {
    slug: "mic-selector",
    title: "Mic Selector",
    description: "Input device picker with a live microphone level meter.",
    category: "voice",
    icon: Mic01Icon,
  },
  {
    slug: "model-selector",
    title: "Model Selector",
    description:
      "Dropdown for switching between AI models, with provider badges and context sizes.",
    category: "ai",
    icon: AiBrain01Icon,
    registryDependencies: ["button", "dropdown-menu"],
  },
  {
    slug: "now-playing",
    title: "Now Playing",
    description:
      "Music widget with album art, marquee title, scrubber, and transport controls.",
    category: "media",
    icon: MusicNote03Icon,
    registryDependencies: ["button", "card", "slider"],
  },
  {
    slug: "open-in-chat",
    title: "Open in Chat",
    description: "Button that hands the current context off to a chat assistant.",
    category: "ai",
    icon: BubbleChatAddIcon,
    registryDependencies: ["button"],
  },
  {
    slug: "package-info",
    title: "Package Info",
    description:
      "npm package summary with version, downloads, license, and keywords.",
    category: "code",
    icon: PackageOpenIcon,
    registryDependencies: ["badge"],
  },
  {
    slug: "package-install",
    title: "Package Install",
    description:
      "Tabbed install command for npm, pnpm, yarn, and bun with one-click copy.",
    category: "code",
    icon: PackageIcon,
    registryDependencies: ["tabs", "button"],
  },
  {
    slug: "persona",
    title: "Persona",
    description:
      "Voice-agent persona card with avatar, traits, and a speaking pulse.",
    category: "voice",
    icon: AiUserIcon,
  },
  {
    slug: "plan",
    title: "Plan",
    description:
      "Agent task plan with done, active, and todo steps and a progress count.",
    category: "ai",
    icon: TaskDaily01Icon,
  },
  {
    slug: "prompt-input",
    title: "Prompt Input",
    description:
      "Auto-resizing composer with attachment, voice, model picker, and send controls.",
    category: "ai",
    icon: SentIcon,
    registryDependencies: ["button", "textarea"],
  },
  {
    slug: "prompt-suggestions",
    title: "Prompt Suggestions",
    description:
      "A grid of suggested starter prompts to kick off a conversation.",
    category: "ai",
    icon: SparklesIcon,
  },
  {
    slug: "pull-request-card",
    title: "Pull Request Card",
    description:
      "Pull-request summary with status, reviewers, checks, and additions/deletions.",
    category: "code",
    icon: GitPullRequestIcon,
    registryDependencies: ["avatar", "badge", "button", "card"],
  },
  {
    slug: "queue",
    title: "Queue",
    description: "Pending prompt queue with positions and one-click removal.",
    category: "ai",
    icon: Queue02Icon,
  },
  {
    slug: "reasoning-panel",
    title: "Reasoning Panel",
    description:
      "Collapsible chain-of-thought panel with a live duration timer.",
    category: "ai",
    icon: NeuralNetworkIcon,
    registryDependencies: ["collapsible"],
  },
  {
    slug: "sandbox",
    title: "Sandbox",
    description: "Runnable code panel with a Run button and console output.",
    category: "code",
    icon: CodeCircleIcon,
  },
  {
    slug: "schema-display",
    title: "Schema Display",
    description: "Field-by-field schema table with types and required badges.",
    category: "code",
    icon: Structure01Icon,
  },
  {
    slug: "shimmer",
    title: "Shimmer",
    description: "Animated shimmer for loading text and skeleton lines.",
    category: "ai",
    icon: Loading02Icon,
  },
  {
    slug: "snippet-card",
    title: "Snippet Card",
    description:
      "Shareable code snippet card with language badge, author, copy, and actions.",
    category: "code",
    icon: FileCodeIcon,
    registryDependencies: ["avatar", "badge", "button", "card"],
  },
  {
    slug: "sources",
    title: "Sources",
    description: "Collapsible list of the web sources cited in a RAG answer.",
    category: "ai",
    icon: Globe02Icon,
    registryDependencies: ["collapsible"],
  },
  {
    slug: "speech-input",
    title: "Speech Input",
    description: "Press-to-talk mic button with a live partial transcript.",
    category: "voice",
    icon: VoiceIcon,
  },
  {
    slug: "stack-trace",
    title: "Stack Trace",
    description:
      "Error stack viewer with highlighted app frames and copy-to-clipboard.",
    category: "code",
    icon: Bug01Icon,
  },
  {
    slug: "task",
    title: "Task",
    description:
      "Collapsible agent task showing the files and actions it touched.",
    category: "ai",
    icon: Task01Icon,
    registryDependencies: ["collapsible"],
  },
  {
    slug: "terminal",
    title: "Terminal",
    description:
      "Faux terminal that types out a sequence of commands and their output.",
    category: "code",
    icon: TerminalIcon,
  },
  {
    slug: "test-results",
    title: "Test Results",
    description:
      "Test run summary with pass/fail counts and inline failure messages.",
    category: "code",
    icon: TestTube01Icon,
  },
  {
    slug: "tool",
    title: "Tool",
    description:
      "Tool-call card with status, JSON parameters, and the returned result.",
    category: "ai",
    icon: Wrench01Icon,
    registryDependencies: ["collapsible"],
  },
  {
    slug: "transcription",
    title: "Transcription",
    description:
      "Live transcript with speaker labels and a moving word highlight.",
    category: "voice",
    icon: SpeechToTextIcon,
  },
  {
    slug: "typing-indicator",
    title: "Typing Indicator",
    description:
      "Animated three-dot indicator that shows when the assistant is thinking.",
    category: "ai",
    icon: Loading03Icon,
  },
  {
    slug: "loader",
    title: "Loader",
    description: "Multi-variant loading indicators including spinners, dots, waves, and text animations.",
    category: "ai",
    icon: LoaderPinwheelIcon,
    isNew: true,
  },
  {
    slug: "video-card",
    title: "Video Card",
    description:
      "Thumbnail card with duration pill, channel avatar, and view metadata.",
    category: "media",
    icon: VideoReplayIcon,
    registryDependencies: ["avatar", "badge"],
  },
  {
    slug: "voice-selector",
    title: "Voice Selector",
    description: "Grid of selectable TTS voices with sample playback.",
    category: "voice",
    icon: VoiceIdIcon,
  },
  {
    slug: "web-preview",
    title: "Web Preview",
    description: "Browser frame with a URL bar and a live site viewport.",
    category: "code",
    icon: BrowserIcon,
  },
  ...uiItems,
]

/**
 * Slugs that are small, atomic primitives (as opposed to fully composed
 * surfaces). These land in the "Components" collection; every other non-UI
 * item defaults to "Blocks".
 */
const componentSlugs = new Set<string>([

])


/**
 * The collection an item belongs to. An explicit `collection` on the item
 * always wins; otherwise it is derived: shadcn/ui primitives (category "ui")
 * are "ui", a curated set of atomic pieces are "components", and everything
 * else is a composed "block".
 */
export function getCollection(item: RegistryItem): Collection {
  if (item.collection) return item.collection
  if (item.category === "ui") return "ui"
  if (componentSlugs.has(item.slug)) return "components"
  return "blocks"
}

export const collections: {
  id: Collection
  label: string
}[] = [
  { id: "ui", label: "UI" },
  { id: "components", label: "Components" },
  { id: "blocks", label: "Blocks" },
]

export function getItem(slug: string): RegistryItem | undefined {
  return registry.find((item) => item.slug === slug)
}

export function getItemsByCategory(category: Category): RegistryItem[] {
  return registry.filter((item) => item.category === category)
}

export function getItemsByCollection(collection: Collection): RegistryItem[] {
  return registry.filter((item) => getCollection(item) === collection)
}

export function getFeaturedItems(): RegistryItem[] {
  return registry.filter((item) => item.featured)
}

export function getNewItems(): RegistryItem[] {
  return registry.filter((item) => item.isNew)
}

export const slugs = registry.map((item) => item.slug)
