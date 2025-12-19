/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { supabase } from "@/lib/supabase"; 

// Configuração do cliente OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    // 1. Desestruturação dos dados recebidos do Frontend
    const { leadId, context, answers, stepType } = await req.json();
    let currentLeadId = leadId;

    console.log(`⚡ [API] Processando Step: ${stepType} | LeadID: ${currentLeadId || 'Novo'}`);

    // ------------------------------------------------------------------
    // 2. LÓGICA DE BANCO DE DADOS (SUPABASE)
    // ------------------------------------------------------------------

    // CENÁRIO A: Criar novo Lead (Se for a primeira interação)
    if (!currentLeadId && context) {
      console.log("📝 [API] Criando novo registro de lead...");
      const { data, error } = await supabase.from("leads").insert({
        role: context.userRole,
        company_type: context.companyType,
        project_stage: context.projectStage,
        segment: context.segment,
        status: 'started',
        created_at: new Date().toISOString()
      }).select().single();
      
      if (error) {
        console.error("❌ [API] Erro crítico ao criar lead:", error);
        throw new Error("Falha ao persistir dados iniciais.");
      }
      currentLeadId = data.id;
    }

    // CENÁRIO B: Atualizar Lead existente (Se vierem respostas do formulário dinâmico)
    if (currentLeadId && answers) {
         console.log("💾 [API] Salvando respostas da etapa anterior...");
         const { error } = await supabase.from("leads").update({ 
            ai_conversation: answers, // Salva o JSON das respostas técnicas
            status: stepType === "generate_summary" ? 'analyzed' : 'interacting'
         }).eq("id", currentLeadId);

         if (error) console.error("⚠️ [API] Erro ao atualizar lead:", error);
    }

    // ------------------------------------------------------------------
    // 3. LÓGICA DE INTELIGÊNCIA ARTIFICIAL (OPENAI)
    // ------------------------------------------------------------------

    let systemPrompt = "";
    
    // CASO 1: GERAR O FORMULÁRIO VISUAL (Passo 2)
    if (stepType === "generate_form") {
        systemPrompt = `
          Você é um Product Designer e Tech Lead Sênior da 'movidev'.
          
          CONTEXTO DO CLIENTE:
          ${JSON.stringify(context)}
          
          OBJETIVO:
          Crie um formulário visual dinâmico para aprofundar o entendimento técnico e de negócio.
          
          REGRAS VISUAIS DE UX (Obrigatório seguir):
          1. Use 'component': 'card_select' para perguntas de múltipla escolha.
          2. Use 'component': 'textarea' para perguntas abertas (apenas uma no final).
          3. PARA CADA OPÇÃO DO CARD, você DEVE fornecer:
             - "label": Nome curto da opção.
             - "description": Uma frase curta (3-6 palavras) explicando a opção. (Essencial para o design do card).
             - "icon": Um nome de ícone válido da biblioteca 'lucide-react' (ex: 'zap', 'shield', 'users', 'globe', 'smartphone', 'database').
          
          JSON DE RETORNO (Exemplo):
          {
            "type": "form",
            "title": "Título personalizado baseado no segmento",
            "description": "Subtítulo explicando por que precisamos dessas informações.",
            "fields": [
              {
                "id": "tech_focus",
                "label": "Qual o foco principal da solução?",
                "component": "card_select",
                "options": [
                   { "label": "Mobile App", "value": "mobile", "description": "iOS e Android nativo ou híbrido", "icon": "smartphone" },
                   { "label": "Plataforma Web", "value": "web", "description": "SaaS responsivo e escalável", "icon": "globe" }
                ]
              },
              {
                "id": "details",
                "label": "Detalhes de Integração",
                "component": "textarea",
                "placeholder": "Descreva se precisamos integrar com ERPs, CRMs ou APIs legadas..."
              }
            ]
          }
        `;
    } 
    
    // CASO 2: GERAR O RESUMO DA PROPOSTA (Passo 3)
    else if (stepType === "generate_summary") {
        systemPrompt = `
          Você é um Arquiteto de Soluções.
          
          CONTEXTO: ${JSON.stringify(context)}
          RESPOSTAS TÉCNICAS: ${JSON.stringify(answers)}
          
          OBJETIVO:
          Gere um Resumo Executivo Técnico estruturado para uma proposta comercial.
          
          JSON DE RETORNO:
          {
            "type": "summary",
            "project_title": "Crie um nome comercial para o projeto",
            "executive_summary": "Resumo de 2 parágrafos vendendo a solução.",
            "core_features": ["Feature Chave 1", "Feature Chave 2", "Feature Chave 3", "Feature Chave 4"],
            "suggested_stack": ["Frontend (Next.js)", "Backend", "Infra", "AI Model"],
            "challenges": ["Possível desafio técnico 1", "Ponto de atenção 2"]
          }
        `;
    }

    // Chamada à API da OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Recomendado para seguir instruções JSON complexas
      messages: [{ role: "system", content: systemPrompt }],
      response_format: { type: "json_object" },
      temperature: 0.2, // Baixa temperatura para consistência estrutural
    });

    const aiContent = completion.choices[0].message.content;
    
    if (!aiContent) {
        throw new Error("A IA não retornou conteúdo válido.");
    }

    const aiResponse = JSON.parse(aiContent);

    // Retorna para o Frontend
    return NextResponse.json({ 
      leadId: currentLeadId,
      data: aiResponse
    });

  } catch (error: any) {
    console.error("🔥 [API Error]:", error);
    return NextResponse.json(
        { error: error.message || "Erro interno no servidor" }, 
        { status: 500 }
    );
  }
}