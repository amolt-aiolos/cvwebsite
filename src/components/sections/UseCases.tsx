"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Vote, Megaphone, GraduationCap, Scale, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCard from "@/components/ui/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    icon: Vote,
    title: "Political Campaigns",
    description:
      "Listen to voters in real time. Understand shifting narratives, test messages, and catch opinion movements before your opponents do.",
    href: "/solutions/political-campaigns",
    gradient: "from-primary via-orange-400 to-amber-300",
  },
  {
    icon: Megaphone,
    title: "Marketing & Brand",
    description:
      "Go beyond brand trackers. Hear how consumers talk about you in their own words, and discover what emotional drivers shape perception.",
    href: "/solutions/marketing-research",
    gradient: "from-accent via-purple-400 to-fuchsia-300",
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description:
      "Research-grade qualitative data at scale. Student sentiment, campus culture dynamics, and institutional research — with academic rigor.",
    href: "/solutions/higher-education",
    gradient: "from-data-blue via-blue-400 to-cyan-300",
  },
  {
    icon: Scale,
    title: "Public Policy",
    description:
      "Understand how citizens feel about policy before you announce it. Evidence-based advocacy grounded in real human conversations.",
    href: "/solutions/public-policy",
    gradient: "from-data-teal via-teal-400 to-emerald-300",
  },
];

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Cards — staggered slide up + scale
      const cards = gridRef.current?.querySelectorAll(".usecase-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }

      // Gradient headers shimmer
      const gradients = gridRef.current?.querySelectorAll(".gradient-header");
      if (gradients) {
        gsap.fromTo(
          gradients,
          { opacity: 0.6, scale: 1.05 },
          {
            opacity: 0.8, scale: 1,
            duration: 0.8, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-we-do-it" ref={sectionRef} data-theme="light" className="bg-bg-light py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center opacity-0">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Solutions
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Built for Decision Makers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-dark-secondary">
            From political war rooms to corporate boardrooms. CrowdVox delivers
            the human intelligence you need to act with confidence.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <AnimatedCard key={item.title} glowOnHover>
              <a
                href={item.href}
                className="usecase-card group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white opacity-0 transition-all duration-300 hover:border-transparent"
              >
                <div
                  className={`gradient-header flex h-28 items-center justify-center bg-gradient-to-br ${item.gradient} transition-opacity group-hover:opacity-100`}
                >
                  <item.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-text-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-text-dark-secondary">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
