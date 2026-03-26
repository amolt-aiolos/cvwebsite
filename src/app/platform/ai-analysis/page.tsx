"use client";

import { Brain, Search, Layers, Zap, BarChart3, GitBranch } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Brain className="h-6 w-6" />, title: "Deep Pattern Recognition", description: "AI identifies sentiment drivers, correlations, and hidden patterns in opinion data." },
  { icon: <Search className="h-6 w-6" />, title: "Root Cause Analysis", description: "Understand not just what people think, but why they think it." },
  { icon: <Layers className="h-6 w-6" />, title: "Multi-Layer Analysis", description: "Cross-reference sentiment data with demographic, behavioral, and psychographic layers." },
  { icon: <Zap className="h-6 w-6" />, title: "Rapid Iteration", description: "Test multiple hypotheses quickly and refine your understanding in real time." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Comparative Analysis", description: "Compare sentiment across time periods, demographics, and geographic regions." },
  { icon: <GitBranch className="h-6 w-6" />, title: "Scenario Modeling", description: "Model how opinions might shift under different conditions or messaging strategies." },
];

export default function AIAnalysisPage() {
  return (
    <>
      <PageHero
        badge="AI Analysis"
        title="Intelligence, Not Just Data"
        description="Our AI goes beyond surface-level analytics to reveal the deeper motivations and emotional drivers behind public opinion."
        cta="Explore Analysis"
      />
      <FeatureGrid title="AI Analysis Features" features={features} />
      <CTASection />
    </>
  );
}
