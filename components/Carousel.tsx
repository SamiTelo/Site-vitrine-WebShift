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

  return (
      <Carousel
      plugins={[plugin.current]}
      className="relative md:w-[600px] w-[300px] h-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-none bg-[#F6F8FA] rounded-xl">
              <CardContent className="flex flex-col p-4 md:px-10">
                {/* Stars */}
                <div className="flex flex-row mb-3 space-x-1 md:space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500 stroke-0"
                    />
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Choosing the right hosting provider can make the difference...
                  Choosing the right hosting provider can make the difference...
                  Choosing the right hosting provider can make the difference...
                </p>

                {/* User info */}
                <div className="flex flex-row items-center mt-4 md:mt-6">
                  <Image
                    src="/assets/about-img1.png"
                    alt="User photo"
                    width={54}
                    height={54}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3 md:mr-6 object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg font-bold">
                      Wille Summer
                    </h3>
                    <span className="text-sm md:text-base text-gray-500">
                      Développeur Fullstack
                    </span>
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
