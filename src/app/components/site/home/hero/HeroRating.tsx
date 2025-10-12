import Image from "next/image";

export default function HeroRating() {
  return (
    <div className="flex gap-5">
      <div className="flex items-center gap-1 font-anta">
        <Image src={"/icons/star.svg"} alt="star" width={24} height={24} />
        <h1>4.8 Diulas Pada</h1>
      </div>
      <Image
        src={"/images/googlemaps.png"}
        alt="googlemaps"
        width={200}
        height={200}
      />
    </div>
  );
}
