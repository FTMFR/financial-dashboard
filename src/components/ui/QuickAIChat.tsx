"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { cardClass, textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

export default function QuickAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
        aria-label="چت هوشمند"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-24 left-6 w-80 h-96 rounded-xl shadow-2xl z-50 flex flex-col",
              cardClass(),
              "border border-light-border dark:border-dark-border"
            )}
          >
            <div
              className={cn(
                "p-4 border-b",
                "border-light-border dark:border-dark-border"
              )}
            >
              <h3 className={cn("text-sm font-semibold", textClass("text"))}>
                چت هوشمند (Pro)
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="flex justify-start">
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    "bg-primary-500/10 dark:bg-primary-500/20"
                  )}
                >
                  <p className={cn("text-sm", textClass("text"))}>
                    سلام! چطور می‌تونم کمکتون کنم؟
                  </p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "p-4 border-t",
                "border-light-border dark:border-dark-border"
              )}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="پیام خود را بنویسید..."
                  className={cn(
                    "flex-1 px-3 py-2 rounded-lg text-sm",
                    "bg-dark-surface dark:bg-dark-surface bg-light-surface dark:bg-dark-surface",
                    "border border-light-border dark:border-dark-border",
                    textClass("text"),
                    "focus:outline-none focus:ring-2 focus:ring-primary-500"
                  )}
                />
                <button
                  onClick={() => {
                    // Handle send message
                    setMessage("");
                  }}
                  className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
