import Link from 'next/link'

export interface Article {
  slug: string
  title: string
  summary: string
  category: string
  readTime: string
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/education/${article.slug}`} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
      <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        {article.category}
      </span>
      <h3 className="font-bold text-gray-800 text-lg group-hover:text-brand-700 transition-colors mb-2">{article.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{article.summary}</p>
      <p className="text-xs text-gray-400 mt-3">{article.readTime} read</p>
    </Link>
  )
}
