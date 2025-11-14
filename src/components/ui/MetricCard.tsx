"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function MetricCard({
  label,
  value,
  icon: Icon,
  color,
  bgColor,
  index,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cardClass()}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            bgColor
          )}
        >
          <Icon className={cn("w-5 h-5", color)} />
        </div>
      </div>
      <p className={cn("text-sm mb-1", textClass("muted"))}>{label}</p>
      <p className={cn("text-2xl font-bold", textClass("text"))}>{value}</p>
    </motion.div>
  );
}

