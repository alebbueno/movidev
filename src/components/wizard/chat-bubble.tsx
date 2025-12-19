import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatBubbleProps {
  role: "assistant" | "user";
  content: string;
  isTyping?: boolean;
}

export function ChatBubble({ role, content, isTyping }: ChatBubbleProps) {
  const isAi = role === "assistant";

  return (
    <div className={cn("flex w-full gap-4 mb-6", isAi ? "justify-start" : "justify-end")}>
      {/* Avatar (Apenas para IA) */}
      {isAi && (
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
          <Bot className="w-6 h-6 text-white" />
        </div>
      )}

      {/* Conteúdo da Mensagem */}
      <div
        className={cn(
          "max-w-[80%] p-5 text-sm leading-relaxed shadow-md",
          isAi
            ? "bg-zinc-800/80 text-zinc-200 rounded-2xl rounded-tl-none border border-zinc-700/50"
            : "bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-blue-900/20"
        )}
      >
        {isTyping ? (
          <div className="flex space-x-2 items-center h-5">
            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{content}</p>
        )}
      </div>

       {/* Avatar (Usuário - Opcional, ou apenas espaço vazio) */}
       {!isAi && (
        <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
          <User className="w-5 h-5 text-zinc-400" />
        </div>
      )}
    </div>
  );
}