"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function PageHero({
  badge,
  title,
  description,
  cta,
  ctaHref = "/contact",
}: {
  badge: string;
  title: string;
  description: string;
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <section data-theme="dark" className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {badge}
          </span>
          <h1 className="font-heading text-4xl font-bold text-text-light sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-text-light-secondary sm:text-xl">
            {description}
          </p>
          {cta && (
            <div className="mt-8">
              <Button size="lg" href={ctaHref}>
                {cta}
              </Button>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
