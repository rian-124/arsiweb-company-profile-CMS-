import Image from "next/image";

interface IconTextProps {
  iconSrc: string;     
  text: string;       
  color?: string;      
  textSize?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function IconText({
  iconSrc,
  text,
  color = "text-white",
  textSize = "text-xs",
  iconWidth = 20,
  iconHeight = 20,
}: IconTextProps) {
  return (
    <div className={`flex items-center gap-1 ${textSize} ${color}`}>
      <Image src={iconSrc} alt="icon" width={iconWidth} height={iconHeight} />
      <p>{text}</p>
    </div>
  );
}
