import {
  createHighlighterCore,
  type HighlighterCore,
} from "shiki/core"
import { createOnigurumaEngine } from "shiki/engine/oniguruma"

/**
 * Server-only Shiki highlighter. A single highlighter instance is reused across
 * requests (and across `generateStaticParams` builds) so we only pay the
 * grammar/theme load cost once.
 */
let highlighterPromise: Promise<HighlighterCore> | null = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [
        import("shiki/themes/github-light-default.mjs"),
        import("shiki/themes/github-dark-default.mjs"),
      ],
      langs: [
        import("shiki/langs/tsx.mjs"),
        import("shiki/langs/typescript.mjs"),
        import("shiki/langs/bash.mjs"),
        import("shiki/langs/json.mjs"),
        import("shiki/langs/css.mjs"),
      ],
      engine: createOnigurumaEngine(import("shiki/wasm")),
    })
  }
  return highlighterPromise
}

const SUPPORTED_LANGS = new Set([
  "tsx",
  "typescript",
  "ts",
  "bash",
  "sh",
  "shell",
  "json",
  "css",
])

/**
 * Highlights `code` into themed HTML. Emits both light and dark themes via CSS
 * variables (`--shiki-light` / `--shiki-dark`) so it follows the active theme.
 */
export async function highlightCode(code: string, lang = "tsx") {
  const highlighter = await getHighlighter()
  const resolved = SUPPORTED_LANGS.has(lang) ? lang : "tsx"

  return highlighter.codeToHtml(code, {
    lang: resolved,
    themes: {
      light: "github-light-default",
      dark: "github-dark-default",
    },
    defaultColor: false,
  })
}
