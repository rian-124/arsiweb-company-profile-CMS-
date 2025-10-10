import Image from "next/image";
import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="text-xs py-2 px-3 bg-sky-500 rounded-full mt-4">
      <Link href={"#"} className="flex items-center gap-3">
        Konsultasi Sekarang
        <span className="bg-white rounded-full p-2">
          <Image
            src={"/icons/raquo.svg"}
            alt="winter"
            width={10}
            height={10}
            className=""
          />
        </span>
      </Link>
    </div>
  );
}
