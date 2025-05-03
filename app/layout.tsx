import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TabTitleManager } from "@/components/TabTitleManager" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bella Torio",
  description: "Personal portfolio website showcasing my projects, skills, and experience in tech.",
    generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/portfolio_icon.png", sizes: "32x32", type: "image/png" },
      { url: "/portfolio_icon.png", sizes: "16x16", type: "image/png" }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TabTitleManager />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
