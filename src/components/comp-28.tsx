"use client";

import { Minus, Plus } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export default function Component() {
  return (
    <NumberField defaultValue={2048} minValue={0}>
      <div className="space-y-2">
        <Label className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Number input with plus/minus buttons
        </Label>
        <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-zinc-200 text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-zinc-950 data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-zinc-950/20 dark:border-zinc-800 dark:data-[focus-within]:border-zinc-300 dark:data-[focus-within]:ring-zinc-300/20">
          <Button
            slot="decrement"
            className="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-zinc-200 bg-white text-sm text-zinc-500/80 transition-shadow hover:bg-zinc-100 hover:text-zinc-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400/80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <Minus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
          <Input className="w-full grow bg-white px-3 py-2 text-center tabular-nums text-zinc-950 focus:outline-none dark:bg-zinc-950 dark:text-zinc-50" />
          <Button
            slot="increment"
            className="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-zinc-200 bg-white text-sm text-zinc-500/80 transition-shadow hover:bg-zinc-100 hover:text-zinc-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400/80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </Group>
      </div>
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400" role="region" aria-live="polite">
        Built with{""}
        <a
          className="underline hover:text-zinc-950 dark:hover:text-zinc-50"
          href="https://react-spectrum.adobe.com/react-aria/DateField.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </NumberField>
  );
}
