import IconText from "@/app/components/common/IconText";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <>
      <IconText
        iconSrc={"/icons/winterSecond.svg"}
        text="BAGAIMANA KITA BEKERJA?"
        color="text-sky-500"
      />
      <div className="text-xl md:text-2xl lg:text-4xl text-gray-400 font-anta">
        <div className="grid grid-cols-3 items-center mt-2 md:mt-4 gap-2 md:gap-4">
          <div></div>
          <h1 className="text-center text-black col-span-1">
            BACAAN UNTUK <span className="text-sky-500">KAMU</span>
          </h1>

          <Link
            href={"/blog"}
            className="justify-self-end text-xs font-normal flex gap-2 items-center"
          >
            Lihat yang lain
            <span className="p-1 bg-blue-500 rounded-full">
              <Image
                src={"/icons/raquoSecond.svg"}
                alt="raquo"
                width={14}
                height={14}
                className="rotate-[30deg]"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
