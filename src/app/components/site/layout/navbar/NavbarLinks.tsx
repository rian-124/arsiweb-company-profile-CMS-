"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Tentang Kami", href: "#tentang-kami" },
  { name: "Layanan Kami", href: "#layanan-kami" },
  { name: "Proyek", href: "#proyek-kami" },
  { name: "Testimoni", href: "#testimoni-pelanggan" },
  { name: "Blog", href: "/blog" },
  { name: "Kontak", href: "/contact" },
];

interface NavbarLinksProps {
  variant?: "horizontal" | "grid";
}

export default function NavbarLinks({ variant = "horizontal" }: NavbarLinksProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  // 🔹 Set hash aktif berdasarkan scroll (scroll spy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.filter(l => l.href.startsWith("#"));
      let active = "";

      for (const section of sections) {
        const el = document.querySelector(section.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Deteksi posisi section di tengah layar
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            active = section.href;
            break;
          }
        }
      }
      setHash(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalankan pertama kali
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Saat klik link, scroll smooth ke target
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.replace("#", ""));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      setHash(href);
    }
  };

  const linkClassName =
    variant === "grid"
      ? "text-white/80 text-[0.75rem] lg:text-[0.8rem] hover:text-sky-500 transition-colors duration-200"
      : "block transition-colors";

  const activeClassName = variant === "grid"
    ? "text-sky-500 font-semibold"
    : "text-sky-500 font-semibold"; // 🔹 ubah agar selalu sky-500 ketika aktif

  const inactiveClassName = variant === "grid"
    ? "text-white/80"
    : "text-gray-black hover:text-sky-500";

  if (variant === "grid") {
    return (
      <>
        {links.map((link, index) => {
          const isActive = link.href.startsWith("#") ? hash === link.href : pathname === link.href;

          return link.href.startsWith("#") ? (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`${linkClassName} ${
                isActive ? activeClassName : inactiveClassName
              }`}
            >
              {link.name}
            </a>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={`${linkClassName} ${
                isActive ? activeClassName : inactiveClassName
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </>
    );
  }

  // 🔹 Versi horizontal (default)
  return (
    <div className="p-4">
      <ul className="inline-flex justify-center space-x-5" id="link-sidebar">
        {links.map((link, index) => {
          const isActive = link.href.startsWith("#")
            ? hash === link.href
            : pathname === link.href;

          return (
            <li key={index}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`${linkClassName} ${
                    isActive ? activeClassName : inactiveClassName
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`${linkClassName} ${
                    isActive ? activeClassName : inactiveClassName
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
