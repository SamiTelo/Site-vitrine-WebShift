import { HomeView } from "@/src/features/home";
import type { Metadata } from "next";




{/* ---------------------------
      SEO minimal
  ---------------------------- */}
export const metadata: Metadata = {
 title: "WebShift — Agence de Marketing Digital & Stratégies de Croissance",
  description:
    "WebShift accompagne les entreprises avec des stratégies SEO, publicité en ligne et gestion des réseaux sociaux pour accélérer leur croissance.",
  keywords: [
    "WebShift",
    "agence marketing digital",
    "marketing digital",
    "SEO",
    "publicité en ligne",
    "Google Ads",
    "Facebook Ads",
    "social media management",
    "création de contenu",
    "stratégie digitale",
    "acquisition clients",
    "croissance digitale",
    "marketing Côte d’Ivoire",
    "marketing Afrique",
  ],
};



export default function Page() {
  return (
    <HomeView/>
  );
}
