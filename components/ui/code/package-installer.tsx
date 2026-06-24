"use client";

import { PackageIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { HTMLAttributes } from "react";
import { useMemo, useState } from "react";
import type { BundledLanguage } from "shiki";

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockCopyButton,
} from "@/components/ui/code/code-block";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PACKAGE_MANAGERS = ["npm", "pnpm", "yarn", "bun"] as const;

export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

const toPackageList = (packages: string | string[]): string =>
  (Array.isArray(packages) ? packages.join(" ") : packages).trim();

/**
 * Build an `install` command for the given package manager.
 *
 * @example getInstallCommand("pnpm", "zod clsx", true) // "pnpm add -D zod clsx"
 */
export function getInstallCommand(
  manager: PackageManager,
  packages: string | string[],
  dev = false,
): string {
  const list = toPackageList(packages);

  switch (manager) {
    case "npm":
      return `npm install ${dev ? "-D " : ""}${list}`;
    case "pnpm":
      return `pnpm add ${dev ? "-D " : ""}${list}`;
    case "yarn":
      return `yarn add ${dev ? "-D " : ""}${list}`;
    case "bun":
      return `bun add ${dev ? "-d " : ""}${list}`;
  }
}

/**
 * Build an `execute` command (npx / dlx / bunx) for running a CLI binary,
 * e.g. `shadcn@latest add button`.
 *
 * @example getExecuteCommand("pnpm", "shadcn@latest add button") // "pnpm dlx shadcn@latest add button"
 */
export function getExecuteCommand(
  manager: PackageManager,
  command: string,
): string {
  const bin = command.trim();

  switch (manager) {
    case "npm":
      return `npx ${bin}`;
    case "pnpm":
      return `pnpm dlx ${bin}`;
    case "yarn":
      return `yarn dlx ${bin}`;
    case "bun":
      return `bunx ${bin}`;
  }
}

export type PackageInstallerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  /** Package(s) to install, e.g. `"zod clsx"` or `["zod", "clsx"]`. */
  packages?: string | string[];
  /** Install as a dev dependency (`-D`). Only applies to `packages`. */
  dev?: boolean;
  /**
   * Run a binary via npx / dlx / bunx instead of installing, e.g.
   * `"shadcn@latest add button"`. Takes precedence over `packages`.
   */
  command?: string;
  /**
   * Fully override the rendered command per package manager. Useful for
   * non-standard invocations. Takes precedence over `command`/`packages`.
   */
  commands?: Partial<Record<PackageManager, string>>;
  /** Which package managers to show, in order. Defaults to all four. */
  managers?: readonly PackageManager[];
  /** Package manager selected on first render. Defaults to the first manager. */
  defaultManager?: PackageManager;
};

/**
 * Tabbed install snippet with npm / pnpm / yarn / bun variants and a
 * copy-to-clipboard button, built on top of `Tabs` and `CodeBlock`.
 */
export function PackageInstaller({
  packages,
  dev = false,
  command,
  commands,
  managers = PACKAGE_MANAGERS,
  defaultManager,
  className,
  ...props
}: PackageInstallerProps) {
  const list = useMemo(() => [...managers], [managers]);

  const resolved = useMemo(() => {
    const entries = {} as Record<PackageManager, string>;
    for (const manager of list) {
      if (commands?.[manager] != null) {
        entries[manager] = commands[manager] as string;
      } else if (command != null) {
        entries[manager] = getExecuteCommand(manager, command);
      } else if (packages != null) {
        entries[manager] = getInstallCommand(manager, packages, dev);
      } else {
        entries[manager] = "";
      }
    }
    return entries;
  }, [list, commands, command, packages, dev]);

  const initial = defaultManager ?? list[0];
  const [manager, setManager] = useState<PackageManager>(initial);

  const active = list.includes(manager) ? manager : initial;

  return (
    <Tabs
      value={active}
      onValueChange={(value) => setManager(value as PackageManager)}
    >
      <CodeBlock
        code={resolved[active]}
        language={"bash" as BundledLanguage}
        className={className}
        {...props}
      >
        <div className="flex items-center justify-between gap-2 border-b bg-muted/50 p-1.5">
          <div className="flex items-center gap-1.5">
            <HugeiconsIcon
              icon={PackageIcon}
              strokeWidth={2}
              className="ml-1 size-3.5 shrink-0 text-muted-foreground"
            />
          <TabsList className="h-7 bg-transparent">
            {list.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="px-2.5 font-mono text-xs data-[state=active]:font-bold data-[state=active]:text-primary"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          </div>
          <CodeBlockActions>
            <CodeBlockCopyButton className="size-7" />
          </CodeBlockActions>
        </div>
      </CodeBlock>
    </Tabs>
  );
}
