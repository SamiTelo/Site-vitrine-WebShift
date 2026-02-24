import { Zap, TrendingUp, BarChart2 } from "lucide-react";
import { Service } from "../types";

export const services: Service[] = [
  {
    id: "starter",
    cardIcon: Zap,
    featureIcon: "/assets/Icon2.png",
    symbol: "/assets/Symbol.png",
    title: "Starter",
    description:
      "Idéal pour les petites entreprises qui veulent renforcer leur présence",
    pricing: "99 $ / mo",
    features: [
       "Audit digital et recommandations stratégiques",
      "Optimisation SEO de base (on-page)",
      "Gestion d’un réseau social",
      "Reporting mensuel simplifié",
      "Audit digital et recommandations stratégiques",
      "Optimisation SEO de base (on-page)",
      "Gestion d’un réseau social",
      "Reporting mensuel simplifié",
    ],
  },
  {
    id: "growth",
    cardIcon: TrendingUp,
    featureIcon: "/assets/Icon2.png",
    symbol: "/assets/Symbol.png",
    title: "Growth",
    description:
      "Conçu pour les entreprises en croissance qui souhaitent générer plus",
    pricing: "249 $ / mo",
    features: [
      "Stratégie SEO avancée et contenu optimisé",
      "Gestion multi-réseaux sociaux",
      "Campagnes publicitaires (Meta ou Google Ads)",
      "Analyse des performances et optimisation continue",
      "Stratégie SEO avancée et contenu optimisé",
      "Gestion multi-réseaux sociaux",
      "Campagnes publicitaires (Meta ou Google Ads)",
      "Analyse des performances et optimisation continue",
    ],
  },
  {
    id: "performance",
    cardIcon: BarChart2,
    featureIcon: "/assets/Icon2.png",
    symbol: "/assets/Symbol.png",
    title: "Performance",
    description: "Une solution complète pour maximiser votre ROI",
    pricing: "499 $ / mo",
    features: [
       "Stratégie marketing digitale sur mesure",
      "SEO + Ads + Social Media combinés",
      "Optimisation du tunnel de conversion",
      "Tableau de bord analytics détaillé",
      "Stratégie marketing digitale sur mesure",
      "SEO + Ads + Social Media combinés",
      "Optimisation du tunnel de conversion",
      "Tableau de bord analytics détaillé",
    ],
  },
];