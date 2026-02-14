"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";

const services = [
  {
    icon: "/assets/SVG.png",
    title: "Développement Web",
    description:
      " Why We’re the Perfect Choice for Your Hosting Choice for Why We’re the Perfect Choice for Your Hosting ",
  },
  {
    icon: "/assets/SVG.png",
    title: "Développement Mobile",
    description:
      " Why We’re the Perfect Choice for Your Hosting Choice for Why We’re the Perfect Choice for Your Hosting ",
  },
  {
    icon: "/assets/SVG.png",
    title: "Design UI/UX",
    description:
      " Why We’re the Perfect Choice for Your Hosting Choice for Why We’re the Perfect Choice for Your Hosting ",
  },
  {
    icon: "/assets/SVG.png",
    title: "Développement Web",
    description:
      " Why We’re the Perfect Choice for Your Hosting Choice for Why We’re the Perfect Choice for Your Hosting ",
  },
  {
    icon: "/assets/SVG.png",
    title: "Développement Mobile",
    description:
      " Why We’re the Perfect Choice for Your Hosting Choice for Why We’re the Perfect Choice for Your Hosting ",
  },
  {
    icon: "/assets/SVG.png",
    title: "Design UI/UX",
    description:
      " Why We’re the Perfect Choice for Your Hosting Choice for Why We’re the Perfect Choice for Your Hosting ",
  },
];

export default function Services() {
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
          title="Fast, Reliable & Secure hosting"
          heading=" Why We’re the Perfect Choice for Your Hosting Choice for"
        />
      </motion.div>
      {/* ---------------------------
            CARDS
      ---------------------------- */}
      <motion.div
      variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
      className="flex flex-wrap gap-6 justify-center md:mt-30 mt-12 mx-6">
        {services.map((serv, index) => (
          <motion.div
          variants={itemVariants}
            whileHover={{
              scale: 1.01,
              y: -3,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            key={index}
            className="md:w-[394px] h-fit w-[345px] flex flex-col bg-white py-10 rounded-xl md:mb-4 hover:border-[#9D4EDD] border-white border"
          >
            <div className="bg-[#EBDCF8] w-20 h-20 flex items-center justify-center rounded-full max-w-7xl mx-auto mb-6">
              <Image
                src={serv.icon}
                alt="logo"
                width={38}
                height={38}
                className=" md:w-[38px] md:h-[38px] w-[26px] h-[26px]"
              />
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-[18px] md:text-xl px-10 mt-[15px]">
                {serv.title}
              </h2>
              <p className="mt-[13px] px-10 text-gray-600  ">{serv.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
