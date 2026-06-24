/**
 * Global site + registry configuration.
 *
 * `REGISTRY_URL` is the public origin where the built registry JSON files are
 * served from (`/r/<name>.json`). It is used to build the `npx shadcn add ...`
 * command and the "Open in v0" deep links. Override it with the
 * `NEXT_PUBLIC_REGISTRY_URL` environment variable when you deploy.
 */
export const siteConfig = {
  name: "aiellieui",
  title: "aiellieui",
  description:
    "A registry of AI, media, and coding components built with shadcn/ui. Copy, paste, or install with the CLI.",
  url: "https://ui.aiellie.dev",
}

export const REGISTRY_URL =
  process.env.NEXT_PUBLIC_REGISTRY_URL?.replace(/\/$/, "") ?? siteConfig.url

/** `npx shadcn@latest add https://.../r/<slug>.json` */
export function getInstallCommand(slug: string) {
  return `npx shadcn@latest add ${REGISTRY_URL}/r/${slug}.json`
}

/** v0 "Open in v0" deep link for a registry item. */
export function getV0Url(slug: string) {
  const url = `${REGISTRY_URL}/r/${slug}.json`
  return `https://v0.dev/chat/api/open?url=${encodeURIComponent(url)}`
}
