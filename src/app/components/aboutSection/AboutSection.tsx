import IconText from "../common/IconText";

export default function AboutSection() {
  return (
    <section className="px-40 py-20 flex justify-center items-center flex-col border">
      <IconText
        iconSrc={"/icons/winterSecond.svg"}
        text="SIAPA KITA?"
        color="text-sky-500"
      />
      <div className="text-4xl text-gray-400 text-center font-anta">
        <p>
          Kami adalah tim pengembang, desainer, dan ahli strategi yang
          bersemangat, membangun produk yang siap menghadapi masa depan.
          Eksekusi kami yang cermat memberi kami keunggulan utama
        </p>
      </div>
    </section>
  );
}
