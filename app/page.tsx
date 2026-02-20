import Link from 'next/link'
import { getAllProducts, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'

const categories = [
  {
    href: '/shop/compression-stockings',
    title: 'Compression Stockings',
    description: 'Graduated compression to improve blood flow and reduce swelling.',
    icon: '🧦',
  },
  {
    href: '/shop/horse-chestnut',
    title: 'Horse Chestnut',
    description: 'Natural venotonic supplement — Aescin reduces capillary permeability.',
    icon: '🌰',
  },
  {
    href: '/shop/mpff',
    title: 'MPFF',
    description: 'Micronized Purified Flavonoid Fraction for chronic venous disease.',
    icon: '💊',
  },
]

export default async function HomePage() {
  let featuredProducts: ShopifyProduct[] = []
  try {
    const all = await getAllProducts()
    featuredProducts = all.slice(0, 3)
  } catch {
    // Shopify not configured yet — show empty state
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Relief for Varicose Veins,<br />Backed by Science
          </h1>
          <p className="text-brand-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Compression stockings, horse chestnut, and MPFF — combined with expert education on venous health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-brand-700 font-bold px-8 py-3 rounded-full hover:bg-brand-50 transition-colors"
            >
              Shop Products
            </Link>
            <Link
              href="/education"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-gray-800 group-hover:text-brand-700 transition-colors mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-8">
            <Link href="/shop" className="inline-block bg-brand-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-700 transition-colors">
              View All Products
            </Link>
          </div>
        </section>
      )}

      {/* Trust bar */}
      <section className="bg-brand-50 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Free shipping', sub: 'On orders over $75' },
            { label: 'Clinically validated', sub: 'Evidence-based products' },
            { label: 'Secure checkout', sub: 'Powered by Shopify' },
            { label: 'Expert guidance', sub: 'Free education hub' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-bold text-brand-700">{item.label}</p>
              <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
