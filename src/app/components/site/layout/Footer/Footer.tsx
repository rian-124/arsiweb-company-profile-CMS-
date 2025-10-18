"use client";

import NavbarLogo from "../navbar/NavbarLogo";
import Image from "next/image";
import NavbarLinks from "../navbar/NavbarLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-[90vh] lg:min-h-[70vh] bg-[#161616] text-white px-8 lg:px-20 py-1 flex flex-col">
            <div className="max-w-7xl mx-auto flex-1">
                {/* Desktop: grid-cols-4, Tablet/Mobile: grid-cols-1 */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-8 mt-10">
                    {/* Logo Arsiweb */}
                    <div className="flex justify-start items-start border-gray-600 w-52 lg:w-52">
                        <NavbarLogo width={200} height={200} />
                    </div>

                    {/* Dynamic Links for Navigation */}
                    <div className="flex flex-col justify-start md:gap-6 gap-4 w-40 lg:w-40">
                        <h1 className="text-[1.1rem] font-semibold text-left">Menu</h1>
                        <NavbarLinks variant="grid" />
                    </div>

                    {/* Dynamic Links for SEO Optimization */}
                    <div className="flex flex-col justify-start items-start text-start md:gap-6 gap-4 lg:-ml-28 w-full lg:w-70">
                        <h1 className="text-[1.1rem] font-semibold text-left">Layanan</h1>
                        <div className="grid grid-cols-2 gap-6 items-start justify-start text-left w-full">
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Pembuatan Website</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Perbaikan Website</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Optimasi SEO</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Pembuatan Aplikasi</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Perbaikan Aplikasi</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Design Website</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Design Aplikasi</a>
                            <a href="#" className="text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200 text-left">Jasa Hosting</a>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className="flex flex-col text-sm justify-start items-start gap-6 lg:-ml-10 w-full lg:w-70">
                        <div className="flex flex-col items-start gap-1 md:gap-4">
                            <div className="flex flex-col items-start gap-3 md:gap-4">
                                <h1 className="text-[1.1rem] font-semibold">Informasi Kontak</h1>
                                <div className="group transition-colors duration-200 flex gap-2">
                                    <a href="mailto:arsiweb@gmail.com" className="bg-white inline-flex p-1 rounded-full aspect-square">
                                        <Image src={"icons/email.svg"} alt="email" width={16} height={16} />
                                    </a>
                                    <a href="mailto:arsiweb@gmail.com" className="text-white/80 group-hover:text-sky-500 transition-colors duration-200 text-[0.9rem] mt-0.5 font-medium cursor-pointer">arsiweb@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-1 md:gap-4 mb-10 lg:mb-0">
                            <h1 className="text-[1.1rem] font-semibold">Alamat</h1>
                            <a href="https://www.google.com/maps/place/Aldeoz+Building,+Jl.+Warung+Jati+Barat+No.39+Lt.+6,+Jati+Padang,+Ps.+Minggu,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12540/@-6.280464,106.829031,17z/data=!4m6!3m5!1s0x2e69f2182faaaaab:0x32197b8f8a46b6ea!8m2!3d-6.2805394!4d106.8290841!16s%2Fg%2F11ydqgrz55?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" className="text-white/80 hover:text-sky-500 transition-colors duration-200 text-[0.8rem] md:text-[0.9rem] mt-0.5 font-medium">Gedung Aldeoz Lantai 6 Jl. Warung Jati Barat No.39, RT.010/RW.004, Kalibata, Kec.Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom section with scroll button and copyright */}
            <div className="mt-auto">
                {/* Button to Scroll to Top - positioned at bottom-left */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={scrollToTop}
                        className="md:w-9 md:h-9 w-7 h-7 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
                    >
                        <Image
                            src="/icons/raquoSecond.svg"
                            alt="arrow"
                            width={20}
                            height={20}
                            className="rotate-300 transition-all duration-200"
                        />
                    </button>
                </div>

                {/* Copyright - positioned at bottom with top border */}
                <div className="border-t border-gray-600 pt-4 pb-4">
                    <p className="text-white/80 text-sm md:text-[1rem] text-center">
                        © {currentYear} Arsiweb. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;