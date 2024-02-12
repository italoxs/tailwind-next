import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function TextArea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 dark:bg-slate-900 dark:border-slate-600 px-3 py-2 shadow-sm outline-none focus:border-slate-600 focus:ring-4 focus:ring-violet-600"
      {...props}
    />
  )
}
