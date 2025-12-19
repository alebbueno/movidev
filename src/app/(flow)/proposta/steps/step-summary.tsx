/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Server, AlertTriangle, Cpu, ArrowRight } from "lucide-react";

interface StepSummaryProps {
  leadId: string;
  context: any; // Dados do passo 1
  answers: any; // Dados do passo 2
  onNext: () => void;
}

export default function StepSummary({ leadId, context, answers, onNext }: StepSummaryProps) {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<any>(null);

  // Gera o resumo assim que monta
  useEffect(() => {
    const generateSummary = async () => {
      try {
        const res = await fetch("/api/wizard/step", {
          method: "POST",
          body: JSON.stringify({ 
            leadId, 
            context,
            answers,
            stepType: "generate_summary" 
          }),
        });
        const json = await res.json();
        setSummary(json.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    generateSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
        <div className="w-full max-w-3xl mx-auto py-20 text-center animate-in fade-in">
          <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 border-t-4 border-green-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-green-500" />
              </div>
          </div>
          <h2 className="text-xl font-semibold text-white">Compilando arquitetura...</h2>
          <p className="text-zinc-500">Nossa IA está desenhando a solução ideal para {context.companyType}.</p>
        </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-in zoom-in duration-500">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proposta de Escopo: <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">{summary?.project_title}</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {summary?.executive_summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Card 1: Features */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-semibold uppercase tracking-wider text-sm">
                <CheckCircle2 className="w-4 h-4" /> Funcionalidades Core
            </div>
            <ul className="space-y-3">
                {summary?.core_features?.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                        {feat}
                    </li>
                ))}
            </ul>
        </div>

        {/* Card 2: Stack */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-purple-400 font-semibold uppercase tracking-wider text-sm">
                <Server className="w-4 h-4" /> Stack Sugerida
            </div>
            <div className="flex flex-wrap gap-2">
                {summary?.suggested_stack?.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-xs text-zinc-400">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* Card 3: Desafios (Full Width) */}
        <div className="bg-amber-900/10 border border-amber-900/30 p-6 rounded-2xl md:col-span-3">
             <div className="flex items-center gap-2 mb-4 text-amber-500 font-semibold uppercase tracking-wider text-sm">
                <AlertTriangle className="w-4 h-4" /> Pontos de Atenção & Desafios
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {summary?.challenges?.map((chal: string, i: number) => (
                    <div key={i} className="flex gap-3 text-amber-200/80 text-sm">
                        <span className="font-mono text-amber-500/50">0{i+1}.</span>
                        {chal}
                    </div>
                ))}
             </div>
        </div>

      </div>

      <div className="flex justify-center">
        <Button 
            onClick={onNext}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 rounded-full text-lg shadow-2xl shadow-green-900/20 transition-transform hover:scale-105"
        >
            Aprovar Escopo e Ver Orçamento <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

    </div>
  );
}