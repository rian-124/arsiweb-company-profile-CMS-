import Image from "next/image";
import Link from "next/link";

interface IconCircleProps {
  icon: string;
  href?: string;
}

export default function IconCircle({ icon, href }: IconCircleProps) {
  const content = (
    <div className="bg-white inline-flex p-1 rounded-full aspect-square">
      <Image src={icon} alt="icon" width={14} height={14} />
    </div>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
}
