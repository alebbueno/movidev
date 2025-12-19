/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Home, ExternalLink } from "lucide-react";

export default function StepSuccess() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh] animate-in zoom-in duration-500">
      
      {/* Animação de Sucesso */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-1000"></div>
        <div className="w-24 h-24 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center relative z-10 shadow-2xl">
             <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center animate-in scale-in duration-300 delay-150">
                <CheckCircle2 className="w-10 h-10 text-white" />
             </div>
        </div>
        {/* Partículas decorativas (pontos) */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-75"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-150"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center tracking-tight">
        Proposta Recebida!
      </h1>
      
      <p className="text-zinc-400 text-center text-lg max-w-xl mb-10 leading-relaxed">
        Obrigado! Nossos algoritmos já estão processando seus requisitos. 
        Um de nossos especialistas entrará em contato em até <span className="text-blue-400 font-semibold">24 horas</span>.
      </p>

      {/* Card de Resumo do Pedido */}
      <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-10 relative overflow-hidden">
        {/* Faixa decorativa no topo do card */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600"></div>
        
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
            <div className="p-2 bg-zinc-800 rounded-lg">
                <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <h3 className="text-white font-semibold">Resumo da Solicitação</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    {'< >'} Tipo de Projeto
                </p>
                <p className="text-zinc-200 font-medium">Desenvolvimento Web & IA</p>
            </div>
            <div>
                <p className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-1">
                    $ Orçamento
                </p>
                <p className="text-zinc-200 font-medium">Enterprise (Escalável)</p>
            </div>
            <div>
                <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">
                    ⏱ Prazo
                </p>
                <p className="text-zinc-200 font-medium">O mais breve possível</p>
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs text-zinc-500">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Status: Em Análise pela IA
            </div>
            <span className="font-mono">ID: #8392-AX</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-lg shadow-blue-900/20 text-base"
            onClick={() => window.location.href = '/'} // Redirecionar para home real
        >
          <Home className="w-4 h-4 mr-2" /> Voltar à Home
        </Button>
        
        <Button 
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 px-8 py-6 rounded-full text-base"
        >
          Ver Outros Cases <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>

    </div>
  );
}