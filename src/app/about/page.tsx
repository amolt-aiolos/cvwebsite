"use client";

import { Target, Eye, Heart, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    icon: Eye,
    title: "Insightful & Credible",
    description: "We seek deeper truths, not surface analytics. Every insight is grounded in rigorous methodology.",
  },
  {
    icon: Heart,
    title: "Human & Approachable",
    description: "AI intelligence with a human touch. We make complex data feel accessible and actionable.",
  },
  {
    icon: Target,
    title: "Built on Science",
    description: "Behavioral neuroscience and academic research are the foundation of everything we build.",
  },
  {
    icon: Users,
    title: "Warm & Optimistic",
    description: "We believe better understanding leads to better decisions and a more connected world.",
  },
];

const timeline = [
  { year: "2023", event: "Founded with a vision to democratize public opinion research" },
  { year: "2024", event: "Launched AI polling simulation engine with behavioral neuroscience models" },
  { year: "2025", event: "Validated methodology against national polling data; 98% accuracy achieved" },
  { year: "2026", event: "Serving 500+ organizations across politics, marketing, education, and policy" },
];

const team = [
  { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", bio: "Former political pollster with 15 years in public opinion research." },
  { name: "James Okafor", role: "CTO & Co-Founder", bio: "AI researcher specializing in behavioral modeling and NLP." },
  { name: "Dr. Maya Patel", role: "Chief Science Officer", bio: "Behavioral neuroscientist with 40+ peer-reviewed publications." },
  { name: "Alex Rivera", role: "VP of Product", bio: "Former product lead at major analytics platforms." },
  { name: "Dr. Lisa Wu", role: "Head of Methodology", bio: "Political science PhD specializing in survey methodology." },
  { name: "Marcus Thompson", role: "VP of Sales", bio: "10+ years in enterprise SaaS and political consulting." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About CrowdVox"
        title="Understanding People Better"
        description="We're on a mission to make public opinion research instant, accessible, and actionable for every decision maker."
      />

      {/* Values */}
      <section className="py-24">
        <Container>
          <SectionHeader
            badge="Our Values"
            title="What We Believe"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5">
                    <v.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-text-dark">{v.title}</h3>
                  <p className="text-sm text-text-dark-secondary">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section data-theme="dark" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 dot-grid" />
        <Container className="relative">
          <SectionHeader badge="Our Story" title="The Journey So Far" dark />
          <div className="mx-auto max-w-2xl space-y-8">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {t.year.slice(2)}
                    </span>
                    {i < timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-white/10" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-bold text-primary">{t.year}</span>
                    <p className="mt-1 text-text-light-secondary">{t.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24">
        <Container>
          <SectionHeader badge="Our Team" title="The People Behind the Platform" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <span className="text-xl font-bold text-text-dark">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-text-dark">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-text-dark-secondary">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
