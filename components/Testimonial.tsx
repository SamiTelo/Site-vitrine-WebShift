"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";
import Glissade from "./Glissade";

export default function Testimonial() {
  return (
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
        className="mx-6"
      >
        <Title
          title="Testimonials"
          heading=" Why We’re the Perfect Choice for Your Hosting Choice for"
        />
      </motion.div>

      {/* ---------------------------
            TESTIMONIAL
      ---------------------------- */}
      <div className="flex flex-row flex-wrap-reverse md:gap-30 gap-16 justify-center">
         {/* ---------------------------
                Image
           ---------------------------- */}
           <div>
             <Image
               src="/assets/about-img2.png"
               alt="img hero"
               width={204}
               height={200}
               className="w-[300px] md:w-[366px] md:h-[500px] h-auto mt-8 md:mt-16 mr-2 md:mr-6 rounded-2xl"
             />
           </div>
           {/* ---------------------------
                Glissade
           ---------------------------- */}
             <div
               className=""
             >
               <Glissade />
             </div>
         </div>
    </div>
  );
}
