"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Stagger({
  children,
  className,
  stagger = 0.07,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        initial: {},
        animate: {
          transition: reduce ? {} : { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {children}
    </motion.div>
  );
}
