'use client'

import Header from './Header'
import { bgClass } from '@/lib/classNames'
import { cn } from '@/lib/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("min-h-screen", bgClass("bg"))}>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
