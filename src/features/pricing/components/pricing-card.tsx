"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Service } from "../types";
import { fadeUp } from "../animations";
import { FeatureItem } from "./feature-item";

export function PricingCard({ service }: { service: Service }) {
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
      <div className="flex items-center justify-center gap-2 mb-8 mt-4">
        <Icon size={26} className="text-[#9D4EDD]" fill="currentColor" />
        <h2 className="font-bold text-xl">{service.title}</h2>
      </div>

      <div className="text-center">
        <p className="px-6 text-gray-600 md:text-sm text-[14px]">
          {service.description}
        </p>
        <p className="mt-4 text-3xl font-bold">{service.pricing}</p>
        <Link
          href={`https://wa.me/+2250787109415?text=${encodeURIComponent("Bonjour, je souhaite obtenir un devis ou forfait pour votre service.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-8 px-16 py-3 rounded-xl bg-[#9D4EDD] text-white text-sm shadow-sm hover:scale-105 hover:bg-black transition-all"
        >
          Obtenir le forfait
        </Link>
      </div>

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
