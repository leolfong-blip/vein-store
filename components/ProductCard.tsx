'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShopifyProduct } from '@/lib/shopify'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

interface Props {
  product: ShopifyProduct
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart()
  const [loading, setLoading] = useState(false)

  const image = product.images.edges[0]?.node
  const firstVariant = product.variants.edges[0]?.node
  const price = product.priceRange.minVariantPrice

  async function handleAddToCart() {
    if (!firstVariant) return
    setLoading(true)
    try {
      await addItem(firstVariant.id)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col rounded">
      <Link href={`/shop/${product.handle}`} className="relative block aspect-square bg-gray-50 overflow-hidden">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm">No image</div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href={`/shop/${product.handle}`}>
          <h3 className="font-semibold text-gray-800 hover:text-brand-700 transition-colors line-clamp-2 text-base leading-snug">
            {product.title}
          </h3>
        </Link>
        <p className="text-brand-700 font-bold mt-2 text-lg">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className="mt-auto w-full bg-brand-700 hover:bg-brand-800 disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded transition-colors mt-4"
        >
          {loading ? 'Adding…' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
