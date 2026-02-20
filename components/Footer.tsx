import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">VeinCare</h3>
          <p className="text-sm leading-relaxed">
            Clinically-backed products and education for the management of varicose veins and chronic venous insufficiency.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop/compression-stockings" className="hover:text-white transition-colors">Compression Stockings</Link></li>
            <li><Link href="/shop/horse-chestnut" className="hover:text-white transition-colors">Horse Chestnut</Link></li>
            <li><Link href="/shop/mpff" className="hover:text-white transition-colors">MPFF</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Learn</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/education" className="hover:text-white transition-colors">Education Hub</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} VeinCare. For informational purposes only. Consult a healthcare professional.
      </div>
    </footer>
  )
}
