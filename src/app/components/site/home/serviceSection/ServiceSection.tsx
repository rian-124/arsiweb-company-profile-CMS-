import { Suspense } from 'react';
import IconText from "@/app/components/common/IconText";
import ServiceCard from "@/app/components/common/ServiceCard";
import LoadingSpinner from '@/components/ui/loading-spinner';
import ErrorBoundary from '@/components/ui/error-boundary';
import { getServices } from '@/lib/firebase/firestore';
import { SectionProps } from '@/types';

async function ServicesList() {
  const services = await getServices();

  if (services.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No services available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="md:flex md:flex-row flex flex-col text-black py-10 text-xs">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          iconSrc={service.iconSrc}
          title={service.title}
          description={service.description}
          description2={service.description2}
          hasBorder={index !== services.length - 1}
        />
      ))}
    </div>
  );
}

function ServicesLoadingFallback() {
  return (
    <div className="py-10">
      <LoadingSpinner size="lg" text="Loading services..." />
    </div>
  );
}

export default function ServicesSection({ id }: SectionProps) {
  return (
    <section 
      id={id} 
      className="md:px-20 lg:px-40 md:py-40 px-10 py-40 transition-all duration-500"
    >
      <IconText
        iconSrc="/icons/winterSecond.svg"
        color="text-sky-500"
        text="LAYANAN KAMI"
      />
      <div className="text-black font-anta text-xl md:text-2xl lg:text-4xl">
        <h1 className="flex flex-col gap-2">
          Layanan Kami Yang
          <span className="text-sky-500 block">Menakjubkan</span>
        </h1>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<ServicesLoadingFallback />}>
          <ServicesList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
