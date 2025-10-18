import Image from "next/image";
import IconText from "./IconText";

// Interface untuk data benefit
interface Benefit {
  iconSrc: string;
  text: string;
}

// Interface untuk props komponen PricingCard
interface PricingCardProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  benefits: Benefit[];
  buttonText: string;
  isActive?: boolean;
  onClick?: () => void;
  selectedTab?: string;
}

export default function PricingCard({
  iconSrc,
  title,
  subtitle,
  price,
  description,
  benefits,
  buttonText,
  isActive = false,
  onClick,
  selectedTab,
}: PricingCardProps) {
  // Function to generate WhatsApp URL with message template
  const generateWhatsAppUrl = () => {
    const tabNames = {
      'custom': 'Website Custom',
      'wordpress': 'Website WordPress', 
      'seo': 'SEO'
    };
    
    const tabName = tabNames[selectedTab as keyof typeof tabNames] || 'Website Custom';
    const message = `Halo tim Arsiweb, saya mau konsultasi mengenai layanan ${tabName} dengan kategori ${title}. Mohon info lebih detailnya.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/6289516192149?text=${encodedMessage}`;
  };

  const handleButtonClick = () => {
    if (buttonText === 'Konsultasi') {
      window.open(generateWhatsAppUrl(), '_blank');
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <div 
      className={`${isActive
        ? "bg-[#313130]"
        : "bg-[#e7e5e2]"
      } rounded-2xl p-8 flex flex-col font-anta cursor-pointer transition-all duration-300 hover:shadow-lg`}
      onClick={onClick}
    >
      {/* Icon container */}
      <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4`}>
        <Image src={iconSrc} alt={title} width={24} height={24} />
      </div>

      {/* Judul dan subtitle */}
      <h3 className={`text-2xl font-semibold ${isActive ? "text-white" : "text-gray-900"
        } mb-2`}>{title}</h3>
      <p className={`${isActive ? "text-gray-400" : "text-gray-600"
        } text-sm mb-3`}>{subtitle}</p>

      {/* Garis pemisah */}
      <div className={`border-t ${isActive ? "border-gray-700" : "border-gray-600"
        } border-dashed mb-3`}></div>

      {/* Harga */}
      <div className={`text-xl *:md:text-3xl font-medium ${isActive ? "text-white" : "text-gray-900"
        } mb-4`}>{price}</div>

      {/* Deskripsi */}
      <p className={`${isActive ? "text-gray-300" : "text-gray-700"
        } text-[0.7rem] md:text-xs mb-6`}>{description}</p>

      {/* Daftar benefit */}
      <div className="flex-grow space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <IconText
            key={index}
            iconSrc={benefit.iconSrc}
            text={benefit.text}
            color={isActive ? "text-gray-300" : "text-gray-700"}
            textSize="text-[0.6rem] md:text-xs"
            
          />
        ))}
      </div>

      {/* Tombol aksi */}
      <button
        onClick={handleButtonClick}
        className={`group w-36 flex items-center justify-center gap-3 px-2 md:px-4 py-2 rounded-full transition-colors font-anta mb-3 md:mb-6 cursor-pointer ${isActive
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "border-1 border-gray-400 text-gray-700 hover:bg-gray-300"}`}
      >
        <span className="text-xs text-black">{buttonText}</span>
        <span className={`{$isActivate ? "group-hover:bg-white" : "group-hover:bg-sky-500"} w-3 h-3 md:w-5 md:h-5 bg-black rounded-full flex items-center justify-center`}>
          <Image
            src="/icons/raquoSecond.svg"
            alt="panah"
            width={12}
            height={12}
            className={`${isActive ? "rotate-30" : "group-hover:rotate-30 rotate-30 lg:rotate-0 transition-all duration-200"}`}
          />
        </span>
      </button>
    </div>
  );
}
