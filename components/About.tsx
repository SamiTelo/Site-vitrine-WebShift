"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="w-full max-w-7xl mx-auto md:mt-40 mt-16 md:mb-46 mb-20 flex flex-row flex-wrap  md:gap-30">
      {/* ---------------------------
            Images
      ---------------------------- */}
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
        className="flex flex-row md:ml-4 mx-6 md:mx-0 relative"
      >
        {/* Image principale */}
        <Image
          src="/assets/about1.png"
          alt="Stratégie marketing digital"
          width={204}
          height={200}
          className="w-[200px] md:w-[320px] md:h-[461px] h-auto mt-8 md:mt-16 mr-2 md:mr-6 rounded-2xl"
        />

        {/* Image secondaire */}
        <Image
          src="/assets/about2.png"
          alt="Équipe WebShift"
          width={204}
          height={200}
          className="w-[120px] md:w-[252px] h-[250px] md:h-[360px] rounded-xl"
        />

        {/* Bloc 100% qualité */}
        <div className="bg-[#9D4EDD] w-[120px] md:w-[252px] md:h-[138px] h-[50px] rounded-xl absolute top-[260px] left-[194px] md:top-[388px] md:left-[346px] flex flex-col justify-center items-start p-4">
          <p className="font-bold text-white text-xl md:text-4xl ml-4 md:ml-8">
            100%
          </p>{" "}
          <p className="font-bold text-white text-[7px] md:text-[16px] ml-4 md:ml-8 md:mt-2">
            QUALITE GARANTIE
          </p>
        </div>
      </motion.div>

      {/* ---------------------------
            About text
      ---------------------------- */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className=" w-fit mt-22 md:mt-0"
      >
        <div className="bg-[#EBDCF8] w-fit h-[30px] md:h-[38px] rounded-full border border-[#EBDCF8] flex flex-row gap-1 justify-items-center px-2 mx-6 md:mx-0">
          <div className="pt-1.5 md:pt-2">
            <Image
              src="/assets/logo.png"
              alt="WebShift logo"
              width={5}
              height={5}
              className=" md:w-5 md:h-5 w-4 h-4"
            />
          </div>
          <div>
            <h6 className="text-[#9D4EDD] text-[10px] md:text-xs text-center pt-2 md:pt-2.5">
              À Propos de WebShift
            </h6>
          </div>
        </div>

        <br />

        <div className="mx-6 md:mx-0">
          <h1 className="font-semibold text-2xl md:text-4xl w-fit md:w-[510px]">
            L’agence digitale qui transforme votre visibilité en résultats
            concrets
          </h1>

          <br />

          <p className="w-fit md:w-[510px]">
            WebShift accompagne les entreprises ambitieuses dans leur croissance
            digitale. De la stratégie marketing à l’optimisation SEO, en passant
            par la création de sites performants et la gestion des campagnes
            publicitaires, nous construisons des solutions orientées résultats.
          </p>

          <br />

          <p className="w-fit md:w-[510px]">
            Notre approche combine analyse des données et créativité pour
            générer plus de trafic, améliorer vos conversions et maximiser votre
            retour sur investissement.
          </p>

          <div className="mt-3 pt-3">
            <Link href="">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="h-12 md:h-auto w-fit text-[14px] inline-flex justify-center items-center gap-2 bg-[#9D4EDD] hover:bg-black text-white px-10 py-4 rounded-full "
              >
                <MoveUpRight className="w-4 h-4" />
                Voire plus
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
