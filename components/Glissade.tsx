import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Glissade() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/about-img1.png"
            alt="img hero"
            width={204}
            height={200}
            className="w-[200px] md:w-[320px] md:h-[461px] h-auto mt-8 md:mt-16 mr-2 md:mr-6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/about-img2.png"
            alt="img hero"
            width={204}
            height={200}
            className="w-[120px] md:w-[252px] h-[250px] md:h-[360px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/about-img1.png"
            alt="img hero"
            width={204}
            height={200}
            className="w-[200px] md:w-[320px] md:h-[461px] h-auto mt-8 md:mt-16 mr-2 md:mr-6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/about-img1.png"
            alt="img hero"
            width={204}
            height={200}
            className="w-[200px] md:w-[320px] md:h-[461px] h-auto mt-8 md:mt-16 mr-2 md:mr-6"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
