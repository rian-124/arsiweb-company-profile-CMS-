'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import IconText from '@/app/components/common/IconText';



const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
        {
            id: 1,
            question: 'Custom Vs. WordPress, Pilih Mana?',
            answer: 'Tergantung Kebutuhan, Kustom Untuk Fitur Unik Dan Skalabilitas Tinggi. WordPress Untuk Solusi Cepat, Terjangkau, Dan Mudah Dikelola.'
        },
        {
            id: 2,
            question: 'Apakah Saya Bisa Mengelola Website Sendiri?',
            answer: 'Ya, Anda dapat mengelola website sendiri dengan mudah menggunakan dashboard yang user-friendly yang kami sediakan.'
        },
        {
            id: 3,
            question: 'Berapa Lama Proses Pengerjaan Website?',
            answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek, biasanya berkisar antara 2-8 minggu.'
        },
        {
            id: 4,
            question: 'Apa Jaminan Jika Website Sudah Jadi?',
            answer: 'Kami memberikan garansi maintenance, support teknis, dan pembaruan keamanan untuk memastikan website Anda berjalan optimal.'
        },
        {
            id: 5,
            question: 'Apa Yang Membuat SEO Anda Berbeda?',
            answer: 'SEO kami fokus pada strategi organik jangka panjang, riset keyword mendalam, dan optimasi teknis yang komprehensif.'
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white md:px-20 lg:px-40 md:py-26 px-14 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* Left Section */}
                    <div className="flex flex-col gap-6">
                        {/* Image */}
                        <div className="bg-gray-200 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/dummy.webp"
                                alt="Customer Support"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Blue Card */}
                        <div className="bg-[#0c97fe] rounded-2xl px-8 md:px-14 py-4 text-white relative overflow-hidden">

                            <div className="text-white font-anta text-md md:text-lg flex flex-col gap-2 mt-2 md:mt-4 mb-4">
                                <h1 className="">Masih Ada Pertanyaan ?</h1>
                                <p className="text-[0.6rem] md:text-xs text-white/80">Jika Anda Tidak Menemukan Apa Yang Anda Cari, Silakan Hubungi Kami Langsung Berlangganan Untuk Mendapatkan Pembaruan, Tips, Dan Wawasan Langsung Ke Kotak Masuk Anda.</p>
                            </div>
                            <Link
                                href="/contact"
                                className="group w-32 flex items-center justify-center gap-3 px-2 md:px-4 py-2 rounded-full bg-white hover:bg-gray-200 hover:border hover:border-black transition-colors font-anta mb-3 md:mb-6"
                            >
                                <span className="text-[0.4rem] md:text-xs text-black">Kirim Email</span>
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
                        </div>
                    </div>

                    {/* Right Section - FAQ */}
                    <div>
                        <div className="text-black font-anta md:text-2xl lg:text-4xl text-[1rem] flex flex-row lg:flex-col gap-2 mt-2 md:mt-4 mb-10">
                            <h1 className="">Pertanyaan Yang</h1>
                            <h1 className="text-sky-500 block">Sering Diajukan<span className="text-sky-500"></span></h1>
                        </div>

                        <div className="space-y-4 font-anta divide-y-1 divide-dashed divide-sky-500">
                            {faqData.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className="bg-transparent overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <span className="text-[0.8rem] md:text-xl font-medium text-gray-900">
                                            {faq.id}. {faq.question}
                                        </span>
                                        {openIndex === index ? (
                                            <IconText
                                                iconSrc={"/icons/closeIcon.svg"}
                                                text=""
                                                color="text-black"
                                            />
                                        ) : (
                                            <IconText
                                                iconSrc={"/icons/closeIcon.svg"}
                                                text=""
                                                color="text-black rotate-45"
                                            />
                                        )}
                                    </button>

                                    {openIndex === index && (
                                        <div className="pb-4 pt-2 text-gray-600 text-[0.7rem] md:text-lg lg:text-sm mr-6">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;