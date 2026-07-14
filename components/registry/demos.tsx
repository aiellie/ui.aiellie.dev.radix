"use client"

import * as React from "react"

import { ChatMessage } from "@/registry/ai/chat-message"
import { PromptInput } from "@/registry/ai/prompt-input"
import { TypingIndicator } from "@/registry/ai/typing-indicator"
import { ModelSelector } from "@/registry/ai/model-selector"
import { PromptSuggestions } from "@/registry/ai/prompt-suggestions"
import { ReasoningPanel } from "@/registry/ai/reasoning-panel"
import { MessageActions } from "@/registry/ai/message-actions"
import { CitationList } from "@/registry/ai/citation-list"

import { MediaPlayer } from "@/registry/media/media-player"
import { AudioWaveform } from "@/registry/media/audio-waveform"
import { ImageGallery } from "@/registry/media/image-gallery"
import { VideoCard } from "@/registry/media/video-card"
import { ImageGenerationCard } from "@/registry/media/image-generation-card"
import { FileDropzone } from "@/registry/media/file-dropzone"
import { NowPlaying } from "@/registry/media/now-playing"
import { ImageCompare } from "@/registry/media/image-compare"

import { CodeBlockExample } from "@/registry/code/code-block"
import { Terminal } from "@/registry/code/terminal"
import { DiffView } from "@/registry/code/diff-view"
import { FileTree } from "@/registry/code/file-tree"
import { CommandMenu } from "@/registry/code/command-menu"
import { PullRequestCard } from "@/registry/code/pull-request-card"
import { PackageInstall } from "@/registry/code/package-install"
import { SnippetCard } from "@/registry/code/snippet-card"

// AI (extended)
import { Attachments } from "@/registry/ai/attachments"
import { ChainOfThought } from "@/registry/ai/chain-of-thought"
import { Checkpoint } from "@/registry/ai/checkpoint"
import { Confirmation } from "@/registry/ai/confirmation"
import { ContextExample } from "@/registry/ai/context"
import { Conversation } from "@/registry/ai/conversation"
import { InlineCitation } from "@/registry/ai/inline-citation"
import { Plan } from "@/registry/ai/plan"
import { Queue } from "@/registry/ai/queue"
import { Shimmer } from "@/registry/ai/shimmer"
import { Sources } from "@/registry/ai/sources"
import { Task } from "@/registry/ai/task"
import { Tool } from "@/registry/ai/tool"
import { OpenInChat } from "@/registry/ai/open-in-chat"
import LoaderDemo from "@/registry/ai/loader"

// Media (extended)
import { Image as GeneratedImage } from "@/registry/media/image"

// Code (extended)
import { Agent } from "@/registry/code/agent"
import { Artifact } from "@/registry/code/artifact"
import { Commit } from "@/registry/code/commit"
import { EnvironmentVariables } from "@/registry/code/environment-variables"
import { JsxPreview } from "@/registry/code/jsx-preview"
import { PackageInfo } from "@/registry/code/package-info"
import { Sandbox } from "@/registry/code/sandbox"
import { SchemaDisplay } from "@/registry/code/schema-display"
import { StackTrace } from "@/registry/code/stack-trace"
import { TestResults } from "@/registry/code/test-results"
import { WebPreview } from "@/registry/code/web-preview"

// Voice
import { AudioPlayer } from "@/registry/voice/audio-player"
import { MicSelector } from "@/registry/voice/mic-selector"
import { Persona } from "@/registry/voice/persona"
import { SpeechInput } from "@/registry/voice/speech-input"
import { Transcription } from "@/registry/voice/transcription"
import { VoiceSelector } from "@/registry/voice/voice-selector"

// Auth
import { LoginForm } from "@/registry/auth/login-form"
import { ForgotPasswordForm } from "@/registry/auth/forgot-password-form"
import { SignupForm } from "@/registry/auth/signup-form"
import { MagicLinkForm } from "@/registry/auth/magic-link-form"
import { ResetPasswordForm } from "@/registry/auth/reset-password-form"
import { OtpForm } from "@/registry/auth/otp-form"

// Brand

import { Logo } from "@/registry/brand/logo"
import { ThemeSwitcher } from "@/registry/brand/theme-switcher"
import { GithubButton } from "@/registry/brand/github-button"

// Portfolio
import { PortfolioHero } from "@/registry/portfolio/portfolio-hero"
import { AboutCard } from "@/registry/portfolio/about-card"
import { ProjectCard } from "@/registry/portfolio/project-card"
import { ProjectGallery } from "@/registry/portfolio/project-gallery"
import { TechStack } from "@/registry/portfolio/tech-stack"
import { SkillBars } from "@/registry/portfolio/skill-bars"
import { ExperienceTimeline } from "@/registry/portfolio/experience-timeline"
import { StatsRow } from "@/registry/portfolio/stats-row"
import { TestimonialCard } from "@/registry/portfolio/testimonial-card"
import { ContactCta } from "@/registry/portfolio/contact-cta"
import { SocialLinks } from "@/registry/portfolio/social-links"
import { ResumeDownload } from "@/registry/portfolio/resume-download"
import { GithubContributions } from "@/registry/portfolio/github-contributions"
import { ServiceCard } from "@/registry/portfolio/service-card"
import { AvailabilityBadge } from "@/registry/portfolio/availability-badge"
import { TechMarquee } from "@/registry/portfolio/tech-marquee"
import { BlogPostCard } from "@/registry/portfolio/blog-post-card"
import { Certifications } from "@/registry/portfolio/certifications"

// Backgrounds
import { Orb as ShaderOrb } from "@/registry/backgrounds/shader-orb"
import { AuroraHero } from "@/registry/backgrounds/aurora-hero"
import { MeshGradientBackground } from "@/registry/backgrounds/mesh-gradient"
import { DotOrbitBackground } from "@/registry/backgrounds/dot-orbit"
import { WavesBackground } from "@/registry/backgrounds/waves"
import { SwirlBackground } from "@/registry/backgrounds/swirl"
import { MetaballsBackground } from "@/registry/backgrounds/metaballs"
import { GrainGradientBackground } from "@/registry/backgrounds/grain-gradient"
import { NeuroNoiseBackground } from "@/registry/backgrounds/neuro-noise"
import { GodRaysBackground } from "@/registry/backgrounds/god-rays"
import { VoronoiBackground } from "@/registry/backgrounds/voronoi"
import { PulsingBorderCard } from "@/registry/backgrounds/pulsing-border"
import { Particles } from "@/registry/backgrounds/particles"
import { FlickeringGrid } from "@/registry/backgrounds/flickering-grid"
import { Meteors } from "@/registry/backgrounds/meteors"
import { RetroGrid } from "@/registry/backgrounds/retro-grid"
import { Ripple } from "@/registry/backgrounds/ripple"
import { Spotlight } from "@/registry/backgrounds/spotlight"
import { DotPattern } from "@/registry/backgrounds/dot-pattern"
import { GridPattern } from "@/registry/backgrounds/grid-pattern"
import { AnimatedBots } from "@/registry/backgrounds/animated-bots"

export const demos: Record<string, React.ReactNode> = {
  agent: <Agent />,
  artifact: <Artifact />,
  attachments: (
    <div className="w-full max-w-md">
      <Attachments />
    </div>
  ),
  "audio-player": <AudioPlayer />,
  "audio-waveform": <AudioWaveform />,
  "chain-of-thought": (
    <div className="w-full max-w-md">
      <ChainOfThought />
    </div>
  ),
  "chat-message": (
    <div className="flex w-full max-w-md flex-col gap-4">
      <ChatMessage role="user" timestamp="2:14 PM">
        How do I center a div with Tailwind?
      </ChatMessage>
      <ChatMessage role="assistant" timestamp="2:14 PM">
        Wrap it in a flex container and use{" "}
        <code className="rounded bg-background/40 px-1 py-0.5 text-xs">
          place-items-center
        </code>
        . Want the grid version too?
      </ChatMessage>
    </div>
  ),
  checkpoint: (
    <div className="w-full max-w-md">
      <Checkpoint />
    </div>
  ),
  "citation-list": (
    <div className="w-full max-w-xl">
      <CitationList />
    </div>
  ),
  "code-block": <CodeBlockExample />,
  "command-menu": <CommandMenu />,
  commit: <Commit />,
  confirmation: <Confirmation />,
  context: <ContextExample />,
  conversation: <Conversation />,
  "diff-view": <DiffView />,
  "environment-variables": <EnvironmentVariables />,
  "file-dropzone": <FileDropzone />,
  "file-tree": <FileTree />,
  image: <GeneratedImage />,
  "image-compare": <ImageCompare />,
  "image-gallery": <ImageGallery />,
  "image-generation-card": <ImageGenerationCard />,
  "inline-citation": (
    <div className="max-w-md">
      <InlineCitation />
    </div>
  ),
  "jsx-preview": <JsxPreview />,
  loader: (
    <div className="w-full overflow-auto">
      <LoaderDemo />
    </div>
  ),
  "media-player": <MediaPlayer />,
  "message-actions": (
    <MessageActions value="Wrap it in a flex container and use place-items-center." />
  ),
  "mic-selector": <MicSelector />,
  "model-selector": <ModelSelector />,
  "now-playing": <NowPlaying />,
  "open-in-chat": <OpenInChat />,
  "package-info": <PackageInfo />,
  "package-install": <PackageInstall />,
  persona: <Persona />,
  plan: <Plan />,
  "prompt-input": (
    <div className="w-full max-w-xl">
      <PromptInput />
    </div>
  ),
  "prompt-suggestions": (
    <div className="w-full max-w-xl">
      <PromptSuggestions />
    </div>
  ),
  "pull-request-card": <PullRequestCard />,
  queue: <Queue />,
  "reasoning-panel": (
    <div className="w-full max-w-md">
      <ReasoningPanel defaultOpen />
    </div>
  ),
  sandbox: <Sandbox />,
  "schema-display": <SchemaDisplay />,
  shimmer: (
    <div className="flex flex-col items-center gap-4">
      <Shimmer />
      <Shimmer lines={3} />
    </div>
  ),
  "snippet-card": <SnippetCard />,
  sources: <Sources defaultOpen />,
  "speech-input": <SpeechInput />,
  "stack-trace": <StackTrace />,
  task: <Task />,
  terminal: <Terminal />,
  "test-results": <TestResults />,
  tool: <Tool />,
  transcription: <Transcription />,
  "typing-indicator": <TypingIndicator label="Assistant is thinking…" />,
  "video-card": <VideoCard />,
  "voice-selector": <VoiceSelector />,
  "web-preview": <WebPreview />,

  // Auth
  "login-form": (
    <div className="w-full max-w-3xl">
      <LoginForm />
    </div>
  ),
  "forgot-password-form": (
    <div className="w-full max-w-sm">
      <ForgotPasswordForm />
    </div>
  ),
  "signup-form": (
    <div className="w-full max-w-3xl">
      <SignupForm />
    </div>
  ),
  "magic-link-form": (
    <div className="w-full max-w-sm">
      <MagicLinkForm />
    </div>
  ),
  "reset-password-form": (
    <div className="w-full max-w-sm">
      <ResetPasswordForm />
    </div>
  ),
  "otp-form": (
    <div className="w-full max-w-sm">
      <OtpForm />
    </div>
  ),

  // Brand
  logo: <Logo />,
  "theme-switcher": <ThemeSwitcher />,
  "github-button": <GithubButton />,

  // Portfolio
  "portfolio-hero": <PortfolioHero />,
  "about-card": <AboutCard />,
  "project-card": <ProjectCard />,
  "project-gallery": <ProjectGallery />,
  "tech-stack": <TechStack />,
  "skill-bars": <SkillBars />,
  "experience-timeline": <ExperienceTimeline />,
  "stats-row": <StatsRow />,
  "testimonial-card": <TestimonialCard />,
  "contact-cta": <ContactCta />,
  "social-links": <SocialLinks />,
  "resume-download": <ResumeDownload />,
  "github-contributions": <GithubContributions />,
  "service-card": <ServiceCard />,
  "availability-badge": <AvailabilityBadge />,
  "tech-marquee": <TechMarquee />,
  "blog-post-card": <BlogPostCard />,
  certifications: <Certifications />,

  // Backgrounds
  "shader-orb": <ShaderOrb />,
  "aurora-hero": (
    <div className="w-full max-w-2xl">
      <AuroraHero />
    </div>
  ),
  "mesh-gradient": (
    <div className="w-full max-w-2xl">
      <MeshGradientBackground />
    </div>
  ),
  "dot-orbit": (
    <div className="w-full max-w-2xl">
      <DotOrbitBackground />
    </div>
  ),
  waves: (
    <div className="w-full max-w-2xl">
      <WavesBackground />
    </div>
  ),
  swirl: (
    <div className="w-full max-w-2xl">
      <SwirlBackground />
    </div>
  ),
  metaballs: (
    <div className="w-full max-w-2xl">
      <MetaballsBackground />
    </div>
  ),
  "grain-gradient": (
    <div className="w-full max-w-2xl">
      <GrainGradientBackground />
    </div>
  ),
  "neuro-noise": (
    <div className="w-full max-w-2xl">
      <NeuroNoiseBackground />
    </div>
  ),
  "god-rays": (
    <div className="w-full max-w-2xl">
      <GodRaysBackground />
    </div>
  ),
  voronoi: (
    <div className="w-full max-w-2xl">
      <VoronoiBackground />
    </div>
  ),
  "pulsing-border": <PulsingBorderCard />,
  particles: (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-neutral-950">
      <Particles className="absolute inset-0" quantity={140} color="#c4b5fd" />
      <span className="relative text-lg font-semibold tracking-tight text-white">
        Move your cursor
      </span>
    </div>
  ),
  "flickering-grid": (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-neutral-950">
      <FlickeringGrid className="absolute inset-0" />
      <span className="relative text-lg font-semibold tracking-tight text-white">
        Flickering Grid
      </span>
    </div>
  ),
  meteors: (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-neutral-950">
      <Meteors number={24} />
      <span className="relative text-lg font-semibold tracking-tight text-white">
        Meteors
      </span>
    </div>
  ),
  "retro-grid": (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-neutral-950">
      <RetroGrid />
      <span className="relative text-lg font-semibold tracking-tight text-white">
        Retro Grid
      </span>
    </div>
  ),
  ripple: (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-neutral-950">
      <Ripple />
      <span className="relative text-lg font-semibold tracking-tight text-white">
        Ripple
      </span>
    </div>
  ),
  spotlight: (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-neutral-950">
      <Spotlight />
      <span className="relative text-lg font-semibold tracking-tight text-white">
        Spotlight
      </span>
    </div>
  ),
  "dot-pattern": (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-background">
      <DotPattern />
      <span className="relative text-lg font-semibold tracking-tight">
        Dot Pattern
      </span>
    </div>
  ),
  "grid-pattern": (
    <div className="relative flex h-64 w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl border bg-background">
      <GridPattern />
      <span className="relative text-lg font-semibold tracking-tight">
        Grid Pattern
      </span>
    </div>
  ),
  "animated-bots": (
    <div className="relative flex h-64 w-full max-w-2xl items-end justify-center overflow-hidden rounded-2xl border bg-background text-foreground/80">
      <GridPattern className="text-foreground/[0.07]" />
      <span className="relative mb-16 text-lg font-semibold tracking-tight">
        Animated Bots
      </span>
      <AnimatedBots />
    </div>
  ),
}
