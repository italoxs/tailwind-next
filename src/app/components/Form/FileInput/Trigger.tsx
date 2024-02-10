'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 dark:border-slate-600 px-6 py-4 text-center text-zinc-500 dark:text-cyan-300 shadow-sm hover:border-violet-200 hover:bg-violet-25 dark:hover:border-slate-600 dark:hover:bg-slate-50 dark:hover:text-cyan-600"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 dark:border-cyan-800 dark:bg-cyan-950 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:group-hover:border-cyan-300 dark:group-hover:bg-cyan-900">
        <UploadCloud className="size-5 text-zinc-600 dark:text-cyan-600 group-hover:text-cyan-300" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 dark:text-slate-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}