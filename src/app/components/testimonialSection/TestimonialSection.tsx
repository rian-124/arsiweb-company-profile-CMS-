'use client';
import React, { useState } from 'react';
import IconText from "../common/IconText";
import TestimonialCard from "../common/TestimonialCard";


const TestimonialSection = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const testimonials = [
        {
            name: "Salma Pertiwi",
            position: "Pemilik Toko",
            rating: 5,
            text: "Sangat Profesional, Mereka Membuat Website Bisnis Kuliner Saya Dengan Desain Yang Elegan Dan Menarik. Serta Kemudahannya Cepat. Hasilnya, Tampilan Web Kami Lebih Profesional Dan Meyakinkan"
        },
        {
            name: "Pratama",
            position: "CEO RUMAH ARISTEK",
            rating: 4,
            text: "Sangat Worth It, Mempercayakan Wajah Perusahaan Saya Di Arsiweb, Tampilan Jadi Mahal Dan Website Cepat Sekali Bisa"
        },
        {
            name: "Dimas Putra",
            position: "Pemilik Toko",
            rating: 5,
            text: "Meningkatkan Traffic Organik Dan Omset, Sangat Direkomendasikan Untuk Bisnis Yang Ingin Berkembang Online"
        },
        {
            name: "Riska Pratiwi",
            position: "Pemilik Toko",
            rating: 5,
            text: "Paket Lengkap Mereka Membuat Website WordPress Yang SEO-Nya Terbukti Meningkatkan Ranking Kami Di Mesin Pencari, Mendonrong Pertumbuhan Penjualan Signifikan"
        }
    ];

    const handleCardClick = (index: number) => {
        setActiveCardIndex(index);
    };

    return (
        <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[4rem]">
            <div className="max-w-7xl mx-auto"> 
                <IconText
                    iconSrc="/icons/winterSecond.svg"
                    color="text-sky-500"
                    text="TESTIMONI PELANGGAN"
                />
                <div className="text-white font-anta md:text-2xl lg:text-4xl text-lg flex flex-col gap-2 mt-2 md:mt-4">
                    <h1 className="">Kami Bangga Bisa</h1>
                    <h1>Berdampak Untuk <span className="text-sky-500">Mereka</span></h1>
                </div>
            </div>

            <div className="mt-12 -mx-14 md:-mx-20 lg:-mx-40">
                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none px-14 md:px-20 lg:px-40">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className="cursor-pointer w-[320px] flex-shrink-0"
                        >
                            <TestimonialCard
                                name={testimonial.name}
                                position={testimonial.position}
                                rating={testimonial.rating}
                                text={testimonial.text}
                                bgColor={index === activeCardIndex ? "bg-white" : "bg-white/80"}
                                isActive={index === activeCardIndex}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;