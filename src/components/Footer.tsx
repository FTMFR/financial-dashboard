"use client";

import { motion } from "framer-motion";
import { textClass, borderClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full border-t mt-auto",
        borderClass(),
        "bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={cn("text-sm", textClass("muted"))}>
            تمامی حقوق برای فاطمه فرج زاده محفوظ است
          </p>
          <p className={cn("text-sm", textClass("muted"))}>
            توسعه یافته توسط {" "}
            <span className={cn("font-semibold", textClass("text"))}>
              فاطمه فرج زاده
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

