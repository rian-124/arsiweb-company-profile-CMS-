"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";

const quotes = [
  {
    text: "Setiap baris kode yang kita tulis, setiap kata kunci yang kita optimalkan, adalah langkah kita menuju puncak hasil pencarian.",
    name: "Ramadansyah",
    role: "CEO, Arsiweb",
    imageSrc: "/icons/blankProfil.svg",
  },
  {
    text: "Kreativitas bukan hanya tentang ide baru, tapi bagaimana kita mengeksekusinya dengan kode yang elegan.",
    name: "Afrian Fahrurrozi",
    role: "Fullstack Developer",
    imageSrc: "/icons/blankProfil.svg",
  },
  {
    text: "Desain yang hebat adalah desain yang berfungsi, bukan hanya yang terlihat indah.",
    name: "Yadi Saputra",
    role: "UI/UX Designer",
    imageSrc: "/icons/blankProfil.svg",
  },
];

export default function QuoteSlider() {
  return (
    <div className="relative w-full h-[15rem] flex flex-col items-center justify-center">
      <div className="relative w-full md:h-[27rem] h-[10rem]  flex items-center justify-center overflow-hidden ">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass:
              "swiper-pagination-bullet bg-white opacity-40 w-2 h-2 rounded-full transition-all duration-500",
            bulletActiveClass:
              "swiper-pagination-bullet-active opacity-100 w-4",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          className="text-white w-full h-full relative"
        >
          {quotes.map((q, i) => (
            <SwiperSlide
              key={i}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center bg-transparent"
              style={{ zIndex: 0 }}
            >
              <div className="space-y-5 px-5 md:px-0">
                <QuoteText text={q.text} />
                <QuoteAuthor
                  name={q.name}
                  role={q.role}
                  imageSrc={q.imageSrc}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-swiper-pagination ml-10 md:ml-0"></div>

    </div>
  );
}
