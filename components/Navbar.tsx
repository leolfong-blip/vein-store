'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'

export default function Navbar() {
  const { itemCount, setCartOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 shadow-lg">
      {/* Top info bar */}
      <div className="bg-brand-900 text-brand-200 text-xs text-center py-1.5 px-4 tracking-wide">
        Serving the Central Valley &amp; Salinas — Fresno · Clovis · Visalia · Hanford · Selma · Stockton · Salinas
      </div>

      {/* Main nav */}
      <div className="bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <Link href="/" className="flex items-center bg-white rounded px-4 py-2">
              <Image
                src="/logo.png"
                alt="Central Valley Vein and Wound Center"
                width={420}
                height={112}
                className="h-24 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              <Link href="/" className="text-sm text-brand-100 hover:text-white px-5 py-5 font-medium transition-colors border-b-2 border-transparent hover:border-gold-400">
                Home
              </Link>
              {/* Shop dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-brand-100 hover:text-white px-5 py-5 font-medium transition-colors border-b-2 border-transparent hover:border-gold-400">
                  Shop <ChevronDownIcon className="w-3.5 h-3.5 mt-0.5" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white border-t-2 border-brand-700 shadow-xl min-w-56 z-50">
                  <Link href="/shop/compression-stockings" className="block px-5 py-3 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 border-b border-gray-100 font-medium">
                    Compression Stockings
                  </Link>
                  <Link href="/shop/horse-chestnut" className="block px-5 py-3 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 border-b border-gray-100 font-medium">
                    Horse Chestnut
                  </Link>
                  <Link href="/shop/mpff" className="block px-5 py-3 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 font-medium">
                    MPFF
                  </Link>
                </div>
              </div>
              <Link href="/education" className="text-sm text-brand-100 hover:text-white px-5 py-5 font-medium transition-colors border-b-2 border-transparent hover:border-gold-400">
                Education
              </Link>
              <Link href="/about" className="text-sm text-brand-100 hover:text-white px-5 py-5 font-medium transition-colors border-b-2 border-transparent hover:border-gold-400">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-gold-400 hover:text-gold-300 px-5 py-5 font-bold transition-colors border-b-2 border-transparent hover:border-gold-400">
                Contact
              </Link>
            </nav>

            {/* Right: cart + mobile toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-brand-200 hover:text-white transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden p-2 text-brand-200 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-800 border-t border-brand-700 px-4 pb-4">
          <p className="text-xs text-brand-400 uppercase tracking-wider font-semibold pt-3 pb-1">Shop</p>
          <Link href="/shop/compression-stockings" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-brand-100 hover:text-white font-medium">
            Compression Stockings
          </Link>
          <Link href="/shop/horse-chestnut" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-brand-100 hover:text-white font-medium">
            Horse Chestnut
          </Link>
          <Link href="/shop/mpff" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-brand-100 hover:text-white font-medium">
            MPFF
          </Link>
          <div className="border-t border-brand-700 mt-3 pt-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-brand-100 hover:text-white font-medium">
              Home
            </Link>
            <Link href="/education" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-brand-100 hover:text-white font-medium">
              Education
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-brand-100 hover:text-white font-medium">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gold-400 hover:text-gold-300 font-bold">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
