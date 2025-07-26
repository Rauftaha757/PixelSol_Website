import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'PixelSolve Homepage',
  description: 'A working Next.js 14 App Router homepage',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
