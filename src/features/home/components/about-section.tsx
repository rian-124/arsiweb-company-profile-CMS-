import { Suspense } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import LoadingSpinner from '@/components/ui/loading-spinner';
import AboutSection from '@/app/components/site/home/aboutSection/AboutSection';

export default function AboutSectionFeature() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner text="Loading about section..." />}>
        <AboutSection id="tentang-kami" />
      </Suspense>
    </ErrorBoundary>
  );
}