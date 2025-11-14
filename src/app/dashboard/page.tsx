"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Download, FileText, FileSpreadsheet } from "lucide-react";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import InsightsCard from "@/components/ui/InsightsCard";
import QuickAIChat from "@/components/ui/QuickAIChat";
import ChartSection from "@/components/ChartSection";
import { useTheme } from "@/components/ThemeProvider";
import FileCard from "@/components/FileCard";
import { companies } from "@/data/filesData";

// Sample chart data
const chartData = {
  companyName: "dashboard",
  timeSeries: [
    {
      date: "2024-01",
      revenue: 100000000,
      profit: 30000000,
      assets: 200000000,
    },
    {
      date: "2024-02",
      revenue: 110000000,
      profit: 32000000,
      assets: 210000000,
    },
    {
      date: "2024-03",
      revenue: 105000000,
      profit: 28000000,
      assets: 205000000,
    },
    {
      date: "2024-04",
      revenue: 120000000,
      profit: 35000000,
      assets: 220000000,
    },
    {
      date: "2024-05",
      revenue: 115000000,
      profit: 38000000,
      assets: 215000000,
    },
    {
      date: "2024-06",
      revenue: 125000000,
      profit: 40000000,
      assets: 225000000,
    },
  ],
  metrics: {
    revenue: 125000000,
    profit: 40000000,
    growth: 15,
    peRatio: 12.5,
    dividendYield: 3.2,
  },
  chartData: {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    revenue: [100, 110, 105, 120, 115, 125],
    profit: [30, 32, 28, 35, 38, 40],
    assets: [200, 210, 205, 220, 215, 225],
  },
};

export default function DashboardPage() {
  const { theme } = useTheme();

  const handleExport = (format: "pdf" | "excel") => {
    // Handle export logic
    console.log(`Exporting as ${format}`);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <h1 className={cn("text-3xl font-bold", textClass("text"))}>
            Dashboard
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => handleExport("pdf")}
              className={cn(
                "px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors",
                "bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card",
                "border border-light-border dark:border-dark-border",
                "hover:bg-dark-surface dark:hover:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-surface",
                textClass("text")
              )}
            >
              <FileText className="w-4 h-4" />
              PDF
            </button>
            <button
              onClick={() => handleExport("excel")}
              className={cn(
                "px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors",
                "bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card",
                "border border-light-border dark:border-dark-border",
                "hover:bg-dark-surface dark:hover:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-surface",
                textClass("text")
              )}
            >
              <FileSpreadsheet className="w-4 h-4" />
              Excel
            </button>
          </div>
        </motion.div>

        {/* File Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <FileCard key={company.id} file={company} index={index} />
          ))}
        </div>

        {/* Insights Card */}
        <InsightsCard isPro={true} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ChartSection data={chartData} theme={theme} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={cn(
              cardClass(),
              "border border-light-border dark:border-dark-border"
            )}
          >
            <h3 className={cn("text-lg font-semibold mb-4", textClass("text"))}>
              نمودار هزینه‌ها
            </h3>
            <div className="h-64 flex items-center justify-center">
              <p className={cn(textClass("muted"))}>
                نمودار هزینه‌ها در اینجا نمایش داده می‌شود
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick AI Chat */}
        <QuickAIChat />
      </div>
    </Layout>
  );
}
