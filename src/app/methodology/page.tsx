"use client";

import { Brain, FlaskConical, Cpu, ShieldCheck, BookOpen, Award } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

const pillars = [
  {
    icon: Brain,
    title: "Behavioral Neuroscience",
    description:
      "Our models are built on peer-reviewed behavioral science research, capturing how people actually form opinions — including cognitive biases, emotional drivers, and social influence patterns.",
  },
  {
    icon: FlaskConical,
    title: "Academic Research Standards",
    description:
      "Every simulation follows rigorous academic methodology with transparent confidence intervals, margin of error calculations, and demographic weighting protocols.",
  },
  {
    icon: Cpu,
    title: "AI + Polling Hybrid",
    description:
      "We combine the speed of AI simulation with the rigor of traditional polling methodology. Our models are continuously validated against real-world survey data.",
  },
];

const validations = [
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Continuous Validation", description: "Models are tested against live polling data from major pollsters to ensure accuracy." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Transparent Methodology", description: "Full documentation of our methods, assumptions, and limitations — always available." },
  { icon: <Award className="h-6 w-6" />, title: "Peer Review", description: "Our approach has been reviewed by academic researchers in political science and behavioral economics." },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        badge="Methodology"
        title="Science-Backed Intelligence"
        description="Our methodology combines behavioral neuroscience, academic research standards, and cutting-edge AI to deliver insights you can trust."
      />

      {/* Three Pillars */}
      <section className="py-24">
        <Container>
          <SectionHeader
            badge="Our Approach"
            title="Three Pillars of Credible Intelligence"
            description="CrowdVox is built on a foundation of rigorous science, not just algorithms."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/5">
                    <p.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-text-dark">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-dark-secondary">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid
        badge="Validation"
        title="Trust Through Transparency"
        features={validations}
        dark
      />
      <CTASection />
    </>
  );
}
