import IconCircle from "../common/IconCircle";

export default function SosialIcons() {
  const socialLinks = [
    { icon: "/icons/facebook.svg", href: "#" },
    { icon: "/icons/instagram.svg", href: "#" },
    { icon: "/icons/x.svg", href: "#" },
    { icon: "/icons/linkdin.svg", href: "#" },
  ];

  return (
    <div className="flex items-center justify-center gap-3">
      <h3>Ikuti kami</h3>
      {socialLinks.map((social, i) => (
        <IconCircle key={i} icon={social.icon} href={social.href} />
      ))}
    </div>
  );
}
