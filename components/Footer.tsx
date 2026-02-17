"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#f8f9fb] pt-16 md:pt-26 pb-8 px-6 md:px-12 lg:px-24 font-sans text-[#4b5563]"
    >
      <div className="max-w-7xl mx-auto">
        {/*----------------------------------------------------------
                     Grid principale
        ------------------------------------------------------------*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/*----------------------------------------------------------
                    Logo & Description
          -----------------------------------------------------------*/}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 md:w-12 md:h-12">
                <Image
                  src="/assets/logo.png"
                  alt="logo WebShift"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[#0f172a]">
                WebShift
              </span>
            </div>
            <p className="leading-relaxed text-sm max-w-xs">
              WebShift aide les entreprises à développer leur présence digitale,
              générer du trafic qualifié et convertir leurs visiteurs en clients
              grâce à des stratégies marketing personnalisées.
            </p>
            <div className="flex gap-3">
              {[Facebook, Youtube, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EBDCF8] text-[#0f172a] hover:bg-[#9D4EDD] hover:text-white transition-colors"
                  aria-label={`Lien vers ${Icon.name}`}
                >
                  <Icon size={18} fill="currentColor" stroke="none" />
                </a>
              ))}
            </div>
          </div>

          {/*------------------------------------------------------------------
                     Services Links
          ------------------------------------------------------------------*/}
          <div className="ml-0 md:ml-20">
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              {[
                "Stratégie Digitale",
                "SEO & SEA",
                "Marketing sur les Réseaux Sociaux",
                "Création de Sites Web",
                "Design UX/UI",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#9D4EDD] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*---------------------------------------------------------------
                   Quick Links
          -------------------------------------------------------------*/}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">
              Liens rapides
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "À propos",
                "Centre d'assistance",
                "Nos études de cas",
                "Mon compte",
                "Contactez-nous",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#9D4EDD] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*---------------------------------------------------------------------------
                    Carte Contact
          -----------------------------------------------------------------------------------*/}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="bg-white p-8 rounded-3xl md:w-[400px] w-[310px] md:-ml-28"
          >
            <span className="text-[#6366f1] text-xs font-bold tracking-wider">
              Contact
            </span>
            <h3 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Contactez notre équipe pour discuter de votre stratégie digitale
              et découvrir comment WebShift peut booster vos performances en
              ligne.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#6366f1]">
                  <Mail size={20} />
                </div>
                <div className="text-sm">
                  <p>contact@webshift.com</p>
                  <p>support@webshift.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#6366f1]">
                  <Phone size={20} />
                </div>
                <div className="text-sm font-medium">
                  <p>+225 01 23 45 67 89</p>
                  <p>+225 07 89 01 23 45</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/*---------------------------------------------------------------------------------------------------
                 Copyright & Paiement
        ----------------------------------------------------------------------------------------------------------*/}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            Copyright {currentYear} WebShift | Design & développement par{" "}
            <span className="font-semibold">SAM DEV</span> | Tous droits
            réservés
          </p>
          <div className="flex items-center gap-4 bg-white p-2 px-4 rounded-lg">
            <Image
              src="/assets/google-pay.png"
              alt="Google Pay"
              width={24}
              height={24}
              className="h-5 w-auto"
            />
            <div className="h-4 w-px bg-gray-200 mx-1"></div>
            <Image
              src="/assets/visa.png"
              alt="Visa"
              width={24}
              height={24}
              className="h-3 w-auto"
            />
            <div className="h-4 w-px bg-gray-200 mx-1"></div>
            <Image
              src="/assets/mastercard.png"
              alt="Mastercard"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
