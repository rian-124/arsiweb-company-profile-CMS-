import Image from "next/image";

interface QuoteAuthorProps {
  name: string;
  role: string;
  imageSrc?: string;
}

export default function QuoteAuthor({ name, role, imageSrc }: QuoteAuthorProps) {
  return (
    <div className="flex items-center mb-5">
      <div className="shrink-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-400" />
        )}
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium truncate font-anta">{name}</p>
        <p className="text-sm text-gray-300 truncate">{role}</p>
      </div>
    </div>
  );
}
