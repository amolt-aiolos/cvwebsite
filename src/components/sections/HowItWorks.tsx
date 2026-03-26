"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, MessageSquare, HeartPulse, TrendingUp } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

/* ── Animated visual elements for each card ── */

function NoticingVisual() {
  const topics = [
    { label: "Housing policy", hot: true, delay: 0 },
    { label: "AI regulation", hot: false, delay: 0.3 },
    { label: "Student debt", hot: true, delay: 0.6 },
    { label: "Climate bill", hot: false, delay: 0.9 },
  ];
  return (
    <div className="mt-4 space-y-2">
      {topics.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: t.delay + 0.8, duration: 0.4, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <motion.div
            animate={t.hot ? { scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            className={`h-2 w-2 rounded-full ${t.hot ? "bg-primary" : "bg-gray-300"}`}
          />
          <span className="text-xs text-text-dark-secondary">{t.label}</span>
          {t.hot && (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-auto rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-primary"
            >
              RISING
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function InterpretingVisual() {
  const messages = [
    { text: "They promised change, but nothing feels different…", align: "left", delay: 0 },
    { text: "I think people are starting to tune out.", align: "right", delay: 0.6 },
    { text: "It's not anger — it's exhaustion.", align: "left", delay: 1.2 },
  ];
  return (
    <div className="mt-4 space-y-2.5">
      {messages.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: m.delay + 0.8, duration: 0.4, ease: "easeOut" }}
          className={`flex ${m.align === "right" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-snug ${
              m.align === "right"
                ? "rounded-br-sm bg-accent/10 text-accent"
                : "rounded-bl-sm bg-gray-100 text-text-dark-secondary"
            }`}
          >
            &ldquo;{m.text}&rdquo;
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.3 }}
        className="flex items-center gap-1.5 pt-1"
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
          className="h-1.5 w-1.5 rounded-full bg-accent/50"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
          className="h-1.5 w-1.5 rounded-full bg-accent/50"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
          className="h-1.5 w-1.5 rounded-full bg-accent/50"
        />
        <span className="ml-1 text-[9px] text-text-dark-secondary/50">listening…</span>
      </motion.div>
    </div>
  );
}

function EmotionsVisual() {
  const emotions = [
    { emoji: "🤝", label: "Trust", value: 72, color: "bg-success", barColor: "bg-success/60" },
    { emoji: "🤔", label: "Doubt", value: 45, color: "bg-amber-400", barColor: "bg-amber-400/60" },
    { emoji: "😤", label: "Frustration", value: 58, color: "bg-red-400", barColor: "bg-red-400/60" },
    { emoji: "😶", label: "Disengaged", value: 31, color: "bg-gray-400", barColor: "bg-gray-400/60" },
  ];
  return (
    <div className="mt-4 space-y-2.5">
      {emotions.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.25 + 0.8, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="text-sm">{e.emoji}</span>
          <span className="w-16 text-[10px] font-medium text-text-dark-secondary">
            {e.label}
          </span>
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${e.value}%` }}
              transition={{ delay: i * 0.25 + 1, duration: 0.8, ease: "easeOut" }}
              className={`absolute inset-y-0 left-0 rounded-full ${e.barColor}`}
            />
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.25 + 1.5 }}
            className="w-7 text-right font-mono text-[10px] font-bold text-text-dark-secondary"
          >
            {e.value}%
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

function NarrativeVisual() {
  const narratives = [
    { label: "\"System is broken\"", direction: "up", change: "+12%", color: "text-red-500" },
    { label: "\"New leadership works\"", direction: "down", change: "-8%", color: "text-amber-500" },
    { label: "\"Cautious optimism\"", direction: "up", change: "+23%", color: "text-success" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {narratives.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 + 0.8, duration: 0.4 }}
          className="flex items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2"
        >
          <motion.div
            animate={{ y: n.direction === "up" ? [0, -3, 0] : [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          >
            {n.direction === "up" ? (
              <TrendingUp className={`h-3.5 w-3.5 ${n.color}`} />
            ) : (
              <TrendingUp className={`h-3.5 w-3.5 rotate-180 ${n.color}`} />
            )}
          </motion.div>
          <span className="flex-1 text-[10px] font-medium text-text-dark-secondary">
            {n.label}
          </span>
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`font-mono text-[10px] font-bold ${n.color}`}
          >
            {n.change}
          </motion.span>
        </motion.div>
      ))}
      {/* Mini sparkline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex items-center justify-center pt-1"
      >
        <svg width="120" height="24" viewBox="0 0 120 24" className="opacity-40">
          <motion.path
            d="M0 20 Q10 18 20 16 T40 12 T60 14 T80 8 T100 10 T120 4"
            fill="none"
            stroke="#22C55E"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

const cardVisuals: Record<string, () => React.ReactElement> = {
  "01": NoticingVisual,
  "02": InterpretingVisual,
  "03": EmotionsVisual,
  "04": NarrativeVisual,
};

const steps = [
  {
    icon: Eye,
    step: "01",
    title: "What People Are Noticing",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "How They're Interpreting",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Emotions Driving Reaction",
    color: "from-data-blue/20 to-data-blue/5",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Narrative Momentum",
    color: "from-success/20 to-success/5",
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
            Most research captures opinion after it has settled. CrowdVox
            listens while meaning is forming. We conduct ongoing, in-depth
            qualitative conversations designed to surface:
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Visual = cardVisuals[step.step];
            return (
              <AnimatedCard key={step.step} glowOnHover>
                <div className="step-card relative h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-primary/30">
                  <h3 className="font-heading text-lg font-bold text-text-dark">
                    {step.title}
                  </h3>

                  {/* Animated visual */}
                  <Visual />

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="connector-line absolute right-0 top-1/2 hidden h-px w-6 origin-left -translate-y-1/2 translate-x-full bg-gradient-to-r from-primary/40 to-transparent lg:block" />
                  )}
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Bottom text + CTA */}
        <div ref={quoteRef} className="mt-16 text-center opacity-0">
          <p className="mx-auto max-w-2xl text-lg font-medium text-text-dark-secondary">
            This daily listening is interpreted in context—grounded in historical
            research and ongoing trend data—so new signals are never read in isolation.
          </p>
          <div className="mt-8">
            <Button size="lg" href="/contact">
              See It in Action
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
