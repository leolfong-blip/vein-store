import { getProductsByCollection, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Compression Stockings — CVVW' }

const benefits = [
  { title: 'Reduce Swelling', body: 'Graduated compression shifts fluid out of the interstitial space and back into the venous and lymphatic circulation, reducing ankle and leg swelling throughout the day.' },
  { title: 'Prevent Varicose Veins', body: 'By reducing venous hypertension and supporting vein wall integrity, compression stockings slow the progression of varicose veins and help prevent new ones from forming.' },
  { title: 'Prevent Deep Vein Thrombosis (DVT)', body: 'Compression maintains blood flow velocity in the deep veins during prolonged travel or bed rest, significantly reducing DVT risk — especially post-surgery or during long flights.' },
  { title: 'Manage Chronic Venous Insufficiency', body: 'CVI is characterised by chronically elevated venous pressure. Consistent compression use is the cornerstone of CVI management, reducing symptoms and preventing skin complications such as lipodermatosclerosis and ulceration.' },
]

const compressionLevels = [
  {
    level: '8–15 mmHg',
    label: 'Mild',
    indication: 'Tired, achy legs; minor swelling; prevention during pregnancy or travel; spider veins.',
  },
  {
    level: '15–20 mmHg',
    label: 'Moderate',
    indication: 'Moderate varicose veins; leg swelling; post-sclerotherapy; prolonged standing or sitting.',
  },
  {
    level: '20–30 mmHg',
    label: 'Firm',
    indication: 'Moderate-to-severe varicose veins; chronic venous insufficiency; post-surgical recovery; DVT prevention.',
  },
  {
    level: '30–40 mmHg',
    label: 'Extra Firm',
    indication: 'Severe venous insufficiency; active or healed venous leg ulcers; lymphedema; post-thrombotic syndrome.',
  },
]

const styles = [
  { name: 'Knee-High', desc: 'The most commonly prescribed style. Treats CVI, DVT, and swelling up to the knee. Easiest to don and most tolerated.' },
  { name: 'Thigh-High', desc: 'Extends coverage to the thigh. Used when varicosities or swelling involve the upper leg or following thigh-level procedures.' },
  { name: 'Pantyhose', desc: 'Full-leg coverage. Preferred during pregnancy or for bilateral upper-leg involvement.' },
  { name: 'Open-Toe', desc: 'Allows toe inspection and is preferred in hot climates or for patients with toe conditions. Available in all compression levels.' },
  { name: 'Athletic / Compression Socks', desc: 'Designed for active use during running, cycling, or sport. Lower compression (15–20 mmHg) with moisture-wicking fabric.' },
]

export default async function CompressionPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getProductsByCollection('compression-stockings')
  } catch {
    // Shopify not configured
  }

  return (
    <div>
      {/* Page hero */}
      <section className="relative bg-brand-800 text-white overflow-hidden">
        <Image
          src="https://picsum.photos/seed/compression-stockings-legs/1400/520"
          alt="Person wearing compression stockings"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 py-20 px-4 max-w-5xl mx-auto">
          <Link href="/shop" className="text-brand-300 hover:text-white text-sm font-medium transition-colors">
            &larr; All Products
          </Link>
          <h1 className="text-4xl font-extrabold mt-3 mb-4">Compression Stockings</h1>
          <div className="w-14 h-1 bg-gold-500 mb-5" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Graduated compression is the first-line, evidence-based treatment for chronic venous insufficiency.
            Professionally fitted stockings reduce venous hypertension, improve circulation, and relieve aching,
            swelling, and fatigue.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Benefits */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Why Compression</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Benefits of Compression Stockings</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-gray-200 rounded p-6 shadow-sm">
                <div className="w-8 h-1 bg-gold-500 mb-3" />
                <h3 className="font-bold text-brand-800 text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compression levels */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Finding the Right Fit</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Compression Levels</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="overflow-x-auto rounded border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm bg-white">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-5 py-3 text-left font-semibold">Level</th>
                  <th className="px-5 py-3 text-left font-semibold">Pressure</th>
                  <th className="px-5 py-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {compressionLevels.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                    <td className="px-5 py-3 font-bold text-brand-700">{row.label}</td>
                    <td className="px-5 py-3 font-semibold text-gray-800">{row.level}</td>
                    <td className="px-5 py-3 text-gray-600">{row.indication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            mmHg = millimetres of mercury. Always follow the compression level prescribed by your physician.
          </p>
        </div>

        {/* Styles */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Options</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Styles Available</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {styles.map((s) => (
              <div key={s.name} className="bg-white border border-gray-200 rounded p-5 shadow-sm">
                <h3 className="font-bold text-brand-700 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional fitting + Insurance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          <div className="bg-brand-800 text-white rounded p-8">
            <div className="w-8 h-1 bg-gold-500 mb-4" />
            <h2 className="text-xl font-bold mb-3">Professional Fitting Services</h2>
            <p className="text-brand-200 text-sm leading-relaxed mb-4">
              Proper fit is critical for compression to be effective and comfortable. Our trained staff measures
              your ankle circumference, calf circumference, and leg length to identify the correct size and
              compression level prescribed by your physician.
            </p>
            <p className="text-brand-200 text-sm leading-relaxed">
              Measurements should be taken in the morning before oedema accumulates. We provide complimentary
              re-fittings if your size changes — common after post-surgical swelling resolves.
            </p>
          </div>
          <div className="bg-brand-50 border border-brand-100 rounded p-8">
            <div className="w-8 h-1 bg-gold-500 mb-4" />
            <h2 className="text-xl font-bold text-brand-800 mb-3">Insurance Coverage</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Many insurance plans — including Medicare and Medi-Cal — cover medical-grade compression stockings
              when prescribed by a physician for a qualifying venous condition such as CVI, DVT, or post-surgical recovery.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              We work with most major insurance providers. Our team can help verify your coverage and document
              the medical necessity required for reimbursement.
            </p>
            <Link href="/about" className="text-brand-700 font-semibold text-sm hover:underline">
              Contact our team to verify coverage &rarr;
            </Link>
          </div>
        </div>

        {/* Educational callout */}
        <div className="bg-brand-700 text-white rounded p-5 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-medium">
            <strong>Not sure which level you need?</strong> Our compression therapy guide explains each class
            and when it is appropriate.
          </p>
          <Link href="/education/compression-therapy" className="text-gold-400 hover:text-gold-300 font-bold text-sm whitespace-nowrap transition-colors">
            Read the guide &rarr;
          </Link>
        </div>

        {/* Products */}
        {products.length > 0 && (
          <div>
            <h2 className="text-2xl font-extrabold text-brand-800 mb-6">Shop Compression Stockings</h2>
            <ProductGrid products={products} />
          </div>
        )}
      </div>
    </div>
  )
}
