import { cn } from "./utils";

/**
 * Helper function برای کلاس‌های text با theme
 */
export function textClass(variant: "text" | "muted" = "text"): string {
  return cn(
    variant === "text"
      ? "text-dark-text dark:text-dark-text text-light-text dark:text-dark-text"
      : "text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted"
  );
}

/**
 * Helper function برای کلاس‌های background با theme
 */
export function bgClass(variant: "card" | "bg" | "surface" = "card"): string {
  const classes = {
    card: "bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card",
    bg: "bg-dark-bg dark:bg-dark-bg bg-light-bg dark:bg-dark-bg",
    surface: "bg-dark-surface dark:bg-dark-surface bg-light-surface dark:bg-dark-surface",
  };
  return classes[variant];
}

/**
 * Helper function برای کلاس‌های border با theme
 */
export function borderClass(): string {
  return "border-dark-border dark:border-dark-border border-light-border dark:border-dark-border";
}

/**
 * Helper function برای کلاس‌های card کامل
 */
export function cardClass(): string {
  return cn(
    bgClass("card"),
    "rounded-xl",
    borderClass(),
    "p-6 shadow-lg"
  );
}

/**
 * Helper function برای کلاس‌های number display (mono font)
 */
export function numberClass(variant: "default" | "primary" = "default"): string {
  const base = "text-left font-mono tabular-nums";
  if (variant === "primary") {
    return cn(base, "text-sm font-semibold text-primary-500");
  }
  return cn(base, "text-sm font-medium", textClass("text"));
}

