import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


{/* ---------------------------
      SEO minimal
  ---------------------------- */}
export const metadata: Metadata = {
  title: {
    default: "WebShift — Agence de Marketing Digital & Stratégies de Croissance",
    template: "%s | WebShift",
  },
  description:
    "WebShift est une agence de marketing digital spécialisée en SEO, publicité en ligne, gestion des réseaux sociaux et création de stratégies digitales performantes. Nous aidons les entreprises à augmenter leur visibilité, attirer plus de clients et accélérer leur croissance.",
  keywords: [
    "WebShift",
    "agence marketing digital",
    "marketing digital",
    "SEO",
    "publicité en ligne",
    "Google Ads",
    "Facebook Ads",
    "social media management",
    "création de contenu",
    "stratégie digitale",
    "acquisition clients",
    "croissance digitale",
    "marketing Côte d’Ivoire",
    "marketing Afrique",
  ],
};



export default function HomePage() {
  return (
    <>
      {/* ---------------------------
            Header global
      ---------------------------- */}
      <Navbar />

      {/* ---------------------------
            Contenu principal
      ---------------------------- */}
      <main className="bg-white text-black">
        <section className="relative h-full bg-cover bg-center md:pb-52 bg-[url('/assets/Bg-Home.jpg')]">
          <Hero/>
        </section>
        <section>
          <About/>
        </section>
      </main>

      {/* ---------------------------
            Footer global
      ---------------------------- */}
      <Footer/>
    </>
  );
}
