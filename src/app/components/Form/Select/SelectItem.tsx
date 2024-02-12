'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelecetItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelecetItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none rounded-lg data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-cyan-600"
      {...props}
    >
      <Select.ItemText className="text-white">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="size-4 text-violet-500 dark:text-slate-900" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
