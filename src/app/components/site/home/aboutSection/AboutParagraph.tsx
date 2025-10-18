"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function AboutParagraph({ text } : { text: string }) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll(".char");

    gsap.set(chars, { color: "#9ca3af" }); 

    gsap.to(chars, {
      color: "#000000",
      stagger: 0.02, 
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={textRef}
      className="md:text-4xl sm:text-2xl text-xl text-center font-anta flex flex-wrap justify-center"
    >
      {text.split("").map((char, i) => (
        <AnimatedText key={i} char={char} />
      ))}
    </div>
  );
}
