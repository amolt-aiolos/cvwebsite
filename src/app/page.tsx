import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Differentiators from "@/components/sections/Differentiators";
import Testimonials from "@/components/sections/Testimonials";
import UseCases from "@/components/sections/UseCases";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Differentiators />
      <Testimonials />
      <UseCases />
      <CTASection />
    </>
  );
}
