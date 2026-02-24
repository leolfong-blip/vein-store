import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'

const categories = [
  {
    href: '/shop/compression-stockings',
    title: 'Compression Stockings',
    description: 'Graduated compression is the first-line treatment for chronic venous insufficiency — physician-fitted for maximum benefit.',
  },
  {
    href: '/shop/horse-chestnut',
    title: 'Horse Chestnut',
    description: 'Standardised to 50 mg Aescin. A Cochrane-reviewed natural venotonic that reduces leg swelling and heaviness.',
  },
  {
    href: '/shop/mpff',
    title: 'MPFF',
    description: 'Micronized Purified Flavonoid Fraction carries a Grade 1B guideline recommendation for symptomatic chronic venous disease.',
  },
]

const whyUs = [
  {
    title: 'Physician-Formulated',
    body: 'Every product is selected by board-certified vascular specialists based on clinical evidence and international guidelines — not marketing.',
  },
  {
    title: 'Evidence-Based',
    body: 'We only carry treatments supported by peer-reviewed clinical trials and Cochrane-level evidence. No unproven supplements.',
  },
  {
    title: 'Central Valley Specialists',
    body: 'Rooted in California\'s Central Valley, we understand the patient populations of Fresno, Clovis, Visalia, and the surrounding communities.',
  },
  {
    title: 'Free Education Hub',
    body: 'Our education resources are written by medical professionals to help patients and clinicians understand venous disease and its management.',
  },
]

export default async function HomePage() {
  let featuredProducts: ShopifyProduct[] = []
  try {
    const all = await getAllProducts()
    featuredProducts = all.slice(0, 3)
  } catch {
    // Shopify not configured yet
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-800 text-white overflow-hidden min-h-[520px] flex items-center">
        <Image
          src="https://picsum.photos/seed/vein-healthcare-central-valley/1600/620"
          alt="Vein health care professional"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative z-10 py-28 px-4 w-full">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Central Valley Vein Health
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
            Relief for Varicose Veins,<br />Backed by Science
          </h1>
          <div className="w-16 h-1 bg-gold-500 mb-6" />
          <p className="text-brand-200 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
            Physician-formulated compression stockings, horse chestnut, and MPFF — paired with expert
            education on venous health. Trusted by patients across California&apos;s Central Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/shop" className="btn-primary text-center">
              Shop Products
            </Link>
            <Link href="/education" className="btn-outline text-center">
              Learn More
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-700 py-5 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Free Shipping', sub: 'On orders over $75' },
            { label: 'Clinically Validated', sub: 'Evidence-based products' },
            { label: 'Secure Checkout', sub: 'Powered by Shopify' },
            { label: 'Physician-Formulated', sub: 'Specialist-curated selection' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-bold text-white text-sm">{item.label}</p>
              <p className="text-xs text-brand-300 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Products</p>
            <h2 className="text-3xl font-extrabold text-brand-800">Shop by Category</h2>
            <div className="w-14 h-1 bg-gold-500 mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white border border-gray-200 rounded p-8 shadow-sm hover:shadow-md transition-shadow hover:border-brand-300"
              >
                <div className="w-8 h-1 bg-gold-500 mb-5 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-bold text-gray-800 group-hover:text-brand-700 transition-colors mb-3 text-lg">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                <p className="text-brand-600 text-sm font-semibold mt-5 group-hover:underline">
                  Browse products &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      {featuredProducts.length > 0 && (
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Featured</p>
              <h2 className="text-3xl font-extrabold text-brand-800">Featured Products</h2>
              <div className="w-14 h-1 bg-gold-500 mt-4" />
            </div>
            <ProductGrid products={featuredProducts} />
            <div className="mt-10">
              <Link href="/shop" className="btn-primary">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="bg-brand-800 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Why VeinCare</p>
            <h2 className="text-3xl font-extrabold">Why Choose Us</h2>
            <div className="w-14 h-1 bg-gold-500 mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="border-l-2 border-gold-500 pl-5">
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-brand-200 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">Free Resource</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-4">Understand Your Venous Health</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our Education Hub covers everything from what causes varicose veins to how compression therapy works —
            written by medical professionals for patients and clinicians alike.
          </p>
          <Link href="/education" className="btn-primary">
            Explore Education Hub
          </Link>
        </div>
      </section>
    </div>
  )
}
