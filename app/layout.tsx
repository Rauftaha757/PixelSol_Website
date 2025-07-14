import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "./components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PixelSolve | Digital Solutions that Scale",
  description:
    "PixelSolve is a futuristic tech company delivering cutting-edge solutions in app development, AI automation, SaaS, and web design.",
  keywords: "web development, app development, AI automation, UI/UX design, SaaS development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased cursor-none`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
