import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-extrabold text-xl mb-3 tracking-tight">CVVW</h3>
          <div className="w-10 h-0.5 bg-gold-500 mb-4" />
          <p className="text-sm leading-relaxed max-w-sm">
            Physician-formulated products and evidence-based education for the management of varicose veins,
            chronic venous insufficiency, and related vascular conditions. Based in California&apos;s Central Valley.
          </p>
          <p className="text-xs text-brand-500 mt-4">
            Serving Fresno, Clovis, Visalia, Hanford, Selma, and Stockton.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/shop/compression-stockings" className="hover:text-white transition-colors">Compression Stockings</Link></li>
            <li><Link href="/shop/horse-chestnut" className="hover:text-white transition-colors">Horse Chestnut</Link></li>
            <li><Link href="/shop/mpff" className="hover:text-white transition-colors">MPFF</Link></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Learn</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/education" className="hover:text-white transition-colors">Education Hub</Link></li>
            <li><Link href="/education/varicose-veins-overview" className="hover:text-white transition-colors">Understanding Varicose Veins</Link></li>
            <li><Link href="/education/compression-therapy" className="hover:text-white transition-colors">Compression Therapy</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 text-center py-4 text-xs text-brand-600">
        &copy; {new Date().getFullYear()} CVVW. For informational purposes only. Consult a qualified healthcare professional before starting any treatment.
      </div>
    </footer>
  )
}
