'use client'

import Link from 'next/link'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop/compression-stockings', label: 'Compression Stockings' },
  { href: '/shop/horse-chestnut', label: 'Horse Chestnut' },
  { href: '/shop/mpff', label: 'MPFF' },
  { href: '/education', label: 'Education' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const { itemCount, setCartOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-brand-700 font-bold text-xl tracking-tight">VeinCare</span>
            <span className="text-gray-500 text-sm hidden sm:block">by professionals</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-brand-700 font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-brand-700 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-gray-700 hover:text-brand-700 font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
