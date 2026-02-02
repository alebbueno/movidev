"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowRight, MonitorSmartphone, Zap, Search, Layout, MessageSquare, Database, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function WebsitesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans" style={{ fontFamily: '"Geist", "Geist Fallback", sans-serif' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-lg border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                <span className="text-xs font-medium text-blue-300 uppercase tracking-widest">Websites Profissionais</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                                Website não é vitrine. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                    É ferramenta de vendas.
                                </span>
                            </h1>

                            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
                                Criamos websites profissionais focados em posicionamento, performance e conversão, pensados para empresas que querem gerar oportunidades reais de negócio.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 h-12 text-lg shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] transition-all hover:scale-105"
                                >
                                    <Link href="https://wa.me/5511965671180" target="_blank">
                                        Quero um site que venda
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
                                {/* Mock UI Representation */}
                                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    </div>
                                    <div className="h-6 w-full max-w-[200px] bg-white/5 rounded-md ml-4"></div>
                                </div>
                                <div className="grid grid-cols-12 gap-4 h-[300px]">
                                    <div className="col-span-4 bg-white/5 rounded-md h-full animate-pulse delay-75"></div>
                                    <div className="col-span-8 flex flex-col gap-4">
                                        <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md w-full border border-white/5"></div>
                                        <div className="grid grid-cols-3 gap-4 h-full">
                                            <div className="bg-white/5 rounded-md h-full"></div>
                                            <div className="bg-white/5 rounded-md h-full"></div>
                                            <div className="bg-white/5 rounded-md h-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute -right-8 top-10 bg-black/80 backdrop-blur-md border border-green-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float delay-100">
                                    <div className="bg-green-500/20 p-2 rounded-lg">
                                        <TrendingUp className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50">Conversão</div>
                                        <div className="text-sm font-bold text-green-400">+150%</div>
                                    </div>
                                </div>

                                <div className="absolute -left-8 bottom-20 bg-black/80 backdrop-blur-md border border-blue-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float delay-300">
                                    <div className="bg-blue-500/20 p-2 rounded-lg">
                                        <Zap className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/50">Performance</div>
                                        <div className="text-sm font-bold text-blue-400">99/100</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PROBLEM SECTION --- */}
            <section className="py-24 bg-neutral-900/30 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">A maioria dos sites não gera resultado</h2>
                        <p className="text-xl text-white/60">
                            Sites lentos, genéricos e sem estratégia afastam clientes, prejudicam a marca e não geram contatos qualificados.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ProblemCard
                            icon={<Layout className="w-8 h-8 text-red-400" />}
                            title="Design Genérico"
                            description="Templates prontos que não transmitem a autoridade da sua marca."
                        />
                        <ProblemCard
                            icon={<Zap className="w-8 h-8 text-yellow-400" />}
                            title="Baixa Performance"
                            description="Carregamento lento que faz o usuário desistir antes de ver sua oferta."
                        />
                        <ProblemCard
                            icon={<Search className="w-8 h-8 text-blue-400" />}
                            title="Invisível no Google"
                            description="Sem estratégia de SEO, seu site não aparece para quem procura."
                        />
                    </div>
                </div>
            </section>

            {/* --- APPROACH SECTION --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Não criamos “sites bonitos”. <br />
                                <span className="text-blue-500">Criamos websites estratégicos.</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-8 border-l-4 border-blue-500 pl-6 py-2 bg-blue-500/5">
                                Cada projeto começa entendendo:
                            </p>

                            <ul className="space-y-6">
                                <ApproachItem number="01" title="Seu Negócio" description="Entendemos seu modelo de receita e diferenciais." />
                                <ApproachItem number="02" title="Seu Público" description="Criamos a experiência pensando no seu cliente ideal." />
                                <ApproachItem number="03" title="Seu Objetivo Real" description="Vendas, leads, branding ou autoridade?" />
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square relative rounded-full border border-white/10 flex items-center justify-center p-12 bg-white/[0.02]">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl" />

                                {/* Circular Diagram Concept */}
                                <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                                    <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center gap-3 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                                        <Search className="w-10 h-10 text-blue-400" />
                                        <span className="font-bold">Estratégia</span>
                                    </div>
                                    <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center gap-3 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                                        <Layout className="w-10 h-10 text-purple-400" />
                                        <span className="font-bold">Design</span>
                                    </div>
                                    <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center gap-3 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                                        <Database className="w-10 h-10 text-green-400" />
                                        <span className="font-bold">Tecnologia</span>
                                    </div>
                                    <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center gap-3 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                                        <TrendingUp className="w-10 h-10 text-yellow-400" />
                                        <span className="font-bold">Performance</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- DELIVERABLES SECTION --- */}
            <section className="py-24 bg-black relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/20 rounded-lg border border-blue-800/50">
                            Escopo Premium
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold">O que entregamos</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <DeliverableCard
                            icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
                            title="Arquitetura focada em conversão"
                            description="Estrutura pensada para guiar o visitante até o contato ou compra."
                        />
                        <DeliverableCard
                            icon={<MonitorSmartphone className="w-6 h-6 text-purple-400" />}
                            title="Design moderno e responsivo"
                            description="Visual impecável em celulares, tablets e desktops."
                        />
                        <DeliverableCard
                            icon={<Search className="w-6 h-6 text-green-400" />}
                            title="SEO técnico desde o início"
                            description="Código limpo e estruturado para o Google amar seu site."
                        />
                        <DeliverableCard
                            icon={<Zap className="w-6 h-6 text-yellow-400" />}
                            title="Performance e velocidade"
                            description="Carregamento instantâneo para não perder visitas."
                        />
                        <DeliverableCard
                            icon={<MessageSquare className="w-6 h-6 text-pink-400" />}
                            title="Integração WhatsApp e CRM"
                            description="Botões de conversão e formulários conectados onde você precisa."
                        />
                        <DeliverableCard
                            icon={<Database className="w-6 h-6 text-cyan-400" />}
                            title="Base pronta para evoluir"
                            description="Seu site preparado para virar um sistema ou app no futuro."
                        />
                    </div>
                </div>
            </section>

            {/* --- TARGET AUDIENCE SECTION --- */}
            <section className="py-24 bg-neutral-900/20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* For Whom */}
                        <div className="bg-gradient-to-b from-green-500/5 to-transparent p-8 rounded-xl border border-green-500/20">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400">
                                    <Check className="w-5 h-5" />
                                </span>
                                Para quem é
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-white/80">Empresas que querem se posicionar como líderes de mercado</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-white/80">Negócios que precisam gerar leads qualificados</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-white/80">Quem busca uma solução profissional e duradoura</span>
                                </li>
                            </ul>
                        </div>

                        {/* Not For Whom */}
                        <div className="bg-gradient-to-b from-red-500/5 to-transparent p-8 rounded-xl border border-red-500/20">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400">
                                    <X className="w-5 h-5" />
                                </span>
                                Para quem NÃO é
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-white/80">Quem busca apenas o "preço mais baixo" (sobrinhos)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-white/80">Quem não vê o site como um canal de investimento</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-white/80">Quem quer um site apenas para "constar no cartão"</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Vamos criar um site que <br />
                        <span className="text-blue-500">trabalhe por você?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                        Pare de perder clientes para sites ruins. Fale com nossa equipe e tenha um projeto de alto nível.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-white text-black hover:bg-neutral-200 rounded-lg px-10 h-12 text-xl font-bold shadow-xl hover:scale-105 transition-all"
                    >
                        <Link href="https://wa.me/5511965671180" target="_blank">
                            Falar com um especialista
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}

// --- HELPER COMPONENTS ---

function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="group p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.05]">
            <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
    )
}

function ApproachItem({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
            <span className="text-3xl font-bold text-white/10">{number}</span>
            <div>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-sm text-white/60">{description}</p>
            </div>
        </div>
    )
}

function DeliverableCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="bg-neutral-900/50 border-white/10 p-6 flex items-start gap-4 hover:border-blue-500/30 transition-colors rounded-xl">
            <div className="shrink-0 p-3 bg-blue-500/10 rounded-lg">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-lg mb-2 text-white">{title}</h4>
                <p className="text-sm text-white/60">{description}</p>
            </div>
        </Card>
    )
}
