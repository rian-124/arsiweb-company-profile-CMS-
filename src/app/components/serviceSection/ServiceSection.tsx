import IconText from "../common/IconText";
import ServiceCard from "../common/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="md:px-40 md:py-40 px-10 py-40">
      <IconText
        iconSrc="/icons/winterSecond.svg"
        color="text-sky-500"
        text="LAYANAN KAMI"
      />
      <div className="text-black font-anta md:text-4xl text-3xl">
        <h1 className="flex flex-col gap-2">
          Layanan Kami Yang
          <span className="text-sky-500 block">Menakjubkan</span>
        </h1>
      </div>

      <div className="md:flex md:flex-row flex flex-col text-black py-10 text-xs">
        <ServiceCard
          iconSrc="/icons/wordpress.svg"
          title="Website Wordpress"
          description="Strategic Planning to Validate &"
          description2="Launch Product Ideas Fast"
        />
        <ServiceCard
          title="Website Custome"
          description="User-First Designs to Boost and"
          description2="Conversion & Delight Users"
        />
        <ServiceCard
          title="SEO Spesialist"
          description="Scalable Apps Built Using Modern"
          description2="Tech Stacks"
        />
        <ServiceCard
          title="Paket Custome"
          description="From Code to Cloud — We Ensure"
          description2="Smooth Delivery"
          hasBorder={false}
        />
      </div>
    </section>
  );
}
