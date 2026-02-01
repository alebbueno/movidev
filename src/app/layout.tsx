import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"
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
  title: {
    default: "Movidev | Soluções digitais sob medida",
    template: "%s | Movidev",
  },
  description:
    "Desenvolvemos websites, sistemas sob medida e automações com IA para empresas que querem organizar processos, ganhar eficiência e escalar com tecnologia.",
  keywords: [
    "soluções digitais",
    "desenvolvimento de sistemas",
    "automação de processos",
    "criação de sites profissionais",
    "empresa de tecnologia",
  ],
  authors: [{ name: "Movidev" }],
  creator: "Movidev",
  metadataBase: new URL("https://www.movidev.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.movidev.com.br",
    siteName: "Movidev",
    title: "Movidev | Soluções digitais sob medida",
    description:
      "Websites, sistemas e automações com foco em performance, organização e crescimento empresarial.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" style={{ scrollPaddingTop: "100px" }}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${batangas.variable} antialiased`}>
        {children}
        <Script
          src="https://www.formulando.app/whatsapp-widget.js"
          data-workspace="198b8265-dcd7-4283-8bdc-aba7dbf8ef44"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
