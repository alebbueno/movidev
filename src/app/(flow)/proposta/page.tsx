/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react"; // Importar Loader
import StepContext from "./steps/step-context";
import StepDynamicForm from "./steps/step-dynamic-form"; // O componente visual "Burro"
import StepSummary from "./steps/step-summary";
import StepBudget from "./steps/step-budget";
import StepFinalForm from "./steps/step-final-form";
import StepSuccess from "./steps/step-success";

export default function PropostaPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Loading Global

  // Dados
  const [leadId, setLeadId] = useState<string | null>(null);
  const [contextData, setContextData] = useState<any>(null);
  const [generatedForm, setGeneratedForm] = useState<any>(null); // O JSON do form gerado
  const [technicalAnswers, setTechnicalAnswers] = useState<any>(null);

  const scrollToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- LOGICA PRINCIPAL ---

  // 1. Recebe o Contexto (Passo 1) -> Chama API -> Vai para Passo 2
  const handleContextSubmit = async (data: any) => {
    setContextData(data);
    setIsLoading(true); // Ativa loading
    
    try {
        console.log("📡 Gerando formulário para:", data.companyType);
        
        // Chamada única para criar Lead e Gerar Form
        const res = await fetch("/api/wizard/step", {
            method: "POST",
            body: JSON.stringify({ context: data, stepType: "generate_form" }),
        });
        
        const json = await res.json();
        
        if (json.leadId && json.data) {
            setLeadId(json.leadId);      // Salva ID
            setGeneratedForm(json.data); // Salva Estrutura do Form
            setCurrentStep(2);           // Só agora muda de tela
            scrollToTop();
        } else {
            alert("Erro ao iniciar sessão. Tente novamente.");
        }
    } catch (err) {
        console.error(err);
        alert("Erro de conexão.");
    } finally {
        setIsLoading(false);
    }
  };

  // 2. Recebe Respostas do Form (Passo 2) -> Vai para Resumo
  const handleFormSubmit = (answers: any) => {
    setTechnicalAnswers(answers);
    setCurrentStep(3); // O StepSummary vai fazer o fetch do resumo ao montar
    scrollToTop();
  };

  const handleSummaryApprove = () => {
    setCurrentStep(4);
    scrollToTop();
  };

  const handleBudgetNext = () => {
    setCurrentStep(5);
    scrollToTop();
  };

  const handleFinalSubmit = () => {
    setCurrentStep(6);
    scrollToTop();
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans selection:bg-blue-500/30">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="font-bold text-lg text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
              <span>movidev</span>
          </div>
          {leadId && <span className="text-xs text-zinc-600 font-mono">ID: {leadId.slice(0,8)}</span>}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center py-10 relative">
        
        {/* Loading Overlay (Transição entre passos) */}
        {isLoading && (
            <div className="absolute inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-white">Processando...</h3>
                <p className="text-zinc-400">Nossa IA está estruturando a próxima etapa.</p>
            </div>
        )}

        <div className="relative z-10 w-full">
            {currentStep === 1 && (
              <StepContext onNext={handleContextSubmit} />
            )}
            
            {/* Agora passamos o formData pronto para o componente */}
            {currentStep === 2 && generatedForm && (
                <StepDynamicForm 
                    formData={generatedForm} 
                    onSuccess={handleFormSubmit} 
                />
            )}

            {currentStep === 3 && leadId && (
                <StepSummary 
                    leadId={leadId}
                    context={contextData}
                    answers={technicalAnswers}
                    onNext={handleSummaryApprove}
                />
            )}

            {currentStep === 4 && (
                <StepBudget onNext={handleBudgetNext} onBack={handleBack} />
            )}

            {currentStep === 5 && (
                <StepFinalForm 
                    leadId={leadId} 
                    summary="Projeto Analisado"
                    onNext={handleFinalSubmit}
                    onBack={handleBack}
                />
            )}

            {currentStep === 6 && <StepSuccess />}
        </div>
      </main>
    </div>
  );
}