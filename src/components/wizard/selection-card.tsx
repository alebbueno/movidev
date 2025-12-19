import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface SelectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode; // Aceita o componente de ícone já renderizado
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export function SelectionCard({ title, description, icon, selected, onClick, className }: SelectionCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer relative flex flex-col items-start p-6 rounded-2xl border-2 transition-all duration-300 group h-full min-h-45",
        selected
          ? "border-blue-500 bg-zinc-900 shadow-[0_0_20px_rgba(59,130,246,0.15)] scale-[1.02]"
          : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 hover:scale-[1.01]",
        className
      )}
    >
      {/* Indicador de Seleção (Check) */}
      <div className={cn(
        "absolute top-4 right-4 transition-all duration-300",
        selected ? "opacity-100 scale-100 text-blue-500" : "opacity-0 scale-75"
      )}>
        <CheckCircle2 className="w-6 h-6 fill-blue-500/10" />
      </div>

      {/* Container do Ícone (O segredo do visual "Startup") */}
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300",
        selected 
          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" 
          : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200"
      )}>
        {icon}
      </div>
      
      {/* Textos */}
      <h3 className={cn(
        "text-lg font-semibold mb-1 transition-colors",
        selected ? "text-white" : "text-zinc-200"
      )}>
        {title}
      </h3>
      
      {description && (
        <p className="text-sm text-zinc-500 leading-snug group-hover:text-zinc-400 transition-colors">
          {description}
        </p>
      )}
    </div>
  );
}