"use client";

import { Sparkles, BookOpen, TrendingUp, Lightbulb, MessageSquare, PieChart } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Sparkles className="h-6 w-6" />, title: "AI Narratives", description: "Get story-driven explanations of polling data, not just charts and numbers." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Executive Summaries", description: "One-page briefs designed for decision makers who need clarity fast." },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Trend Detection", description: "Automatically identify emerging shifts in public sentiment before they become headlines." },
  { icon: <Lightbulb className="h-6 w-6" />, title: "Strategic Recommendations", description: "Receive actionable suggestions based on the data patterns our AI identifies." },
  { icon: <MessageSquare className="h-6 w-6" />, title: "Quotable Insights", description: "Get media-ready quotes and talking points backed by simulated polling data." },
  { icon: <PieChart className="h-6 w-6" />, title: "Visual Storytelling", description: "Auto-generated charts and visualizations that communicate findings clearly." },
];

export default function InsightEnginePage() {
  return (
    <>
      <PageHero
        badge="Insight Engine"
        title="Stories Behind the Numbers"
        description="Our AI doesn't just analyze data — it explains it. Get narrative insights that reveal the why behind public opinion."
        cta="See It in Action"
      />
      <FeatureGrid title="Insight Engine Features" features={features} />
      <CTASection />
    </>
  );
}
