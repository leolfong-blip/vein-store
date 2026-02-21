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
    <Link
      href={`/education/${article.slug}`}
      className="group block bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 rounded"
    >
      <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
        {article.category}
      </span>
      <h3 className="font-bold text-gray-800 text-lg group-hover:text-brand-700 transition-colors mb-2 leading-snug">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{article.summary}</p>
      <p className="text-xs text-gray-400 mt-4 font-medium">{article.readTime} read</p>
    </Link>
  )
}
