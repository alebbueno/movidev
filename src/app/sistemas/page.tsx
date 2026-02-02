"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight, TrendingUp, Layers, Code2, Database, Shield, LayoutDashboard, Workflow, Lightbulb, Search, Rocket } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SistemasPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans" style={{ fontFamily: '"Geist", "Geist Fallback", sans-serif' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob" />
                    <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-blob animation-delay-4000" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                            <span className="text-xs font-medium text-purple-300 uppercase tracking-widest">Sistemas & SaaS</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                            Seu negócio cresceu. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                Seus processos também precisam evoluir.
                            </span>
                        </h1>

                        <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Desenvolvemos sistemas web sob medida para empresas que precisam organizar operações,
                            reduzir erros e ganhar escala com tecnologia.
                        </p>

                        <Button
                            asChild
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-10 h-12 text-lg shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] transition-all hover:scale-105"
                        >
                            <Link href="https://wa.me/5511965671180" target="_blank">
                                Agendar diagnóstico
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* --- TARGET AUDIENCE SECTION --- */}
            <section className="py-24 bg-neutral-900/30 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Who it is for */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Para quem precisa escalar</h3>
                            <ul className="space-y-4 text-white/80">
                                <ListItem checked>Empresas em crescimento acelerado</ListItem>
                                <ListItem checked>Negócios com processos internos complexos</ListItem>
                                <ListItem checked>Quem quer sair das planilhas e desorganização</ListItem>
                                <ListItem checked>Operações que exigem segurança e auditoria</ListItem>
                            </ul>
                        </motion.div>

                        {/* Who it is NOT for */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-gradient-to-br from-white/[0.01] to-transparent border border-white/5 opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/40">
                                <X className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white/50">Não é para soluções improvisadas</h3>
                            <ul className="space-y-4 text-white/50">
                                <ListItem unchecked>Ideias sem validação de mercado</ListItem>
                                <ListItem unchecked>Quem busca solução "plug and play"</ListItem>
                                <ListItem unchecked>Projetos sem orçamento para sustentação</ListItem>
                                <ListItem unchecked>Quem quer apenas um MVP descartável</ListItem>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- METHOD SECTION (TIMELINE) --- */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nosso Método</h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Nada de soluções prontas. Criamos sistemas alinhados aos seus processos reais desde o primeiro dia.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent md:-translate-x-1/2" />

                        <div className="space-y-16">
                            <TimelineItem
                                step="01"
                                icon={<Search className="w-6 h-6" />}
                                title="Entendimento do negócio"
                                description="Mergulhamos na sua operação para entender dores, gargalos e oportunidades de automação."
                                align="left"
                            />
                            <TimelineItem
                                step="02"
                                icon={<LayoutDashboard className="w-6 h-6" />}
                                title="Arquitetura & Design"
                                description="Desenhamos a solução focada na experiência do usuário e na escalabilidade técnica."
                                align="right"
                            />
                            <TimelineItem
                                step="03"
                                icon={<Code2 className="w-6 h-6" />}
                                title="Desenvolvimento Ágil"
                                description="Entregas constantes para você testar e validar funcionalidades reais rapidamente."
                                align="left"
                            />
                            <TimelineItem
                                step="04"
                                icon={<Rocket className="w-6 h-6" />}
                                title="Evolução Contínua"
                                description="O sistema cresce com sua empresa. Monitoramento, suporte e novas features."
                                align="right"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DELIVERABLES SECTION (ACCORDION) --- */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">O que desenvolvemos</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <DeliverableItem
                            value="item-1"
                            title="Sistemas Internos (ERP/CRM)"
                            icon={<Layers className="w-5 h-5 text-purple-400" />}
                            content="Centralize informações, gerencie equipes e automatize fluxos de trabalho. Adeus planilhas travadas."
                        />
                        <DeliverableItem
                            value="item-2"
                            title="SaaS & Produtos Digitais"
                            icon={<Lightbulb className="w-5 h-5 text-yellow-400" />}
                            content="Transforme sua expertise em um produto escalável. Multi-tenant, assinaturas e onboarding automatizado."
                        />
                        <DeliverableItem
                            value="item-3"
                            title="Dashboards & BI"
                            icon={<LayoutDashboard className="w-5 h-5 text-blue-400" />}
                            content="Visualize seus dados em tempo real para tomar decisões estratégicas baseadas em fatos, não em 'feeling'."
                        />
                        <DeliverableItem
                            value="item-4"
                            title="APIs & Integrações"
                            icon={<Workflow className="w-5 h-5 text-green-400" />}
                            content="Conecte seu sistema a outras ferramentas (WhatsApp, Pagamentos, NF-e) para uma operação unificada."
                        />
                    </Accordion>
                </div>
            </section>

            {/* --- TECH STACK SECTION --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-white/80 mb-4">Stack Tecnológico</h2>
                        <p className="text-sm text-white/50">Robustez e segurança para o longo prazo</p>
                    </div>

                    <TooltipProvider>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <TechCard title="Frontend" items={["React", "Next.js", "Tailwind"]} icon={<LayoutDashboard className="w-5 h-5" />} />
                            <TechCard title="Backend" items={["Node.js", "Python", "Serverless"]} icon={<Code2 className="w-5 h-5" />} />
                            <TechCard title="Database" items={["PostgreSQL", "Redis", "Supabase"]} icon={<Database className="w-5 h-5" />} />
                            <TechCard title="Segurança" items={["OAuth", "AWS/Vercel", "Encryption"]} icon={<Shield className="w-5 h-5" />} />
                        </div>
                    </TooltipProvider>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Vamos organizar sua operação <br />
                        <span className="text-purple-400">com tecnologia?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                        Pare de perder tempo com processos manuais. Agende uma conversa e descubra como podemos ajudar.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-white text-black hover:bg-neutral-200 rounded-lg px-10 h-12 text-xl font-bold shadow-xl hover:scale-105 transition-all"
                    >
                        <Link href="https://wa.me/5511965671180" target="_blank">
                            Agendar conversa
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

function ListItem({ children, checked, unchecked }: { children: React.ReactNode, checked?: boolean, unchecked?: boolean }) {
    return (
        <li className="flex items-start gap-3">
            {checked && <div className="mt-1 bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div>}
            {unchecked && <X className="w-5 h-5 text-white/30 mt-0.5" />}
            <span>{children}</span>
        </li>
    )
}

function TimelineItem({ step, icon, title, description, align }: { step: string, icon: React.ReactNode, title: string, description: string, align: 'left' | 'right' }) {
    return (
        <div className={`relative flex items-center justify-between md:justify-center`}>
            <div className={`hidden md:block w-5/12 ${align === 'left' ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60">{description}</p>
            </div>

            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-black border border-purple-500/50 shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)] z-10">
                <span className="text-[10px] font-bold text-purple-400">{step}</span>
            </div>

            <div className={`md:hidden pl-16 py-2`}>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm">{description}</p>
            </div>

            <div className="hidden md:block w-5/12" />
        </div>
    )
}

function DeliverableItem({ value, title, icon, content }: { value: string, title: string, icon: React.ReactNode, content: string }) {
    return (
        <AccordionItem value={value} className="border-white/10 bg-white/[0.02] px-6 rounded-xl hover:bg-white/[0.04] transition-colors">
            <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-purple-500/10 rounded-lg">{icon}</div>
                    <span className="text-lg font-bold">{title}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/60 text-base pb-6 pl-16">
                {content}
            </AccordionContent>
        </AccordionItem>
    )
}

function TechCard({ title, items, icon }: { title: string, items: string[], icon: React.ReactNode }) {
    return (
        <Card className="bg-neutral-900/40 border-white/5 hover:border-purple-500/20 transition-all group rounded-xl">
            <CardContent className="p-6">
                <div className="mb-4 text-white/40 group-hover:text-purple-400 transition-colors">{icon}</div>
                <h4 className="font-bold text-white mb-3">{title}</h4>
                <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                        <span key={item} className="text-xs px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5">
                            {item}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
