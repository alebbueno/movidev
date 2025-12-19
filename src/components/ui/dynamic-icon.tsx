"use client";

import { 
  Rocket, Store, Building2, Landmark, 
  Zap, Shield, Cloud, Server, Database, 
  Code, Settings, Smartphone, Globe, 
  Brain, Lock, Users, BarChart, ShoppingCart,
  Truck, Stethoscope, HelpCircle, LucideIcon
} from "lucide-react";

// Mapeamento seguro de ícones que a IA pode solicitar
// Isso evita importar a biblioteca inteira e quebrar o bundle
const ICONS_MAP: Record<string, LucideIcon> = {
  rocket: Rocket,
  store: Store,
  building: Building2,
  landmark: Landmark,
  zap: Zap,
  shield: Shield,
  cloud: Cloud,
  server: Server,
  database: Database,
  code: Code,
  settings: Settings,
  smartphone: Smartphone,
  globe: Globe,
  brain: Brain,
  lock: Lock,
  users: Users,
  chart: BarChart,
  cart: ShoppingCart,
  truck: Truck,
  health: Stethoscope
};

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  // Normaliza o nome (ex: "Cloud" -> "cloud")
  const normalizedKey = name.toLowerCase();
  const IconComponent = ICONS_MAP[normalizedKey] || HelpCircle;

  return <IconComponent {...props} />;
}