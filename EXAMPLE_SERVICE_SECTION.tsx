/**
 * ============================================
 * EXAMPLE: ServiceSection dengan Firebase
 * ============================================
 *
 * File ini adalah CONTOH implementasi ServiceSection dengan Firebase.
 * JANGAN langsung replace ServiceSection.tsx yang asli!
 *
 * Gunakan file ini sebagai REFERENSI untuk migrasi.
 *
 * CARA PAKAI:
 * 1. Baca file ini untuk understand pattern-nya
 * 2. Copy pattern yang dibutuhkan
 * 3. Apply ke component yang mau di-migrate
 * 4. Test di browser
 *
 * ============================================
 */

import IconText from "@/app/components/common/IconText";
import ServiceCard from "@/app/components/common/ServiceCard";
// 1. Import function dari firestore helper
import { getServices } from "@/lib/firebase/firestore";

// 2. Jadikan async function
export default async function ServicesSection({ id }: { id: string }) {
  // 3. Fetch data dari Firestore
  const services = await getServices();

  // 4. Optional: Handle empty data
  // if (services.length === 0) {
  //   return null; // Hide section kalau ga ada data
  // }

  return (
    <section
      id={id}
      className="md:px-20 lg:px-40 md:py-40 px-10 py-40 transition-all duration-500"
    >
      {/* Header section tetap sama */}
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

      {/* 5. Loop data dari Firestore */}
      <div className="md:flex md:flex-row flex flex-col text-black py-10 text-xs border">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id} // PENTING: key harus unique
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
            description2={service.description2}
            // Logic untuk hasBorder: false di item terakhir
            hasBorder={index !== services.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * ============================================
 * NOTES:
 * ============================================
 *
 * YANG BERUBAH:
 * 1. Import { getServices } dari '@/lib/firebase/firestore'
 * 2. Function jadi async
 * 3. Fetch data: const services = await getServices()
 * 4. Replace hardcoded <ServiceCard> dengan .map()
 * 5. Tambah key={service.id}
 *
 * YANG TETAP SAMA:
 * - Structure JSX
 * - Styling/className
 * - Props ke child components
 * - Logic hasBorder
 *
 * KEUNTUNGAN:
 * ✅ Dynamic - jumlah service bisa berapa aja
 * ✅ Editable via Admin Panel
 * ✅ No need redeploy untuk update content
 * ✅ Type-safe dengan TypeScript
 * ✅ Auto sorted & filtered (isActive: true)
 *
 * ============================================
 */
