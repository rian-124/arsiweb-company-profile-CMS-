import SidebarItem from "./SidebarItem";

export default function SidebarMenu() {
  const items = [
    { label: "Dashboard", href: "#" },
    { label: "Tentang Kami", href: "#" },
    { label: "Layanan Kami", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Kontak", href: "#" },
  ];

  return (
    <div className="pl-5">
      <ul className="flex flex-col text-3xl">
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </ul>
    </div>
  );
}
