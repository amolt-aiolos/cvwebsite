"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureGrid({
  badge,
  title,
  description,
  features,
  dark = false,
}: {
  badge?: string;
  title: string;
  description?: string;
  features: Feature[];
  dark?: boolean;
}) {
  return (
    <section
      data-theme={dark ? "dark" : undefined}
      className={`relative overflow-hidden py-24 lg:py-32 ${dark ? "dot-grid" : ""}`}
    >
      <Container className="relative">
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          dark={dark}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.08}>
              <div
                className={`rounded-2xl border p-6 transition-all ${
                  dark
                    ? "border-white/5 bg-white/[0.03] hover:border-primary/20"
                    : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <div className={`mb-4 ${dark ? "text-primary" : "text-accent"}`}>
                  {f.icon}
                </div>
                <h3
                  className={`mb-2 font-heading text-lg font-semibold ${
                    dark ? "text-text-light" : "text-text-dark"
                  }`}
                >
                  {f.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    dark ? "text-text-light-secondary" : "text-text-dark-secondary"
                  }`}
                >
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
