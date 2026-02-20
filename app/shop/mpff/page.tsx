import { getProductsByCollection, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'

export const metadata = { title: 'MPFF — VeinCare' }

export default async function MPFFPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getProductsByCollection('mpff')
  } catch {
    // Shopify not configured
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/shop" className="text-sm text-brand-600 hover:underline">← All Products</Link>
        <h1 className="text-3xl font-extrabold text-gray-800 mt-2 mb-1">MPFF</h1>
        <p className="text-gray-600 max-w-2xl">
          Micronized Purified Flavonoid Fraction (Diosmin 90% + Hesperidin 10%) is recommended in
          international guidelines for chronic venous disease. It reduces venous hypertension,
          inflammation, and accelerates venous leg ulcer healing.
        </p>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-8">
        <p className="text-brand-800 text-sm font-medium">
          💡 <strong>Guideline-backed:</strong> MPFF carries a Grade 1B recommendation in the 2022
          European Venous Guidelines for symptomatic chronic venous disease.{' '}
          <Link href="/education/mpff" className="underline">Learn about MPFF →</Link>
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}
