"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCard from "@/components/ui/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I rate it a ten and I will like to do this in the future.",
    source: "Texas Resident",
    year: "2026",
    rating: 5,
  },
  {
    quote:
      "This interview was great. It was probably a five due to the conversational threading ability that you possessed. I've really felt understood.",
    source: "NYC Resident",
    year: "2026",
    rating: 5,
  },
  {
    quote:
      "It was a great interview. I think more survey companies should have this format.",
    source: "NYC Resident",
    year: "2026",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header slide up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      // Cards staggered slide-in from bottom with slight rotation
      const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 70, rotateX: 8 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.7, stagger: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 82%" },
          }
        );
      }

      // Stars animate in sequence inside each card
      const stars = cardsRef.current?.querySelectorAll(".star-icon");
      if (stars) {
        gsap.fromTo(
          stars,
          { opacity: 0, scale: 0 },
          {
            opacity: 1, scale: 1,
            duration: 0.3, stagger: 0.05, delay: 0.5, ease: "back.out(3)",
            scrollTrigger: { trigger: cardsRef.current, start: "top 82%" },
          }
        );
      }

      // Aggregate badge scale up
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.6, ease: "back.out(1.5)",
          scrollTrigger: { trigger: badgeRef.current, start: "top 90%" },
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
            What People Say
          </span>
          <h2 className="font-heading text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Real Conversations, Real Reactions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-dark-secondary">
            Our AI-driven interviews feel human. Participants consistently rate
            their experience 5 out of 5.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedCard key={i} glowOnHover>
              <div className="testimonial-card group relative h-full rounded-2xl border border-gray-200 bg-white p-8 opacity-0 transition-all hover:border-primary/30">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/5">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                <div className="mb-4 flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="star-icon h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="mb-6 text-base leading-relaxed text-text-dark">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-auto border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-text-dark">
                    {t.source}
                  </p>
                  <p className="text-xs text-text-dark-secondary">
                    Participant, {t.year}
                  </p>
                </div>

                {/* Gradient border on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Aggregate badge */}
        <div ref={badgeRef} className="mt-12 flex flex-col items-center gap-3 text-center opacity-0">
          <div className="flex items-center gap-2 rounded-full bg-primary/5 px-5 py-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-semibold text-text-dark">
              5.0 average participant rating
            </span>
          </div>
          <p className="text-sm text-text-dark-secondary">
            People want to be heard. Our platform makes that possible at scale.
          </p>
        </div>
      </Container>
    </section>
  );
}
