import {
  // categories
  AiChat02Icon,
  Image02Icon,
  SourceCodeIcon,
  // ai
  BubbleChatIcon,
  Robot01Icon,
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
  BoltIcon,
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
  AiChipIcon,
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
  // auth
  SquareLockPasswordIcon,
  UserAdd01Icon,
  PinCodeIcon,
  MagicWand01Icon,
  // brand
  PaintBoardIcon,
  Atom01Icon,
  Moon02Icon,
  Github01Icon,
  // portfolio
  UserSquareIcon,
  Rocket01Icon,
  Layers01Icon,
  Analytics01Icon,
  TimelineIcon,
  Chart01Icon,
  UserCircleIcon,
  Mail01Icon,
  Share08Icon,
  Download04Icon,
  Briefcase01Icon,
  RadioIcon,
  WorkflowSquare01Icon,
  News01Icon,
  Certificate01Icon,
  // backgrounds
  AiMagicIcon,
  CircleIcon,
  Sun03Icon,
  PaintBrush01Icon,
  Orbit01Icon,
  DashboardCircleIcon,
  ApertureIcon,
  FlashIcon,
  HexagonIcon,
  RippleIcon,
  MoreHorizontalIcon,
  GridViewIcon,
  PerspectiveIcon,
  StarsIcon,
  Target01Icon,
  FlashlightIcon,
  MatrixIcon,
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"

import { uiItems } from "@/lib/ui-items"

export type Category =
  | "models"
  | "ai"
  | "code"
  | "auth"
  | "media"
  | "code"
  | "voice"
  | "ui"
  | "brand"
  | "portfolio"
  | "backgrounds"

export type RegistryItem = {
  slug: string
  title: string
  description: string
  category: Category
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
    id: "models",
    label: "Models",
    description: "Building blocks for agentic AI interfaces.",
    icon: Robot01Icon,
  },
  {
    id: "ai",
    label: "Chat",
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
  {
    id: "brand",
    label: "Brand",
    description:
      "AIEllie's identity kit: the orb, mascot, logo lockup, and site-chrome buttons.",
    icon: PaintBoardIcon,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    description:
      "Sections for dev & web portfolios: hero, projects, timeline, skills, and contact.",
    icon: UserSquareIcon,
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    description:
      "Animated WebGL shader backdrops, orbs, and glowing frames for heroes and cards.",
    icon: AiMagicIcon,
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
    description:
      "A labeled restore-point divider for rewinding a conversation.",
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
    slug: "model-card",
    title: "Model Card",
    description:
      "Spec card for an AI model with capabilities, context, pricing, and a select action.",
    category: "models",
    icon: AiChipIcon,
    registryDependencies: ["badge", "button", "card"],
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    isNew: true,
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
    slug: "rate-limits",
    title: "Rate Limits",
    description: "Table of rate limits for different AI models.",
    category: "models",
    icon: BoltIcon,
    registryDependencies: ["badge", "label", "switch", "table"],
    isNew: true,
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
    description:
      "Button that hands the current context off to a chat assistant.",
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
    description:
      "Multi-variant loading indicators including spinners, dots, waves, and text animations.",
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
  // Auth
  {
    slug: "login-form",
    title: "Login Form",
    description:
      "Split-card login with email/password, social sign-in buttons, and a sign-up link.",
    category: "auth",
    icon: Login03Icon,
    registryDependencies: ["button", "card", "field", "input"],
    isNew: true,
  },
  {
    slug: "forgot-password-form",
    title: "Forgot Password Form",
    description:
      "Centered card that collects an email to send a password-reset link.",
    category: "auth",
    icon: SquareLockPasswordIcon,
    registryDependencies: ["button", "card", "field", "input"],
    isNew: true,
  },
  {
    slug: "signup-form",
    title: "Signup Form",
    description:
      "Split-card account signup with email, password + confirm, social buttons, and terms/privacy dialogs.",
    category: "auth",
    icon: UserAdd01Icon,
    registryDependencies: [
      "button",
      "card",
      "field",
      "input",
      "dialog",
      "scroll-area",
    ],
    isNew: true,
  },
  {
    slug: "magic-link-form",
    title: "Magic Link Form",
    description:
      "Passwordless sign-in card that emails a magic link, with Google and GitHub options.",
    category: "auth",
    icon: MagicWand01Icon,
    registryDependencies: ["button", "card", "field", "input"],
    isNew: true,
  },
  {
    slug: "reset-password-form",
    title: "Reset Password Form",
    description:
      "Centered card to choose and confirm a new password after a reset request.",
    category: "auth",
    icon: Key01Icon,
    registryDependencies: ["button", "card", "field", "input"],
    isNew: true,
  },
  {
    slug: "otp-form",
    title: "OTP Form",
    description:
      "Verification card with a grouped six-digit one-time-code input and resend link.",
    category: "auth",
    icon: PinCodeIcon,
    registryDependencies: ["button", "card", "field", "input-otp"],
    isNew: true,
  },
  // Brand
  {
    slug: "logo",
    title: "Logo",
    description:
      "The AIEllie brand lockup — the Ellie orb mark beside the wordmark and version.",
    category: "brand",
    icon: SparklesIcon,
    registryDependencies: ["ellie"],
    isNew: true,
  },
  {
    slug: "theme-switcher",
    title: "Theme Switcher",
    description:
      "Ghost icon button that flips between light and dark with next-themes.",
    category: "brand",
    icon: Moon02Icon,
    registryDependencies: ["button"],
    dependencies: [
      "next-themes",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
    isNew: true,
  },
  {
    slug: "github-button",
    title: "GitHub Button",
    description:
      "Tooltip-wrapped ghost icon button that links out to a GitHub repository.",
    category: "brand",
    icon: Github01Icon,
    registryDependencies: ["button", "tooltip"],
    isNew: true,
  },
  // Portfolio
  {
    slug: "portfolio-hero",
    title: "Portfolio Hero",
    description:
      "Intro header with avatar, role, location, an availability status, and CTAs.",
    category: "portfolio",
    icon: SparklesIcon,
    registryDependencies: ["avatar", "badge", "button", "card"],
    isNew: true,
  },
  {
    slug: "about-card",
    title: "About Card",
    description:
      "Bio card with a headline, paragraph, and a list of quick personal facts.",
    category: "portfolio",
    icon: UserCircleIcon,
    registryDependencies: ["badge", "card", "item", "separator"],
    isNew: true,
  },
  {
    slug: "project-card",
    title: "Project Card",
    description:
      "Featured-project card with a gradient cover, tech tags, stars, and live/repo links.",
    category: "portfolio",
    icon: Rocket01Icon,
    registryDependencies: ["badge", "button", "card", "tooltip"],
    isNew: true,
  },
  {
    slug: "project-gallery",
    title: "Project Gallery",
    description:
      "Responsive grid of project tiles with gradient covers and hover reveals.",
    category: "portfolio",
    icon: GalleryHorizontalIcon,
    registryDependencies: ["aspect-ratio", "badge"],
    isNew: true,
  },
  {
    slug: "tech-stack",
    title: "Tech Stack",
    description:
      "Grouped grid of the languages, frameworks, and tools you work with.",
    category: "portfolio",
    icon: Layers01Icon,
    registryDependencies: ["badge", "card"],
    isNew: true,
  },
  {
    slug: "skill-bars",
    title: "Skill Bars",
    description:
      "Labeled proficiency bars with animated gradient fills for each skill.",
    category: "portfolio",
    icon: Analytics01Icon,
    registryDependencies: ["card", "progress"],
    isNew: true,
  },
  {
    slug: "experience-timeline",
    title: "Experience Timeline",
    description:
      "Vertical work-history timeline with company, role, period, and a current badge.",
    category: "portfolio",
    icon: TimelineIcon,
    registryDependencies: ["badge", "card"],
    isNew: true,
  },
  {
    slug: "stats-row",
    title: "Stats Row",
    description:
      "Row of headline metrics — years, projects, clients — with gradient numbers.",
    category: "portfolio",
    icon: Chart01Icon,
    registryDependencies: ["card"],
    isNew: true,
  },
  {
    slug: "testimonial-card",
    title: "Testimonial Card",
    description:
      "Client quote card with a star rating, avatar, name, and title.",
    category: "portfolio",
    icon: QuoteUpIcon,
    registryDependencies: ["avatar", "card"],
    isNew: true,
  },
  {
    slug: "contact-cta",
    title: "Contact CTA",
    description:
      "Closing call-to-action with a mailto button and a copy-to-clipboard email.",
    category: "portfolio",
    icon: Mail01Icon,
    registryDependencies: ["button", "card", "tooltip"],
    isNew: true,
  },
  {
    slug: "social-links",
    title: "Social Links",
    description:
      "Row of icon buttons linking to GitHub, X, LinkedIn, Dribbble, and more.",
    category: "portfolio",
    icon: Share08Icon,
    registryDependencies: ["button", "tooltip"],
    isNew: true,
  },
  {
    slug: "resume-download",
    title: "Resume Download",
    description:
      "File-style card that downloads your CV with name, size, and updated date.",
    category: "portfolio",
    icon: Download04Icon,
    registryDependencies: ["button", "item"],
    isNew: true,
  },
  {
    slug: "github-contributions",
    title: "GitHub Contributions",
    description:
      "Contribution heatmap grid with intensity levels and a Less→More legend.",
    category: "portfolio",
    icon: Github01Icon,
    registryDependencies: ["badge", "card", "scroll-area"],
    isNew: true,
  },
  {
    slug: "service-card",
    title: "Service Card",
    description:
      "Offering card with an icon, feature checklist, starting price, and a link.",
    category: "portfolio",
    icon: Briefcase01Icon,
    registryDependencies: ["button", "card"],
    isNew: true,
  },
  {
    slug: "availability-badge",
    title: "Availability Badge",
    description:
      "Pulsing status pill that flips between available and fully-booked states.",
    category: "portfolio",
    icon: RadioIcon,
    registryDependencies: ["badge"],
    isNew: true,
  },
  {
    slug: "tech-marquee",
    title: "Tech Marquee",
    description:
      "Infinite auto-scrolling marquee of tech pills that pauses on hover.",
    category: "portfolio",
    icon: WorkflowSquare01Icon,
    registryDependencies: ["badge", "card"],
    isNew: true,
  },
  {
    slug: "blog-post-card",
    title: "Blog Post Card",
    description:
      "Article card with a gradient cover, tag, excerpt, date, and read time.",
    category: "portfolio",
    icon: News01Icon,
    registryDependencies: ["badge", "card"],
    isNew: true,
  },
  {
    slug: "certifications",
    title: "Certifications",
    description:
      "List of credentials with issuer, year, and an external link per item.",
    category: "portfolio",
    icon: Certificate01Icon,
    registryDependencies: ["card", "item"],
    isNew: true,
  },
  // Backgrounds
  {
    slug: "shader-orb",
    title: "Shader Orb",
    description:
      "A living, iridescent WebGL orb built on the Paper warp shader.",
    category: "backgrounds",
    icon: CircleIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "aurora-hero",
    title: "Aurora Hero",
    description:
      "Full-bleed animated aurora backdrop with an overlaid heading and scrim.",
    category: "backgrounds",
    icon: Sun03Icon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "mesh-gradient",
    title: "Mesh Gradient",
    description:
      "Slowly morphing multi-color mesh gradient panel for section backdrops.",
    category: "backgrounds",
    icon: PaintBrush01Icon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "dot-orbit",
    title: "Dot Orbit",
    description:
      "Field of orbiting dots that drift and pulse over a dark backdrop.",
    category: "backgrounds",
    icon: Orbit01Icon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "waves",
    title: "Waves",
    description: "Layered flowing wave bands rendered on the GPU.",
    category: "backgrounds",
    icon: WaveIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "swirl",
    title: "Swirl",
    description: "Hypnotic concentric swirl of brand colors with soft banding.",
    category: "backgrounds",
    icon: Loading03Icon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "metaballs",
    title: "Metaballs",
    description:
      "Gooey blobs that merge and split — a classic lava-lamp backdrop.",
    category: "backgrounds",
    icon: DashboardCircleIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "grain-gradient",
    title: "Grain Gradient",
    description:
      "Film-grain gradient that adds texture and depth to any section.",
    category: "backgrounds",
    icon: ApertureIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "neuro-noise",
    title: "Neuro Noise",
    description:
      "Organic neural-network noise field with front, mid, and back colors.",
    category: "backgrounds",
    icon: NeuralNetworkIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "god-rays",
    title: "God Rays",
    description:
      "Volumetric light rays blooming from a point — dramatic hero lighting.",
    category: "backgrounds",
    icon: FlashIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "voronoi",
    title: "Voronoi",
    description:
      "Glowing cellular voronoi tessellation that shifts and breathes.",
    category: "backgrounds",
    icon: HexagonIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "pulsing-border",
    title: "Pulsing Border",
    description:
      "Card wrapper with a living, glowing shader border around your content.",
    category: "backgrounds",
    icon: RippleIcon,
    dependencies: ["@paper-design/shaders-react"],
    isNew: true,
  },
  {
    slug: "particles",
    title: "Particles",
    description:
      "Mouse-reactive canvas particle field that drifts and parallaxes on hover.",
    category: "backgrounds",
    icon: Atom01Icon,
    isNew: true,
  },
  {
    slug: "flickering-grid",
    title: "Flickering Grid",
    description:
      "Canvas grid of squares that randomly flicker in and out — subtle and cheap.",
    category: "backgrounds",
    icon: MatrixIcon,
    isNew: true,
  },
  {
    slug: "meteors",
    title: "Meteors",
    description:
      "A shower of diagonal meteors with trailing tails, pure CSS and SSR-safe.",
    category: "backgrounds",
    icon: StarsIcon,
    isNew: true,
  },
  {
    slug: "retro-grid",
    title: "Retro Grid",
    description:
      "Animated perspective grid scrolling toward the horizon — synthwave vibes.",
    category: "backgrounds",
    icon: PerspectiveIcon,
    isNew: true,
  },
  {
    slug: "ripple",
    title: "Ripple",
    description: "Concentric, softly pulsing rings radiating from the center.",
    category: "backgrounds",
    icon: Target01Icon,
    isNew: true,
  },
  {
    slug: "spotlight",
    title: "Spotlight",
    description:
      "Soft, drifting light blooms for gentle hero ambience — pure CSS.",
    category: "backgrounds",
    icon: FlashlightIcon,
    isNew: true,
  },
  {
    slug: "dot-pattern",
    title: "Dot Pattern",
    description:
      "Theme-aware dotted background layer with an optional radial fade mask.",
    category: "backgrounds",
    icon: MoreHorizontalIcon,
    isNew: true,
  },
  {
    slug: "grid-pattern",
    title: "Grid Pattern",
    description:
      "Theme-aware grid-line background layer with an optional radial fade mask.",
    category: "backgrounds",
    icon: GridViewIcon,
    isNew: true,
  },
  {
    slug: "animated-bots",
    title: "Animated Bots",
    description:
      "Pixel-art robots that patrol across the bottom of a hero — pure SVG + CSS.",
    category: "backgrounds",
    icon: RoboticIcon,
    isNew: true,
  },
  ...uiItems,
]

export function getItem(slug: string): RegistryItem | undefined {
  return registry.find((item) => item.slug === slug)
}

export function getItemsByCategory(category: Category): RegistryItem[] {
  return registry.filter((item) => item.category === category)
}

export function getFeaturedItems(): RegistryItem[] {
  return registry.filter((item) => item.featured)
}

export function getNewItems(): RegistryItem[] {
  return registry.filter((item) => item.isNew)
}

export const slugs = registry.map((item) => item.slug)
