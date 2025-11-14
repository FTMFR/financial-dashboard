/**
 * رنگ‌ها و برچسب‌های سطح ریسک
 */
export const riskColors = {
  Low: "text-green-500 bg-green-500/10 border-green-500/20",
  Medium: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
  High: "text-red-500 bg-red-500/10 border-red-500/20",
} as const;

export const riskLabels = {
  Low: "کم",
  Medium: "متوسط",
  High: "زیاد",
} as const;

/**
 * رنگ‌های inline برای badge ریسک (بدون border)
 */
export const riskBadgeColors = {
  Low: "text-green-500 bg-green-500/10",
  Medium: "text-yellow-500 bg-yellow-500/10",
  High: "text-red-500 bg-red-500/10",
} as const;

export type RiskLevel = keyof typeof riskLabels;

