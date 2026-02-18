"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "/assets/banner1.png",
  "/assets/banner2.png",
  "/assets/banner3.png",
  "/assets/banner4.png",
];

export default function Partner() {
  return (
    <div className="md:mt-24 mt-14 relative overflow-hidden">
      {/* Gradient edges custom */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-80 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-80 bg-linear-to-l from-white to-transparent z-10" />

      {/* Marquee */}
      <Marquee
        pauseOnHover={true}    
        speed={50}             
        gradient={false}      
      >
        {/* Duplication for infini scroll */}
        {[...logos, ...logos].map((src, index) => (
          <div key={index} className="mx-6 md:mx-12">
            <Image
              src={src}
              width={200}
              height={200}
              alt="partner logo"
              className="w-[154px] md:w-[200px] h-auto opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </Marquee>

      {/* Divider */}
      <div className="w-full border-t border-slate-200 mt-10 md:mt-24" />
    </div>
  );
}
