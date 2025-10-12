'use client';

import IconText from "@/app/components/common/IconText";
import PricingCard from "@/app/components/common/PricingCard";
import { useState } from "react";


export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState('custom');
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const pricingData = {
    custom: [
      {
        iconSrc: "/icons/hamburgerMenu.svg",
        title: "Starter",
        subtitle: "Untuk Skala Kecil",
        price: "Rp 7.999.000",
        description: "Website Sederhana Seperti Profil Perusahaan, Web Penjualan Pribadi, Sistem Absensi Dan Lain Lain",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Desain Profesional Dan Responsif" },
          { iconSrc: "/icons/winterSecond.svg", text: "Cepat & Dokumentasi Lengkap" },
          { iconSrc: "/icons/winterSecond.svg", text: "Gratis Maintenance 30 Hari" }
        ],
        buttonText: "Konsultasi",
        isPremium: false
      },
      {
        iconSrc: "/icons/starSecond.svg",
        title: "Standard",
        subtitle: "Untuk Skala Menengah",
        price: "Rp 24.999.000",
        description: "Website Skala Menengah Seperti Toko Online, Marketplace, POS, Sistem Inventory, Fitur Lengkap & Integrasi Pihak Ketiga",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Kustom Desain Premium" },
          { iconSrc: "/icons/winterSecond.svg", text: "Cepat Dan Dokumentasi Lengkap" },
          { iconSrc: "/icons/winterSecond.svg", text: "Gratis Maintenance 3 Bulan" }
        ],
        buttonText: "Konsultasi",
        isPremium: false
      },
      {
        iconSrc: "/icons/signal.svg",
        title: "Premium",
        subtitle: "Untuk Solusi Kustom",
        price: "Rp 49.999.000",
        description: "Aplikasi Kustom Dengan Kebutuhan Spesifik, Fitur Kompleks & Multi Platform, Integrasi API, ERP",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Kustom Desain Eksklusif Dan Konsultasi Penuh" },
          { iconSrc: "/icons/winterSecond.svg", text: "Cepat Dan Dokumentasi Lengkap" },
          { iconSrc: "/icons/winterSecond.svg", text: "Gratis Maintenance 6 Bulan" }
        ],
        buttonText: "Konsultasi",
        isPremium: true
      }
    ],
    wordpress: [
      {
        iconSrc: "/icons/wordpress.svg",
        title: "Basic",
        subtitle: "Untuk Bisnis Kecil",
        price: "Rp 3.999.000",
        description: "Website WordPress Dengan Tema Dasar, Plugin Essential, Dan Kustomisasi Dasar",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Instalasi & Setup WordPress" },
          { iconSrc: "/icons/winterSecond.svg", text: "Kustomisasi Tema Dasar" },
          { iconSrc: "/icons/winterSecond.svg", text: "Gratis Maintenance 1 Bulan" }
        ],
        buttonText: "Konsultasi",
        isPremium: false
      },
      {
        iconSrc: "/icons/wordpress.svg",
        title: "Professional",
        subtitle: "Untuk Bisnis Berkembang",
        price: "Rp 8.999.000",
        description: "Website WordPress Advanced Dengan Tema Premium, Plugin Kustom, Dan Fitur Advanced",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Tema Premium & Desain Kustom" },
          { iconSrc: "/icons/winterSecond.svg", text: "Pengembangan Plugin Kustom" },
          { iconSrc: "/icons/winterSecond.svg", text: "Gratis Maintenance 2 Bulan" }
        ],
        buttonText: "Konsultasi",
        isPremium: false
      },
      {
        iconSrc: "/icons/wordpress.svg",
        title: "Enterprise",
        subtitle: "Untuk Bisnis Besar",
        price: "Rp 19.999.000",
        description: "Solusi WordPress Enterprise Dengan Pengembangan Kustom, Keamanan Advanced, Dan Manajemen Penuh",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Pengembangan WordPress Kustom" },
          { iconSrc: "/icons/winterSecond.svg", text: "Keamanan & Performa Advanced" },
          { iconSrc: "/icons/winterSecond.svg", text: "Gratis Maintenance 6 Bulan" }
        ],
        buttonText: "Konsultasi",
        isPremium: true
      }
    ],
    seo: [
      {
        iconSrc: "/icons/signal.svg",
        title: "Local SEO",
        subtitle: "Untuk Bisnis Lokal",
        price: "Rp 2.999.000",
        description: "Paket Local SEO Untuk Meningkatkan Visibilitas Bisnis Anda Di Hasil Pencarian Lokal",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Optimasi Google My Business" },
          { iconSrc: "/icons/winterSecond.svg", text: "Riset Keyword Lokal" },
          { iconSrc: "/icons/winterSecond.svg", text: "Laporan & Analisis Bulanan" }
        ],
        buttonText: "Konsultasi",
        isPremium: false
      },
      {
        iconSrc: "/icons/signal.svg",
        title: "National SEO",
        subtitle: "Untuk Bisnis Nasional",
        price: "Rp 7.999.000",
        description: "Strategi SEO Komprehensif Untuk Ranking Lebih Tinggi Di Hasil Pencarian Nasional Dan Meningkatkan Traffic Organik",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Audit & Strategi SEO Lengkap" },
          { iconSrc: "/icons/winterSecond.svg", text: "Content Marketing & Link Building" },
          { iconSrc: "/icons/winterSecond.svg", text: "Laporan & Analisis Bulanan" }
        ],
        buttonText: "Konsultasi",
        isPremium: false
      },
      {
        iconSrc: "/icons/signal.svg",
        title: "Global SEO",
        subtitle: "Untuk Bisnis Internasional",
        price: "Rp 15.999.000",
        description: "Strategi SEO Advanced Untuk Pasar Internasional Dengan Dukungan Multi-Bahasa Dan Ranking Global",
        benefits: [
          { iconSrc: "/icons/winterSecond.svg", text: "Strategi SEO Internasional" },
          { iconSrc: "/icons/winterSecond.svg", text: "Optimasi Konten Multi-Bahasa" },
          { iconSrc: "/icons/winterSecond.svg", text: "Analytics & Reporting Advanced" }
        ],
        buttonText: "Konsultasi",
        isPremium: true
      }
    ]
  };

  const currentPricingData = pricingData[selectedTab as keyof typeof pricingData] || pricingData.custom;
  
  return (
    <section className="px-10 md:px-20 lg:px-40 py-20 flex flex-col justify-center items-center">
      <IconText
        iconSrc={"/icons/winterSecond.svg"}
        text="HARGA LAYANAN KAMI"
        color="text-sky-500"
      />
      <div className="text-xl md:text-2xl lg:text-4xl text-gray-400 text-center font-anta">
        <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4 ">
          <h1 className="text-black">Konsultasikan Kebutuhan</h1>
          <h1 className="text-sky-500">Anda Sekarang</h1>
        </div>
      </div>

      <div className="flex gap-2 mt-8 bg-gray-900 rounded-full p-2">
        <button
          onClick={() => {
            setSelectedTab('custom');
            setActiveCardIndex(null);
          }}
          className={`px-4 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
            selectedTab === 'custom'
              ? 'bg-sky-500 text-white'
              : 'text-white hover:bg-gray-800'
          }`}
        >
          Website Custom
        </button>
        <button
          onClick={() => {
            setSelectedTab('wordpress');
            setActiveCardIndex(null);
          }}
          className={`px-4 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
            selectedTab === 'wordpress'
              ? 'bg-sky-500 text-white'
              : 'text-white hover:bg-gray-800'
          }`}
        >
          Website WordPress
        </button>
        <button
          onClick={() => {
            setSelectedTab('seo');
            setActiveCardIndex(null);
          }}
          className={`px-4 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
            selectedTab === 'seo'
              ? 'bg-sky-500 text-white'
              : 'text-white hover:bg-gray-800'
          }`}
        >
          SEO
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-7xl auto-rows-fr">
        {currentPricingData.map((card, index) => (
          <PricingCard
            key={index}
            iconSrc={card.iconSrc}
            title={card.title}
            subtitle={card.subtitle}
            price={card.price}
            description={card.description}
            benefits={card.benefits}
            buttonText={card.buttonText}
            isActive={activeCardIndex === index}
            onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}