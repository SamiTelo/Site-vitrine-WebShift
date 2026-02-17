"use client";

import { Zap, TrendingUp, BarChart2, LucideIcon } from "lucide-react"; // icônes solides
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Title from "./Title";

/* ---------------------------
   TYPES
---------------------------- */
type Service = {
  id: string;
  cardIcon: LucideIcon; // type correct pour Lucide
  featureIcon: string;
  symbol: string;
  title: string;
  description: string;
  pricing: string;
  features: string[];
};

/* ---------------------------
   DATA
---------------------------- */
const services: Service[] = [
  {
    id: "starter",
    cardIcon: Zap, // icône pour Starter
    featureIcon: "/assets/icon2.png",
    symbol: "/assets/symbol.png",
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
    cardIcon: TrendingUp, // icône pour Growth
    featureIcon: "/assets/icon2.png",
    symbol: "/assets/symbol.png",
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
    cardIcon: BarChart2, // icône pour Performance
    featureIcon: "/assets/icon2.png",
    symbol: "/assets/symbol.png",
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

/* ---------------------------
   ANIMATIONS
---------------------------- */
const fadeUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/* ---------------------------
   FEATURE ITEM
---------------------------- */
function FeatureItem({
  featureIcon,
  symbol,
  text,
}: {
  featureIcon: string;
  symbol: string;
  text: string;
}) {
  return (
    <div className="flex items-start justify-between px-8 mb-5 gap-4">
      <div className="flex items-start gap-3">
        <Image src={featureIcon} alt="feature" width={18} height={18} />
        <span className="md:text-xs text-[12px] text-gray-600 leading-relaxed">{text}</span>
      </div>
      <Image src={symbol} alt="symbol" width={14} height={14} />
    </div>
  );
}

/* ---------------------------
   PRICING CARD
---------------------------- */
function PricingCard({ service }: { service: Service }) {
  const Icon = service.cardIcon;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
      className="md:w-[314px] w-[345px] bg-white py-10 md:mt-24 mt-10 rounded-[10px] border border-[#9D4EDD] hover:bg-[#F8F3FF] transition"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-8 mt-4">
        <Icon size={26} className="text-[#9D4EDD]" fill="currentColor" />
        <h2 className="font-bold text-xl">{service.title}</h2>
      </div>

      {/* Content */}
      <div className="text-center">
        <p className="px-6 text-gray-600 md:text-sm text-[14px]">{service.description}</p>
        <p className="mt-4 text-3xl font-bold">{service.pricing}</p>
        <Link
          href="https://github.com"
          className="inline-flex items-center mt-8 px-16 py-3 rounded-xl bg-[#9D4EDD] text-white text-sm shadow-sm hover:scale-105 hover:bg-black transition-all"
        >
          Demander un devis
        </Link>
      </div>

      {/* Features */}
      <div className="mt-10">
        {service.features.map((feature, index) => (
          <FeatureItem
            key={index}
            featureIcon={service.featureIcon}
            symbol={service.symbol}
            text={feature}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------------------
   PRICING SECTION
---------------------------- */
export default function Pricing() {
  return (
    <div id="pricing" className="w-full max-w-7xl mx-auto">
      {/* TITLE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
        className="mx-6"
      >
        <Title title="Pricing" heading="Choisissez l’offre marketing adaptée à vos objectifs" />
      </motion.div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 mx-6">
        {services.map((service) => (
          <PricingCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
