import { Bold, Italic, Link, ListOrdered, Mail } from 'lucide-react'
import { SettingsTabs } from './components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '@/app/components/Input'
import * as FileInput from '@/app/components/Form/FileInput'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { TextArea } from './components/Textarea'
import { Button } from './components/Button'

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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
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

            <Select placeholder="Selecet a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          {/* Timezone */}
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-cyan-500"
            >
              Timezone
            </label>
            <Select placeholder="Selecet a timezone...">
              <SelectItem value="brazil" text="America São Paulo (UTC-03:00)" />
              <SelectItem
                value="pacific"
                text="Pacific Standart Time (UTC-08:00)"
              />
            </Select>
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
            <div className="spyce-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold
                      className="h-4 w-4 text-zinc-500 dark:text-cyan-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic
                      className="h-4 w-4 text-zinc-500 dark:text-cyan-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link
                      className="h-4 w-4 text-zinc-500 dark:text-cyan-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500 dark:text-cyan-600"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Merlbourn, Australia. I specialist in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
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
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          {/* Button Cancel/View */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
