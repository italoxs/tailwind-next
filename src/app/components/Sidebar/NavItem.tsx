import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-cyan-50 dark:hover:bg-cyan-950"
    >
      <Icon className="h-5 w-5 text-zinc-500 dark:text-cyan-700" />
      <span className="font-medium text-zinc-700 dark:group-hover:text-cyan-500 group-hover:text-cyan-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 dark:group-hover:text-cyan-600" />
    </a>
  )
}
