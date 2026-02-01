import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { StrategicOffers } from "@/components/strategic-offers"
import { Work } from "@/components/work"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <StrategicOffers />
      <Work />
      <CtaSection />
      <Footer />
    </main>
  )
}