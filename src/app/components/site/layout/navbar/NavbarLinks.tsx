"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Tentang Kami", href: "#tentang-kami" },
  { name: "Layanan Kami", href: "#layanan-kami" },
  { name: "Blog", href: "/blog" },
  { name: "Kontak", href: "/contact" },
];

export default function NavbarLinks() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Hanya jalan di client
    setHash(window.location.hash);

    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.replace("#", ""));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      setHash(href);
    }
  };

  return (
    <div className="p-4">
      <ul className="inline-flex justify-center space-x-5" id="link-sidebar">
        {links.map((link, index) => {
          // Gunakan state hash, bukan window langsung
          const isActive = link.href.startsWith("#") ? hash === link.href : pathname === link.href;

          return (
            <li key={index}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block py-2 transition-colors ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`block py-2 transition-colors ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
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
