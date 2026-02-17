"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-row flex-wrap-reverse md:gap-30 gap-16 justify-center">
      
      {/* ---------------------------
           cta text
      ---------------------------- */}
      <div id="cta" className="flex flex-col w-[750px] text-white">
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
          className="md:mx-0 mx-6"
        >
          {/* Badge */}
          <div className="w-fit px-4 py-1.5 bg-white/20 rounded-full">
            <span className="text-white text-sm font-medium">WebShift</span>
          </div>

          <div className="mt-4">
            <h1 className="font-semibold text-2xl md:text-4xl">
              Boostez votre présence digitale et générez plus de clients
            </h1>
            <p className="md:text-[14px] text-xs mt-4 w-fit md:w-[620px]">
              Inscrivez-vous à notre newsletter pour recevoir des conseils stratégiques,
              des astuces marketing et des études de cas exclusives qui transforment votre
              business en ligne.
            </p>
          </div>
        </motion.div>

        {/* newsletter */}
        <div className="relative max-w-md md:w-full w-[320px] mt-8 md:mx-0 mx-6">
          <div className="flex items-center p-1.5 bg-white rounded-full shadow-lg">
            <input
              type="email"
              placeholder="Entrer votre adresse email"
              className="grow bg-transparent px-6 py-3 outline-none text-gray-700 placeholder:text-gray-400 md:text-sm text-xs"
            />
            <button className="hover:scale-102 bg-black transition-all duration-300 text-white px-6 py-3 rounded-full flex items-center gap-0 md:gap-2 md:text-sm text-xs font-medium">
              S’inscrire
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------
           cta image
      ---------------------------- */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Image
          src="/assets/cta.png"
          alt="WebShift marketing digital"
          width={204}
          height={400}
          className="w-[300px] md:w-[366px] md:h-[310px] h-auto mr-2 md:mr-6 rounded-2xl"
        />
      </motion.div>

    </div>
  );
}
