import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/italoxs.png"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-900 dark:text-cyan-300">
          Italo Sales
        </span>
        <span className="truncate text-sm text-zinc-600 dark:text-cyan-500">
          italo.x.sales@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-cyan-600" />
      </Button>
    </div>
  )
}
