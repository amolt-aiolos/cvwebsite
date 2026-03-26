"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:shadow-primary/25",
    secondary:
      "bg-transparent border-2 border-white/20 text-white hover:border-primary hover:text-primary",
    ghost:
      "bg-transparent text-text-dark-secondary hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Comp href={href} className={classes} onClick={onClick}>
        {/* Shine sweep on hover */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 hover:translate-x-full" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Comp>
    </motion.div>
  );
}
