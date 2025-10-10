import IconText from "../common/IconText";

export default function ProjectSection () {
    return (
        <section className="bg-black px-40 py-40 rounded-t-[4rem]">
        <IconText
          iconSrc="/icons/winterSecond.svg"
          color="text-sky-500"
          text="LAYANAN KAMI"
        />
        <div className="text-white font-anta md:text-4xl text-3xl">
          <h1 className="flex flex-col gap-2">
            Proyek Kami Membantu
            <span className="text-sky-500 block">Mereka Go Digital</span>
          </h1>
        </div>
      </section>
    );
}