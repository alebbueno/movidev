/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { SelectionCard } from "@/components/wizard/selection-card"; // Importe o componente atualizado acima

interface StepDynamicFormProps {
  formData: any;
  onSuccess: (answers: any) => void;
}

export default function StepDynamicForm({ formData, onSuccess }: StepDynamicFormProps) {
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleSelection = (fieldId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = () => {
    onSuccess(answers);
  };

  // Validação simples
  const isFormValid = formData?.fields?.every((field: any) => {
      if (field.component === 'card_select') return !!answers[field.id];
      return true; 
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-in slide-in-from-right-8 fade-in duration-500">
      
      {/* Header com Progresso */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
            <div>
                <span className="text-blue-500 font-medium text-sm tracking-wider uppercase">PASSO 2 DE 4</span>
                <h1 className="text-3xl font-bold text-white mt-1">
                    {formData?.title || "Detalhes do Desafio"}
                </h1>
            </div>
            <span className="text-xl font-bold text-white">50%</span>
        </div>
        <Progress value={50} className="h-2 bg-zinc-800 mb-6" indicatorClassName="bg-blue-600" />
        <p className="text-zinc-400 text-lg max-w-2xl">
            {formData?.description}
        </p>
      </div>

      <div className="space-y-12">
        
        {formData?.fields?.map((field: any, index: number) => (
            <div key={field.id} className="space-y-6 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                
                {/* Título da Pergunta com Numeração (Estilo da referência) */}
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-800 text-sm text-zinc-400 font-mono border border-zinc-700">
                        {index + 1}
                    </span>
                    {field.label}
                </h3>

                {/* 1. GRID DE CARDS (Usando o mesmo componente do Contexto) */}
                {field.component === "card_select" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {field.options?.map((opt: any) => (
                            <SelectionCard
                                key={opt.value}
                                title={opt.label}
                                description={opt.description} // A IA precisa mandar isso agora
                                icon={<DynamicIcon name={opt.icon} className="w-6 h-6" />}
                                selected={answers[field.id] === opt.value}
                                onClick={() => handleSelection(field.id, opt.value)}
                            />
                        ))}
                    </div>
                )}

                {/* 2. TEXTAREA (Detalhes) */}
                {field.component === "textarea" && (
                    <div className="relative group max-w-4xl ml-10"> {/* Indentado para alinhar com texto */}
                        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-500 blur"></div>
                        <Textarea 
                            placeholder={field.placeholder}
                            className="relative bg-zinc-900 border-zinc-800 focus:border-blue-500 min-h-35 text-lg p-6 resize-none rounded-xl text-zinc-200 placeholder:text-zinc-600 shadow-inner"
                            onChange={(e) => handleSelection(field.id, e.target.value)}
                        />
                    </div>
                )}

            </div>
        ))}

        <div className="pt-8 flex justify-end border-t border-zinc-800 mt-12">
            <Button 
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={cn(
                    "px-10 py-7 text-lg rounded-full gap-2 transition-all duration-300",
                    isFormValid 
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30 hover:scale-105" 
                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                )}
            >
                Continuar <ArrowRight className="w-5 h-5" />
            </Button>
        </div>

      </div>
    </div>
  );
}