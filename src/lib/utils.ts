import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(
  value: number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    useGrouping?: boolean;
  }
): string {
  return new Intl.NumberFormat("fa-IR", {
    useGrouping: options?.useGrouping ?? true,
    minimumFractionDigits: options?.minimumFractionDigits ?? 0,
    maximumFractionDigits: options?.maximumFractionDigits ?? 0,
  }).format(value);
}

export function formatCurrency(value: number): string {
  const formatted = formatNumber(value, {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return `${formatted} تومان`;
}

export function formatPercentage(value: number): string {
  const formatted = formatNumber(value, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const sign = value >= 0 ? "+" : "";
  return `٪ ${formatted}${sign}`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "persian",
  }).format(date);
}

export function formatTableNumber(
  value: number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    useGrouping?: boolean;
  }
): string {
  return formatNumber(value, {
    useGrouping: options?.useGrouping ?? true,
    minimumFractionDigits: options?.minimumFractionDigits ?? 0,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  });
}
