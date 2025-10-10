import Image from "next/image";

export default function NavbarLogo() {
  return (
    <div>
      <Image src={'/images/logo.png'} alt="arsiwebLogo" width={100} height={100} />
    </div>
  );
}
