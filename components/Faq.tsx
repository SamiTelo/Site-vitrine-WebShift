"use client";
import { motion } from "framer-motion";
import { AccordionMultiple } from "./Accordéon";
import Image from "next/image";

export default function Faq() {
  return (
    <div id="faq" className="w-full max-w-7xl mx-auto flex flex-row flex-wrap-reverse md:gap-30 gap-16 justify-center">
      {/* ---------------------------
           Faq text
      ---------------------------- */}
      <div className="flex flex-col w-[600px] md:mx-0 mx-6">
        <motion.div
          initial={{ x: -50, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {/* Badge */}
          <div className="text-center w-fit text-[10px] md:text-xs bg-[#EBDCF8] text-[#9D4EDD] px-6 py-2 rounded-full ">
            FAQ
          </div>
          
          {/* Text */}
          <div className="mt-4">
            <h1 className="font-semibold text-2xl md:text-4xl">
              Questions sur nos <span className="text-[#9D4EDD]">services digitaux ?</span>
            </h1>
            <p className="md:text-[14px] text-xs text-gray-600 mt-4 w-fit md:w-[450px]">
              Découvrez comment WebShift accompagne les entreprises dans leur
              croissance digitale, de la stratégie à la mise en œuvre, avec
              des solutions orientées performance et résultats mesurables.
            </p>
          </div>
        </motion.div>

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
          className="mt-16"
        >
          <AccordionMultiple />
        </motion.div>
      </div>

      {/* ---------------------------
           Faq image
      ---------------------------- */}
      <motion.div
        initial={{ x: 50, opacity: 0, scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Image
          src="/assets/faq.png"
          alt="Consultation marketing digital WebShift"
          width={204}
          height={200}
          className="w-[300px] md:w-[366px] md:h-[500px] h-auto mt-8 md:mt-16 mr-2 md:mr-6 rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
