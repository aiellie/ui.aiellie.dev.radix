# aiellieui

A **shadcn component registry** of AI, media, and coding components — built with
shadcn/ui (`radix-nova` style), Tailwind v4, hugeicons, and Next.js 16.

Every component ships with:

- an **Open in v0** button,
- a one-line **`npx shadcn add`** install command, and
- a **Preview / Code** toggle viewer.

The browsable site lives at `/`, with a sidebar grouping all 24 components by
category and a detail page per component at `/c/<slug>`.

## Categories

| Category | Components |
| --- | --- |
| **AI Chat** | chat-message, prompt-input, typing-indicator, model-selector, prompt-suggestions, reasoning-panel, message-actions, citation-list |
| **Media** | media-player, audio-waveform, image-gallery, video-card, image-generation-card, file-dropzone, now-playing, image-compare |
| **Code** | code-block, terminal, diff-view, file-tree, command-menu, pull-request-card, package-install, snippet-card |

## Project layout

```
registry/<category>/<slug>.tsx   # distributable component sources
registry.json                    # registry manifest (shadcn build input)
public/r/<slug>.json             # built registry items (npx shadcn add target)
lib/registry.ts                  # UI metadata: titles, icons, categories, deps
components/registry/             # site chrome (preview viewer, v0 + npx buttons)
app/c/[slug]/page.tsx            # per-component showcase route
```

## Develop

```bash
pnpm install
pnpm dev
```

## Build the registry

After editing anything under `registry/` or `registry.json`, regenerate the
installable JSON files:

```bash
pnpm registry:build      # runs `shadcn build` → writes public/r/*.json
```

## Install a component (consumer side)

```bash
npx shadcn@latest add https://ui.aiellie.dev/r/chat-message.json
```

> The install + "Open in v0" URLs are derived from `NEXT_PUBLIC_REGISTRY_URL`
> (defaults to `https://ui.aiellie.dev`). Set it to your deployment origin so the
> CLI and v0 can fetch the registry JSON.

## Scaffolded with

```bash
pnpm dlx shadcn@latest init --preset b37aICLsQ --template next --rtl --pointer
```
