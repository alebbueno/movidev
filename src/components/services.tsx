"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Bot, Smartphone, Globe, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Bot,
    title: "Automação com IA",
    subtitle: "Elimine tarefas manuais e ganhe eficiência operacional",
    description:
      "Automatizamos processos repetitivos e fluxos de atendimento com agentes inteligentes que operam 24/7, reduzindo custos e aumentando produtividade.",
    cta: "Saiba como automatizar",
    href: "/automacao",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    subtitle: "Sistemas feitos para a realidade do seu negócio",
    description:
      "Criamos plataformas sob medida, painéis administrativos e sistemas SaaS para centralizar informações, organizar processos e dar escala à operação.",
    cta: "Ver soluções em sistemas",
    href: "/sistemas",
  },
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    subtitle: "Websites pensados para gerar oportunidades reais",
    description:
      "Sites de alta performance focados em posicionamento de marca, velocidade, SEO e conversão de visitantes em leads qualificados.",
    cta: "Quero um site que venda",
    href: "/websites",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    subtitle: "Aplicativos com experiência premium e foco no usuário",
    description:
      "Desenvolvemos apps nativos para iOS e Android com performance, usabilidade e design moderno, preparados para crescer junto com o produto.",
    cta: "Conhecer apps mobile",
    href: "https://wa.me/5511965671180",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative bg-black">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-blue-500/50" />
            <span className="text-sm font-medium text-blue-400 uppercase tracking-widest">
              Nossa Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl"
          >
            Tecnologia sob medida para <span className="text-gradient-blue">organizar, vender e escalar</span> seu negócio
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                href={service.href}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors self-start">
                  <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-100 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm font-medium text-blue-400/90 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8 group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
