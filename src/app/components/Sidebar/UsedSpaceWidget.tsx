export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-slate-50 dark:bg-cyan-950 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-slate-700 dark:text-cyan-300">
          Used space
        </span>
        <p className="text-sm/5 text-slate-500 dark:text-cyan-500">
          Your team has used 80% of yout available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-slate-100 dark:bg-cyan-700">
        <div className="h-2 w-4/5 rounded-full bg-slate-600 dark:bg-cyan-300"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-slate-500 dark:text-cyan-700 dark:hover:text-cyan-300"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-slate-700 dark:text-cyan-400 dark:hover:text-cyan-200"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
