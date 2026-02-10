"use client";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  

  return (
    <header className="w-full fixed top-6 left-0 z-40 px-[5%] transition-all duration-300">
      <nav className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 bg-white/76 backdrop-blur shadow-sm md:rounded-xl md:mt-2">
        <div className="flex items-center justify-between h-16">
          {/* -------------------------------
                Logo
          -------------------------------- */}
          <div className="flex items-center gap-4">
            <div
              className="relative w-12 h-12 md:w-14 md:h-14"
            >
              <Image
                src="/assets/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              WebShift
            </span>
          </div>

          {/* -------------------------------
                Desktop Links
          -------------------------------- */}
          <div className="hidden md:flex items-center gap-8 ml-28">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* -------------------------------
                Desktop Button Action
          -------------------------------- */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://github.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#9D4EDD] text-white rounded-full text-sm shadow-sm hover:scale-105 hover:bg-black transition-all duration-300"
            >
              <MoveUpRight className="w-4 h-4" />
              Demander un devis
            </Link>
          </div>

          {/* -------------------------------
                Mobile Toggle
          -------------------------------- */}
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9D4EDD]"
          >
            <svg
              className={`h-7 w-7 transition-transform ${open ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* -------------------------------
              Mobile Menu
        -------------------------------- */}
        {open && (
          <div className="md:hidden mt-2 pb-40 pt-20">
            <div className="flex flex-col gap-2 px-2 items-center">
              <NavLinkMobile href="#accueil">Accueil</NavLinkMobile>
              <NavLinkMobile href="#about">About</NavLinkMobile>
              <NavLinkMobile href="#services">Services</NavLinkMobile>
              <NavLinkMobile href="#pricing">Pricing</NavLinkMobile>
              <NavLinkMobile href="#contact">Contact</NavLinkMobile>

              <div className="border-t border-slate-200 mt-3 pt-3">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 mt-6 py-4 bg-[#9D4EDD] text-white rounded-full text-sm shadow-sm hover:scale-105 hover:bg-black transition-all duration-300"
                >
                  <MoveUpRight className="w-4 h-4" />
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ---------------------------------
        LINK COMPONENTS
----------------------------------- */

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 text-sm hover:text-[#9D4EDD] hover:underline transition-colors"
    >
      {children}
    </Link>
  );
}

function NavLinkMobile({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md font-medium text-gray-700 text-sm hover:bg-slate-100 hover:text-[#9D4EDD] hover:underline transition-colors w-full text-center"
    >
      {children}
    </Link>
  );
}
