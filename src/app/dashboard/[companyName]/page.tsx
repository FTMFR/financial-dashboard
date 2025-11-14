"use client";

import { use } from "react";
import Layout from "@/components/Layout";
import ChartSection from "@/components/ChartSection";
import { companies, financialData } from "@/data/filesData";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  DollarSign,
  TrendingUp,
  BarChart3,
  PieChart,
} from "lucide-react";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

interface PageProps {
  params: { companyName: string };
}

export default function CompanyDashboardPage({ params }: PageProps) {
  const routerParams = useParams();
  const companyName = (routerParams?.companyName as string) || params?.companyName;
  const { theme } = useTheme();

  const company = companies.find((c) => c.companyName === companyName);
  const data = financialData[companyName];

  if (!company || !data) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-6xl font-bold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text mb-4">
            404
          </h1>
          <p className="text-xl text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted mb-8">
            Company not found
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </Layout>
    );
  }

  const metrics = [
    {
      label: "Total Revenue",
      value: formatCurrency(data.metrics.revenue),
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Net Profit",
      value: formatCurrency(data.metrics.profit),
      icon: TrendingUp,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Growth Rate",
      value: formatPercentage(data.metrics.growth),
      icon: BarChart3,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      label: "P/E Ratio",
      value: data.metrics.peRatio.toFixed(2),
      icon: PieChart,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
        </motion.div>

        {/* Company Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card rounded-xl border border-dark-border dark:border-dark-border border-light-border dark:border-dark-border p-6 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-4xl">
              {company.logo}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text mb-1">
                {company.displayName}
              </h1>
              <p className="text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                {company.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card rounded-xl border border-dark-border dark:border-dark-border border-light-border dark:border-dark-border p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                </div>
                <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted mb-1">
                  {metric.label}
                </p>
                <p className="text-2xl font-bold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {metric.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ChartSection data={data} theme={theme} />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card rounded-xl border border-dark-border dark:border-dark-border border-light-border dark:border-dark-border p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text mb-4">
              Key Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  Dividend Yield
                </span>
                <span className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {formatPercentage(data.metrics.dividendYield)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  Total Assets
                </span>
                <span className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {formatCurrency(company.totalAssets)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  Market Cap
                </span>
                <span className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {formatCurrency(company.marketCap)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card rounded-xl border border-dark-border dark:border-dark-border border-light-border dark:border-dark-border p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text mb-4">
              Risk Assessment
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  Risk Level
                </span>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-md ${
                    company.riskLevel === "Low"
                      ? "text-green-500 bg-green-500/10"
                      : company.riskLevel === "Medium"
                      ? "text-yellow-500 bg-yellow-500/10"
                      : "text-red-500 bg-red-500/10"
                  }`}
                >
                  {company.riskLevel}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  Annual Return
                </span>
                <span className="text-sm font-semibold text-primary-500">
                  {formatPercentage(company.annualReturn)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  Last Analysis
                </span>
                <span className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {company.lastAnalysisDate.toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
