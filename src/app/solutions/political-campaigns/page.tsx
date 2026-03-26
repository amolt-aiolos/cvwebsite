"use client";

import { Vote, Target, MessageSquare, Map, TrendingUp, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

const features = [
  { icon: <Vote className="h-6 w-6" />, title: "Voter Sentiment Tracking", description: "Monitor real-time shifts in voter opinion across key demographics and geographies." },
  { icon: <Target className="h-6 w-6" />, title: "Message Testing", description: "A/B test campaign messages before going live to maximize impact." },
  { icon: <MessageSquare className="h-6 w-6" />, title: "Debate Prep Intelligence", description: "Understand voter positions on key issues to prepare winning debate strategies." },
  { icon: <Map className="h-6 w-6" />, title: "Swing District Analysis", description: "Identify persuadable voters and understand what moves them." },
  { icon: <TrendingUp className="h-6 w-6" />, title: "Momentum Tracking", description: "Track campaign momentum and identify inflection points in real time." },
  { icon: <Users className="h-6 w-6" />, title: "Coalition Building", description: "Identify potential coalition partners and understand cross-demographic appeal." },
];

export default function PoliticalCampaignsPage() {
  return (
    <>
      <PageHero badge="Political Campaigns" title="Win With Intelligence" description="Real-time voter sentiment, message testing, and strategic polling insights that give your campaign the edge." cta="Talk to Our Team" />
      <FeatureGrid title="Campaign Intelligence Features" features={features} />
      <CTASection />
    </>
  );
}
