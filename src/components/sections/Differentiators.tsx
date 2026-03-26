"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  AudioLines,
  Puzzle,
  Sparkles,
  MessageCircle,
  LayoutDashboard,
  FileText,
} from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCard from "@/components/ui/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: Clock,
    problem: "Waiting for the next survey is too slow",
    solution: "Daily qualitative listening catches what's forming in real time.",
  },
  {
    icon: AudioLines,
    problem: "Dashboards without human voice miss the point",
    solution: "Every insight is grounded in real human conversations and emotions.",
  },
  {
    icon: Puzzle,
    problem: "Anecdotes without structure don't scale",
    solution: "Rigorous analysis turns qualitative data into structured, actionable intelligence.",
  },
];

const features = [
  {
    icon: MessageCircle,
    title: "Ask the Data Anything",
    description:
      "Chat-based interface lets you explore findings in plain language. No SQL, no filters — just ask.",
  },
  {
    icon: LayoutDashboard,
    title: "Always-On Dashboards",
    description:
      "Track daily trends with real quotes and visual signals. See what's forming before it breaks.",
  },
  {
    icon: FileText,
    title: "Memos, Reports & Decks",
    description:
      "Presentation-ready materials for stakeholders. From quick memos to full research reports.",
  },
];

export default function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      // Problem cards — slide in from left with stagger
      const probCards = problemsRef.current?.querySelectorAll(".prob-card");
      if (probCards) {
        gsap.fromTo(
          probCards,
          { opacity: 0, x: -60, rotateY: 8 },
          {
            opacity: 1, x: 0, rotateY: 0,
            duration: 0.7, stagger: 0.18, ease: "power3.out",
            scrollTrigger: { trigger: problemsRef.current, start: "top 82%" },
          }
        );
      }

      // Problem→solution arrow animation
      const arrows = problemsRef.current?.querySelectorAll(".arrow-line");
      if (arrows) {
        gsap.fromTo(
          arrows,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1, opacity: 1,
            duration: 0.4, stagger: 0.2, delay: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: problemsRef.current, start: "top 82%" },
          }
        );
      }

      // Feature cards — scale up with stagger
      const featCards = featuresRef.current?.querySelectorAll(".feat-card");
      if (featCards) {
        gsap.fromTo(
          featCards,
          { opacity: 0, y: 60, scale: 0.85 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8, stagger: 0.15, ease: "back.out(1.2)",
            scrollTrigger: { trigger: featuresRef.current, start: "top 82%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 gradient-mesh" />

      <Container className="relative">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center opacity-0">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Why CrowdVox
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-light sm:text-4xl lg:text-5xl">
            More Than Research. A Living Insight System.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light-secondary">
            CrowdVox is designed for ongoing engagement, not one-off reports. We
            believe people want to be heard — and that humanity belongs at the
            center of data.
          </p>
        </div>

        {/* Problem → Solution cards */}
        <div ref={problemsRef} className="mb-20 grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <AnimatedCard key={item.problem} glowOnHover>
              <div className="prob-card relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 opacity-0 transition-all hover:border-primary/20 hover:bg-white/[0.06]">
                <div className="mb-4 flex items-start gap-3">
                  <div className="shrink-0 rounded-lg bg-red-500/10 p-2">
                    <item.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <p className="text-sm font-medium text-text-light/70 line-through decoration-red-400/40">
                    {item.problem}
                  </p>
                </div>

                <div className="arrow-line my-3 flex origin-top justify-center opacity-0">
                  <div className="h-6 w-px bg-gradient-to-b from-red-400/30 to-primary/50" />
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-text-light">
                    {item.solution}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Feature cards */}
        <div ref={featuresRef} className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <AnimatedCard key={f.title} glowOnHover>
              <div className="feat-card rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent p-8 opacity-0 transition-all hover:border-primary/20">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                >
                  <f.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-text-light">
                  {f.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-light-secondary">
                  {f.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
