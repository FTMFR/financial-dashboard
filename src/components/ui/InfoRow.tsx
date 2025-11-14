"use client";

import { textClass, numberClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface InfoRowProps {
  label: string;
  value: string | React.ReactNode;
  valueClassName?: string;
  isNumber?: boolean;
  numberVariant?: "default" | "primary";
}

export default function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className={cn("text-sm", textClass("muted"))}>{label}</span>
      <span className={"text-sm font-medium"}>{value}</span>
    </div>
  );
}
