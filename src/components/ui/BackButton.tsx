"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export default function BackButton({
  href = "/",
  label = "بازگشت به داشبورد",
}: BackButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2",
          textClass("muted"),
          "hover:text-primary-500 transition-colors"
        )}
      >
        <ArrowRight className="w-4 h-4" />
        <span>{label}</span>
      </Link>
    </motion.div>
  );
}

