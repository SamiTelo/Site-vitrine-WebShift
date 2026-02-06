import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Partner from "@/components/Partner";
import Services from "@/components/Services";



{/* ---------------------------
      SEO minimal
  ---------------------------- */}
export const metadata: Metadata = {
 title: "Accueil",
  description:
    "WebShift accompagne les entreprises avec des stratégies SEO, publicité en ligne et gestion des réseaux sociaux pour accélérer leur croissance.",
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
      <Header />

      {/* ---------------------------
            Main content
      ---------------------------- */}
      <main>
        <section className="relative bg-cover bg-center md:pb-52 bg-[url('/assets/Bg-Home.jpg')]">
          <Hero/>
        </section>
        <section>
          <Partner/>
          <About/>
          <Services/>
        </section>
      </main>

      {/* ---------------------------
            Footer global
      ---------------------------- */}
      <Footer/>
    </>
  );
}
