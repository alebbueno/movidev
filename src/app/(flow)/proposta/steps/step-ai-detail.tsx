/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Bot, Sparkles, CheckCircle2, AlertCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

// --- CONFIGURAÇÃO ---
// ⚠️ Mude para FALSE quando tiver a API Route /api/wizard/next-step pronta
const USE_MOCK_MODE = true; 

// --- TIPAGEM (Contrato com a IA) ---
type AiUiComponent = "single_choice" | "multiple_choice" | "textarea";

interface AiOption {
  id: string;
  label: string;
  description?: string;
  icon?: string; // Nome do ícone (ex: 'database') - mapeamento necessário se for dinâmico
}

interface AiResponse {
  type: "question" | "conclusion";
  ui_component?: AiUiComponent;
  title?: string;
  subtitle?: string;
  options?: AiOption[];
  proposal_summary?: string; // Se type == conclusion
}

interface StepAiDetailProps {
  onNext: () => void;
  onBack: () => void;
}

// --- MOCK DATA (Para teste imediato) ---
const MOCK_QUESTIONS: AiResponse[] = [
  {
    type: "question",
    ui_component: "single_choice",
    title: "Qual o maior gargalo operacional hoje?",
    subtitle: "Nossa IA identificou que para seu setor, estes costumam ser os maiores desafios.",
    options: [
      { id: "support", label: "Atendimento Lento", description: "Filas de espera no WhatsApp/Email" },
      { id: "leads", label: "Qualificação de Leads", description: "Comercial perde tempo com curiosos" },
      { id: "ops", label: "Processos Manuais", description: "Muita digitação e planilhas" },
    ]
  },
  {
    type: "question",
    ui_component: "textarea",
    title: "Poderia detalhar um pouco mais?",
    subtitle: "Descreva brevemente como esse processo é feito hoje (ex: usamos Excel, CRM X, etc).",
  },
  {
    type: "conclusion",
    proposal_summary: "Entendido. Baseado nisso, a solução ideal envolve um Agente de Triagem Automática integrado ao seu CRM."
  }
];

export default function StepAiDetail({ onNext, onBack }: StepAiDetailProps) {
  // Estado
  const [loading, setLoading] = useState(true);
  const [aiState, setAiState] = useState<AiResponse | null>(null);
  const [history, setHistory] = useState<any[]>([]); // Histórico da conversa
  const [inputValue, setInputValue] = useState(""); // Para textarea
  const [loadingText, setLoadingText] = useState("Iniciando assistente...");

  // Inicialização (Boot)
  useEffect(() => {
    // Simula o "Cold Start" da IA analisando o contexto dos passos anteriores
    fetchNextStep(null, "start");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Função Central: Chama a API (ou Mock)
  const fetchNextStep = async (answer: any, trigger: "user_action" | "start" = "user_action") => {
    setLoading(true);
    setLoadingText(trigger === "start" ? "Analisando perfil da empresa..." : "Processando resposta...");

    try {
      if (USE_MOCK_MODE) {
        // --- LÓGICA MOCK ---
        await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
        const nextIndex = history.length; // Simplesmente pega o próximo do array mock
        const mockResponse = MOCK_QUESTIONS[nextIndex] || MOCK_QUESTIONS[MOCK_QUESTIONS.length - 1];
        
        setAiState(mockResponse);
        if (trigger === "user_action") {
            setHistory(prev => [...prev, { role: "user", content: answer }, { role: "assistant", content: JSON.stringify(mockResponse) }]);
        }
      } else {
        // --- LÓGICA REAL (API) ---
        // Aqui você enviaria o contexto acumulado dos passos 1 e 2 também
        const res = await fetch('/api/wizard/next-step', { 
            method: 'POST', 
            body: JSON.stringify({ 
                lastAnswer: answer, 
                history: history,
                // context: { ... dados do passo 1 e 2 ... } 
            }) 
        });
        
        if (!res.ok) throw new Error("Erro na IA");
        
        const data = await res.json();
        setAiState(data.nextStep);
        setHistory(data.updatedHistory);
      }
    } catch (error) {
      console.error("Erro no fluxo IA:", error);
      // Fallback de erro visual poderia vir aqui
    } finally {
      setLoading(false);
    }
  };

  // Handler de resposta do usuário
  const handleAnswer = (value: string) => {
    // Se for conclusão, apenas avança para o próximo passo principal do Wizard
    if (aiState?.type === "conclusion") {
        onNext();
        return;
    }
    fetchNextStep(value);
    setInputValue("");
  };

  // --- RENDERIZAÇÃO CONDICIONAL ---

  // 1. Estado de Carregamento (Skeleton / Spinner Rico)
  if (loading || !aiState) {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12 min-h-100 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                <div className="w-20 h-20 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center relative z-10 shadow-2xl">
                     <Bot className="w-10 h-10 text-blue-500 animate-bounce" />
                </div>
                {/* Partículas orbitando */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-500 rounded-full animate-ping animation-duration-[2s]"></div>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">{loadingText}</h2>
            <p className="text-zinc-500 max-w-md">Nossa IA está estruturando a melhor abordagem baseada nas suas respostas...</p>
        </div>
    );
  }

  // 2. Estado de Conclusão (Resumo antes de avançar)
  if (aiState.type === "conclusion") {
      return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in zoom-in duration-300">
             <div className="bg-linear-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 text-center shadow-2xl">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Diagnóstico Concluído</h2>
                <p className="text-zinc-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    {aiState.proposal_summary || "Coletamos dados suficientes para gerar sua proposta."}
                </p>
                <Button 
                    onClick={onNext}
                    className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-green-900/20 transition-all hover:scale-105"
                >
                    Ver Orçamento Estimado <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
             </div>
        </div>
      )
  }

  // 3. Estado de Pergunta (Interface Generativa)
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-right-8 duration-500">
      
      {/* Header */}
      <div className="mb-8 space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div className="flex items-center gap-3">
             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20">
                <Sparkles className="w-4 h-4 text-blue-500" />
             </span>
             <div>
                <span className="text-blue-500 font-medium text-xs tracking-wider uppercase">Consultor IA</span>
                <h1 className="text-xl font-bold text-white leading-none mt-0.5">Diagnóstico Profundo</h1>
             </div>
          </div>
          <span className="text-sm font-medium text-zinc-500">Dinâmico</span>
        </div>
        <Progress value={33 + (history.length * 10)} className="h-1.5 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-blue-600 to-indigo-500" />
      </div>

      {/* Card da Pergunta */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-1 backdrop-blur-sm">
        <div className="bg-zinc-950/50 rounded-[22px] p-6 md:p-10 min-h-95 flex flex-col">
            
            {/* Texto da Pergunta */}
            <div className="mb-8 space-y-2">
                <h2 className="text-3xl font-semibold text-white leading-tight">
                    {aiState.title}
                </h2>
                {aiState.subtitle && (
                    <p className="text-lg text-zinc-400">
                        {aiState.subtitle}
                    </p>
                )}
            </div>

            {/* Renderizador de UI Dinâmica */}
            <div className="flex-1">
                
                {/* CASO 1: SINGLE CHOICE (Botões) */}
                {aiState.ui_component === "single_choice" && (
                    <div className="grid grid-cols-1 gap-3">
                        {aiState.options?.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => handleAnswer(opt.label)} // Envia o label ou ID como resposta
                                className="group relative flex items-center p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-500/50 transition-all text-left"
                            >
                                <div className="flex-1">
                                    <h3 className="font-medium text-lg text-zinc-200 group-hover:text-white transition-colors">
                                        {opt.label}
                                    </h3>
                                    {opt.description && (
                                        <p className="text-sm text-zinc-500 mt-1">{opt.description}</p>
                                    )}
                                </div>
                                <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                            </button>
                        ))}
                    </div>
                )}

                {/* CASO 2: TEXTAREA (Input Aberto) */}
                {aiState.ui_component === "textarea" && (
                    <div className="space-y-4">
                        <Textarea 
                            autoFocus
                            placeholder="Digite sua resposta aqui..."
                            className="min-h-40 bg-zinc-900 border-zinc-800 focus:border-blue-500 text-lg p-4 resize-none rounded-xl"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    if (inputValue.trim()) handleAnswer(inputValue);
                                }
                            }}
                        />
                        <div className="flex justify-end">
                            <Button 
                                onClick={() => handleAnswer(inputValue)}
                                disabled={!inputValue.trim()}
                                className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6"
                            >
                                Enviar Resposta <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* (Futuro: Adicionar Multiple Choice aqui) */}

            </div>
            
            {/* Footer de Navegação (Apenas Voltar, pois Avançar é pela resposta) */}
            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-sm text-zinc-600">
                <Button variant="ghost" onClick={onBack} className="hover:text-white pl-0">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Voltar / Reiniciar
                </Button>
                {aiState.ui_component === "single_choice" && (
                    <span className="hidden md:inline-block opacity-60">Selecione uma opção para continuar</span>
                )}
                {aiState.ui_component === "textarea" && (
                    <span className="hidden md:inline-block opacity-60">Pressione <strong>Enter</strong> para enviar</span>
                )}
            </div>

        </div>
      </div>
    </div>
  );
}