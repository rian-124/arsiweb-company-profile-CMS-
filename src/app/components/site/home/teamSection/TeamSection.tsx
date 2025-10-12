'use client';

import IconText from '@/app/components/common/IconText';
import React from 'react';
import IconText from "../common/IconText";
import Image from "next/image";

const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Romadhansyah',
            role: 'Chief Executive Officer',
            image: '/images/dummy.webp'
        },
        {
            id: 2,
            name: 'Afrian Fajriansah',
            role: 'Chief of Technology',
            image: '/images/dummy.webp'
        },
        {
            id: 3,
            name: 'Sahrul',
            role: 'Project Manager & UI Designer',
            image: '/images/dummy.webp'
        },
        {
            id: 4,
            name: 'Muhammad Ridwan',
            role: 'VFX Specialist',
            image: '/images/dummy.webp'
        },
        {
            id: 5,
            name: 'Mohamad Rizky Rivaldi',
            role: 'Backend',
            image: '/images/dummy.webp'
        },
        {
            id: 6,
            name: 'Muhammad Rizky Ardiansyah',
            role: 'Frontend',
            image: '/images/dummy.webp'
        },
        {
            id: 7,
            name: 'Fainadillah Ilham Pranoto Adi',
            role: 'Internet',
            image: '/images/dummy.webp'
        }
    ];

    return (
        <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[4rem]">
            <div className="max-w-7xl mx-auto">
                <IconText
                    iconSrc="/icons/winterSecond.svg"
                    color="text-sky-500"
                    text="TIM ARSIWEB"
                />
                <div className="text-white font-anta md:text-2xl lg:text-4xl text-lg">
                    <h1 className="flex flex-col gap-2 mt-2 md:mt-4">
                        PASUKAN YANG SIAP
                        <span className="text-sky-500 block">MEMBANTU BISNIS <span className="text-sky-500">ANDA</span></span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-5 mt-16">
                    <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="bg-[#756662] rounded-lg overflow-hidden">
                                <Image
                                    src={teamMembers[0].image} 
                                    alt={teamMembers[0].name}
                                    className="w-full h-78 object-cover"
                                />
                                <div className="bg-[#756662] p-4 text-center">
                                    <h3 className="font-semibold text-lg">{teamMembers[0].name}</h3>
                                    <p className="text-sm text-white/80">{teamMembers[0].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {teamMembers.slice(1).map((member) => (
                        <div key={member.id}>
                            <div className="bg-[#7d7d7d] rounded-lg overflow-hidden">
                                <Image 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-78 object-cover"
                                />
                                <div className="bg-[#7d7d7d] p-4 text-center">
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-sm text-white/80">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;