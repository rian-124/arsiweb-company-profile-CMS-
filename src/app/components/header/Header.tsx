"use client";

import Image from "next/image";
import ContactInfo from "./ContactInfo";
import SosialIcons from "./SosialIcons";
import { SidebarHandler } from "@/app/hooks/sidebarHandler";

export default function Header() {
  SidebarHandler();
  return (
    <header
      id="header"
      className="text-[10px] text-gray-300 md:px-40 md:bg-[#93928e]"
    >
      <div className="md:flex hidden justify-between p-5 border-b border-gray-300">
        <ContactInfo />
        <SosialIcons />
      </div>
      <div className="flex justify-between w-full items-center mr-5 lg:hidden md:hidden bg-[#93928e] p-5">
        <div>
          <Image
            src={"/images/logo.png"}
            alt="arsiwebLogo"
            width={100}
            height={100}
          />
        </div>
        <button
          id="toggle-aside"
          className="backdrop-blur-xl p-2 hover:rounded-full hover:bg-gray-200"
        >
          <Image
            src={"/icons/hamburgerMenu.svg"}
            alt="hamburgerMenu"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
}
