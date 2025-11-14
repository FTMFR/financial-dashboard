"use client";

import { motion } from "framer-motion";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export default function InfoCard({
  title,
  children,
  delay = 0,
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cardClass()}
    >
      <h3 className={cn("text-lg font-semibold mb-4", textClass("text"))}>
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

