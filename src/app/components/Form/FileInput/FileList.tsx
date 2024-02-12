'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/utils/format-bytes'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3 ">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200  dark:border-slate-600 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violt-600 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
              <UploadCloud className="size-4" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700 dark:text-cyan-300">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500 dark:text-cyan-500">
                  {formatBytes(file.size)}
                </span>
              </div>

              {/* progress bar */}
              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100  dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-violet-600 w-4/5 dark:bg-cyan-300" />
                </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-cyan-300">
                  80%
                </span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto p-2 hover:bg-zinc-100 dark:hover:bg-cyan-950 rounded-md"
            >
              <Trash2 className="h-5 w-5 text-zinc-500 dark:text-cyan-600" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
