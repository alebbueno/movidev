import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Briefing inteligente de projeto",
  description:
    "Responda a poucas perguntas guiadas pela nossa IA e receba um diagnóstico técnico claro do seu projeto digital.",
  alternates: {
    canonical: "/proposta",
  },
}

export default function PropostaLayout({ children }: { children: React.ReactNode }) {
  return children
}


