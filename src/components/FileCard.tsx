"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, TrendingUp, AlertCircle } from "lucide-react";
import { CompanyFile } from "@/data/filesData";
import { formatDate, formatCurrency, formatPercentage } from "@/lib/utils";
import Link from "next/link";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import RiskBadge from "@/components/ui/RiskBadge";

interface FileCardProps {
  file: CompanyFile;
  index: number;
}

export default function FileCard({ file, index }: FileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/dashboard/${file.companyName}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "group relative overflow-hidden rounded-xl border p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 cursor-pointer",
            cardClass()
          )}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 transition-all duration-300" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-2xl">
                  {file.logo}
                </div>
                <div>
                  <h3
                    className={cn(
                      "text-lg font-semibold mb-1",
                      textClass("text")
                    )}
                  >
                    {file.displayName}
                  </h3>
                  <p className={cn("text-sm line-clamp-2", textClass("muted"))}>
                    {file.description}
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5 text-primary-500" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="space-y-1">
                <div
                  className={cn(
                    "flex items-center gap-2 text-xs",
                    textClass("muted")
                  )}
                >
                  <Calendar className="w-3 h-3" />
                  <span>آخرین تحلیل</span>
                </div>
                <p className={cn("text-sm font-medium", textClass("text"))}>
                  {formatDate(file.lastAnalysisDate)}
                </p>
              </div>

              <div className="space-y-1">
                <div
                  className={cn(
                    "flex items-center gap-2 text-xs",
                    textClass("muted")
                  )}
                >
                  <TrendingUp className="w-3 h-3" />
                  <span>بازدهی سالانه</span>
                </div>
                <p className="text-sm font-semibold text-primary-500">
                  {formatPercentage(file.annualReturn)}
                </p>
              </div>

              <div className="space-y-1">
                <div
                  className={cn(
                    "flex items-center gap-2 text-xs",
                    textClass("muted")
                  )}
                >
                  <AlertCircle className="w-3 h-3" />
                  <span>سطح ریسک</span>
                </div>
                <RiskBadge riskLevel={file.riskLevel} />
              </div>

              <div className="space-y-1">
                <div
                  className={cn(
                    "flex items-center gap-2 text-xs",
                    textClass("muted")
                  )}
                >
                  <span>ارزش بازار</span>
                </div>
                <p className={cn("text-sm font-medium", textClass("text"))}>
                  {formatCurrency(file.marketCap)}
                </p>
              </div>
            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 group-hover:from-primary-500/50 group-hover:via-primary-500 group-hover:to-primary-500/50 transition-all duration-300" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
