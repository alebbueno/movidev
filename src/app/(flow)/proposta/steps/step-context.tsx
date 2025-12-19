/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { SelectionCard } from "@/components/wizard/selection-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Certifique-se de ter este componente
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, Store, Building2, Landmark, ArrowRight, ArrowLeft, 
  Lightbulb, Hammer, TrendingUp, RefreshCw, User, Code2, Briefcase 
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- TIPOS MAIS RICOS ---
type CompanyType = "startup" | "pme" | "corporacao" | "gov";
type ProjectStage = "ideia" | "mvp" | "escala" | "legado";
type UserRole = "founder" | "tech" | "manager" | "other";

// Interface atualizada para passar dados para cima
interface StepContextProps {
  onNext: (data: any) => void; // Passamos os dados ao avançar
}

export default function StepContext({ onNext }: StepContextProps) {
  // Estado
  const [companyType, setCompanyType] = useState<CompanyType | null>("startup");
  const [projectStage, setProjectStage] = useState<ProjectStage | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  
  // Lógica de Segmento (Híbrida: Seleção + Texto Livre)
  const [segment, setSegment] = useState<string>("varejo");
  const [isCustomSegment, setIsCustomSegment] = useState(false);
  const [customSegment, setCustomSegment] = useState("");

  const SEGMENTS = ["fintech", "saude", "varejo", "agro", "logistica", "educacao"];

  // Validação simples para liberar o botão
  const isValid = companyType && projectStage && userRole && (isCustomSegment ? customSegment.length > 2 : segment);

  const handleNext = () => {
    if (!isValid) return;
    
    // Compila os dados para enviar ao Pai (e futuramente à IA)
    const stepData = {
      companyType,
      projectStage,
      userRole,
      segment: isCustomSegment ? customSegment : segment
    };
    
    onNext(stepData);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-left-4 duration-500">
      
      {/* Header */}
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-blue-500 font-medium text-sm tracking-wider">PASSO 1 DE 4</span>
            <h1 className="text-3xl font-bold text-white mt-1">Contexto do Negócio</h1>
          </div>
          <span className="text-xl font-bold text-white">25%</span>
        </div>
        <Progress value={25} className="h-2 bg-zinc-800" indicatorClassName="bg-blue-600" />
        <p className="text-zinc-400">
            Essas informações calibram nossa IA para fazer as perguntas técnicas corretas nas próximas etapas.
        </p>
      </div>

      <div className="space-y-12">
        
        {/* 1. SEU PAPEL (Novo: Define o tom da IA) */}
        <section className="space-y-4">
             <h2 className="text-lg font-medium text-white flex items-center gap-2">
                <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center text-xs text-zinc-400">1</span>
                Qual seu papel no projeto?
            </h2>
            <div className="flex flex-wrap gap-3">
                {[
                    { id: "founder", label: "Fundador / CEO", icon: <Rocket className="w-4 h-4"/> },
                    { id: "tech", label: "Líder Técnico / CTO", icon: <Code2 className="w-4 h-4"/> },
                    { id: "manager", label: "Gerente de Produto", icon: <Briefcase className="w-4 h-4"/> },
                    { id: "other", label: "Outro", icon: <User className="w-4 h-4"/> },
                ].map((role) => (
                    <button
                        key={role.id}
                        onClick={() => setUserRole(role.id as UserRole)}
                        className={cn(
                            "flex items-center gap-2 px-5 py-3 rounded-full border transition-all text-sm font-medium",
                            userRole === role.id
                                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/40"
                                : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        )}
                    >
                        {role.icon} {role.label}
                    </button>
                ))}
            </div>
        </section>

        {/* 2. TIPO DE EMPRESA */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-white flex items-center gap-2">
            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center text-xs text-zinc-400">2</span>
            Qual o perfil da empresa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SelectionCard
              title="Startup"
              description="Foco em crescimento e inovação rápida."
              icon={<Rocket className="w-6 h-6" />}
              selected={companyType === "startup"}
              onClick={() => setCompanyType("startup")}
            />
            <SelectionCard
              title="PME"
              description="Negócio estabelecido buscando otimização."
              icon={<Store className="w-6 h-6" />}
              selected={companyType === "pme"}
              onClick={() => setCompanyType("pme")}
            />
            <SelectionCard
              title="Corporação"
              description="Alta complexidade e compliance."
              icon={<Building2 className="w-6 h-6" />}
              selected={companyType === "corporacao"}
              onClick={() => setCompanyType("corporacao")}
            />
            <SelectionCard
              title="Gov / ONG"
              description="Orçamento público ou terceiro setor."
              icon={<Landmark className="w-6 h-6" />}
              selected={companyType === "gov"}
              onClick={() => setCompanyType("gov")}
            />
          </div>
        </section>

        {/* 3. ESTÁGIO DO PROJETO (Novo: Define a stack sugerida pela IA) */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-white flex items-center gap-2">
            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center text-xs text-zinc-400">3</span>
            Em que momento o projeto está?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div 
                onClick={() => setProjectStage("ideia")}
                className={cn(
                    "cursor-pointer p-4 rounded-xl border flex items-center gap-4 transition-all",
                    projectStage === "ideia" ? "bg-blue-900/20 border-blue-500" : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
                )}
             >
                <div className={cn("p-2 rounded-lg", projectStage === "ideia" ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400")}>
                    <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-white font-medium">Apenas Ideia / Conceito</h3>
                    <p className="text-zinc-500 text-xs">Preciso validar viabilidade e criar MVP.</p>
                </div>
             </div>

             <div 
                onClick={() => setProjectStage("mvp")}
                className={cn(
                    "cursor-pointer p-4 rounded-xl border flex items-center gap-4 transition-all",
                    projectStage === "mvp" ? "bg-blue-900/20 border-blue-500" : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
                )}
             >
                <div className={cn("p-2 rounded-lg", projectStage === "mvp" ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400")}>
                    <Hammer className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-white font-medium">Produto em Desenvolvimento</h3>
                    <p className="text-zinc-500 text-xs">Já iniciei, mas preciso acelerar ou corrigir.</p>
                </div>
             </div>

             <div 
                onClick={() => setProjectStage("escala")}
                className={cn(
                    "cursor-pointer p-4 rounded-xl border flex items-center gap-4 transition-all",
                    projectStage === "escala" ? "bg-blue-900/20 border-blue-500" : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
                )}
             >
                <div className={cn("p-2 rounded-lg", projectStage === "escala" ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400")}>
                    <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-white font-medium">Produto Rodando / Escala</h3>
                    <p className="text-zinc-500 text-xs">Preciso de novas features ou performance.</p>
                </div>
             </div>

             <div 
                onClick={() => setProjectStage("legado")}
                className={cn(
                    "cursor-pointer p-4 rounded-xl border flex items-center gap-4 transition-all",
                    projectStage === "legado" ? "bg-blue-900/20 border-blue-500" : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
                )}
             >
                <div className={cn("p-2 rounded-lg", projectStage === "legado" ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400")}>
                    <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-white font-medium">Modernização de Legado</h3>
                    <p className="text-zinc-500 text-xs">Refazer sistema antigo com tecnologias novas.</p>
                </div>
             </div>
          </div>
        </section>

        {/* 4. SEGMENTO (Com Input Dinâmico) */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-white flex items-center gap-2">
            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center text-xs text-zinc-400">4</span>
            Qual o seu segmento de atuação?
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            {SEGMENTS.map((item) => (
              <button
                key={item}
                onClick={() => { setSegment(item); setIsCustomSegment(false); }}
                className={cn(
                  "px-6 py-4 rounded-2xl border transition-all text-sm font-medium capitalize min-w-25",
                  !isCustomSegment && segment === item
                    ? "bg-zinc-900 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                )}
              >
                {item}
              </button>
            ))}
            
            {/* Opção Outro - Vira um Input se clicado */}
            {!isCustomSegment ? (
                <button
                    onClick={() => { setIsCustomSegment(true); setCustomSegment(""); }}
                    className="px-6 py-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-white transition-all text-sm font-medium min-w-25"
                >
                    Outro...
                </button>
            ) : (
                <div className="animate-in fade-in slide-in-from-left-2 flex items-center gap-2 flex-1 min-w-50 max-w-sm">
                    <Input 
                        autoFocus
                        placeholder="Ex: Mineração, Advocacia, etc..."
                        className="bg-zinc-900 border-blue-500 text-white h-13.5 rounded-2xl focus-visible:ring-blue-500/50"
                        value={customSegment}
                        onChange={(e) => setCustomSegment(e.target.value)}
                    />
                    <button 
                        onClick={() => setIsCustomSegment(false)}
                        className="text-zinc-500 hover:text-white px-2"
                    >
                        X
                    </button>
                </div>
            )}
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-6 border-t border-zinc-800 flex justify-between items-center">
        <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-transparent pl-0 gap-2 opacity-0 cursor-default">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!isValid}
          className={cn(
            "px-8 py-6 text-lg rounded-full gap-2 transition-all",
            isValid 
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 hover:scale-105"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
          )}
        >
          Próximo: Diagnóstico IA <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}