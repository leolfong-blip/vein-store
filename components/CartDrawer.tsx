'use client'

import { useCart } from '@/lib/cart-context'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateItem, removeItem } = useCart()

  const lines = cart?.lines.edges ?? []
  const total = cart?.cost.totalAmount

  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} className="p-1 text-gray-500 hover:text-gray-800">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {lines.length === 0 ? (
            <p className="text-gray-500 text-center mt-16">Your cart is empty.</p>
          ) : (
            lines.map(({ node: line }) => (
              <div key={line.id} className="flex gap-4">
                {line.merchandise.image ? (
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={line.merchandise.image.url}
                      alt={line.merchandise.image.altText ?? line.merchandise.product.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-lg bg-gray-100 flex-shrink-0" />
                )}

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 text-sm truncate">{line.merchandise.product.title}</p>
                  {line.merchandise.title !== 'Default Title' && (
                    <p className="text-xs text-gray-500">{line.merchandise.title}</p>
                  )}
                  <p className="text-brand-700 font-semibold text-sm mt-1">
                    {line.merchandise.price.currencyCode} {parseFloat(line.merchandise.price.amount).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateItem(line.id, Math.max(1, line.quantity - 1))}
                      className="w-7 h-7 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold text-sm"
                    >
                      −
                    </button>
                    <span className="text-sm w-5 text-center">{line.quantity}</span>
                    <button
                      onClick={() => updateItem(line.id, line.quantity + 1)}
                      className="w-7 h-7 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 font-bold text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(line.id)}
                      className="ml-2 text-red-400 hover:text-red-600"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="px-6 py-5 border-t bg-gray-50">
            <div className="flex justify-between text-sm font-semibold text-gray-800 mb-4">
              <span>Total</span>
              <span>
                {total?.currencyCode} {parseFloat(total?.amount ?? '0').toFixed(2)}
              </span>
            </div>
            <a
              href={cart?.checkoutUrl}
              className="block w-full bg-brand-700 hover:bg-brand-800 text-white text-center font-bold py-3 rounded transition-colors"
            >
              Checkout
            </a>
          </div>
        )}
      </div>
    </>
  )
}
