"use client";

import IconText from "@/app/components/common/IconText";
import AboutParagraph from "./AboutParagraph";

export default function AboutSection({id} : {id: string}) {
  return (
    <section id={id} className="md:px-40 px-10 py-20 flex justify-center items-center flex-col border">
      <IconText
        iconSrc={"/icons/winterSecond.svg"}
        text="SIAPA KITA?"
        color="text-sky-500"
      />

      <AboutParagraph
        text="Kami adalah tim pengembang, desainer, dan ahli strategi yang bersemangat, membangun produk yang siap menghadapi masa depan. Eksekusi kami yang cermat memberi kami keunggulan utama"
      />
    </section>
  );
}
