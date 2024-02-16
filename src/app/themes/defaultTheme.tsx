// app/providers.jsx

'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export function Providers({ children }: React.FC<ThemeProviderProps>) {
  return <ThemeProvider>{children}</ThemeProvider>
}
