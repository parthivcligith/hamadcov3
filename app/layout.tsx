import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import IslandNavbar from "@/components/island-navbar"
import Preloader from "@/components/preloader"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Hamadco - Global Pharmaceutical Exports | Trusted Export Services",
  description:
    "Leading pharmaceutical exports company specializing in pharmaceutical products, medical supplies, and healthcare equipment. Reliable export solutions with global compliance and quality assurance.",
  keywords: [
    "pharmaceutical exports",
    "global trade",
    "export services",
    "medical supplies export",
    "healthcare exports",
    "international business",
    "export company India",
  ],
  authors: [{ name: "Hamadco" }],
  creator: "Hamadco",
  publisher: "Hamadco",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Hamadco - Global Pharmaceutical Exports | Trusted Export Services",
    description:
      "Leading pharmaceutical exports company specializing in pharmaceutical products, medical supplies, and healthcare equipment. Reliable export solutions with global compliance and quality assurance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamadco - Global Pharmaceutical Exports | Trusted Export Services",
    description:
      "Leading pharmaceutical exports company specializing in pharmaceutical products, medical supplies, and healthcare equipment. Reliable export solutions with global compliance and quality assurance.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`font-sans ${inter.className} antialiased`}>
        <Preloader />
        <Suspense fallback={<div>Loading...</div>}>
          <IslandNavbar showLogo={true} />
          {children}
        </Suspense>
        <SiteFooter />
      </body>
    </html>
  )
}
