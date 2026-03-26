"use client";

import { Activity, Users, Globe, Clock, ShieldCheck, Sliders } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Activity className="h-6 w-6" />, title: "Instant Simulations", description: "Generate statistically valid poll results in minutes, not weeks." },
  { icon: <Users className="h-6 w-6" />, title: "Demographic Modeling", description: "Simulate responses across age, gender, ethnicity, education, and geography." },
  { icon: <Globe className="h-6 w-6" />, title: "National & Regional", description: "Run simulations at national, state, or local levels with demographic weighting." },
  { icon: <Clock className="h-6 w-6" />, title: "Real-Time Updates", description: "Re-run simulations as conditions change for the most current insights." },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Validated Methodology", description: "Our simulations are continuously validated against real-world polling data." },
  { icon: <Sliders className="h-6 w-6" />, title: "Custom Parameters", description: "Fine-tune simulation parameters to match your specific research needs." },
];

export default function PollSimulationPage() {
  return (
    <>
      <PageHero
        badge="Poll Simulation"
        title="Polls Without the Wait"
        description="Simulate thousands of survey responses using AI models built on behavioral neuroscience. Get results in minutes."
        cta="Run a Simulation"
      />
      <FeatureGrid title="Poll Simulation Features" features={features} />
      <CTASection />
    </>
  );
}
