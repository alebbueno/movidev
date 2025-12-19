/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface StepFinalFormProps {
  leadId: string | null;
  summary: string;
  onNext: () => void;
  onBack: () => void;
}

export default function StepFinalForm({ leadId, summary, onNext, onBack }: StepFinalFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", budget: "growth" });

  const handleSubmit = async () => {
    if (!leadId) return;
    setLoading(true);

    try {
      // Atualiza o lead existente com os dados de contato
      const { error } = await supabase.from("leads").update({
        contact_name: form.name,
        contact_email: form.email,
        contact_phone: form.whatsapp,
        budget_range: form.budget,
        status: "processed"
      }).eq("id", leadId);

      if (error) throw error;
      onNext(); // Vai para sucesso
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-right-8">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Diagnóstico Concluído</h2>
        <p className="text-zinc-400">Nossa IA gerou uma pré-proposta para seu projeto.</p>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl space-y-6">
        <div className="space-y-4">
            <label className="text-sm font-medium text-white">Nome Completo</label>
            <Input 
                className="bg-zinc-950 border-zinc-800 h-12" 
                placeholder="Ex: João Silva"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
            />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email Corporativo</label>
                <Input 
                    className="bg-zinc-950 border-zinc-800 h-12" 
                    placeholder="joao@empresa.com"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-white">WhatsApp</label>
                <Input 
                    className="bg-zinc-950 border-zinc-800 h-12" 
                    placeholder="(11) 99999-9999"
                    value={form.whatsapp}
                    onChange={e => setForm({...form, whatsapp: e.target.value})}
                />
            </div>
        </div>

        <div className="pt-4">
            <Button 
                onClick={handleSubmit}
                disabled={loading || !form.email}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-xl text-lg shadow-lg shadow-blue-900/20"
            >
                {loading ? "Finalizando..." : "Receber Proposta Completa"}
            </Button>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <button onClick={onBack} className="text-zinc-500 hover:text-white text-sm">
            Voltar para análise
        </button>
      </div>
    </div>
  );
}