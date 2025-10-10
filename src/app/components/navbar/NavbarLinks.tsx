import Link from "next/link";

const links = [
  { name: "Dashboard", href: "#" },
  { name: "Tentang Kami", href: "#" },
  { name: "Layanan Kami", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Kontak", href: "#" },
];

export default function NavbarLinks() {
  return (
    <div className="p-4">
      <ul className="inline-flex justify-center space-x-5" id="link-sidebar">
        {links.map((link, index) => (
          <li key={index} className="hover:text-white text-gray-300">
            <Link href={link.href} className="block py-2">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
