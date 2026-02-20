'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { ShopifyProduct, getProductByHandle } from '@/lib/shopify'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

export default function ProductPage() {
  const params = useParams()
  const handle = params.handle as string
  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedVariantId, setSelectedVariantId] = useState<string>('')
  const [adding, setAdding] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    getProductByHandle(handle)
      .then((p) => {
        setProduct(p)
        if (p?.variants.edges[0]) {
          setSelectedVariantId(p.variants.edges[0].node.id)
        }
      })
      .finally(() => setLoading(false))
  }, [handle])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center text-gray-400">Loading…</div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <p className="text-gray-500 mb-4">Product not found.</p>
        <Link href="/shop" className="text-brand-600 underline">Back to shop</Link>
      </div>
    )
  }

  const images = product.images.edges.map((e) => e.node)
  const variants = product.variants.edges.map((e) => e.node)
  const selectedVariant = variants.find((v) => v.id === selectedVariantId) ?? variants[0]

  async function handleAdd() {
    if (!selectedVariantId) return
    setAdding(true)
    try {
      await addItem(selectedVariantId)
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/shop" className="text-sm text-brand-600 hover:underline mb-6 inline-block">← Back to shop</Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
            {images[activeImage] ? (
              <Image
                src={images[activeImage].url}
                alt={images[activeImage].altText ?? product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">No image</div>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-brand-500' : 'border-transparent'}`}
                >
                  <Image src={img.url} alt={img.altText ?? ''} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-3">{product.title}</h1>
          <p className="text-2xl text-brand-700 font-bold mb-6">
            {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount ?? '0').toFixed(2)}
          </p>

          {variants.length > 1 && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select option</label>
              <div className="flex flex-wrap gap-2">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                      v.id === selectedVariantId
                        ? 'bg-brand-600 text-white border-brand-600'
                        : 'border-gray-300 text-gray-700 hover:border-brand-400'
                    }`}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleAdd}
            disabled={adding}
            className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-colors mb-6 text-lg"
          >
            {adding ? 'Adding to cart…' : 'Add to Cart'}
          </button>

          <div className="prose prose-sm text-gray-600 max-w-none">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
