export interface CompanyFile {
  id: string;
  companyName: string;
  displayName: string;
  lastAnalysisDate: Date;
  riskLevel: "Low" | "Medium" | "High";
  annualReturn: number;
  totalAssets: number;
  marketCap: number;
  description: string;
  logo: string;
}

export interface FinancialData {
  companyName: string;
  timeSeries: {
    date: string;
    revenue: number;
    profit: number;
    assets: number;
  }[];
  metrics: {
    revenue: number;
    profit: number;
    growth: number;
    peRatio: number;
    dividendYield: number;
  };
  chartData: {
    labels: string[];
    revenue: number[];
    profit: number[];
    assets: number[];
  };
}

export const companies: CompanyFile[] = [
  {
    id: "techcorp",
    companyName: "techcorp",
    displayName: "صنایع تک‌کورپ",
    lastAnalysisDate: new Date("2024-01-15"),
    riskLevel: "Low",
    annualReturn: 12.5,
    totalAssets: 4500000000,
    marketCap: 8500000000,
    description: "ارائه‌دهنده پیشرو راه‌حل‌های فناوری با حضور قوی در بازار",
    logo: "💻",
  },
  {
    id: "financegroup",
    companyName: "financegroup",
    displayName: "گروه مالی جهانی",
    lastAnalysisDate: new Date("2024-01-10"),
    riskLevel: "Medium",
    annualReturn: 18.3,
    totalAssets: 12000000000,
    marketCap: 15000000000,
    description: "شرکت خدمات مالی بین‌المللی با سبد سرمایه‌گذاری متنوع",
    logo: "🏦",
  },
  {
    id: "energyplus",
    companyName: "energyplus",
    displayName: "هولدینگ انرژی پلاس",
    lastAnalysisDate: new Date("2024-01-12"),
    riskLevel: "High",
    annualReturn: 25.7,
    totalAssets: 8000000000,
    marketCap: 12000000000,
    description: "پیشرو در انرژی تجدیدپذیر با عملیات در حال گسترش جهانی",
    logo: "⚡",
  },
];

export const financialData: Record<string, FinancialData> = {
  techcorp: {
    companyName: "صنایع تک‌کورپ",
    timeSeries: [
      {
        date: "2023-01",
        revenue: 1200000000,
        profit: 180000000,
        assets: 4200000000,
      },
      {
        date: "2023-02",
        revenue: 1250000000,
        profit: 195000000,
        assets: 4250000000,
      },
      {
        date: "2023-03",
        revenue: 1300000000,
        profit: 210000000,
        assets: 4300000000,
      },
      {
        date: "2023-04",
        revenue: 1350000000,
        profit: 225000000,
        assets: 4350000000,
      },
      {
        date: "2023-05",
        revenue: 1400000000,
        profit: 240000000,
        assets: 4400000000,
      },
      {
        date: "2023-06",
        revenue: 1450000000,
        profit: 255000000,
        assets: 4450000000,
      },
      {
        date: "2023-07",
        revenue: 1500000000,
        profit: 270000000,
        assets: 4500000000,
      },
      {
        date: "2023-08",
        revenue: 1550000000,
        profit: 285000000,
        assets: 4550000000,
      },
      {
        date: "2023-09",
        revenue: 1600000000,
        profit: 300000000,
        assets: 4600000000,
      },
      {
        date: "2023-10",
        revenue: 1650000000,
        profit: 315000000,
        assets: 4650000000,
      },
      {
        date: "2023-11",
        revenue: 1700000000,
        profit: 330000000,
        assets: 4700000000,
      },
      {
        date: "2023-12",
        revenue: 1750000000,
        profit: 345000000,
        assets: 4750000000,
      },
    ],
    metrics: {
      revenue: 1750000000,
      profit: 345000000,
      growth: 12.5,
      peRatio: 24.6,
      dividendYield: 2.1,
    },
    chartData: {
      labels: [
        "دی",
        "بهمن",
        "اسفند",
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
      ],
      revenue: [
        1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750,
      ],
      profit: [180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345],
      assets: [
        4200, 4250, 4300, 4350, 4400, 4450, 4500, 4550, 4600, 4650, 4700, 4750,
      ],
    },
  },
  financegroup: {
    companyName: "گروه مالی جهانی",
    timeSeries: [
      {
        date: "2023-01",
        revenue: 2800000000,
        profit: 420000000,
        assets: 11500000000,
      },
      {
        date: "2023-02",
        revenue: 2900000000,
        profit: 435000000,
        assets: 11600000000,
      },
      {
        date: "2023-03",
        revenue: 3000000000,
        profit: 450000000,
        assets: 11700000000,
      },
      {
        date: "2023-04",
        revenue: 3100000000,
        profit: 465000000,
        assets: 11800000000,
      },
      {
        date: "2023-05",
        revenue: 3200000000,
        profit: 480000000,
        assets: 11900000000,
      },
      {
        date: "2023-06",
        revenue: 3300000000,
        profit: 495000000,
        assets: 12000000000,
      },
      {
        date: "2023-07",
        revenue: 3400000000,
        profit: 510000000,
        assets: 12100000000,
      },
      {
        date: "2023-08",
        revenue: 3500000000,
        profit: 525000000,
        assets: 12200000000,
      },
      {
        date: "2023-09",
        revenue: 3600000000,
        profit: 540000000,
        assets: 12300000000,
      },
      {
        date: "2023-10",
        revenue: 3700000000,
        profit: 555000000,
        assets: 12400000000,
      },
      {
        date: "2023-11",
        revenue: 3800000000,
        profit: 570000000,
        assets: 12500000000,
      },
      {
        date: "2023-12",
        revenue: 3900000000,
        profit: 585000000,
        assets: 12600000000,
      },
    ],
    metrics: {
      revenue: 3900000000,
      profit: 585000000,
      growth: 18.3,
      peRatio: 25.6,
      dividendYield: 3.2,
    },
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      revenue: [
        2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900,
      ],
      profit: [420, 435, 450, 465, 480, 495, 510, 525, 540, 555, 570, 585],
      assets: [
        11500, 11600, 11700, 11800, 11900, 12000, 12100, 12200, 12300, 12400,
        12500, 12600,
      ],
    },
  },
  energyplus: {
    companyName: "هولدینگ انرژی پلاس",
    timeSeries: [
      {
        date: "2023-01",
        revenue: 1500000000,
        profit: 225000000,
        assets: 7500000000,
      },
      {
        date: "2023-02",
        revenue: 1600000000,
        profit: 240000000,
        assets: 7600000000,
      },
      {
        date: "2023-03",
        revenue: 1700000000,
        profit: 255000000,
        assets: 7700000000,
      },
      {
        date: "2023-04",
        revenue: 1800000000,
        profit: 270000000,
        assets: 7800000000,
      },
      {
        date: "2023-05",
        revenue: 1900000000,
        profit: 285000000,
        assets: 7900000000,
      },
      {
        date: "2023-06",
        revenue: 2000000000,
        profit: 300000000,
        assets: 8000000000,
      },
      {
        date: "2023-07",
        revenue: 2100000000,
        profit: 315000000,
        assets: 8100000000,
      },
      {
        date: "2023-08",
        revenue: 2200000000,
        profit: 330000000,
        assets: 8200000000,
      },
      {
        date: "2023-09",
        revenue: 2300000000,
        profit: 345000000,
        assets: 8300000000,
      },
      {
        date: "2023-10",
        revenue: 2400000000,
        profit: 360000000,
        assets: 8400000000,
      },
      {
        date: "2023-11",
        revenue: 2500000000,
        profit: 375000000,
        assets: 8500000000,
      },
      {
        date: "2023-12",
        revenue: 2600000000,
        profit: 390000000,
        assets: 8600000000,
      },
    ],
    metrics: {
      revenue: 2600000000,
      profit: 390000000,
      growth: 25.7,
      peRatio: 30.8,
      dividendYield: 1.8,
    },
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      revenue: [
        1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600,
      ],
      profit: [225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390],
      assets: [
        7500, 7600, 7700, 7800, 7900, 8000, 8100, 8200, 8300, 8400, 8500, 8600,
      ],
    },
  },
};
