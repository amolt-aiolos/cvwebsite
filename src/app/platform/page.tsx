"use client";

import {
  Sparkles,
  Activity,
  Brain,
  Database,
  Search,
  LineChart,
  BarChart3,
  Target,
  Layers,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Insight Engine",
    description:
      "AI-generated narrative insights that tell the story behind the data, with context and strategic recommendations.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Poll Simulation",
    description:
      "Simulate thousands of demographically diverse poll responses using validated behavioral models.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Analysis",
    description:
      "Deep analytical intelligence that identifies patterns, trends, and hidden sentiment drivers.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Intelligence",
    description:
      "Structured, actionable data exports for integration into your existing decision-making workflows.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Natural Language Queries",
    description:
      "Ask questions in plain language. Our AI understands nuanced, context-aware queries about public opinion.",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Trend Tracking",
    description:
      "Monitor how opinions evolve over time with automated trend analysis and alerts.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Segment Analysis",
    description:
      "Break down insights by demographics, geography, psychographics, and custom segments.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Message Testing",
    description:
      "Test messaging frameworks and communication strategies before going live.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Multi-Source Fusion",
    description:
      "Combine AI simulations with real-world data for comprehensive, validated insights.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        badge="Platform"
        title="Your AI Research Console"
        description="A next-generation intelligence platform that turns questions into actionable insights. Powered by behavioral science, validated by data."
        cta="Book a Demo"
      />
      <FeatureGrid
        badge="Capabilities"
        title="Everything You Need to Understand Opinion"
        description="From instant polling simulations to deep narrative analysis, CrowdVox gives you the complete intelligence picture."
        features={features}
      />
      <CTASection />
    </>
  );
}
