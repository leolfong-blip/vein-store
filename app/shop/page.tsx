import { getAllProducts, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'

export const metadata = { title: 'All Products — VeinCare' }

export default async function ShopPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getAllProducts()
  } catch {
    // Shopify not configured
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">All Products</h1>
      <p className="text-gray-600 mb-8">Clinically-backed solutions for varicose veins and venous insufficiency.</p>
      <ProductGrid products={products} />
    </div>
  )
}
