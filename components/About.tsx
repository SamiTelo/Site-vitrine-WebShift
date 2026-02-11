"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto md:mt-40 mt-16 md:mb-46 mb-20 flex flex-row flex-wrap  md:gap-30">
      {/* ---------------------------
            Images
      ---------------------------- */}
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
        className="flex flex-row md:ml-4 mx-6 md:mx-0"
      >
        <Image
          src="/assets/about-img1.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[200px] md:w-[320px] md:h-[461px] h-auto mt-8 md:mt-16 mr-2 md:mr-6"
        />
        <Image
          src="/assets/about-img2.png"
          alt="img hero"
          width={204}
          height={200}
          className="w-[120px] md:w-[252px] h-[250px] md:h-[360px]"
        />
        <div className="bg-[#9D4EDD] w-[120px] md:w-[252px] md:h-[138px] h-[57px] rounded-xl absolute mt-65 md:mt-0 ml-28 md:ml-0 left-28 md:top-451 md:left-119 justify-items-start">
         <p className="font-bold text-white text-xl md:text-4xl ml-4 md:ml-8 mt-1 md:mt-7">100%</p>
         <p className="font-bold text-white text-[9px] md:text-[16px] ml-4 md:ml-8 md:mt-2">QUALITE GARANTIE</p>
        </div>
      </motion.div>
      {/* ---------------------------
            About text
      ---------------------------- */}
      <motion.div
        initial={{ y: 100, opacity: 0 }} // position en dessous de l’écran
        whileInView={{ y: 0, opacity: 1 }} // remonte en place
        viewport={{ once: false, amount: 0.2 }} // déclenche une seule fois
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
              alt="logo"
              width={5}
              height={5}
              className=" md:w-5 md:h-5 w-4 h-4"
            />
          </div>
          <div>
            <h6 className="text-[#9D4EDD] text-[10px] md:text-xs text-center pt-2 md:pt-2.5">
              Fast, Reliable & Secure hosting
            </h6>
          </div>
        </div>
        <br></br>
        <div className="mx-6 md:mx-0">
            <h1 className="font-semibold text-2xl md:text-4xl w-fit md:w-[510px]">
              Why We’re the Perfect Choice for Your Hosting
            </h1>
          <br></br>
          <p className="w-fit md:w-[510px]">
            Choosing the right hosting provider can make the difference for your
            website’s success. Our Shared Hosting stands out with a 99.9% uptime
            guarantee, ensuring your site is always accessible. Enjoy
            lightning-fast loading speeds, robust security with free SSL
            certificates and daily malware.
          </p>
          <br></br>
          <p className="w-fit md:w-[510px]">
            Intuitive control panel that makes managing your site breeze. With
            affordable pricing plans and 24/7 expert support, we’re dedicated to
            providing a seamless hosting experience tailored to your needs.
            Trust us to deliver the reliability, speed, and security your
            website deserves.
          </p>
          <div className="mt-3 pt-3">
            <Link href="#">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="h-12 md:h-auto w-fit  text-[14px] inline-flex justify-center items-center gap-2 bg-[#9D4EDD]  hover:bg-black text-white px-10 py-4 rounded-full "
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
