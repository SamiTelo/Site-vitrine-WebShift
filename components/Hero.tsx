"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Rocket } from "lucide-react";
import Image from "next/image";

export default function Accueil() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center gap-10 md:gap-20 px-6 mt-0 pt-38 md:-mt-2 md:pt-60 md:pb-0">
      {/* ---------------------------
            Presentation text
      ---------------------------- */}
      <motion.div
        initial={{ x: -50, opacity: 0, scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }} 
        viewport={{ once: false, amount: 0.5 }} 
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="flex-1 py-8 md:mt-12"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="bg-[#EBDCF8] w-fit h-[38px] rounded-full border border-[#9D4EDD] flex flex-row gap-1 justify-items-center px-3"
        >
          <div className="pt-2">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={5}
              height={5}
              className="w-5 h-5"
            />
          </div>
          <div>
            <h6 className="text-[#9D4EDD] text-xs text-center pt-2.5">
              Jusqu’à 75 % de réduction sur l’hébergement Web
            </h6>
          </div>
        </motion.div>
        <br></br>
        <h1 className="font-bold text-4xl md:text-6xl leading-tight text-center md:text-left">
          Transformez votre <span className="text-[#9D4EDD]">présence</span> en
          ligne en un écosystème digital
        </h1>

        <p className="mt-6 text-md text-gray-700 text-center md:text-left leading-relaxed">
          Grâce à des stratégies digitales innovantes et adaptées, nous vous
          aidons à renforcer votre présence en ligne et à obtenir une croissance
          concrète, durable et mesurable.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-start md:gap-8">
          <Link href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-[#9D4EDD] text-white px-10 py-4 rounded-full "
            >
              <Rocket className="w-4 h-4" />
              Découvrir nos services
            </motion.div>
          </Link>

          <Link href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 border border-black text-black px-8 py-4 rounded-full "
            >
              <Phone className="w-4 h-4" />
              Contactez-nous
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* -------------------------------------------
             Image with Horizontal Oscillation
      ------------------------------------------------- */}
      <motion.div
        animate={{ x: [0, -15, 0] }} // Horizontal oscillation
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="md:-mb-52 md:ml-0 ml-8"
      >
        <Image
          src="/assets/img.png"
          alt="img hero"
          width={452}
          height={771}
          className="w-[258px] md:w-[452px] h-auto"
        />
      </motion.div>
    </div>
  );
}
