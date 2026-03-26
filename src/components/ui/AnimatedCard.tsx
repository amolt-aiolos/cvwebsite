"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedCard({
  children,
  className,
  hoverLift = true,
  glowOnHover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  glowOnHover?: boolean;
}) {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }
          : undefined
      }
      className={cn(
        "transition-shadow duration-300",
        glowOnHover && "hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
