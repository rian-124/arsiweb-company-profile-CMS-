import AboutSection from "./components/site/home/aboutSection/AboutSection";
import BlogSection from "./components/site/home/blogSection/BlogSection";
import FaqSection from "./components/site/home/faqSection/FaqSection";
import HeroSection from "./components/site/home/hero/HeroSection";
import PricingSection from "./components/site/home/pricingSection/PricingSection";
import ProjectSection from "./components/site/home/projectSection.tsx/ProjectSection";
import QuoteStatsSection from "./components/site/home/quoteStatsSection/QuoteStatsSection";
import ServicesSection from "./components/site/home/serviceSection/ServiceSection";
import TeamSection from "./components/site/home/teamSection/TeamSection";
import TestimonialSection from "./components/site/home/testimonialSection/TestimonialSection";
import WorkflowSection from "./components/site/home/workflowSection/WorkflowSection";


export default function Home() {
  return (
    <>
      <HeroSection id="dashboard" />
      <ServicesSection id="layanan-kami" />
      <QuoteStatsSection  />
      <AboutSection id="tentang-kami" />
      <ProjectSection />
      <WorkflowSection />
      <TeamSection />
      <FaqSection />
      <PricingSection />
      <BlogSection />
      <TestimonialSection />
    </>
  );
}
