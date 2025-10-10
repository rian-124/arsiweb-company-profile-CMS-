import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/serviceSection/ServiceSection";
import QuoteStatsSection from "./components/quoteStatsSection/QuoteStatsSection";
import AboutSection from "./components/aboutSection/AboutSection";
import ProjectSection from "./components/projectSection.tsx/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <QuoteStatsSection />
      <AboutSection />
      <ProjectSection />
      {/* lanjut bro */}
    </>
  );
}
