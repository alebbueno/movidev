import Link from "next/link"
import { ArrowRight, Check, MessageCircle, Shield, Zap, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const offers = [
  {
    icon: Shield,
    title: "Website Profissional",
    subtitle: "WORDPRESS / CMS",
    tag: "Mais escolhido",
    description: "Ideal para empresas que buscam posicionamento, confiança e conversão imediata.",
    price: {
      setup: "R$ 2.500",
      monthly: "R$ 149 / mês"
    },
    features: [
      "Arquitetura de alta conversão",
      "Design premium e responsivo",
      "SEO técnico base + Sitemap",
      "Integração com WhatsApp",
      "Backups diários e segurança"
    ],
    ctaPrimary: "Falar no WhatsApp",
    ctaSecondary: "Ver detalhes",
    href: "https://wa.me/5511965671180?text=Olá, tenho interesse no Website Profissional",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Sistema Sob Medida",
    subtitle: "SAAS / APPS",
    tag: "Mais estratégico",
    description: "Para negócios que precisam de processos organizados, painéis administrativos e gestão.",
    price: {
      setup: "Sob consulta",
      monthly: "Faseada"
    },
    features: [
      "Diagnóstico e mapeamento",
      "Painéis administrativos",
      "Gestão de usuários e permissões",
      "Banco de dados otimizado",
      "Escalabilidade garantida"
    ],
    ctaPrimary: "Agendar diagnóstico",
    ctaSecondary: "Ver detalhes",
    href: "https://wa.me/5511965671180?text=Olá, tenho interesse no Sistema Sob Medida",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Automação & IA",
    subtitle: "INTEGRAÇÕES",
    tag: "Para escalar",
    description: "Elimine tarefas manuais repetitivas e conecte seus sistemas para operar no automático.",
    price: {
      setup: "Sob consulta",
      monthly: "Variável"
    },
    features: [
      "Automação de processos (RPA)",
      "Integrações via API / Webhooks",
      "Chatbots com IA treinada",
      "Redução de custo operacional",
      "Dashboards de performance"
    ],
    ctaPrimary: "Quero automatizar",
    ctaSecondary: "Ver detalhes",
    href: "https://wa.me/5511965671180?text=Olá, tenho interesse em Automação e Integrações",
    highlight: false,
  },
]

export function StrategicOffers() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-black" id="ofertas">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Soluções pensadas para o <span className="text-gradient-blue">seu momento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece pelo essencial e evolua sua operação com tecnologia sob medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex flex-col p-6 lg:p-8 rounded-3xl border transition-all duration-300",
                offer.highlight
                  ? "bg-white/[0.03] border-blue-500/50 shadow-[0_0_30px_-10px_rgba(81,162,255,0.15)]"
                  : "bg-black border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
              )}
            >
              {/* Highlight Tag */}
              <div className="flex justify-between items-start mb-8">
                <div className={cn(
                  "p-3 rounded-xl border",
                  offer.highlight ? "bg-white/5 border-white/10" : "bg-white/5 border-white/10"
                )}>
                  <offer.icon className="w-6 h-6 text-white" />
                </div>

                {offer.tag && (
                  <span
                    className={cn(
                      "text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide",
                      offer.highlight
                        ? "bg-gradient-to-r from-blue-400 to-blue-600 text-black shadow-lg shadow-blue-500/20"
                        : "bg-white/10 text-white/70"
                    )}
                  >
                    {offer.tag}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2 block">
                  {offer.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {offer.title}
                </h3>
              </div>

              {/* Price Box */}
              <div className="bg-white/[0.03] rounded-2xl p-4 mb-8 border border-white/5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Setup</span>
                    <span className="text-lg font-bold text-white">{offer.price.setup}</span>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Assinatura</span>
                    <span className="text-sm font-medium text-white/80">{offer.price.monthly}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10 flex-grow">
                {offer.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-400 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-col sm:grid sm:grid-cols-[1fr,auto] gap-3">
                <Link
                  href={offer.href}
                  target="_blank"
                  className={cn(
                    "flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300",
                    offer.highlight
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 text-black hover:opacity-90 shadow-[0_0_20px_-5px_rgba(81,162,255,0.4)]"
                      : "bg-white text-black hover:bg-gray-200"
                  )}
                >
                  {offer.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button className="px-5 py-3 rounded-xl border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors group/btn flex items-center gap-2">
                  {offer.ctaSecondary}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/btn:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
