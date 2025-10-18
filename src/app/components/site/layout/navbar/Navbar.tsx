'use client'

import { useScrollBehavior } from "@/app/hooks/useScrollBehavior";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
    useScrollBehavior();
  return (
    <nav
      id="navbar"
      className="sm:hidden hidden md:grid md:grid-cols-[0.5fr_1fr] md:items-center font-poppins md:bg-[#93928e] md:text-xs md:text-white md:px-20 lg:px-40"
    >
      <NavbarLogo />
      <NavbarLinks />
    </nav>
  );
}
