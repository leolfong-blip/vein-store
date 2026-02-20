import { ShopifyProduct } from '@/lib/shopify'
import ProductCard from './ProductCard'

interface Props {
  products: ShopifyProduct[]
}

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return <p className="text-gray-500 text-center py-16">No products found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
