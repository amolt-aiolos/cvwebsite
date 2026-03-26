"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  badge,
  title,
  description,
  dark = false,
  center = true,
}: {
  badge?: string;
  title: string;
  description?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-16", center && "text-center")}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
            dark
              ? "bg-primary/10 text-primary"
              : "bg-accent/10 text-accent"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold sm:text-4xl lg:text-5xl",
          dark ? "text-text-light" : "text-text-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            dark ? "text-text-light-secondary" : "text-text-dark-secondary"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
