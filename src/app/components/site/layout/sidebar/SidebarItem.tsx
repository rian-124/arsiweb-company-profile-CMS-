"use client";

import Link from "next/link";

interface SidebarItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function SidebarItem({ label, href, isActive, onClick }: SidebarItemProps) {
  const isInternal = href.startsWith("#");

  return (
    <li>
      {isInternal ? (
        <a
          href={href}
          onClick={(e) => onClick && onClick(e, href)}
          className={`
            flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
            ${isActive ? "bg-sky-500 text-white shadow-lg font-semibold" : "text-gray-400 hover:text-white hover:bg-sky-200/20 hover:scale-105"}
          `}
        >
          <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white" : "bg-sky-500"}`}></span>
          {label}
        </a>
      ) : (
        <Link
          href={href}
          className={`
            flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
            ${isActive ? "bg-sky-500 text-white shadow-lg font-semibold" : "text-gray-400 hover:text-white hover:bg-sky-200/20 hover:scale-105"}
          `}
        >
          <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white" : "bg-sky-500"}`}></span>
          {label}
        </Link>
      )}
    </li>
  );
}
