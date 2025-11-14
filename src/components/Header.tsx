"use client";

import { TrendingUp, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { textClass, bgClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full border-b border-[#525252]", bgClass("card"))}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary-500 dark:bg-primary-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1
                className={cn(
                  "text-xl sm:text-2xl font-bold",
                  textClass("text")
                )}
              >
                تحلیل‌گر مالی
              </h1>
              <p className={cn("text-xs sm:text-sm", textClass("muted"))}>
                پلتفرم تحلیل حرفه‌ای
              </p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-lg transition-colors border-[#525252] border hover:bg-dark-surface dark:hover:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-surface border",
              bgClass("card")
            )}
            aria-label="تغییر تم"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-primary-400" />
            ) : (
              <Moon className="w-5 h-5 text-primary-600" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
