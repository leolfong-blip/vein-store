import { getProductsByCollection, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'

export const metadata = { title: 'Compression Stockings — VeinCare' }

export default async function CompressionPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getProductsByCollection('compression-stockings')
  } catch {
    // Shopify not configured
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/shop" className="text-sm text-brand-600 hover:underline">← All Products</Link>
        <h1 className="text-3xl font-extrabold text-gray-800 mt-2 mb-1">Compression Stockings</h1>
        <p className="text-gray-600 max-w-2xl">
          Graduated compression stockings are the first-line treatment for chronic venous insufficiency.
          They reduce venous hypertension, improve circulation, and relieve symptoms like aching, swelling, and fatigue.
        </p>
      </div>

      {/* Educational callout */}
      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-8">
        <p className="text-brand-800 text-sm font-medium">
          💡 <strong>How to choose:</strong> Class I (15–21 mmHg) for mild symptoms, Class II (23–32 mmHg) for moderate varicosities.{' '}
          <Link href="/education/compression-therapy" className="underline">Learn more →</Link>
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}
