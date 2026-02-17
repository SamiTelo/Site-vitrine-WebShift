"use client";
import { motion } from "framer-motion";
import Title from "./Title";
import {
  Monitor,
  Code,
  Search,
  Megaphone,
  Users,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Stratégie Digitale",
    description:
      "Audit, positionnement et plan d’action sur-mesure pour accélérer votre croissance en ligne et maximiser votre retour sur investissement.",
  },
  {
    icon: Code,
    title: "Création de Sites Web",
    description:
      "Sites vitrines et e-commerce rapides, optimisés SEO et pensés pour convertir vos visiteurs en clients.",
  },
  {
    icon: Search,
    title: "SEO & Référencement",
    description:
      "Optimisation technique et stratégique pour améliorer votre visibilité sur Google et générer un trafic qualifié durable.",
  },
  {
    icon: Megaphone,
    title: "Publicité en Ligne (Ads)",
    description:
      "Campagnes Meta & Google Ads ciblées pour attirer des prospects qualifiés et augmenter vos ventes rapidement.",
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "Gestion stratégique de vos réseaux sociaux pour renforcer votre image de marque et engager votre communauté.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Identité visuelle moderne et cohérente pour positionner votre marque comme une référence sur son marché.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="services" className="w-full max-w-7xl mx-auto">
      {/* ---------------------------
            TITLE
      ---------------------------- */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className="mx-6"
      >
        <Title
          title="Nos Services"
          heading="Solutions digitales pour booster croissance et performance"
        />
      </motion.div>

      {/* ---------------------------
            CARDS
      ---------------------------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap gap-6 justify-center md:mt-30 mt-12 mx-6"
      >
        {services.map((serv, index) => {
          const Icon = serv.icon;
          return (
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                y: -3,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={index}
              className="md:w-[394px] h-fit w-[345px] flex flex-col bg-white py-10 rounded-xl md:mb-4 hover:border-[#9D4EDD] border-white border"
            >
              <div className="bg-[#EBDCF8] w-20 h-20 flex items-center justify-center rounded-full max-w-7xl mx-auto mb-6">
                <Icon size={32} className="text-[#9D4EDD]" />
              </div>
              <div className="text-center">
                <h2 className="font-semibold text-[18px] md:text-xl px-10 mt-[15px]">
                  {serv.title}
                </h2>
                <p className="mt-[13px] px-10 text-gray-600">{serv.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
