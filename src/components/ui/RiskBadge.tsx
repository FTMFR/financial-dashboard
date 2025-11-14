"use client";

import { riskLabels, riskBadgeColors, type RiskLevel } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  riskLevel: RiskLevel;
  variant?: "default" | "inline";
  className?: string;
}

export default function RiskBadge({
  riskLevel,
  variant = "default",
  className,
}: RiskBadgeProps) {
  const baseClasses =
    variant === "default"
      ? "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border"
      : "text-sm font-medium px-3 py-1 rounded-md";

  const colorClasses =
    variant === "default"
      ? riskLevel === "Low"
        ? "text-green-500 bg-green-500/10 border-green-500/20"
        : riskLevel === "Medium"
        ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
        : "text-red-500 bg-red-500/10 border-red-500/20"
      : riskBadgeColors[riskLevel];

  return (
    <span className={cn(baseClasses, colorClasses, className)}>
      {riskLabels[riskLevel]}
    </span>
  );
}

