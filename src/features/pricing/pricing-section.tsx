"use client";

import { motion } from "framer-motion";
import { services } from "./data/services";
import { fadeUp } from "./animations";
import { Title } from "../home/components/title";
import { PricingCard } from "./components/pricing-card";

export function Pricing() {
  return (
    <div id="pricing" className="w-full max-w-7xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
        className="mx-6"
      >
        <Title
          title="Pricing"
          heading="Choisissez l’offre marketing adaptée à vos objectifs"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 mx-6">
        {services.map((service) => (
          <PricingCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}