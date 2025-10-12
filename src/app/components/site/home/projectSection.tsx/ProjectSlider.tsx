"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

interface ProjectSliderProps {
  images: string[];
  navClass: string;
}

export default function ProjectSlider({
  images,
  navClass,
}: ProjectSliderProps) {
  return (
    <div className="relative rounded-xl overflow-hidden h-[300px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: `.next-btn-${navClass}`,
          prevEl: `.prev-btn-${navClass}`,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="relative w-full h-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              fill
              className="object-cover transition-opacity duration-700"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`prev-btn-${navClass} absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition`}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className={`next-btn-${navClass} absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition`}
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
}
