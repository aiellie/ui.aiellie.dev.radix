import { LogoIcon, LogoWordmark } from "@/registry/brand/logo";
import { Badge } from "@/components/ui/badge";

export function LogoSidebar() {
  return (
    <>
      <div
        data-logo-icon
        className="group flex aspect-square size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg group-data-[collapsible=icon]:size-8"
      >
        <LogoIcon className="!size-full" />
      </div>
      <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
        <LogoWordmark className="text-sm font-medium" />
        <Badge
          variant="outline"
          className="h-4 w-fit border-[#c4b5fd]/50 bg-[#ede9fe]/60 px-1.5 text-[10px] font-semibold tracking-wider text-[#5b4fc7] dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-300"
        >
          Design System
        </Badge>
      </div>
    </>
  );
}