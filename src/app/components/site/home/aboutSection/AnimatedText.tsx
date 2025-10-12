"use client";

export default function AnimatedText({ char } : {char: string}) {
  return <span className="char">{char === " " ? "\u00A0" : char}</span>;
}
