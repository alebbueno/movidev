import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY environment variable");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Definição da estrutura que a IA deve DEVOLVER para o Frontend
export type AiResponseSchema = {
  type: "question" | "conclusion"; // Se é mais uma pergunta ou se acabou
  
  // Se for pergunta:
  ui_component?: "single_choice" | "multiple_choice" | "textarea";
  title?: string;
  subtitle?: string;
  options?:Array<{ id: string; label: string; icon?: string }>;
  
  // Se for conclusão:
  proposal_summary?: string;
  suggested_budget_range?: string;
  technical_recommendation?: string[];
};