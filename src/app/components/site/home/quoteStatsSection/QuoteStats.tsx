import CountUp from "@/app/components/common/CountUp";

export default function QuoteStats() {
  const statsData = [
    { title: 4.8, desc: "Pelanggan puas", rating: 4.8 },
    { title: 7, desc: "Tim yang solid dan semangat tinggi", suffix: "+" },
    { title: 100, desc: "Komitmen kami untuk proyek", suffix: "%" },
  ];

  const Stars = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);

    return (
      <div className="flex items-center">
        {Array.from({ length: totalStars }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ms-1 ${
              i < filledStars ? "text-yellow-300" : "text-gray-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="max-w-[15rem]">
        <h1 className="font-anta md:text-4xl lg:text-5xl sm:text-2xl text-3xl">
          <span className="text-nowrap">
            <span>
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </span>{" "}
            Perusahaan
          </span>{" "}
          <span className="text-nowrap"> Digital</span>{" "}
          <span className="text-nowrap">Besama Kami</span>
        </h1>
      </div>

      <div className="md:flex md:items-center flex flex-wrap md:gap-10 lg:gap-20 gap-5">
        {statsData.map((item, index) => (
          <div key={index} className="space-y-2">
            <h1 className="font-anta text-2xl">
              <CountUp
                from={0}
                to={item.title}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              {item.suffix && item.suffix}
            </h1>

            {item.rating && <Stars rating={item.rating} />}

            <p className="text-xs text-gray-300">
              {item.desc.includes(" ") ? (
                <>
                  {item.desc.split(" ").slice(0, 3).join(" ")}{" "}
                  <span className="block">
                    {item.desc.split(" ").slice(3).join(" ")}
                  </span>
                </>
              ) : (
                item.desc
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
