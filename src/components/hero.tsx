"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Layers, Boxes } from "lucide-react"
import Link from "next/link"

const phrases = [
  [
    { text: "empresas que querem ", highlight: false },
    { text: "vender mais", highlight: false },
    { text: ".", highlight: false },
  ],
  [
    { text: "empresas que precisam ", highlight: false },
    { text: "organizar processos", highlight: false },
    { text: ".", highlight: false },
  ],
  [
    { text: "negócios que querem ", highlight: false },
    { text: "escalar com eficiência", highlight: false },
    { text: ".", highlight: false },
  ],
  [
    { text: "operações que precisam de ", highlight: false },
    { text: "automação", highlight: false },
    { text: ".", highlight: false },
  ],
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  // Calculate total length of current phrase
  const currentPhraseSegments = phrases[index]
  const totalLength = currentPhraseSegments.reduce((acc, seg) => acc + seg.text.length, 0)

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === totalLength + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 30 : 50)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, totalLength])

  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(timeout2)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pb-16 pt-24 md:pb-20 md:pt-32">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/5 rounded-full blur-[150px] mix-blend-screen" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="max-w-4xl">
          {/* Fixed Top Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="h-px w-8 bg-blue-500/50" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-widest">
              Transformação Digital
            </span>
          </motion.div>

          {/* Animated Headline */}
          <div className="min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Criamos <span className="text-gradient-blue">tecnologia</span> para
              <br />
              {currentPhraseSegments.map((segment, i) => {
                // Determine start index of this segment in the total phrase
                let start = 0
                for (let j = 0; j < i; j++) start += currentPhraseSegments[j].text.length

                // Determine how much of this segment is visible
                const visibleLen = Math.max(0, Math.min(segment.text.length, subIndex - start))

                return (
                  <span key={i} className="text-white">
                    {segment.text.substring(0, visibleLen)}
                  </span>
                )
              })}
              <span className={`${blink ? "opacity-100" : "opacity-0"} text-blue-400 ml-1`}>|</span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            Desenvolvemos websites, sistemas internos e automações para empresas que querem organizar processos,
            ganhar eficiência e crescer com tecnologia — sem soluções genéricas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <Link
              href="https://wa.me/5511965671180"
              target="_blank"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-600 text-black hover:opacity-90 shadow-[0_0_20px_-5px_rgba(81,162,255,0.4)]"
            >
              <span>Quero falar com um especialista</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 group"
            >
              Ver soluções
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/60 font-medium border-t border-white/5 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-full bg-blue-500/10">
                <Boxes className="w-4 h-4 text-blue-400" />
              </div>
              Projetos sob medida
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-full bg-blue-500/10">
                <Zap className="w-4 h-4 text-blue-400" />
              </div>
              Foco em performance
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-full bg-blue-500/10">
                <Layers className="w-4 h-4 text-blue-400" />
              </div>
              Tecnologia escalável
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
