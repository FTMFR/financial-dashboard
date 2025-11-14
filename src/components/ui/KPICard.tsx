"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
  trend?: {
    value: number;
    label: string;
  };
}

export default function KPICard({
  title,
  value,
  icon: Icon,
  color,
  bgColor,
  index,
  trend,
}: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        cardClass(),
        "border border-light-border dark:border-dark-border"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            bgColor
          )}
        >
          <Icon className={cn("w-6 h-6", color)} />
        </div>
        {trend && (
          <div
            className={cn(
              "text-sm",
              trend.value >= 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {trend.value >= 0 ? "+" : ""}
            {trend.value}%
          </div>
        )}
      </div>
      <p className={cn("text-sm mb-1", textClass("muted"))}>{title}</p>
      <p className={cn("text-2xl font-bold", textClass("text"))}>{value}</p>
      {trend && (
        <p className={cn("text-xs mt-1", textClass("muted"))}>{trend.label}</p>
      )}
    </motion.div>
  );
}
