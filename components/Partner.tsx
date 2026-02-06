"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partner() {
  return (
    <div className="md:mt-24 mt-14">
      <motion.div
        initial={{ y: 100, opacity: 0 }} // position en dessous de l’écran
        whileInView={{ y: 0, opacity: 1 }} // remonte en place
        viewport={{ once: false, amount: 0.2 }} // déclenche une seule fois
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className="w-full md:px-20 px-4 flex flex-row justify-between "
      >
        <Image
          src="/assets/slider1.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[54px] md:w-[200px] h-auto"
        />
        <Image
          src="/assets/slider2.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[54px] md:w-[200px] h-auto"
        />
        <Image
          src="/assets/slider3.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[54px] md:w-[200px] h-auto"
        />
        <Image
          src="/assets/slider4.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[54px] md:w-[200px] h-auto"
        />
        <Image
          src="/assets/slider1.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[54px] md:w-[200px] h-auto "
        />
      </motion.div>
      <div className="w-full justify-between border-t border-slate-200 md:mt-26 mt-10"></div>
    </div>
  );
}
