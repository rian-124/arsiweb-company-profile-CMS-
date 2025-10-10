import IconText from './IconText';

interface TestimonialCardProps {
    name: string;
    position: string;
    rating: number;
    text: string;
    bgColor: string;
    isActive?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    position,
    rating,
    text,
    bgColor,
    isActive = false
}) => {
    return (
        <div
            className={`${bgColor} rounded-3xl py-8 px-5 flex flex-col w-full h-[280px] transition-all duration-300 font-anta ${bgColor === 'bg-white' ? 'text-gray-900' : 'text-gray-900'
                } ${isActive
                    ? 'opacity-100 shadow-lg'
                    : 'bg-white/80'
                }`}
        >
            {/* Header Card */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm opacity-70">{position}</p>
                </div>
                <div className="flex mt-7">
                    {[...Array(rating)].map((_, i) => (
                        <IconText
                            key={i}
                            iconSrc="/icons/ratingStar.svg"
                            text=""
                            iconWidth={14}
                            iconHeight={14}
                        />
                    ))}
                </div>
            </div>

            {/* Quote Icon */}
            <div className="mb-3 mt-4">
                <IconText
                    iconSrc="/icons/quoteSecond.svg"
                    text=""
                    color="text-sky-500"
                    textSize="text-2xl"
                    iconWidth={40}
                    iconHeight={40}
                />
            </div>

            {/* Testimonial Text */}
            <p className="text-xs leading-relaxed">
                {text}
            </p>
        </div>
    );
};

export default TestimonialCard;
