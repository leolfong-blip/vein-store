import { getProductsByCollection, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'

export const metadata = { title: 'Horse Chestnut — VeinCare' }

export default async function HorseChestnutPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getProductsByCollection('horse-chestnut')
  } catch {
    // Shopify not configured
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/shop" className="text-sm text-brand-600 hover:underline">← All Products</Link>
        <h1 className="text-3xl font-extrabold text-gray-800 mt-2 mb-1">Horse Chestnut</h1>
        <p className="text-gray-600 max-w-2xl">
          Horse chestnut seed extract (HCSE) standardised to 50 mg Aescin has strong clinical evidence
          for reducing leg pain, swelling, and fatigue associated with chronic venous insufficiency.
        </p>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-8">
        <p className="text-brand-800 text-sm font-medium">
          💡 <strong>Evidence:</strong> A Cochrane review found HCSE reduces leg volume as effectively as compression stockings for mild-to-moderate CVI.{' '}
          <Link href="/education/horse-chestnut" className="underline">Read the evidence →</Link>
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}
