"use client";
import { Star } from "lucide-react";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  // Témoignages crédibles pour WebShift
  const testimonials = [
    {
      name: "Aminata Koné",
      role: "CEO, StartUp Tech",
      photo: "/assets/photo1.png",
      rating: 5,
      text: "Grâce à WebShift, notre trafic web a doublé en seulement 3 mois et notre taux de conversion a considérablement progressé. Une équipe réactive, stratégique et toujours à l’écoute !",
    },
    {
      name: "Cheick Diabaté",
      role: "Directeur Marketing",
      photo: "/assets/photo4.png",
      rating: 5,
      text: "Leur approche data-driven a complètement transformé nos campagnes publicitaires. Un ROI tangible, des conseils personnalisés et un accompagnement de qualité – je recommande vivement !",
    },
    {
      name: "Fatou Bamba",
      role: "Fondatrice e-commerce",
      photo: "/assets/photo3.png",
      rating: 5,
      text: "WebShift a conçu notre site e-commerce de A à Z et pris en charge la gestion complète de nos campagnes Ads. Grâce à leur stratégie et leur expertise, nos ventes ont considérablement augmenté et notre visibilité en ligne s’est renforcée",
    },
    {
      name: "Mohamed Traoré",
      role: "Responsable Communication",
      photo: "/assets/photo4.png",
      rating: 5,
      text: "Une équipe professionnelle, créative et toujours à l’écoute. Grâce à eux, notre présence digitale est désormais solide, cohérente et impactante sur tous les canaux.",
    },
    {
      name: "Adama Coulibaly",
      role: "Entrepreneur",
      photo: "/assets/photo5.png",
      rating: 5,
      text: "WebShift combine stratégie, expertise technique et créativité. Grâce à leur accompagnement, nos campagnes marketing ont été optimisées et nos résultats ont largement dépassé nos attentes, avec un impact mesurable sur notre croissance.",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative md:w-[600px] w-[300px] h-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((t, index) => (
          <CarouselItem key={index}>
            <Card className="border-none bg-[#F6F8FA] rounded-xl">
              <CardContent className="flex flex-col p-4 md:px-10">
                {/* Stars */}
                <div className="flex flex-row mb-3 space-x-1 md:space-x-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500 stroke-0"
                    />
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {t.text}
                </p>

                {/* User info */}
                <div className="flex flex-row items-center mt-4 md:mt-6">
                  <Image
                    src={t.photo}
                    alt={`Photo de ${t.name}`}
                    width={54}
                    height={54}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3 md:mr-6 object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg font-bold">{t.name}</h3>
                    <span className="text-sm md:text-base text-gray-500">{t.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Boutons custom position */}
      <div className="absolute -right-20 top-40 -translate-y-1/2 hidden md:flex flex-col gap-4">
        <CarouselPrevious className="static bg-[#F6F8FA] border-none rounded-full md:p-6 p-0 text-[#9D4EDD] " />
        <CarouselNext className="static bg-[#F6F8FA] border-none rounded-full md:p-6 p-0 text-[#9D4EDD]" />
      </div>
    </Carousel>
  );
}
