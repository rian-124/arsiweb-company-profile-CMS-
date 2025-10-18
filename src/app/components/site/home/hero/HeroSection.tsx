import HeroHeading from "./HeroHeading";
import HeroParagraph from "./HeroParagraph";
import HeroButton from "./HeroButton";
import HeroRating from "./HeroRating";
import IconText from "@/app/components/common/IconText";


export default function HeroSection({ id } : { id:string }) {
  return (
    <section id={id} className="h-[38rem] md:pb-40 space-y-3  bg-[#93928e]  md:px-20 lg:px-40 flex flex-col justify-center items-center pt-5">
      <IconText
        iconSrc="/icons/winter.svg"
        text="BANTU PERUSAHAAN KAMU GO DIGITAL"
      />
      <HeroHeading />
      <HeroParagraph />
      <HeroButton />
      <HeroRating />
    </section>
  );
}
