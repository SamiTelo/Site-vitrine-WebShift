import type { Metadata } from "next";
import { About } from "./components/about";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Faq } from "./components/faq";
import { Testimonial } from "./components/testimonial";
import { Cta } from "./components/cta";
import { Blog } from "./components/blog";
import { Services } from "./components/services";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import { Pricing } from "../pricing/pricing-section";



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



export const HomeView = () => {
  return (
    <>
      {/* ---------------------------
           global Header
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
          <Banner/>
          <About/>
        </section>
        <section className="bg-[#F6F8FA] md:pt-40 pt-20 md:pb-52 pb-30">
         <Services/>
        </section>
        <section className="md:pt-40 pt-20 md:pb-40 pb-26">
          <Pricing/>
        </section>
        <section className="bg-[#F6F8FA] md:pt-40 pt-18 md:pb-52 pb-30">
          <Faq/>
        </section>
        <section className="md:pt-40 pt-18 md:pb-40 pb-30">
          <Testimonial/>
        </section>
        <section className="bg-[#9D4EDD] md:pt-30 pt-18 md:pb-30 pb-30">
          <Cta/>
        </section>
        <section className="md:pt-40 pt-20 md:pb-52 pb-26 ">
          <Blog/>
        </section>
      </main>

      {/* ---------------------------
           global  Footer
      ---------------------------- */}
      <Footer/>
    </>
  );
}
