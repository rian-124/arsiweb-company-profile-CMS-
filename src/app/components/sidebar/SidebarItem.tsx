import Link from "next/link";

interface SidebarItemProps {
  label: string;
  href: string;
}

export default function SidebarItem({ label, href }: SidebarItemProps) {
  return (
    <li className="hover:text-sky-500 hover:font-bold transition-all duration-500">
      <Link href={href} className="p-2 block">
        {label}
      </Link>
    </li>
  );
}
