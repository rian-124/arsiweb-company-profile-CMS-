'use client';

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import IconText from "@/app/components/common/IconText";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepId = parseInt(entry.target.getAttribute("data-step-id") || "0");
          if (entry.isIntersecting) {
            setActiveStep(stepId);
          }
        });
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Konsultasi",
      description:
        "Jelaskan Yang Anda Butuhkan, Di Bisnis Anda Atau Bahkan Apa Yang Anda Cari",
      buttonText: "Mulai Konsultasi",
      imageSrc: "/images/dummy.webp",
      imageAlt: "Konsultasi",
    },
    {
      id: 2,
      title: "Negosiasi & Down Payment (DP)",
      description:
        "Jika Sudah Cocok Dengan Kami, Lanjutkan Dengan Negosiasi Dan Lakukan Down Payment (DP)",
      imageSrc: "/images/dummy.webp",
      imageAlt: "Negosiasi & Down Payment",
    },
    {
      id: 3,
      title: "Pengerjaan Proyek",
      description:
        "Setelah Ada Kesepakatan, Tim Kami Akan Mulai Mengerjakan Awal Dan Akan Dikabarin",
      imageSrc: "/images/dummy.webp",
      imageAlt: "Pengerjaan Proyek",
    },
    {
      id: 4,
      title: "Maintenance",
      description:
        "Layanan Dari Kami Free Maintenance Selama Tahun Yang Telah Disepakati Sebelumnya",
      imageSrc: "/images/dummy.webp",
      imageAlt: "Maintenance",
    },
  ];

  return (
    <section className="px-10 md:px-20 lg:px-40 py-20 flex flex-col justify-center items-center">
      <IconText
        iconSrc={"/icons/winterSecond.svg"}
        text="BAGAIMANA KITA BEKERJA?"
        color="text-sky-500"
      />
      <div className="text-xl md:text-2xl lg:text-4xl text-gray-400 text-center font-anta">
        <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4 ">
          <h1 className="text-black">CARA MEMULAI</h1>
          <h1 className="text-sky-500">KERJASAMA</h1>
        </div>
      </div>

      <div className="mt-20 w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {workflowSteps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isEven = index % 2 !== 0;

          return (
            <div
              key={step.id}
              ref={(el) => { stepRefs.current[index] = el; }}
              data-step-id={step.id}
              className="flex items-center mb-32 last:mb-0 font-anta"
            >
              {/* --- Even: Image → Number → Text --- */}
              {isEven ? (
                <>
                  {/* Image */}
                  <div className="w-5/12 pr-4 md:pr-12">
                    <div
                      className={`relative w-full h-26 md:h-50 lg:h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                        isActive ? "bg-sky-500 scale-[1.02]" : "bg-gray-200"
                      }`}
                    >
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        className="lg:object-cover p-1 md:p-2 lg:p-4 rounded-xl md:rounded-4xl"
                      />
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="w-2/12 flex justify-center z-10">
                    <div
                      className={`w-6 h-6 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-2xl font-bold transition-colors duration-300 ${
                        isActive ? "bg-black text-white" : "bg-gray-400 text-white"
                      }`}
                    >
                      {String(step.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-5/12 text-left pl-4 md:pl-12">
                    <h3 className="text-xs md:text-2xl text-black mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-[0.4rem] md:text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.buttonText && (
                      <Link
                        href="#"
                        className="group w-30 md:w-46 flex items-center gap-2 px-2 md:px-6 py-2 border outline-1 border-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-[0.4rem] md:text-xs text-black">{step.buttonText}</span>
                        <span className="w-3 h-3 md:w-5 md:h-5 bg-black group-hover:bg-sky-500 rounded-full flex items-center justify-center">
                          <Image
                            src="/icons/raquoSecond.svg"
                            alt="arrow"
                            width={12}
                            height={12}
                            className="group-hover:rotate-[30deg] transition-all duration-200"
                          />
                        </span>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                /* --- Odd: Text → Number → Image --- */
                <>
                  {/* Text */}
                  <div className="w-5/12 text-left md:pr-12 pr-4">
                    <h3 className="text-xs md:text-2xl text-black mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-[0.4rem] md:text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.buttonText && (
                      <Link
                        href="#"
                        className="group w-30 md:w-46 flex items-center justify-center gap-2 px-2 md:px-6 py-2 border border-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-[0.4rem] md:text-xs text-black">{step.buttonText}</span>
                        <span className="w-3 h-3 md:w-5 md:h-5 bg-black group-hover:bg-sky-500 rounded-full flex items-center justify-center">
                          <Image
                            src="/icons/raquoSecond.svg"
                            alt="arrow"
                            width={12}
                            height={12}
                            className="group-hover:rotate-30 rotate-30 lg:rotate-0 transition-all duration-200"
                          />
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* Number Circle */}
                  <div className="w-2/12 flex justify-center z-10">
                    <div
                      className={`w-6 h-6 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-2xl font-bold transition-colors duration-300 ${
                        isActive ? "bg-black text-white" : "bg-gray-400 text-white"
                      }`}
                    >
                      {String(step.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-5/12 pl-4 md:pl-12">
                    <div
                      className={`relative w-full h-26 md:h-50 lg:h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                        isActive ? "bg-sky-500 scale-[1.02]" : "bg-gray-200"
                      }`}
                    >
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        className="lg:object-cover p-1 md:p-2 lg:p-4 rounded-xl md:rounded-4xl"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
