"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Settings, Brain, Cloud, Code, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Definição dos tipos de Escopo
type ScopeType = "automacao" | "ia" | "saas" | "integracao";

interface StepScopeProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StepScope({ onNext, onBack }: StepScopeProps) {
  // Estado para Múltipla Seleção
  const [selectedScopes, setSelectedScopes] = useState<ScopeType[]>(["automacao"]);
  const [details, setDetails] = useState("");

  const toggleScope = (scope: ScopeType) => {
    setSelectedScopes((prev) => 
      prev.includes(scope) 
        ? prev.filter((s) => s !== scope) // Remove se já existe
        : [...prev, scope] // Adiciona se não existe
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* Header */}
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-blue-500 font-medium text-sm tracking-wider">PASSO 2 DE 4</span>
            <h1 className="text-3xl font-bold text-white mt-1">Defina o escopo do desafio</h1>
          </div>
          <span className="text-xl font-bold text-white">50% Completo</span>
        </div>
        {/* Progress Bar com gradiente sutil simulado via CSS classes */}
        <Progress
          value={50}
          className="h-2 bg-zinc-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-indigo-500"
        />

        
        <p className="text-zinc-400 max-w-2xl">
          Selecione uma ou mais áreas onde podemos ajudar sua empresa a inovar e otimizar resultados.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* Grid de Cards de Seleção */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScopeCard 
            title="Automação de Processos"
            icon={<Settings className="w-8 h-8" />}
            selected={selectedScopes.includes("automacao")}
            onClick={() => toggleScope("automacao")}
          />
          <ScopeCard 
            title="Inteligência Artificial"
            icon={<Brain className="w-8 h-8" />}
            selected={selectedScopes.includes("ia")}
            onClick={() => toggleScope("ia")}
          />
          <ScopeCard 
            title="Produto SaaS"
            icon={<Cloud className="w-8 h-8" />}
            selected={selectedScopes.includes("saas")}
            onClick={() => toggleScope("saas")}
          />
          <ScopeCard 
            title="Integração de Sistemas"
            icon={<Code className="w-8 h-8" />}
            selected={selectedScopes.includes("integracao")}
            onClick={() => toggleScope("integracao")}
          />
        </div>

        {/* Input de Detalhes */}
        <div className="space-y-3">
            <label className="text-lg font-medium text-white">
                Detalhes adicionais <span className="text-zinc-500 text-base font-normal">(Opcional)</span>
            </label>
            <div className="relative">
                <Textarea 
                    placeholder="Descreva brevemente o problema atual ou o resultado esperado com a solução..."
                    className="bg-zinc-900/50 border-zinc-800 focus:border-blue-500 min-h-40 text-lg resize-none"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
                {/* Ícone decorativo no canto inferior direito do input */}
                <div className="absolute bottom-3 right-3 text-zinc-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-6 border-t border-zinc-800 flex justify-between items-center">
        <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-zinc-400 hover:text-white hover:bg-transparent pl-0 gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
        
        <Button 
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20 gap-2 transition-all hover:scale-105"
        >
          Continuar <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

// Sub-componente Local para o Card deste passo específico
function ScopeCard({ title, icon, selected, onClick }: { title: string, icon: React.ReactNode, selected: boolean, onClick: () => void }) {
    return (
        <div 
            onClick={onClick}
            className={cn(
                "cursor-pointer relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all duration-200 text-center h-55 group",
                selected 
                    ? "border-blue-500 bg-zinc-900 shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                    : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40"
            )}
        >
            {selected && (
                <div className="absolute top-4 right-4 text-blue-500 animate-in zoom-in duration-200">
                    <CheckCircle2 className="w-6 h-6 fill-blue-500/10" />
                </div>
            )}

            <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors",
                selected 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                    : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200"
            )}>
                {icon}
            </div>
            
            <h3 className={cn(
                "text-lg font-semibold max-w-35 leading-tight",
                selected ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
            )}>
                {title}
            </h3>
        </div>
    )
}