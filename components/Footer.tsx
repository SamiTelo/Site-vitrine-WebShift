"use client";

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
    <footer className="bg-[#f8f9fb] pt-16 md:pt-26 pb-8 px-6 md:px-12 lg:px-24 font-sans text-[#4b5563]">
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
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[#0f172a]"> WebShift</span>
            </div>
            <p className="leading-relaxed text-sm max-w-xs">
              Take control of your online presence with top-tier web hosting
              solutions. Whether youre launching your first project or managing
              multiple websites.
            </p>
            <div className="flex gap-3">
              {[Facebook, Youtube, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EBDCF8] text-[#0f172a] hover:bg-[#9D4EDD] hover:text-white transition-colors"
                  aria-label={`Link to ${Icon.name}`}
                >
                  <Icon size={18} fill="currentColor" stroke="none"/>
                </a>
              ))}
            </div>
          </div>

          {/*------------------------------------------------------------------
                     Quick Links
          ------------------------------------------------------------------*/}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "About Us",
                "Support Center",
                "Domain Search",
                "My Account",
                "Contact Us",
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
                    Useful Links
          -------------------------------------------------------------*/}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-6">
              Useful Links
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                "Cloud Hosting",
                "VPS Hosting",
                "Shared Hosting",
                "WP Hosting",
                "Web Hosting",
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
          <div className="bg-white p-8 rounded-3xl w-[400px] -ml-28">
            <span className="text-[#6366f1] text-xs font-bold tracking-wider">
              Address
            </span>
            <h3 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4">
              Ready To Get Started?
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#6366f1]">
                  <Mail size={20} />
                </div>
                <div className="text-sm">
                  <p>contact.tech@gmail.com</p>
                  <p>info@niotech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#6366f1]">
                  <Phone size={20} />
                </div>
                <div className="text-sm font-medium">
                  <p>+880 123 654 789</p>
                  <p>+001 6520 698 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------------------------------------------------------
                 Copyright & Paiement
        ----------------------------------------------------------------------------------------------------------*/}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            Copyright {currentYear} HOSTC Theme By{" "}
            <span className="font-semibold">FleexStudio</span> | All Rights
            Reserved
          </p>
          <div className="flex items-center gap-4 bg-white p-2 px-4 rounded-lg">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_%28GPay%29_Logo_%282020%29.svg"
              alt="GPay"
              width={24}
              height={24}
              className="h-5 w-auto"
            />
            <div className="h-4 w-px bg-gray-200 mx-1"></div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              width={24}
              height={24}
              className="h-3 w-auto"
            />
            <div className="h-4 w-px bg-gray-200 mx-1"></div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
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
