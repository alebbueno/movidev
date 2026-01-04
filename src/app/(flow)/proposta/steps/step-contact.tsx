/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Certifique-se de ter este componente shadcn
import { Checkbox } from "@/components/ui/checkbox"; // Certifique-se de ter este componente shadcn
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, CheckCircle2, User, Building2, Briefcase, Mail, Phone, 
  Bot, ShieldCheck, Clock, Lock 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StepContactProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StepContact({ onNext, onBack }: StepContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    agreed: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* Header */}
      <div className="mb-8 space-y-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-blue-500 font-medium text-sm tracking-wider">PASSO 5 DE 5</span>
            <h1 className="text-3xl font-bold text-white mt-1">Quase lá! Vamos finalizar.</h1>
          </div>
          <span className="text-xl font-bold text-white">100%</span>
        </div>
        <Progress
        value={95}
        className="h-2 bg-zinc-800 [&>div]:bg-green-500"
        />

      </div>

      {/* Grid de Conteúdo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Coluna Esquerda: Resumo IA (Sticky) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <p className="text-zinc-400">
                Deixe seu contato para que nossa IA possa compilar o relatório personalizado e preparar a melhor abordagem para sua empresa.
            </p>

            {/* Card do Assistente */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <div className="flex gap-4">
                    <div className="relative">
                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-zinc-900">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400 font-bold text-xs tracking-wide">MOVIDEV ASSISTANT</span>
                            <span className="text-zinc-600 text-xs">• Agora</span>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed italic">
                            &quot;Analisei suas respostas das etapas anteriores. Identifiquei oportunidades de automação que podem reduzir seus custos operacionais em até 30%. Tenho uma proposta ideal em mente para o setor de Varejo.&quot;
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800/50 flex flex-wrap gap-2">
                    {["Automação SaaS", "Integração API", "Enterprise"].map(tag => (
                        <span key={tag} className="text-xs bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded-full text-zinc-400">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Coluna Direita: Formulário */}
        <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800/50 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
            <div className="space-y-5">
                
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-300 ml-1">Nome Completo</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                        <Input 
                            placeholder="Ex: João Silva" 
                            className="pl-10 h-12 bg-zinc-950/50 border-zinc-800 focus:border-blue-500"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-300 ml-1">Empresa</label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <Input 
                                placeholder="Sua Empresa Ltda" 
                                className="pl-10 h-12 bg-zinc-950/50 border-zinc-800 focus:border-blue-500"
                                value={formData.company}
                                onChange={(e) => handleChange("company", e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-300 ml-1">Cargo</label>
                        <div className="relative">
                            <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <Input 
                                placeholder="CEO, CTO, Gerente..." 
                                className="pl-10 h-12 bg-zinc-950/50 border-zinc-800 focus:border-blue-500"
                                value={formData.role}
                                onChange={(e) => handleChange("role", e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-300 ml-1">Email Corporativo</label>
                    <div className="relative group">
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                        <Input 
                            type="email"
                            placeholder="joao.silva@empresa.com" 
                            className="pl-10 h-12 bg-zinc-950/50 border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                        {/* Ícone de verificação simulado se tiver texto */}
                        {formData.email.includes("@") && (
                            <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500 animate-in zoom-in" />
                        )}
                    </div>
                    {formData.email.includes("@") && (
                        <p className="text-xs text-green-500 ml-1 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Email verificado
                        </p>
                    )}
                </div>

                 <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-300 ml-1">Telefone / WhatsApp</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                        <Input 
                            placeholder="(00) 00000-0000" 
                            className="pl-10 h-12 bg-zinc-950/50 border-zinc-800 focus:border-blue-500"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                    <Checkbox 
                        id="terms" 
                        checked={formData.agreed}
                        onCheckedChange={(checked) => handleChange("agreed", checked === true)}
                        className="mt-1 data-[state=checked]:bg-blue-600 border-zinc-700"
                    />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium text-zinc-300 leading-snug cursor-pointer hover:text-white"
                        >
                            Concordo com a Política de Privacidade
                        </label>
                        <p className="text-xs text-zinc-500">
                            Seus dados estão protegidos e não serão compartilhados com terceiros.
                        </p>
                    </div>
                </div>

                <Button 
                  onClick={onNext}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg rounded-xl shadow-lg shadow-blue-900/20 gap-2 transition-all hover:scale-[1.01] mt-4"
                  disabled={!formData.agreed || !formData.email}
                >
                  Receber Proposta Personalizada <ArrowLeft className="w-5 h-5 rotate-180" />
                </Button>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800/50">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Lock className="w-3 h-3" /> SSL Seguro
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Clock className="w-3 h-3" /> Resposta em 24h
                    </div>
                </div>

            </div>
        </div>
      </div>
      
      {/* Botão Voltar simples fora do card */}
      <div className="mt-8 max-w-6xl mx-auto">
        <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-zinc-500 hover:text-white pl-0 gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar uma etapa
        </Button>
      </div>

    </div>
  );
}