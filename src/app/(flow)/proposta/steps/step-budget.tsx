/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Rocket, Zap, Wallet, Clock, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepBudgetProps {
  onNext: () => void;
  onBack: () => void;
}

const TIME_LABELS = [
  { value: 0, label: "Urgente", sub: "(< 1 Mês)" },
  { value: 33, label: "Curto Prazo", sub: "(1-3 Meses)" },
  { value: 66, label: "Médio Prazo", sub: "(3-6 Meses)" },
  { value: 100, label: "Longo Prazo", sub: "(6+ Meses)" },
];

export default function StepBudget({ onNext, onBack }: StepBudgetProps) {
  const [objective, setObjective] = useState("");
  const [timeValue, setTimeValue] = useState([66]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>("growth");

  // Lógica para encontrar o label mais próximo do slider
  const currentLabel = TIME_LABELS.reduce((prev, curr) => 
    Math.abs(curr.value - timeValue[0]) < Math.abs(prev.value - timeValue[0]) ? curr : prev
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* Header */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
            <div>
                <span className="text-blue-500 font-medium text-sm tracking-wider uppercase">Passo 4 de 5</span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-1">Objetivo & Orçamento</h1>
            </div>
            <span className="text-zinc-400 text-sm font-medium">80% Concluído</span>
        </div>
        <Progress value={80} className="h-2 bg-zinc-800 mb-6" indicatorClassName="bg-gradient-to-r from-blue-600 to-purple-600" />
        <p className="text-zinc-400 text-lg max-w-2xl">
             Defina o escopo do seu projeto. Essas informações nos ajudam a dimensionar a equipe e a tecnologia ideal.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Card 1: Objetivo */}
        <section className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[1.5rem] hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                    <Rocket className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Objetivo Principal</h3>
                    <p className="text-zinc-500 text-sm">O que você espera alcançar com esta solução?</p>
                </div>
            </div>
            
            <div className="relative">
                <Textarea 
                    placeholder="Ex: Precisamos de um chatbot que automatize 80% do nosso atendimento ao cliente..."
                    className="bg-zinc-950/50 border-zinc-800 min-h-35 text-base resize-none focus:border-blue-500 rounded-xl p-5 text-zinc-200"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                />
                <p className="text-xs text-zinc-600 absolute bottom-4 right-4">Seja específico sobre integrações.</p>
            </div>
        </section>

        {/* Card 2: Prazo (Slider) */}
        <section className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[1.5rem] hover:border-zinc-700 transition-colors">
            <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Prazo Ideal</h3>
                        <p className="text-zinc-500 text-sm">Quando precisa da solução operacional?</p>
                    </div>
                </div>
                <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {currentLabel.label}
                </div>
            </div>

            <div className="px-4 pb-4">
                <Slider 
                    value={timeValue} 
                    onValueChange={setTimeValue} 
                    max={100} 
                    step={33} 
                    className="mb-14 cursor-pointer"
                />
                
                {/* Labels posicionados */}
                <div className="relative w-full h-6 text-sm">
                    {TIME_LABELS.map((item) => (
                        <div key={item.value} className={cn(
                            "absolute transform -translate-x-1/2 flex flex-col items-center transition-all duration-300 w-32",
                            Math.abs(timeValue[0] - item.value) < 15 ? "text-blue-400 scale-110 font-bold" : "text-zinc-600 scale-100"
                        )} style={{ left: `${item.value}%` }}>
                            <span>{item.label}</span>
                            <span className="text-[10px] uppercase tracking-wider opacity-70 mt-1">{item.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Card 3: Investimento */}
        <section className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[1.5rem] hover:border-zinc-700 transition-colors">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                        <Wallet className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Faixa de Investimento</h3>
                        <p className="text-zinc-500 text-sm">Estimativa para alocação de recursos.</p>
                    </div>
                </div>
                <Info className="w-5 h-5 text-zinc-600 hover:text-zinc-400 cursor-help transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BudgetOption 
                    title="MVP / Prototipagem"
                    price="Até R$ 50k"
                    selected={selectedBudget === "mvp"}
                    onClick={() => setSelectedBudget("mvp")}
                />
                <BudgetOption 
                    title="Growth / Escala"
                    price="R$ 50k - R$ 150k"
                    isPopular
                    selected={selectedBudget === "growth"}
                    onClick={() => setSelectedBudget("growth")}
                />
                 <BudgetOption 
                    title="Enterprise"
                    price="R$ 150k - R$ 500k"
                    selected={selectedBudget === "enterprise"}
                    onClick={() => setSelectedBudget("enterprise")}
                />
                 <BudgetOption 
                    title="Projeto Personalizado"
                    price="Sob consulta"
                    selected={selectedBudget === "custom"}
                    onClick={() => setSelectedBudget("custom")}
                />
            </div>
        </section>

      </div>

      {/* Footer */}
      <div className="mt-12 flex justify-between items-center">
        <Button 
            variant="outline" 
            onClick={onBack}
            className="border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full px-8 py-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </Button>
        
        <Button 
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-blue-900/20 gap-2 transition-all hover:scale-105"
        >
          Próximo Passo <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

// Sub-componente Card de Orçamento
function BudgetOption({ title, price, selected, onClick, isPopular }: any) {
    return (
        <div 
            onClick={onClick}
            className={cn(
                "cursor-pointer flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                selected 
                    ? "border-blue-500 bg-blue-900/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]" 
                    : "border-zinc-800 bg-zinc-950/30 hover:border-zinc-700 hover:bg-zinc-900"
            )}
        >
            <div className="flex items-center gap-4 relative z-10">
                <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    selected ? "border-blue-500 bg-blue-500" : "border-zinc-700 group-hover:border-zinc-500"
                )}>
                    {selected && <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />}
                </div>
                <div>
                    <h4 className={cn("font-bold text-lg", selected ? "text-white" : "text-zinc-300 group-hover:text-white")}>{title}</h4>
                    <p className="text-sm text-zinc-500 font-mono mt-0.5">{price}</p>
                </div>
            </div>

            {isPopular && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500 opacity-10 transform scale-[2.5] pointer-events-none">
                    <Zap />
                </div>
            )}
            
            {selected && (
               <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-transparent pointer-events-none" />
            )}
        </div>
    )
}