/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { openai, AiResponseSchema } from "@/lib/openai";
import { createClient } from "@supabase/supabase-js"; // Usar @supabase/supabase-js diretamente aqui se preferir, ou seu client do lib

export async function POST(req: Request) {
  try {
    const { sessionId, context, history, lastAnswer } = await req.json();

    // 1. Montar o Prompt do Sistema (Engenharia de Prompt)
    const systemPrompt = `
      Você é um Arquiteto de Software Sênior da 'movidev'. Seu objetivo é entender a necessidade do cliente para montar uma proposta comercial técnica.
      
      CONTEXTO INICIAL DO CLIENTE:
      ${JSON.stringify(context)}

      REGRAS:
      1. Faça UMA pergunta por vez.
      2. Seja objetivo e técnico, mas acessível.
      3. Baseado na resposta anterior, decida a próxima pergunta para aprofundar (Drill Down).
      4. O objetivo é coletar: Dores principais, Stack Tecnológica desejada (ou se não sabem), Urgência e Orçamento aproximado.
      5. Quando tiver informações suficientes (geralmente após 3 a 5 perguntas), encerre com type: "conclusion".
      
      FORMATO DE RESPOSTA OBRIGATÓRIO (JSON puro):
      {
        "type": "question" | "conclusion",
        "ui_component": "single_choice" | "multiple_choice" | "textarea", 
        "title": "Texto da Pergunta",
        "subtitle": "Explicação breve ou contexto",
        "options": [ { "id": "opt1", "label": "Texto", "icon": "slug-do-lucide-icon" } ] (Apenas se não for textarea)
      }
    `;

    // 2. Montar mensagens para a OpenAI
    const messages: any[] = [
      { role: "system", content: systemPrompt },
      ...history, // Histórico anterior
    ];

    // Se houve uma resposta do usuário agora, adiciona
    if (lastAnswer) {
      messages.push({ role: "user", content: JSON.stringify(lastAnswer) });
    }

    // 3. Chamada à OpenAI (Forçando JSON)
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Use gpt-4 para melhor lógica, ou gpt-3.5-turbo para economia
      messages: messages,
      response_format: { type: "json_object" },
      temperature: 0.2, // Baixa criatividade para manter a estrutura firme
    });

    const aiResponseContent = completion.choices[0].message.content;
    
    if (!aiResponseContent) throw new Error("Falha na IA");

    const aiJson = JSON.parse(aiResponseContent) as AiResponseSchema;

    // 4. Salvar no Supabase (Opcional fazer aqui ou num passo separado)
    // Recomendação: O Frontend gerencia o update do histórico via API dedicada ou aqui mesmo.
    
    return NextResponse.json({ 
      nextStep: aiJson,
      updatedHistory: [
        ...history,
        ...(lastAnswer ? [{ role: "user", content: JSON.stringify(lastAnswer) }] : []),
        { role: "assistant", content: aiResponseContent }
      ]
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro no processamento da IA" }, { status: 500 });
  }
}