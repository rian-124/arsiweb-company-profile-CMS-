import Image from "next/image";

interface IconTextProps {
  iconSrc: string;     
  text: string;       
  color?: string;      
  textSize?: string;  
}

export default function IconText({
  iconSrc,
  text,
  color = "text-white",
  textSize = "text-xs",
}: IconTextProps) {
  return (
    <div className={`flex items-center gap-1 ${textSize} ${color}`}>
      <Image src={iconSrc} alt="icon" width={20} height={20} />
      <p>{text}</p>
    </div>
  );
}
