import { notFound } from 'next/navigation'
import { getArticle, articles } from '@/lib/articles'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — VeinCare Education`,
    description: article.summary,
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML for headings, bold, tables, lists
  const lines = content.split('\n')
  const html: string[] = []
  let inTable = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Tables
    if (line.startsWith('|')) {
      if (!inTable) {
        html.push('<div class="overflow-x-auto my-4"><table class="min-w-full text-sm border-collapse">')
        inTable = true
      }
      if (line.includes('---')) continue
      const cells = line.split('|').filter((c) => c.trim())
      const isHeader = lines[i + 1]?.includes('---')
      const tag = isHeader ? 'th' : 'td'
      html.push(
        `<tr>${cells.map((c) => `<${tag} class="border border-gray-200 px-3 py-2 ${isHeader ? 'bg-gray-50 font-semibold' : ''}">${c.trim()}</${tag}>`).join('')}</tr>`
      )
      continue
    } else if (inTable) {
      html.push('</table></div>')
      inTable = false
    }

    if (line.startsWith('## ')) {
      html.push(`<h2 class="text-xl font-bold text-gray-800 mt-8 mb-3">${line.slice(3)}</h2>`)
    } else if (line.startsWith('### ')) {
      html.push(`<h3 class="text-lg font-semibold text-gray-800 mt-6 mb-2">${line.slice(4)}</h3>`)
    } else if (line.startsWith('- ')) {
      html.push(`<li class="ml-4 list-disc text-gray-700">${parseBold(line.slice(2))}</li>`)
    } else if (line.trim() === '') {
      html.push('<br/>')
    } else {
      html.push(`<p class="text-gray-700 leading-relaxed">${parseBold(line)}</p>`)
    }
  }

  if (inTable) html.push('</table></div>')
  return html.join('\n')
}

function parseBold(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/education" className="text-sm text-brand-600 hover:underline mb-6 inline-block">
        ← Education Hub
      </Link>

      <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {article.category}
      </span>

      <h1 className="text-3xl font-extrabold text-gray-800 mb-3">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{article.readTime} read</p>

      <div
        className="space-y-1"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
      />

      {/* Related products CTA */}
      <div className="mt-12 bg-brand-50 border border-brand-200 rounded-2xl p-6">
        <h3 className="font-bold text-brand-800 mb-2">Shop related products</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/shop/compression-stockings" className="text-sm bg-white border border-brand-300 text-brand-700 font-medium px-4 py-2 rounded-full hover:bg-brand-100 transition-colors">
            Compression Stockings
          </Link>
          <Link href="/shop/horse-chestnut" className="text-sm bg-white border border-brand-300 text-brand-700 font-medium px-4 py-2 rounded-full hover:bg-brand-100 transition-colors">
            Horse Chestnut
          </Link>
          <Link href="/shop/mpff" className="text-sm bg-white border border-brand-300 text-brand-700 font-medium px-4 py-2 rounded-full hover:bg-brand-100 transition-colors">
            MPFF
          </Link>
        </div>
      </div>
    </div>
  )
}
