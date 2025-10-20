'use client';

import { useState, useEffect } from 'react';
import IconText from '@/app/components/common/IconText';
import Image from "next/image";
import { getTeamMembers } from '@/lib/firebase/firestore';
import type { TeamMember } from '@/lib/firebase/collections';

const TeamSection = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTeamMembers() {
            try {
                const data = await getTeamMembers();
                setTeamMembers(data);
            } catch (error) {
                console.error('Error fetching team members:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTeamMembers();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[2rem] md:rounded-t-[4rem]">
                <div className="text-white text-center">Loading team members...</div>
            </div>
        );
    }

    if (teamMembers.length === 0) {
        return (
            <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[2rem] md:rounded-t-[4rem]">
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
                    <div className="text-white text-center mt-10">No team members available at the moment.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#161616] text-white md:px-20 lg:px-40 md:py-26 px-14 py-20 rounded-t-[2rem] md:rounded-t-[4rem]">
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
                    {/* First team member (CEO/Leader) - centered and larger */}
                    {teamMembers[0] && (
                        <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                            <div className="w-full md:w-1/2 lg:w-1/3">
                                <div className="bg-[#756662] rounded-lg overflow-hidden">
                                    <Image
                                        src={teamMembers[0].photoUrl || '/images/dummy.webp'} 
                                        alt={teamMembers[0].name}
                                        width={400}
                                        height={312}
                                        className="w-full h-78 object-cover"
                                    />
                                    <div className="bg-[#756662] p-4 text-center">
                                        <h3 className="font-semibold text-lg">{teamMembers[0].name}</h3>
                                        <p className="text-sm text-white/80">{teamMembers[0].position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rest of team members */}
                    {teamMembers.slice(1).map((member) => (
                        <div key={member.id}>
                            <div className="bg-[#7d7d7d] rounded-lg overflow-hidden">
                                <Image 
                                    src={member.photoUrl || '/images/dummy.webp'} 
                                    alt={member.name}
                                    width={400}
                                    height={312}
                                    className="w-full h-78 object-cover"
                                />
                                <div className="bg-[#7d7d7d] p-4 text-center">
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-sm text-white/80">{member.position}</p>
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