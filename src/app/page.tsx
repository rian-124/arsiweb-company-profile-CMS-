import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/serviceSection/ServiceSection";
import QuoteStatsSection from "./components/quoteStatsSection/QuoteStatsSection";
import AboutSection from "./components/aboutSection/AboutSection";
import ProjectSection from "./components/projectSection.tsx/ProjectSection";
import WorkflowSection from "./components/workflowSection/WorkflowSection";
import TeamSection from "./components/teamSection/TeamSection";
import FaqSection from "./components/faqSection/FaqSection";
import PricingSection from "./components/pricingSection/PricingSection";
import TestimonialSection from "./components/testimonialSection/TestimonialSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <QuoteStatsSection />
      <AboutSection />
      <ProjectSection />
      <WorkflowSection />
      <TeamSection />
      <FaqSection />
      <PricingSection />
      <TestimonialSection />
      <Footer />
      {/* lanjut bro */}
    </>
  );
}
