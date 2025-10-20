'use client';
import IconText from '@/app/components/common/IconText';
import TestimonialCard from '@/app/components/common/TestimonialCard';
import React, { useState, useEffect } from 'react';
import { getTestimonials } from '@/lib/firebase/firestore';
import type { Testimonial } from '@/lib/firebase/collections';


const TestimonialSection = ({ id }: { id?: string }) => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTestimonials() {
            try {
                const data = await getTestimonials();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTestimonials();
    }, []);

    const handleCardClick = (index: number) => {
        setActiveCardIndex(index);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[2rem] md:rounded-t-[4rem]" id={id}>
                <div className="max-w-7xl mx-auto flex items-center justify-center">
                    <div className="text-white text-lg">Loading testimonials...</div>
                </div>
            </div>
        );
    }

    if (testimonials.length === 0) {
        return (
            <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[2rem] md:rounded-t-[4rem]" id={id}>
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
                    <div className="mt-12 text-center text-gray-400">
                        No testimonials available at the moment.
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[2rem] md:rounded-t-[4rem]" id={id}>
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
                            name={testimonial.clientName}
                            position={testimonial.clientPosition}
                            rating={testimonial.rating}
                            text={testimonial.testimonialText}
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