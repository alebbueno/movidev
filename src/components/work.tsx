"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Cappify",
    subtitle: "AUTOMAÇÃO COM IA",
    category: "SaaS B2B",
    image: "/screenshot-cappify.png",
    color: "from-purple-500/20 to-pink-500/20",
    description: "Plataforma de agentes de IA 24/7 para atendimento ao cliente. Reduz custos e aumenta conversões com agentes inteligentes que aprendem a cada interação.",
    metrics: ["Retenção +40%", "Atendimento 24/7", "Resposta < 2s"],
    url: "https://cappify.app/",
  },
  {
    title: "SeuNutrIA",
    subtitle: "IA PARA NUTRIÇÃO",
    category: "App Mobile",
    image: "/screenshot-seunutria.png",
    color: "from-green-500/20 to-emerald-500/20",
    description: "App de nutrição com IA que cria planos alimentares personalizados. Cardápios diários, controle de calorias e chatbot motivacional.",
    metrics: ["Planos em < 1min", "Engajamento 3x", "5k+ Usuários"],
    url: "https://seunutria.com.br/",
  },
  {
    title: "myexpertMD",
    subtitle: "IA PARA SAÚDE",
    category: "Plataforma Médica",
    image: "/screenshot-myexpertmd.png",
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Assistente de IA para médicos. Respostas rápidas e precisas baseadas em artigos científicos, com integração ao PubMed.",
    metrics: ["Economia 2h/dia", "Acurácia 99%", "Base Científica"],
    url: "https://myexpertmd.com.br/",
  },
  {
    title: "DeckSage",
    subtitle: "IA & GAMES",
    category: "Tool p/ TCG",
    image: "/screenshot-decksage.png",
    color: "from-orange-500/20 to-red-500/20",
    description: "Ferramenta para Magic: The Gathering que traduz cartas e constrói decks estratégicos com tecnologia avançada.",
    metrics: ["Database 20k+", "Tradução Real-time", "Deck Builder IA"],
    url: "https://decksage.com.br/",
  },
]

export function Work() {
  return (
    <section id="work" className="py-16 md:py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Cases Selecionados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Tecnologia aplicada que gera resultado real. Conheça como transformamos desafios em produtos digitais de alta performance.
          </motion.p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
                      {project.subtitle}
                    </span>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group"
                >
                  Ver projeto completo
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Image Card */}
              <div className="flex-1 w-full">
                <Link href={project.url} target="_blank" className="block group">
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] aspect-[4/3] shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 transition-transform duration-700 group-hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="rounded-xl shadow-2xl border border-white/10 object-cover w-full h-full"
                      />
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
