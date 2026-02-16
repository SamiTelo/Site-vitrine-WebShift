"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const services = [
  {
    icon: "/assets/about-img2.png",
    title: "Développement Web Choice for Your Hosting Choice for Why",
    description:
      "By admin | janv 2.2026  ",
  },
  {
    icon: "/assets/about-img1.png",
    title: "Développement Web Choice for Your Hosting Choice for Why",
    description:
      "By admin | fev 7.2026  ",
  },
  {
    icon: "/assets/about-img2.png",
    title: "Développement Web Choice for Your Hosting Choice for Why",
    description:
      "By admin | fev 20.2026  ",
  },
];

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* ---------------------------
            TITLE
      ---------------------------- */}
      <div className="flex flex-row justify-center flex-wrap md:gap-35 gap-0 px-6 md:px-0">
        <div className="md:w-[700px]">
          <div className="text-center w-fit text-[10px] md:text-xs bg-[#EBDCF8] text-[#9D4EDD] px-6 py-2 rounded-full ">
            Blog
          </div>
           <h1 className="font-semibold text-2xl md:text-4xl mt-10">
              Most Common Question Most Common Question Most Question Most
            </h1>
        </div>
        <div className="md:w-[400px] mt-16">
          <p> Alternative innovation network environmental whiteboard pursue for
              premier methodsempowerment go forward opportunities  premier methodsempowerment go forward opportunities Alternative innovation network </p>
        </div>
      </div>
    
      {/* ---------------------------
            CARDS
      ---------------------------- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap md:gap-6 gap-10 justify-center md:mt-30 mt-12 mx-6 "
      >
        {services.map((serv, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="md:w-[394px] h-fit w-[345px] flex flex-col bg-[#F6F8FA] py-10 rounded-4xl md:mb-4 hover:scale-102 transition-all duration-300 border-white border"
          >
            <div className="mb-6 -mt-6 mx-4">
              <Image
                src={serv.icon}
                alt="logo"
                width={308}
                height={280}
                className=" md:w-[408px] md:h-[300px] w-[306px] h-[246px] rounded-3xl "
              />
            </div>
            <div className="px-6">
               <p className="mt-[13px] mb-2 text-gray-600 text-xs  ">
                {serv.description}
              </p>
              <h2 className="font-semibold text-[18px] md:text-xl mb-4">
                {serv.title}
              </h2>
              <span className="text-[#9D4EDD]">read more</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
