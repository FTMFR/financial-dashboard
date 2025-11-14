"use client";

import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FinancialData } from "@/data/filesData";
import { motion } from "framer-motion";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { cardClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

interface ChartSectionProps {
  data: FinancialData;
  theme: "dark" | "light";
}

export default function ChartSection({ data, theme }: ChartSectionProps) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const isDark = theme === "dark";

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      height: 400,
    },
    title: {
      text: "نمای کلی عملکرد مالی",
      style: {
        color: isDark ? "#e5e5e5" : "#111827",
        fontSize: "20px",
        fontWeight: "600",
      },
    },
    xAxis: {
      categories: data.chartData.labels,
      labels: {
        style: {
          color: isDark ? "#a3a3a3" : "#6b7280",
        },
      },
      lineColor: isDark ? "#2a2a2a" : "#e5e7eb",
    },
    yAxis: {
      title: {
        text: "مبلغ (میلیون تومان)",
        style: {
          color: isDark ? "#a3a3a3" : "#6b7280",
        },
      },
      labels: {
        style: {
          color: isDark ? "#a3a3a3" : "#6b7280",
        },
        formatter: function () {
          const value = Number(this.value);
          const valueInMillion = value;
          return formatCurrency(valueInMillion);
        },
      },
      gridLineColor: isDark ? "#2a2a2a" : "#e5e7eb",
    },
    legend: {
      itemStyle: {
        color: isDark ? "#e5e5e5" : "#111827",
      },
      symbolPadding: 30,
      itemDistance: 20,
      x: 0,
      y: 0,
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 4,
        },
        lineWidth: 3,
      },
    },
    series: [
      {
        name: "درآمد",
        data: data.chartData.revenue,
        color: "#22c55e",
        type: "line",
      },
      {
        name: "سود",
        data: data.chartData.profit,
        color: "#4ade80",
        type: "line",
      },
      {
        name: "دارایی",
        data: data.chartData.assets,
        color: "#86efac",
        type: "line",
      },
    ],
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
      borderColor: isDark ? "#2a2a2a" : "#e5e7eb",
      style: {
        color: isDark ? "#e5e5e5" : "#111827",
      },
      formatter: function () {
        const value = this.y ?? 0;
        const valueInMillion = value * 1000000;
        const formatted = formatCurrency(valueInMillion);
        return `<b>${this.series.name}</b><br/>${this.x}: ${formatted}`;
      },
    },
  };

  useEffect(() => {
    if (chartRef.current?.chart) {
      chartRef.current.chart.update(chartOptions, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full", cardClass())}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartRef}
      />
    </motion.div>
  );
}
