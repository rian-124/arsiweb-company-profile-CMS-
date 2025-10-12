import Image from "next/image";

export default function HeroHeading() {
  return (
    <div className="md:text-6xl text-3xl text-center font-anta">
      <h1 className="flex flex-col items-center gap-2">
        <span>Bisnis Kamu belum digital?</span>
        <span className="text-sky-500 relative inline-block">
          Gwenchanayo
          <Image
            src={"/icons/signal.svg"}
            alt="signal"
            width={14}
            height={14}
            className="absolute top-0 -right-4"
          />
        </span>
      </h1>
    </div>
  );
}
