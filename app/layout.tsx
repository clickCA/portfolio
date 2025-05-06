import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chanakorn Aramsak - Portfolio",
  description: "Full-stack developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and Node.js.",
  generator: 'v0.dev',
  metadataBase: new URL('https://chanakorn-portfolio.vercel.app'),
  openGraph: {
    title: "Chanakorn Aramsak - Full Stack Developer",
    description: "Full-stack developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and Node.js.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Chanakorn Aramsak"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanakorn Aramsak - Full Stack Developer",
    description: "Full-stack developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and Node.js.",
    images: ["/profile.jpg"],
    creator: "@chanakorn"
  },
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}