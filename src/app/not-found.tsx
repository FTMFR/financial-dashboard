import Link from 'next/link'
import Layout from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl font-bold text-dark-text dark:text-dark-text text-light-text dark:text-dark-text mb-4">
          404
        </h1>
        <p className="text-xl text-dark-muted dark:text-dark-muted text-light-muted dark:text-dark-muted mb-8">
          Company not found
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </Layout>
  )
}
