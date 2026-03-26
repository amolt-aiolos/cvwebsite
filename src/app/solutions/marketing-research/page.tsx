"use client";

import { Megaphone, Heart, BarChart3, Eye, Lightbulb, Palette } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Megaphone className="h-6 w-6" />, title: "Brand Perception", description: "Understand how audiences perceive your brand across different segments and markets." },
  { icon: <Heart className="h-6 w-6" />, title: "Emotional Resonance", description: "Measure the emotional impact of your messaging and creative assets." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Market Sizing", description: "Estimate market opportunity and demand with AI-simulated consumer surveys." },
  { icon: <Eye className="h-6 w-6" />, title: "Competitive Intelligence", description: "Benchmark your brand against competitors with comparative sentiment analysis." },
  { icon: <Lightbulb className="h-6 w-6" />, title: "Creative Testing", description: "Test ad concepts, taglines, and campaigns before spending your budget." },
  { icon: <Palette className="h-6 w-6" />, title: "Audience Personas", description: "Build rich, data-driven audience personas based on simulated research." },
];

export default function MarketingResearchPage() {
  return (
    <>
      <PageHero badge="Marketing Research" title="Know Your Audience Deeply" description="AI-powered brand research and audience insights that reveal what people really think about your brand." cta="Get Started" />
      <FeatureGrid title="Marketing Research Features" features={features} />
      <CTASection />
    </>
  );
}
