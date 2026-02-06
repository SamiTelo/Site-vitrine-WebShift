"use client";
import { motion } from "framer-motion";
import Title from "./Title";

export default function Services () {
  return(
    <div className="w-full max-w-7xl mx-auto">
       {/* ---------------------------
            TITLE
      ---------------------------- */}
       <motion.div
      initial={{ y: 100, opacity: 0 }} // position en dessous de l’écran
      whileInView={{ y: 0, opacity: 1 }} // remonte en place
      viewport={{ once: false, amount: 0.2 }} // déclenche une seule fois
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 12,
      }} 
      >
        <Title title="A propos" heading="Réussir avec WebShift" texte=" Chez WebShift, nous transformons les défis numériques en opportunités de croissance. Découvrez notre histoire, nos valeurs et l'équipe derrière votre succès." />
      </motion.div>
       {/* ---------------------------
            CARDS
      ---------------------------- */}
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}