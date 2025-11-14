"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Lightbulb,
  Download,
  ArrowRight,
} from "lucide-react";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import BackButton from "@/components/ui/BackButton";
import { formatCurrency, formatPercentage } from "@/lib/utils";

export default function AIInsightsPage() {
  const handleExportPDF = () => {
    // Handle PDF export
    console.log("Exporting as PDF");
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <BackButton href="/dashboard" label="بازگشت به Dashboard" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <h1 className={cn("text-3xl font-bold", textClass("text"))}>
            تحلیل هوشمند
          </h1>
          <button
            onClick={handleExportPDF}
            className={cn(
              "px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors",
              "bg-primary-500 hover:bg-primary-600 text-white"
            )}
          >
            <Download className="w-4 h-4" />
            Export as PDF
          </button>
        </motion.div>

        {/* AI Analysis Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            cardClass(),
            "border border-light-border dark:border-dark-border"
          )}
        >
          <h2 className={cn("text-xl font-semibold mb-4", textClass("text"))}>
            تحلیل هوشمند عملکرد مالی
          </h2>
          <div className={cn("space-y-4", textClass("text"))}>
            <p className="text-sm leading-relaxed">
              بر اساس تحلیل داده‌های شما در ۶ ماه گذشته، عملکرد کلی شرکت شما
              روند صعودی داشته است. درآمد شما ۱۵٪ افزایش یافته و هزینه‌ها ۸٪
              کاهش پیدا کرده‌اند که نشان‌دهنده مدیریت مالی مؤثر است.
            </p>
            <p className="text-sm leading-relaxed">
              پیشنهاد می‌شود برای ادامه این روند مثبت، روی بازاریابی دیجیتال و
              بهینه‌سازی فرآیندهای داخلی تمرکز کنید.
            </p>
          </div>
        </motion.div>

        {/* Three Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Positive Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              cardClass(),
              "border border-light-border dark:border-dark-border"
            )}
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h3 className={cn("text-lg font-semibold", textClass("text"))}>
                نکات مثبت
              </h3>
            </div>
            <ul className={cn("space-y-2", textClass("text"))}>
              <li className="text-sm flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>افزایش ۱۵٪ درآمد نسبت به ماه قبل</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>کاهش ۸٪ هزینه‌های عملیاتی</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>بهبود نقدینگی به میزان ۱۲٪</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>افزایش سود خالص ۲۵٪</span>
              </li>
            </ul>
          </motion.div>

          {/* Negative Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={cn(
              cardClass(),
              "border border-light-border dark:border-dark-border"
            )}
          >
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className={cn("text-lg font-semibold", textClass("text"))}>
                نکات منفی
              </h3>
            </div>
            <ul className={cn("space-y-2", textClass("text"))}>
              <li className="text-sm flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>افزایش هزینه‌های بازاریابی ۱۰٪</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>کاهش نرخ تبدیل مشتریان ۳٪</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>افزایش زمان پردازش سفارشات</span>
              </li>
            </ul>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cn(
              cardClass(),
              "border border-light-border dark:border-dark-border"
            )}
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              <h3 className={cn("text-lg font-semibold", textClass("text"))}>
                پیشنهادهای عملی
              </h3>
            </div>
            <ul className={cn("space-y-2", textClass("text"))}>
              <li className="text-sm flex items-start gap-2">
                <span className="text-yellow-500 mt-1">💡</span>
                <span>بهینه‌سازی کمپین‌های بازاریابی دیجیتال</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-yellow-500 mt-1">💡</span>
                <span>افزایش سرمایه‌گذاری در بخش تحقیق و توسعه</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-yellow-500 mt-1">💡</span>
                <span>بهبود فرآیندهای داخلی برای کاهش هزینه‌ها</span>
              </li>
              <li className="text-sm flex items-start gap-2">
                <span className="text-yellow-500 mt-1">💡</span>
                <span>تمرکز روی حفظ مشتریان موجود</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Accordion for Periodic Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className={cn("text-xl font-semibold mb-4", textClass("text"))}>
            تحلیل دوره‌ای
          </h2>
          <Accordion>
            <AccordionItem title="درآمد" defaultOpen>
              <div className={cn("space-y-3", textClass("text"))}>
                <div className="flex justify-between items-center">
                  <span className="text-sm">درآمد کل:</span>
                  <span className="text-sm font-semibold">
                    {formatCurrency(125000000)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">رشد ماهانه:</span>
                  <span className="text-sm font-semibold text-green-500">
                    +{formatPercentage(15)}
                  </span>
                </div>
                <p className="text-sm mt-2">
                  درآمد شما در این ماه نسبت به ماه قبل ۱۵٪ افزایش داشته است. این
                  رشد عمدتاً ناشی از افزایش فروش محصولات جدید و بهبود استراتژی
                  بازاریابی است.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="هزینه‌ها">
              <div className={cn("space-y-3", textClass("text"))}>
                <div className="flex justify-between items-center">
                  <span className="text-sm">هزینه کل:</span>
                  <span className="text-sm font-semibold">
                    {formatCurrency(85000000)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">کاهش ماهانه:</span>
                  <span className="text-sm font-semibold text-green-500">
                    -{formatPercentage(8)}
                  </span>
                </div>
                <p className="text-sm mt-2">
                  هزینه‌های شما ۸٪ کاهش یافته است که نشان‌دهنده مدیریت مؤثر
                  منابع است. با این حال، هزینه‌های بازاریابی ۱۰٪ افزایش داشته که
                  نیاز به بررسی دارد.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="سود">
              <div className={cn("space-y-3", textClass("text"))}>
                <div className="flex justify-between items-center">
                  <span className="text-sm">سود خالص:</span>
                  <span className="text-sm font-semibold">
                    {formatCurrency(40000000)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">رشد ماهانه:</span>
                  <span className="text-sm font-semibold text-green-500">
                    +{formatPercentage(25)}
                  </span>
                </div>
                <p className="text-sm mt-2">
                  سود خالص شما ۲۵٪ افزایش داشته است که نتیجه مستقیم افزایش درآمد
                  و کاهش هزینه‌ها است. این روند مثبت نشان‌دهنده سلامت مالی شرکت
                  است.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="روند نقدینگی">
              <div className={cn("space-y-3", textClass("text"))}>
                <div className="flex justify-between items-center">
                  <span className="text-sm">نقدینگی فعلی:</span>
                  <span className="text-sm font-semibold">
                    {formatCurrency(95000000)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">رشد ماهانه:</span>
                  <span className="text-sm font-semibold text-green-500">
                    +{formatPercentage(12)}
                  </span>
                </div>
                <p className="text-sm mt-2">
                  نقدینگی شما ۱۲٪ افزایش داشته است که نشان‌دهنده مدیریت مؤثر
                  جریان نقدی است. این وضعیت به شما امکان سرمایه‌گذاری در
                  پروژه‌های جدید را می‌دهد.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </Layout>
  );
}
