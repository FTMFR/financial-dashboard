"use client";

import { motion } from "framer-motion";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface CompanyHeaderProps {
  logo: string;
  displayName: string;
  description: string;
}

export default function CompanyHeader({
  logo,
  displayName,
  description,
}: CompanyHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cardClass()}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-4xl">
          {logo}
        </div>
        <div>
          <h1
            className={cn(
              "text-2xl sm:text-3xl font-bold mb-1",
              textClass("text")
            )}
          >
            {displayName}
          </h1>
          <p className={textClass("muted")}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

