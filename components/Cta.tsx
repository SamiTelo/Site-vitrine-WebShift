"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-row flex-wrap-reverse md:gap-30 gap-16 justify-center">
      {/* ---------------------------
           Faq text
      ---------------------------- */}
      <div className="flex flex-col w-[750px] md:mx-0 mx-6 text-white">
        <motion.div
          initial={{ x: -50, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }} // replace animate with whileInView and add viewport={{ once: false }} so that the animation triggers every time the element comes into view.
          viewport={{ once: false, amount: 0.5 }} // amount defines how much of the element should be visible
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <div className="text-center w-fit text-[10px] md:text-xs  bg-white/90 backdrop-blur  text-[#9D4EDD] px-6 py-2 rounded-full ">
            FAQ
          </div>
          <div className="mt-4">
            <h1 className="font-semibold text-2xl md:text-4xl">
              Most Common Question Alternative netw innovation network environmental!
            </h1>
            <p className="md:text-[14px] text-xs mt-4 w-fit md:w-[620px]">
              Alternative innovation network environmental whiteboard pursue for
              premier methodsempowerment go forward opportunities go forward opportunities
            </p>
          </div>
        </motion.div>
        {/* newsletter*/}
        <div>
        </div>
      </div>
      {/* ---------------------------
           Faq image
      ---------------------------- */}
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }} // replace animate with whileInView and add viewport={{ once: false }} so that the animation triggers every time the element comes into view.
        viewport={{ once: false, amount: 0.5 }} // amount defines how much of the element should be visible
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Image
          src="/assets/about-img1.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[300px] md:w-[366px] md:h-[300px] h-auto mr-2 md:mr-6 rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
