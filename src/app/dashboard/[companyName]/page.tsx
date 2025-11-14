"use client";

import { use } from "react";
import Layout from "@/components/Layout";
import ChartSection from "@/components/ChartSection";
import { companies, financialData } from "@/data/filesData";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  formatNumber,
  formatDate,
} from "@/lib/utils";
import { useParams } from "next/navigation";
import BackButton from "@/components/ui/BackButton";
import CompanyHeader from "@/components/ui/CompanyHeader";
import MetricCard from "@/components/ui/MetricCard";
import InfoCard from "@/components/ui/InfoCard";
import InfoRow from "@/components/ui/InfoRow";
import RiskBadge from "@/components/ui/RiskBadge";
import { textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PageProps {
  params: { companyName: string };
}

export default function CompanyDashboardPage({ params }: PageProps) {
  const routerParams = useParams();
  const companyName =
    (routerParams?.companyName as string) || params?.companyName;
  const { theme } = useTheme();

  const company = companies.find((c) => c.companyName === companyName);
  const data = financialData[companyName];

  if (!company || !data) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className={cn("text-6xl font-bold mb-4", textClass("text"))}>
            404
          </h1>
          <p className={cn("text-xl mb-8", textClass("muted"))}>
            شرکت یافت نشد
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            بازگشت به داشبورد
          </Link>
        </div>
      </Layout>
    );
  }

  const metrics = [
    {
      label: "درآمد کل",
      value: formatCurrency(data.metrics.revenue),
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "سود خالص",
      value: formatCurrency(data.metrics.profit),
      icon: TrendingUp,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "نرخ رشد",
      value: formatPercentage(data.metrics.growth),
      icon: BarChart3,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      label: "نسبت P/E",
      value: formatNumber(data.metrics.peRatio, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      icon: PieChart,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-6">
        <BackButton />

        <CompanyHeader
          logo={company.logo}
          displayName={company.displayName}
          description={company.description}
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              icon={metric.icon}
              color={metric.color}
              bgColor={metric.bgColor}
              index={index}
            />
          ))}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="معیارهای کلیدی" delay={0.5}>
            <InfoRow
              label="بازده سود سهام"
              value={formatPercentage(data.metrics.dividendYield)}
              isNumber
            />
            <InfoRow
              label="دارایی کل"
              value={formatCurrency(company.totalAssets)}
              isNumber
            />
            <InfoRow
              label="ارزش بازار"
              value={formatCurrency(company.marketCap)}
              isNumber
            />
          </InfoCard>

          <InfoCard title="ارزیابی ریسک" delay={0.5}>
            <InfoRow
              label="سطح ریسک"
              value={
                <RiskBadge riskLevel={company.riskLevel} variant="inline" />
              }
            />
            <InfoRow
              label="بازدهی سالانه"
              value={formatPercentage(company.annualReturn)}
              
              numberVariant="primary"
            />
            <InfoRow
              label="آخرین تحلیل"
              value={formatDate(company.lastAnalysisDate)}
            />
          </InfoCard>
        </div>
      </div>
    </Layout>
  );
}
