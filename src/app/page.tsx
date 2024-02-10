import { Mail } from 'lucide-react'
import { SettingsTabs } from './components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '@/app/components/Input'
import * as FileInput from '@/app/components/Form/FileInput'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-cyan-500">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-600">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-cyan-500">
              Personal info
            </h2>
            <span className="text-sm text-zin-500 dark:text-cyan-700">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border px-4 py-2 text-sm font-semibold shadown-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-slate-700 dark:text-white dark:hover:bg-cyan-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadown-sm bg-slate-600 text-white hover:bg-slate-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-cyan-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex flex-col w-ful gap-5 divide-y divide-zinc-600"
        >
          {/* Name */}
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Italo" />
              </InputRoot>
              <InputRoot>
                <InputControl id="lastName" defaultValue="Sales" />
              </InputRoot>
            </div>
          </div>

          {/* Email address */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500 dark:text-cyan-900" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="italo.x.sales@hotmail.com"
              />
            </InputRoot>
          </div>

          {/* Your photo */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Your photo
              <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-cyan-700 block">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* Role */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="Developer" />
            </InputRoot>
          </div>

          {/* Country */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Country
            </label>
            <InputRoot>
              <InputControl id="country" defaultValue="Brasil" />
            </InputRoot>
          </div>

          {/* Timezone */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Timezone
            </label>
            <InputRoot>
              <InputControl id="timezone" defaultValue="UTC" />
            </InputRoot>
          </div>

          {/* Bio */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Bio
              <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-cyan-700 block">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>

          {/* Portfolio projects */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Portfolio projects
              <span className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-cyan-700 block">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          {/* Button Cancel/View */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border px-4 py-2 text-sm font-semibold shadown-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-slate-700 dark:text-white dark:hover:bg-cyan-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadown-sm bg-slate-600 text-white hover:bg-slate-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-cyan-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
