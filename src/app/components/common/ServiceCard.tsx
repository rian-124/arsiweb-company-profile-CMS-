import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  description2: string;
  iconSrc?: string;
  hasBorder?: boolean;
}

export default function ServiceCard({
  title,
  description,
  description2,
  iconSrc = "",
  hasBorder = true,
}: ServiceCardProps) {
  // Validate iconSrc to ensure it's a valid URL or path
  const isValidIcon = iconSrc && (
    iconSrc.startsWith('/') || 
    iconSrc.startsWith('http://') || 
    iconSrc.startsWith('https://') ||
    iconSrc.startsWith('data:')
  );

  return (
    <div className={`relative ${
    hasBorder
      ? "border-b border-dashed md:border-b-0 md:border-r md:border-dashed"
      : ""
  } md:w-fit p-5 w-full space-y-5`}>
      {isValidIcon ? (
        <Image src={iconSrc} alt={title} width={50} height={50} />
      ) : (
        <div className="w-[50px] h-[50px] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400 text-xs">No Icon</span>
        </div>
      )}
      <div className="space-y-7 group">
        <div className="space-y-3">
          <h3 className="text-2xl font-anta group-hover:text-sky-500 transition-all duration-200">{title}</h3>
          <p className="text-gray-500">
            {description}
            <span className="block">{description2}</span>
          </p>
        </div>
        <Link
          href={"#"}
          className="md:absolute md:bottom-0 flex items-center gap-3 bg-black group-hover:bg-sky-500 transition-all duration-200 w-fit p-1 rounded-full"
        >
          <Image
            src={"/icons/raquoSecond.svg"}
            alt="arrow"
            width={14}
            height={14}
            className="group-hover:rotate-[30deg] transition-all duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
