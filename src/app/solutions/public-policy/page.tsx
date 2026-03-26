"use client";

import { Scale, FileBarChart, HandshakeIcon, Globe, Mic2, Building } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Scale className="h-6 w-6" />, title: "Policy Impact Analysis", description: "Simulate public reaction to proposed policies before they're announced." },
  { icon: <FileBarChart className="h-6 w-6" />, title: "Evidence-Based Advocacy", description: "Back your advocacy campaigns with credible, data-driven public opinion insights." },
  { icon: <HandshakeIcon className="h-6 w-6" />, title: "Stakeholder Mapping", description: "Identify supporters, opponents, and persuadable stakeholders for any policy issue." },
  { icon: <Globe className="h-6 w-6" />, title: "Multi-Issue Tracking", description: "Monitor public opinion across multiple policy areas simultaneously." },
  { icon: <Mic2 className="h-6 w-6" />, title: "Media Narrative Analysis", description: "Understand how media coverage shapes public opinion on policy issues." },
  { icon: <Building className="h-6 w-6" />, title: "Government Relations", description: "Provide data-backed briefings for legislative and executive stakeholders." },
];

export default function PublicPolicyPage() {
  return (
    <>
      <PageHero badge="Public Policy" title="Policy Intelligence That Matters" description="Evidence-based public opinion insights for policy development, advocacy, and stakeholder engagement." cta="Book a Briefing" />
      <FeatureGrid title="Policy Intelligence Features" features={features} />
      <CTASection />
    </>
  );
}
