"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowRight, Zap, RefreshCw, Bot, BarChart3, Clock, AlertTriangle, Cpu, Network, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AutomacaoPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30 font-sans" style={{ fontFamily: '"Geist", "Geist Fallback", sans-serif' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
                {/* Background Elements - Stronger visual impact */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-green-500/10 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-blob" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-800/10 rounded-full blur-[120px] mix-blend-screen opacity-20 animate-blob animation-delay-4000" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(22,163,74,0.3)]">
                            <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                            <span className="text-sm font-semibold text-green-300 uppercase tracking-widest">Automação Inteligente</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-8">
                            Automatizar processo <br className="hidden md:block" />
                            não é luxo. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600">
                                É pura eficiência.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                            Implementamos automações e integrações inteligentes para eliminar tarefas manuais, reduzir custos e destravar o crescimento da sua empresa.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg px-12 h-12 text-xl shadow-[0_0_30px_-5px_rgba(22,163,74,0.6)] transition-all hover:scale-105"
                            >
                                <Link href="https://wa.me/5511965671180" target="_blank">
                                    Quero automatizar
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Link>
                            </Button>
                            <div className="text-sm text-white/40 mt-4 sm:mt-0">
                                *Diagnóstico gratuito
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- PROBLEM SECTION --- */}
            <section className="py-32 bg-neutral-900/30 border-t border-white/5 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tempo perdido <span className="text-red-400">custa dinheiro</span></h2>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto">
                            Se sua equipe gasta tempo com Ctrl+C / Ctrl+V, sua operação está queimando caixa. Processos manuais, sistemas desconectados e atendimento repetitivo travam o crescimento.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ProblemCard
                            icon={<Clock className="w-10 h-10 text-yellow-400" />}
                            title="Tarefas Repetitivas"
                            description="Sua equipe perde horas preciosas copiando dados de um lugar para outro manualmente."
                        />
                        <ProblemCard
                            icon={<AlertTriangle className="w-10 h-10 text-red-500" />}
                            title="Erros Operacionais"
                            description="Falhas humanas inevitáveis que geram prejuízo, retrabalho e insatisfação do cliente."
                        />
                        <ProblemCard
                            icon={<Network className="w-10 h-10 text-orange-400" />}
                            title="Silos de Dados"
                            description="Ferramentas que não conversam entre si, deixando informações importantes perdidas."
                        />
                    </div>
                </div>
            </section>

            {/* --- APPROACH SECTION (Enhanced Visualization) --- */}
            <section className="py-32 relative overflow-hidden bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-1 mb-6 rounded-lg border border-green-500/30 text-green-400 text-sm font-bold tracking-wide uppercase">
                                Nossa Abordagem
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                Automação com <br /> <span className="text-green-500">propósito real</span>.
                            </h2>
                            <p className="text-xl text-white/70 mb-10 border-l-4 border-green-500 pl-6 py-2 bg-green-500/5">
                                Não automatizamos por automatizar. Focamos no que traz retorno financeiro e operacional imediato.
                            </p>

                            <div className="space-y-8">
                                <ApproachItem
                                    title="Análise de Gargalos"
                                    description="Mergulhamos na operação para identificar exatamente onde o tempo e dinheiro estão vazando."
                                />
                                <ApproachItem
                                    title="Solução Customizada"
                                    description="Desenhamos fluxos inteligentes que conectam suas ferramentas atuais (CRM, Financeiro, Docs)."
                                />
                                <ApproachItem
                                    title="Implementação Ágil"
                                    description="Colocamos a automação para rodar rápido, validando resultados semana a semana."
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Enhanced Visual for Automation Flow */}
                            <div className="relative z-10 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="flex flex-col gap-8 relative z-20">
                                    {/* Input Step */}
                                    <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/5 opacity-60">
                                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/40 uppercase font-bold tracking-wider mb-1">Entrada</div>
                                            <div className="h-3 w-32 bg-white/20 rounded mb-2"></div>
                                            <div className="h-2 w-20 bg-white/10 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Processing Step (The Core) */}
                                    <div className="relative">
                                        <div className="absolute left-7 -top-8 bottom-0 w-0.5 bg-gradient-to-b from-white/10 via-green-500 to-white/10 h-[calc(100%+64px)] z-0" />

                                        <div className="flex items-center gap-6 p-6 rounded-2xl bg-green-900/20 border border-green-500/50 relative z-10 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]">
                                            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/40 animate-pulse">
                                                <Cpu className="w-7 h-7 text-black" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-green-400 uppercase font-bold tracking-wider mb-1">Processamento Inteligente</div>
                                                <div className="text-white font-medium text-lg">Agentes IA & Webhooks</div>
                                                <div className="text-white/50 text-sm mt-1">Análise, roteamento e execução automática</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Output Step */}
                                    <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/5 opacity-60">
                                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <Check className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white/40 uppercase font-bold tracking-wider mb-1">Resultado</div>
                                            <div className="h-3 w-40 bg-white/20 rounded mb-2"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Results Badge */}
                                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur border border-green-500/30 p-4 rounded-xl shadow-xl animate-float delay-100 hidden sm:block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><BarChart3 className="w-5 h-5" /></div>
                                        <span className="text-sm font-bold text-white">ROI Estimado</span>
                                    </div>
                                    <div className="text-2xl font-bold text-white tracking-tight">350% <span className="text-xs font-normal text-white/40">/ano</span></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- DELIVERABLES SECTION --- */}
            <section className="py-32 bg-neutral-950 relative border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">O que entregamos</h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">Soluções completas para transformar sua operação manual em digital.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <DeliverableCard
                            icon={<RefreshCw className="w-8 h-8 text-blue-400" />}
                            title="Fluxos Operacionais"
                            description="Automação de ponta a ponta para eliminar o trabalho de robô que humanos fazem hoje."
                        />
                        <DeliverableCard
                            icon={<Network className="w-8 h-8 text-yellow-400" />}
                            title="Integrações API"
                            description="Fazemos seu CRM falar com seu ERP e Financeiro. Conectividade total via Webhooks."
                        />
                        <DeliverableCard
                            icon={<Bot className="w-8 h-8 text-purple-400" />}
                            title="Agentes Inteligentes"
                            description="Atendimento e suporte 24/7 com IA treinada no seu negócio para triagem e vendas."
                        />
                        <DeliverableCard
                            icon={<BarChart3 className="w-8 h-8 text-green-400" />}
                            title="Redução de Custos"
                            description="Menos horas gastas em tarefas braçais significa mais margem de lucro para a empresa."
                        />
                    </div>
                </div>
            </section>

            {/* --- TARGET AUDIENCE SECTION --- */}
            <section className="py-32 bg-neutral-900/20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* For Whom */}
                        <div className="bg-gradient-to-b from-green-500/10 to-transparent p-10 rounded-[2rem] border border-green-500/20 h-full">
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-black">
                                    <Check className="w-6 h-6" />
                                </span>
                                Para quem é
                            </h3>
                            <ul className="space-y-6">
                                <ListItem checked>Empresas com operação ativa e gargalos visíveis</ListItem>
                                <ListItem checked>Times sobrecarregados com tarefas manuais e repetitivas</ListItem>
                                <ListItem checked>Gestores que buscam eficiência e controle de processos</ListItem>
                                <ListItem checked>Operações que dependem de agilidade e precisão</ListItem>
                            </ul>
                        </div>

                        {/* Not For Whom */}
                        <div className="bg-gradient-to-b from-red-500/5 to-transparent p-10 rounded-[2rem] border border-red-500/10 h-full opacity-70 hover:opacity-100 transition-opacity">
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white/60">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/40">
                                    <X className="w-6 h-6" />
                                </span>
                                Para quem NÃO é
                            </h3>
                            <ul className="space-y-6">
                                <ListItem unchecked>Negócios que ainda não têm processos definidos (caos)</ListItem>
                                <ListItem unchecked>Quem espera que a IA "resolva a estratégia" sozinha</ListItem>
                                <ListItem unchecked>Empresas com volume irrelevante de tarefas manuais</ListItem>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-900/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
                        Vamos eliminar tarefas manuais <br />
                        <span className="text-green-500">da sua operação?</span>
                    </h2>
                    <p className="text-2xl text-white/60 mb-14 max-w-3xl mx-auto font-light">
                        Libere seu time para focar no que realmente importa. Fale com um especialista em automação agora.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-white text-black hover:bg-neutral-200 rounded-lg px-12 h-16 text-xl font-bold shadow-2xl hover:scale-105 transition-all"
                    >
                        <Link href="https://wa.me/5511965671180" target="_blank">
                            Falar com especialista
                            <ArrowRight className="ml-3 w-8 h-8" />
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
        <div className="p-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:bg-white/[0.05] group">
            <div className="mb-6 bg-white/5 w-20 h-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-white/60 leading-relaxed text-lg">{description}</p>
        </div>
    )
}

function ApproachItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex items-start gap-6 p-6 rounded-xl bg-white/[0.02] border border-transparent hover:border-white/5 hover:bg-white/[0.04] transition-all">
            <div className="w-3 h-3 mt-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <div>
                <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                <p className="text-base text-white/60 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

function DeliverableCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="bg-neutral-900/50 border-white/10 p-8 hover:border-green-500/30 transition-colors h-full flex flex-col items-center text-center hover:bg-neutral-900/80 rounded-xl">
            <div className="shrink-0 p-4 bg-white/5 rounded-lg w-fit mb-6 text-green-400">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-xl mb-3 text-white">{title}</h4>
                <p className="text-white/60 leading-relaxed">{description}</p>
            </div>
        </Card>
    )
}

function ListItem({ children, checked, unchecked }: { children: React.ReactNode, checked?: boolean, unchecked?: boolean }) {
    return (
        <li className="flex items-start gap-4">
            {checked && (
                <div className="mt-1 bg-green-500/20 p-1 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                </div>
            )}
            {unchecked && <X className="w-6 h-6 text-white/30 mt-0.5 shrink-0" />}
            <span className={`text-lg ${unchecked ? 'text-white/50' : 'text-white/80'}`}>{children}</span>
        </li>
    )
}
