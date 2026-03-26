"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ResearchConsole from "@/components/ui/ResearchConsole";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Staggered intro animation
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.9 },
        "-=0.2"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        proofRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(
        consoleRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" },
        "-=1.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-accent blur-[130px]"
      />

      <Container className="relative flex min-h-screen items-center pt-24 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <span
              ref={badgeRef}
              className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary opacity-0"
            >
              AI-Powered Research Console
            </span>

            <h1
              ref={headingRef}
              className="font-heading text-4xl font-bold leading-[1.1] text-text-light opacity-0 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Understand public opinion{" "}
              <span className="text-gradient">before it becomes news.</span>
            </h1>

            <p
              ref={descRef}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-light-secondary opacity-0 sm:text-xl"
            >
              AI-powered polling simulations that deliver narrative insights in
              seconds. Ask a question, get a story-driven analysis with strategic
              recommendations.
            </p>

            <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4 opacity-0">
              <Button size="lg" href="/contact">
                See It in Action
              </Button>
              <Button variant="secondary" size="lg" href="/platform">
                Watch Our Demo
              </Button>
            </div>

            {/* Social proof */}
            <div ref={proofRef} className="mt-12 flex items-center gap-4 opacity-0">
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-primary to-amber-400",
                  "bg-gradient-to-br from-accent to-purple-400",
                  "bg-gradient-to-br from-data-blue to-cyan-400",
                  "bg-gradient-to-br from-success to-emerald-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg-dark text-[10px] font-bold text-white ${bg}`}
                  >
                    {["SC", "JO", "MP", "AR"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 1l2.39 4.84L17.3 6.9l-3.65 3.56.86 5.02L10 13.17l-4.51 2.31.86-5.02L2.7 6.9l4.91-.06L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-text-light-secondary">
                  Rated 5/5 by research participants
                </p>
              </div>
            </div>
          </div>

          {/* Right: Console */}
          <div
            ref={consoleRef}
            className="flex justify-center opacity-0 lg:justify-end"
          >
            <ResearchConsole />
          </div>
        </div>
      </Container>
    </section>
  );
}
