import HeroHeading from "./HeroHeading";
import HeroParagraph from "./HeroParagraph";
import HeroButton from "./HeroButton";
import HeroRating from "./HeroRating";
import IconText from "../common/IconText";

export default function HeroSection() {
  return (
    <section className="h-[37rem] md:h-[27rem] space-y-3  bg-[#93928e] md:px-40 flex flex-col justify-center items-center overflow-hidden pt-5">
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
