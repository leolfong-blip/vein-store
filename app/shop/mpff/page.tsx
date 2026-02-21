import { getProductsByCollection, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'MPFF — VeinCare' }

export default async function MPFFPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getProductsByCollection('mpff')
  } catch {
    // Shopify not configured
  }

  return (
    <div>
      {/* Page hero */}
      <section className="relative bg-brand-800 text-white overflow-hidden">
        <Image
          src="https://picsum.photos/seed/mpff-pharmaceutical/1400/520"
          alt="Pharmaceutical supplements and medicine"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 py-20 px-4 max-w-5xl mx-auto">
          <Link href="/shop" className="text-brand-300 hover:text-white text-sm font-medium transition-colors">
            &larr; All Products
          </Link>
          <h1 className="text-4xl font-extrabold mt-3 mb-4">MPFF</h1>
          <div className="w-14 h-1 bg-gold-500 mb-5" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Micronized Purified Flavonoid Fraction (Diosmin 90% + Hesperidin 10%) carries a Grade 1B
            recommendation in the 2022 European Venous Guidelines — making it the most guideline-supported
            venoactive drug for chronic venous disease.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* What is MPFF + How it works */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">What Is It</p>
            <h2 className="text-3xl font-extrabold text-brand-800 mb-1">About MPFF</h2>
            <div className="w-14 h-1 bg-gold-500 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              MPFF is a <strong>micronized</strong> (particle-reduced) form of purified flavonoids derived
              primarily from citrus fruits. Micronization increases surface area and therefore bioavailability
              compared to non-micronized diosmin preparations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The standard formulation contains <strong>Diosmin 90%</strong> and <strong>Hesperidin 10%</strong>,
              which work synergistically on the venous wall, microcirculation, and lymphatic system.
              It has been in continuous clinical use for over 30 years with an excellent safety record.
            </p>
            <p className="text-gray-700 leading-relaxed">
              MPFF is classified as a <strong>venoactive drug (VAD)</strong> — not a supplement — and is
              available by prescription in many countries. It appears in multiple international vascular
              guidelines as a recommended treatment for chronic venous disease.
            </p>
          </div>

          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Mechanism</p>
            <h2 className="text-3xl font-extrabold text-brand-800 mb-1">How It Works</h2>
            <div className="w-14 h-1 bg-gold-500 mb-6" />
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">01.</span>
                <div>
                  <strong className="text-gray-800">Improves venous tone</strong>
                  <p className="mt-0.5">Decreases venous distensibility and capacitance, reducing the reflux that elevates venous pressure.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">02.</span>
                <div>
                  <strong className="text-gray-800">Normalises microcirculation</strong>
                  <p className="mt-0.5">Reduces capillary permeability and fragility, decreasing oedema formation and the leakage responsible for skin changes in CVI.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">03.</span>
                <div>
                  <strong className="text-gray-800">Inhibits leukocyte adhesion</strong>
                  <p className="mt-0.5">Blocks neutrophil and monocyte attachment to the venous endothelium — a key initiating step in venous wall inflammation and progressive CVI.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">04.</span>
                <div>
                  <strong className="text-gray-800">Improves lymphatic drainage</strong>
                  <p className="mt-0.5">Enhances lymphatic vessel contractility and lymph flow, further reducing chronic oedema.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical evidence */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Research</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Clinical Evidence</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-800 text-white rounded p-6">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Symptomatic CVD (C2–C4)</p>
              <p className="text-brand-100 text-sm leading-relaxed">
                Multiple randomised controlled trials demonstrate significant improvement in leg heaviness,
                aching, fatigue, oedema, and cramps compared to placebo. Improvement is typically seen
                within 2–4 weeks and increases with continued use.
              </p>
            </div>
            <div className="bg-brand-800 text-white rounded p-6">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Venous Leg Ulcers (C6)</p>
              <p className="text-brand-100 text-sm leading-relaxed">
                The PARTNER trial showed significantly higher ulcer healing rates at 6 months when MPFF
                was added to compression therapy versus compression alone. Benefit was greatest for
                ulcers between 5–10 cm² in size.
              </p>
            </div>
          </div>
          <div className="bg-brand-50 border border-brand-200 rounded p-6">
            <h3 className="font-bold text-brand-800 mb-3">Guideline Recommendations</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="bg-brand-700 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0 h-fit">Grade 1B</span>
                <p className="text-sm text-gray-700"><strong>2022 European Venous Guidelines (Wittens et al.):</strong> MPFF is recommended for symptomatic chronic venous disease across all clinical classes.</p>
              </div>
              <div className="flex gap-4">
                <span className="bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0 h-fit">Adjunct</span>
                <p className="text-sm text-gray-700"><strong>2018 UIP Consensus:</strong> MPFF is recommended as an adjunct to compression therapy for the treatment of active venous leg ulcers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who benefits */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Indications</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Who Benefits</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Symptomatic CVI (CEAP C2–C4)',
                body: 'Patients experiencing leg heaviness, aching, swelling, or skin changes due to venous hypertension. MPFF addresses both the symptoms and the underlying inflammatory process.',
              },
              {
                title: 'Venous Leg Ulcers (CEAP C5–C6)',
                body: 'As an adjunct to compression bandaging or stockings, MPFF accelerates venous ulcer healing — particularly in larger or slower-healing wounds.',
              },
              {
                title: 'Post-Interventional Support',
                body: 'After sclerotherapy or ablation, residual inflammation and haematoma can cause discomfort. MPFF\'s anti-inflammatory mechanism supports recovery.',
              },
              {
                title: 'Long-Term Maintenance',
                body: 'With its excellent long-term safety profile, MPFF is suitable for ongoing management in patients with progressive or recurrent venous disease.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white border border-gray-200 rounded p-5 shadow-sm">
                <div className="w-1 bg-gold-500 rounded flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dosing + Safety */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-brand-50 border border-brand-100 rounded p-6">
            <h3 className="font-bold text-brand-800 text-lg mb-3">Standard Dosing</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">Chronic venous disease</span>
                <span className="font-bold text-brand-700">1000 mg once daily</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium">With meals</span>
                <span className="text-gray-500">Yes, to improve tolerability</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Onset of action</span>
                <span className="text-gray-500">2–4 weeks</span>
              </div>
            </div>
          </div>
          <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r p-6">
            <h3 className="font-bold text-brand-800 text-lg mb-3">Safety Profile</h3>
            <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>Over 30 years of continuous clinical use worldwide.</li>
              <li>Most common side effect: mild GI symptoms (nausea, diarrhoea) — generally self-limiting.</li>
              <li>No clinically significant drug interactions known.</li>
              <li><strong>Pregnancy:</strong> Avoid in the first trimester. Limited data in 2nd/3rd trimester — consult your physician.</li>
            </ul>
          </div>
        </div>

        {/* Education link */}
        <div className="bg-brand-700 text-white rounded p-5 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-medium">
            <strong>Want the full clinical overview?</strong> Our MPFF guide covers mechanism, RCT data,
            guideline grades, and combination strategies.
          </p>
          <Link href="/education/mpff" className="text-gold-400 hover:text-gold-300 font-bold text-sm whitespace-nowrap transition-colors">
            Read the guide &rarr;
          </Link>
        </div>

        {/* Products */}
        {products.length > 0 && (
          <div>
            <h2 className="text-2xl font-extrabold text-brand-800 mb-6">Shop MPFF</h2>
            <ProductGrid products={products} />
          </div>
        )}
      </div>
    </div>
  )
}
