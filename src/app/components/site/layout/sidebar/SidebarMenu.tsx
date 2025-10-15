"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

export default function SidebarMenu() {
  const pathname = usePathname();
  const [hash, setHash] = useState(""); // state untuk track link internal aktif

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Layanan Kami", href: "#layanan-kami" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/contact" },
  ];

  useEffect(() => {
    // Update hash saat page load
    setHash(window.location.hash);

    // Update hash saat user klik anchor internal
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
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
    <div className="pl-5">
      <ul className="flex flex-col text-2xl space-y-2">
        {links.map((link) => {
          const isActive = link.href.startsWith("#") ? hash === link.href : pathname === link.href;

          return (
            <SidebarItem
              key={link.name}
              label={link.name}
              href={link.href}
              isActive={isActive}
              onClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
