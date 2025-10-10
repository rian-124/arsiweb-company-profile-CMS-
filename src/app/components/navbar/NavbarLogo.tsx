import Image from "next/image";

interface NavbarLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function NavbarLogo({ width = 100, height = 100, className = "" }: NavbarLogoProps) {
  return (
    <div className={className}>
      <Image src={'/images/logo.png'} alt="arsiwebLogo" width={width} height={height} />
    </div>
  );
}
