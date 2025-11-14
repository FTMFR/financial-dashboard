"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface InsightsCardProps {
  isPro?: boolean;
}

export default function InsightsCard({ isPro = true }: InsightsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={cn(
        cardClass(),
        "border border-light-border dark:border-dark-border relative overflow-hidden"
      )}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary-500" />
        </div>
        <div className="flex-1">
          <h3 className={cn("text-lg font-semibold mb-2", textClass("text"))}>
            تحلیل هوشمند از عملکرد این ماه
          </h3>
        </div>
      </div>
      <div className={cn("space-y-3", textClass("text"))}>
        <p className="text-sm leading-relaxed">
          بر اساس تحلیل داده‌های شما، عملکرد این ماه نسبت به ماه قبل بهبود یافته
          است. درآمد ۱۵٪ افزایش داشته و هزینه‌ها ۸٪ کاهش یافته‌اند که نشان‌دهنده
          مدیریت مالی مؤثر است.
        </p>
        <p className="text-sm leading-relaxed">
          پیشنهاد می‌شود برای ادامه این روند مثبت، روی بازاریابی دیجیتال و
          بهینه‌سازی فرآیندهای داخلی تمرکز کنید. همچنین می‌توانید با استفاده از
          تحلیل‌های پیشرفته، تصمیم‌گیری‌های بهتری اتخاذ کنید.
        </p>
      </div>
      <Link
        href="/dashboard/ai-insights"
        className={cn(
          "inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm font-medium"
        )}
      >
        مشاهده تحلیل کامل
        <Sparkles className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
