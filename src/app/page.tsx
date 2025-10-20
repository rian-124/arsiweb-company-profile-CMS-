import { HeroSectionFeature, ServicesSectionFeature, AboutSectionFeature } from '@/features';
import QuoteStatsSection from "./components/site/home/quoteStatsSection/QuoteStatsSection";
import ProjectSection from "./components/site/home/projectSection.tsx/ProjectSection";
import WorkflowSection from "./components/site/home/workflowSection/WorkflowSection";
import TeamSection from "./components/site/home/teamSection/TeamSection";
import FaqSection from "./components/site/home/faqSection/FaqSection";
import PricingSection from "./components/site/home/pricingSection/PricingSection";
import BlogSection from "./components/site/home/blogSection/BlogSection";
import TestimonialSection from "./components/site/home/testimonialSection/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSectionFeature />
      <ServicesSectionFeature />
      <QuoteStatsSection />
      <AboutSectionFeature />
      <ProjectSection id="proyek-kami" />
      <WorkflowSection />
      <TeamSection />
      <FaqSection />
      <PricingSection />
      <BlogSection />
      <TestimonialSection id="testimoni-pelanggan" />
    </>
  );
}
