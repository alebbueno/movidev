import Link from "next/link"
import { ArrowRight, Zap, Shield, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function CtaSection() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                    Pronto para <span className="text-blue-400">começar?</span>
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    Em até 48 horas você recebe um plano inicial com escopo, custos e próximos passos direto ao ponto.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <Link
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-black transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl hover:opacity-90 shadow-[0_0_20px_-5px_rgba(81,162,255,0.4)]"
                    >
                        <span className="mr-2">Iniciar conversa</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/proposta"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-muted-foreground transition-all duration-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white"
                    >
                        Enviar briefing
                    </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
                        <span>Resposta em até 1h</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
                    <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3 text-blue-500 fill-blue-500" />
                        <span>NDA opcional</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
                    <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-blue-500 fill-blue-500" />
                        <span>Call gratuita</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
