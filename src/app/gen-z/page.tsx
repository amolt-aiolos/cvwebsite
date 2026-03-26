"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, Smartphone, Globe, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

const trends = [
  { label: "Climate Action Priority", value: 78, change: "+5%" },
  { label: "Digital Privacy Concern", value: 72, change: "+8%" },
  { label: "Mental Health Focus", value: 85, change: "+12%" },
  { label: "Economic Anxiety", value: 67, change: "+3%" },
  { label: "Social Media Skepticism", value: 61, change: "+15%" },
];

const features = [
  { icon: <TrendingUp className="h-6 w-6" />, title: "Trend Analysis", description: "Track emerging Gen Z cultural trends and opinion shifts in real time." },
  { icon: <Heart className="h-6 w-6" />, title: "Values Mapping", description: "Understand the core values that drive Gen Z decision-making and brand loyalty." },
  { icon: <Smartphone className="h-6 w-6" />, title: "Digital Behavior", description: "Insights into how Gen Z consumes media, shops, and engages with brands online." },
  { icon: <Globe className="h-6 w-6" />, title: "Social Impact", description: "Measure Gen Z attitudes toward social justice, sustainability, and civic engagement." },
  { icon: <Sparkles className="h-6 w-6" />, title: "Cultural Intelligence", description: "Decode Gen Z language, aesthetics, and cultural movements for authentic engagement." },
  { icon: <Users className="h-6 w-6" />, title: "Segment Deep Dives", description: "Analyze sub-segments within Gen Z by interest, location, and behavioral patterns." },
];

export default function GenZPage() {
  return (
    <>
      <PageHero
        badge="Gen Z Intelligence"
        title="Decode the Next Generation"
        description="Deep cultural insights, behavioral analysis, and trend intelligence about the generation shaping the future."
        cta="Explore Gen Z Data"
      />

      {/* Trending topics */}
      <section data-theme="dark" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 dot-grid" />
        <Container className="relative">
          <SectionHeader
            badge="Trending Now"
            title="What Gen Z Cares About"
            description="Real-time tracking of the issues, values, and trends that matter most to Gen Z."
            dark
          />
          <div className="mx-auto max-w-2xl space-y-4">
            {trends.map((trend, i) => (
              <ScrollReveal key={trend.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-light">{trend.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-text-light">{trend.value}%</span>
                        <span className="text-xs font-medium text-success">{trend.change}</span>
                      </div>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent-light"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${trend.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid
        badge="Capabilities"
        title="Gen Z Intelligence Suite"
        features={features}
      />
      <CTASection />
    </>
  );
}
