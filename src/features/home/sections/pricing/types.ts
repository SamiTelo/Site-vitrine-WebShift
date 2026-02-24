import { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  cardIcon: LucideIcon;
  featureIcon: string;
  symbol: string;
  title: string;
  description: string;
  pricing: string;
  features: string[];
};