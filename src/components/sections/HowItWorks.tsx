"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ear, Brain, Rocket } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCard from "@/components/ui/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Ear,
    step: "01",
    title: "Listen Early",
    subtitle: "to what's forming",
    description:
      "Daily qualitative conversations at scale surface what people notice, how they interpret events, what emotions are driving reactions, and where narrative momentum is building.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Brain,
    step: "02",
    title: "Understand Deeply",
    subtitle: "what it feels like — and why it matters",
    description:
      "We don't turn conversations into polling. We turn listening into understanding. Insights grounded in human voice, structured for action, and clear about what they can and cannot claim.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Act with Confidence",
    subtitle: "grounded in real human insight",
    description:
      "Presentation-ready memos, reports, and slide decks. Chat-based data exploration. Always-on dashboards that track daily trends with quotes and visual signals.",
    color: "from-data-blue/20 to-data-blue/5",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header fade in + slide up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      // Staggered card entrance with scale
      const cards = cardsRef.current?.querySelectorAll(".step-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }

      // Connector lines grow
      const connectors = cardsRef.current?.querySelectorAll(".connector-line");
      if (connectors) {
        gsap.fromTo(
          connectors,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.5,
            stagger: 0.3,
            delay: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }

      // Quote fade in
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: quoteRef.current, start: "top 90%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-theme="light" className="bg-bg-light py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center opacity-0">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            How It Works
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Listening at Scale, Every Day
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-dark-secondary">
            With CrowdVox you can see what&apos;s coming, not just what&apos;s already
            happened. Daily listening turns into real-time understanding.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedCard key={step.step} glowOnHover>
              <div className="step-card relative h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-primary/30">
                {/* Step badge */}
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  {step.step}
                </span>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                >
                  <step.icon className="h-7 w-7 text-accent" />
                </div>

                <h3 className="font-heading text-xl font-bold text-text-dark">
                  {step.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  {step.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-text-dark-secondary">
                  {step.description}
                </p>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="connector-line absolute right-0 top-1/2 hidden h-px w-8 origin-left -translate-y-1/2 translate-x-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom quote */}
        <p
          ref={quoteRef}
          className="mt-16 text-center text-lg font-medium text-text-dark-secondary opacity-0"
        >
          &ldquo;We don&rsquo;t turn conversations into polling.{" "}
          <span className="text-gradient font-semibold">
            We turn listening into understanding.
          </span>
          &rdquo;
        </p>
      </Container>
    </section>
  );
}
