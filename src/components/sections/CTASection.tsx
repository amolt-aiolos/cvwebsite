"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Badges pop in
      const badges = badgesRef.current?.querySelectorAll(".value-badge");
      if (badges) {
        tl.fromTo(
          badges,
          { opacity: 0, scale: 0.7, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "back.out(2)" }
        );
      }

      // Heading scale up
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      );

      // Description
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      // Trust logos fade in
      tl.fromTo(
        trustRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );

      // Individual logo stagger
      const logos = trustRef.current?.querySelectorAll(".trust-logo");
      if (logos) {
        tl.fromTo(
          logos,
          { opacity: 0, y: 12 },
          { opacity: 0.4, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
          "-=0.6"
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
      {/* Background */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-[600px] w-[600px] rounded-full bg-primary blur-[180px]"
        />
      </div>
      <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

      <Container className="relative text-center">
        {/* Values badges */}
        <div ref={badgesRef} className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="value-badge inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-light-secondary opacity-0">
            <Heart className="h-3 w-3 text-primary" />
            People want to be heard
          </span>
          <span className="value-badge inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-light-secondary opacity-0">
            <Sparkles className="h-3 w-3 text-primary" />
            Humanity belongs at the center of data
          </span>
        </div>

        <h2
          ref={headingRef}
          className="mx-auto max-w-3xl font-heading text-3xl font-bold text-text-light opacity-0 sm:text-4xl lg:text-5xl"
        >
          The future of public opinion{" "}
          <span className="text-gradient">intelligence.</span>
        </h2>
        <p
          ref={descRef}
          className="mx-auto mt-6 max-w-xl text-lg text-text-light-secondary opacity-0"
        >
          Listen to what&apos;s forming &mdash; not just what&apos;s been measured.
          Real conversations + structure, context &amp; clarity.
        </p>
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0">
          <Button size="lg" href="/contact">
            See It in Action <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Join Our Waitlist
          </Button>
        </div>

        {/* Trust logos */}
        <div ref={trustRef} className="mt-20 opacity-0">
          <p className="mb-8 text-sm text-text-light-secondary">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Stanford", "McKinsey", "Bloomberg", "Harvard", "Reuters"].map(
              (name) => (
                <span
                  key={name}
                  className="trust-logo font-heading text-lg font-bold text-text-light opacity-0"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
