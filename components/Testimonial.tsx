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
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={{ once: false, amount: 0.2 }} 
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className="mx-6"
      >
        <Title
          title="Témoignages"
          heading="Ce que nos clients disent de leur croissance avec WebShift"
        />
      </motion.div>

      {/* ---------------------------
            TESTIMONIAL
      ---------------------------- */}
      <div className="flex flex-row flex-wrap-reverse md:gap-20 lg:gap-10 gap-16 justify-center md:mt-40 mt-20">
        
        {/* Images */}
        <div className="-mt-8">
          <Image
            src="/assets/testi-img.png"
            alt="Client satisfait WebShift"
            width={304}
            height={300}
            className="w-[300px] md:w-[366px] lg:w-[366px] md:h-[366px] h-[360px] rounded-2xl lg:-ml-10"
          />
        </div>

        {/* carousel */}
        <div>
          <CarouselPlugin />
        </div>

      </div>
    </div>
  );
}
