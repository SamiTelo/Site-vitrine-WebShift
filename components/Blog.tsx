"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    img: "/assets/blog1.png",
    title: "5 stratégies pour booster votre trafic web en 2026",
    description: "Par WebShift | 2 janvier 2026",
  },
  {
    img: "/assets/blog2.png",
    title: "Comment transformer vos visiteurs en clients fidèles",
    description: "Par WebShift | 7 février 2026",
  },
  {
    img: "/assets/blog3.png",
    title: "Tendances UX/UI à adopter pour votre site",
    description: "Par WebShift | 20 février 2026",
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
    <div id="blog" className="w-full max-w-7xl mx-auto">
      {/* ---------------------------
            TITLE
      ---------------------------- */}
      <div className="flex flex-row justify-center flex-wrap md:gap-35 gap-0 px-6 md:px-0">
        <div className="md:w-[700px]">
          <div className="text-center w-fit text-[10px] md:text-xs bg-[#EBDCF8] text-[#9D4EDD] px-6 py-2 rounded-full ">
            Blog
          </div>
          <h1 className="font-semibold text-2xl md:text-4xl mt-10">
           Les dernières tendances et conseils marketing digital pour booster votre visibilité et convertir vos visiteurs en clients.
          </h1>
        </div>
        <div className="md:w-[400px] mt-16">
          <p className="text-gray-600">
           Retrouvez nos articles, études de cas et guides pratiques pour optimiser votre stratégie digitale, augmenter votre trafic, améliorer
            votre visibilité en ligne et convertir efficacement vos visiteurs en clients.
          </p>
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
        className="flex flex-wrap md:gap-6 gap-10 justify-center md:mt-30 mt-12 mx-6"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="md:w-[394px] h-fit w-[345px] flex flex-col bg-[#F6F8FA] py-10 rounded-4xl md:mb-4 hover:scale-102 transition-all duration-300 border-white border"
          >
            <div className="mb-6 -mt-6 mx-4">
              <Image
                src={post.img}
                alt={`Article: ${post.title}`}
                width={308}
                height={280}
                className="md:w-[408px] md:h-[300px] w-[306px] h-[246px] rounded-3xl"
              />
            </div>
            <div className="px-6">
              <p className="mt-[13px] mb-2 text-gray-600 text-xs">
                {post.description}
              </p>
              <h2 className="font-semibold text-[18px] md:text-xl mb-4">
                {post.title}
              </h2>
              <span className="text-[#9D4EDD] cursor-pointer hover:underline">
                Lire la suite
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
