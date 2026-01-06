import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const batangas = localFont({
  src: "../fonts/Batangas Bold 700.otf",
  variable: "--font-batangas",
  display: "swap",
})

const siteUrl = "https://movidev.com.br"
const siteName = "movidev"
const siteTitle = "movidev — Soluções digitais com IA, ponta a ponta"
const siteDescription =
  "Criamos soluções digitais e automações com IA para empresas que querem tirar ideias do papel, ganhar eficiência e lançar produtos com velocidade e qualidade."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | movidev",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "desenvolvimento de software",
    "inteligência artificial",
    "IA",
    "produtos digitais",
    "automação",
    "SaaS",
    "aplicativo web",
  ],
  authors: [{ name: "movidev" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    siteName,
    description: siteDescription,
    locale: "pt_BR",
    images: [
      {
        url: "/icon-light-32x32.png",
        width: 1200,
        height: 630,
        alt: "movidev - produtos digitais com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/icon-light-32x32.png"],
  },
  icons: {
    icon: [
      { url: "/movidev.ico" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${batangas.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
