import { articles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata = { title: 'Education Hub — VeinCare' }

const categories = ['All', 'Basics', 'Compression', 'Supplements', 'Venoactive Drugs', 'Clinical Reference']

export default function EducationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Education Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Evidence-based guides on varicose veins, chronic venous disease, compression therapy, and venoactive drugs — written for patients and professionals.
        </p>
      </div>

      {/* Category filter (static labels, all shown below) */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-brand-100 text-brand-700"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
