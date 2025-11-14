'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, TrendingUp, AlertCircle } from 'lucide-react'
import { CompanyFile } from '@/data/filesData'
import { formatDate, formatCurrency, formatPercentage } from '@/lib/utils'
import Link from 'next/link'

interface FileCardProps {
  file: CompanyFile
  index: number
}

const riskColors = {
  Low: 'text-green-500 bg-green-500/10 border-green-500/20',
  Medium: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  High: 'text-red-500 bg-red-500/10 border-red-500/20',
}

export default function FileCard({ file, index }: FileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/dashboard/${file.companyName}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden rounded-xl bg-dark-card dark:bg-dark-card bg-light-card dark:bg-dark-card border border-dark-border dark:border-dark-border border-light-border dark:border-dark-border p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 cursor-pointer"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 transition-all duration-300" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-2xl">
                  {file.logo}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text mb-1">
                    {file.displayName}
                  </h3>
                  <p className="text-sm text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted line-clamp-2">
                    {file.description}
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="w-5 h-5 text-primary-500" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  <Calendar className="w-3 h-3" />
                  <span>Last Analysis</span>
                </div>
                <p className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {formatDate(file.lastAnalysisDate)}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  <TrendingUp className="w-3 h-3" />
                  <span>Annual Return</span>
                </div>
                <p className="text-sm font-semibold text-primary-500">
                  {formatPercentage(file.annualReturn)}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  <AlertCircle className="w-3 h-3" />
                  <span>Risk Level</span>
                </div>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${riskColors[file.riskLevel]}`}
                >
                  {file.riskLevel}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted">
                  <span>Market Cap</span>
                </div>
                <p className="text-sm font-medium text-dark-text dark:text-dark-text text-light-text dark:text-dark-text">
                  {formatCurrency(file.marketCap)}
                </p>
              </div>
            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 group-hover:from-primary-500/50 group-hover:via-primary-500 group-hover:to-primary-500/50 transition-all duration-300" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
