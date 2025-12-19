/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

interface StepDynamicProps {
  context: any;
  onConclusion: (leadId: string, answers: any) => void; // Ajustei o nome da prop para bater com seu page.tsx antigo se necessário
}

export default function StepDynamic({ context, onConclusion }: StepDynamicProps) {
  const [loading, setLoading] = useState(true);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  useEffect(() => {
    const initForm = async () => {
      try {
        const res = await fetch("/api/wizard/step", {
          method: "POST",
          body: JSON.stringify({ context, stepType: "generate_form" }),
        });
        
        const json = await res.json();
        
        // Correção do erro: A API agora retorna 'data', não 'nextStep'
        if (json.data) {
            setLeadId(json.leadId);
            setFormData(json.data);
        } else {
            console.error("Formato inesperado da API:", json);
        }

      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    initForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelection = (fieldId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = () => {
    // Envia para o pai (page.tsx) avançar para o resumo
    if (leadId) {
        // A prop no page.tsx pode ser onConclusion ou onSuccess dependendo da versão.
        // Vou assumir a assinatura do step-dynamic antigo: (leadId, summary?)
        // Mas como mudamos a lógica, o ideal é passar as respostas.
        onConclusion(leadId, answers); 
    }
  };

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center animate-in fade-in">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-white mb-2">Analisando Contexto...</h2>
        <p className="text-zinc-500">A IA está criando um briefing personalizado para {context?.companyType || "sua empresa"}.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-in slide-in-from-right-8 fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
            <span className="text-blue-500 font-medium text-sm tracking-wider uppercase">Passo 2 de 4</span>
            <span className="text-zinc-400 text-sm">50% Completo</span>
        </div>
        <Progress value={50} className="h-2 bg-zinc-800 mb-6" indicatorClassName="bg-gradient-to-r from-blue-600 to-purple-600" />
        
        <h1 className="text-4xl font-bold text-white mb-3">
            {formData?.title || "Defina o escopo"}
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
            {formData?.description}
        </p>
      </div>

      <div className="space-y-12">
        
        {formData?.fields?.map((field: any) => (
            <div key={field.id} className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                
                {/* Visual Cards Grid */}
                {field.component === "card_select" && (
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">{field.label}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {field.options?.map((opt: any) => {
                                const isSelected = answers[field.id] === opt.value;
                                return (
                                    <div 
                                        key={opt.value}
                                        onClick={() => handleSelection(field.id, opt.value)}
                                        className={cn(
                                            "cursor-pointer relative flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 transition-all duration-300 group min-h-60",
                                            isSelected 
                                                ? "border-blue-500 bg-zinc-900 shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                                                : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40"
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-5 right-5 transition-all duration-300",
                                            isSelected ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                        )}>
                                            <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500/10" />
                                        </div>

                                        <div className={cn(
                                            "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300",
                                            isSelected 
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110" 
                                                : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200"
                                        )}>
                                            <DynamicIcon name={opt.icon} className="w-9 h-9" />
                                        </div>
                                        
                                        <h4 className={cn(
                                            "text-lg font-bold text-center leading-tight max-w-37.5",
                                            isSelected ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                                        )}>
                                            {opt.label}
                                        </h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Visual Textarea */}
                {field.component === "textarea" && (
                    <div className="space-y-3">
                         <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                            {field.label} <span className="text-zinc-500 text-sm font-normal">(Opcional)</span>
                        </h3>
                        <div className="relative">
                            <Textarea 
                                placeholder={field.placeholder}
                                className="bg-zinc-900/50 border-zinc-800 focus:border-blue-500 min-h-45 text-lg p-6 resize-none rounded-2xl text-zinc-200 placeholder:text-zinc-600 shadow-inner focus:ring-1 focus:ring-blue-500/30"
                                onChange={(e) => handleSelection(field.id, e.target.value)}
                            />
                        </div>
                    </div>
                )}
            </div>
        ))}

        <div className="pt-8 flex justify-end">
            <Button 
                onClick={handleSubmit}
                disabled={Object.keys(answers).length === 0}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-lg rounded-full shadow-lg shadow-blue-900/20 gap-2 transition-all hover:scale-105"
            >
                Continuar <ArrowRight className="w-5 h-5" />
            </Button>
        </div>

      </div>
    </div>
  );
}