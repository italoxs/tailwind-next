'use client'
import { ChevronDown } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 dark:border-slate-600  px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 dark:data-[placeholder]:text-zinc-500 outline-none focus:border-slate-600 focus:ring-4 focus:ring-violet-600">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black dark:text-white"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="size-5 text-zinc-500 dark:text-cyan-300" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 shadow-sm rounded-lg border border-zinc-300 bg-white w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden dark:border-slate-700 dark:bg-cyan-600"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
