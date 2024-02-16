import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import Image from 'next/image'

export interface ProfileProps {}

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        width={100}
        height={100}
        src="https://github.com/italoxs.png"
        className="size-10 rounded-full "
        alt=""
        crossOrigin=""
      />
      <div className="flex flex-col">
        <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Italo Sales
        </span>
        <span className="block text-sm text-zinc-500 dark:text-zinc-400">
          italo.x.sales@hotmail.coom
        </span>
      </div>
      <Button variant="ghost" className="ml-auto">
        <LogOut className="size-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
