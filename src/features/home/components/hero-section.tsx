import { Suspense } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import LoadingSpinner from '@/components/ui/loading-spinner';
import HeroSection from '@/app/components/site/home/hero/HeroSection';

export default function HeroSectionFeature() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner text="Loading hero section..." />}>
        <HeroSection id="dashboard" />
      </Suspense>
    </ErrorBoundary>
  );
}