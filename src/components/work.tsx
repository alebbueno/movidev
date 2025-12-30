"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Cappify",
    category: "Automação com IA",
    image: "/screenshot-cappify.png",
    color: "from-purple-500/20 to-pink-500/20",
    description: "Plataforma de agentes de IA 24/7 para atendimento ao cliente. Reduz custos e aumenta conversões com agentes inteligentes que aprendem a cada interação e nunca deixam clientes esperando.",
    url: "https://cappify.app/",
  },
  {
    title: "SeuNutrIA",
    category: "IA para Nutrição",
    image: "/screenshot-seunutria.png",
    color: "from-green-500/20 to-emerald-500/20",
    description: "App de nutrição com IA que cria planos alimentares personalizados e flexíveis. Cardápios diários completos, controle de calorias, acompanhamento de progresso e chatbot motivacional 24/7.",
    url: "https://seunutria.com.br/",
  },
  {
    title: "myexpertMD",
    category: "IA para Saúde",
    image: "/screenshot-myexpertmd.png",
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Assistente de IA desenvolvido para médicos. Respostas rápidas e precisas baseadas em artigos científicos, com integração ao Whitebook, UpToDate e PubMed para decisões clínicas mais ágeis.",
    url: "https://myexpertmd.com.br/",
  },
  {
    title: "DeckSage",
    category: "IA & Games",
    image: "/screenshot-decksage.png",
    color: "from-orange-500/20 to-red-500/20",
    description: "Ferramenta inteligente para Magic: The Gathering com IA para buscar, traduzir cartas e construir decks estratégicos. Facilita a criação de estratégias de jogo com tecnologia avançada.",
    url: "https://decksage.com.br/",
  },
]

export function Work() {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Projetos Selecionados
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 max-w-md"
            >
              Conheça algumas das nossas transformações digitais mais recentes.
            </motion.p>
          </div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <GlassCard className="p-0 overflow-hidden group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`p-12 flex flex-col justify-center relative overflow-hidden`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />
                    <div className="relative z-10">
                      <span className="text-sm font-medium text-white/50 mb-4 block uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mb-8 max-w-md">{project.description}</p>
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Design</span>
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                          Desenvolvimento
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
