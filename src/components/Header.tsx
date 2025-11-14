'use client'

import { TrendingUp, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border-b border-dark-border dark:border-dark-border border-light-border dark:bg-dark-surface bg-light-surface"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary-500 dark:bg-primary-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                Financial Analytics
              </h1>
              <p className="text-xs sm:text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                Professional Analysis Platform
              </p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card border border-dark-border dark:border-dark-border border-light-border dark:border-dark-border hover:bg-dark-surface dark:hover:bg-dark-surface hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-primary-400" />
            ) : (
              <Moon className="w-5 h-5 text-primary-600" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
