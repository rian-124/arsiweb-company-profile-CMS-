"use client";

import IconText from "../../../common/IconText";
import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";

export default function ProjectSection() {
  return (
    <section className="bg-black md:px-40 py-40 px-10 rounded-t-[4rem]">
      <IconText
        iconSrc="/icons/winterSecond.svg"
        color="text-sky-500"
        text="LAYANAN KAMI"
      />

      <div className="text-white font-anta md:text-4xl text-3xl">
        <h1 className="flex flex-col gap-2">
          Proyek Kami Membantu
          <span className="text-sky-500 block">Mereka Go Digital</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-5 md:grid-rows-5">
        {/* SWIPER 1 */}
        <div className="md:col-span-3 md:row-span-2">
          <ProjectSlider
            images={[
              "/images/dummy.webp",
              "/images/dummy.webp",
              "/images/dummy.webp",
            ]}
            navClass="1"
          />
        </div>

        {/* CARD 2 */}
        <div className="md:col-span-2 md:row-span-2 md:col-start-4">
          <ProjectCard
            title="Website Custom & Website WordPress"
            description="Kami ciptakan website sesuai kebutuhan Anda. Mau yang unik dan eksklusif dengan custom, atau yang cepat dan praktis dengan WordPress? Pilihan ada di tangan Anda."
          />
        </div>

        {/* CARD 3 */}
        <div className="md:col-span-2 md:row-span-2 md:row-start-3">
          <ProjectCard
            title="SEO SPESIALIST"
            description="Naikkan peringkat, tingkatkan traffic, raih konversi. Solusi SEO profesional untuk pertumbuhan bisnis yang berkelanjutan."
            bgColor="bg-blue-500"
          />
        </div>

        {/* SWIPER 4 */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-3">
          <ProjectSlider
            images={[
              "/images/dummy.webp",
              "/images/dummy.webp",
              "/images/logo.png",
            ]}
            navClass="4"
          />
        </div>
      </div>
    </section>
  );
}
