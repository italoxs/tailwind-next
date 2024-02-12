import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-300 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-600 px-3 py-2 shadow-sm focus-within:border-slate-600 focus-within:ring-4 focus-within:ring-violet-600"
      {...props}
    />
  )
}
