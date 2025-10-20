import { Suspense } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import LoadingSpinner from '@/components/ui/loading-spinner';
import ServicesSection from '@/app/components/site/home/serviceSection/ServiceSection';

export default function ServicesSectionFeature() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner text="Loading services..." />}>
        <ServicesSection id="layanan-kami" />
      </Suspense>
    </ErrorBoundary>
  );
}