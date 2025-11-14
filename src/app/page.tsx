import Layout from '@/components/Layout'
import FileCard from '@/components/FileCard'
import { companies } from '@/data/filesData'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <FileCard key={company.id} file={company} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
