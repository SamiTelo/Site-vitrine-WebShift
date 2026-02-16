"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";
import { CarouselPlugin } from "./Carousel";

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
      <div className="flex flex-row flex-wrap-reverse md:gap-20 gap-16 justify-center md:mt-40 mt-20">
         {/* Images */}
           <div>
             <Image
               src="/assets/about-img2.png"
               alt="img hero"
               width={304}
               height={200}
               className="w-[300px] md:w-[366px] md:h-[500px] h-auto rounded-2xl"
             />
           </div>
           {/* carousel */}
             <div>
               <CarouselPlugin/>
             </div>
         </div>
    </div>
  );
}
