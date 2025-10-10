import Image from "next/image";

export default function QuoteStatsSection() {
  return (
    <section className="flex">
      <div className="w-1/2 bg-sky-500 p-20 pl-40">
        <div className="space-y-5">
          <p className="font-anta">
            Setiap baris kode yang kita tulis, setiap kata kunci yang kita
            optimalkan, adalah langkah kita menuju puncak hasil pencarian.
          </p>
          <div className="flex items-center">
            <div className="shrink-0">
              <Image src={""} alt="null" />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium truncate font-anta">
                Ramadansyah
              </p>
              <p className="text-sm text-gray-300 truncate">CEO Arsiweb</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-black p-10 ">
        <div className="max-w-[15rem]">
          <h1 className="font-anta text-3xl">
            50+ Perusahaan Sudah Go Digital Besama Kami
          </h1>
        </div>
      </div>
    </section>
  );
}
