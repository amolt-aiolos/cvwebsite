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
            Daily listening into real-time understanding.
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-light sm:text-4xl lg:text-5xl">
            With CrowdVox you can see what&apos;s coming, not just what&apos;s already happened.
          </h2>
          <a
            href="#demo"
            className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Hear For Yourself
          </a>
        </div>

        {/* Video */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-primary/5">
            <video
              className="h-auto w-full"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src="https://crowdvox.ai/video/CrowdVox.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
