import { getProductsByCollection, ShopifyProduct } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Horse Chestnut — CVVW' }

export default async function HorseChestnutPage() {
  let products: ShopifyProduct[] = []
  try {
    products = await getProductsByCollection('horse-chestnut')
  } catch {
    // Shopify not configured
  }

  return (
    <div>
      {/* Page hero */}
      <section className="relative bg-brand-800 text-white overflow-hidden">
        <Image
          src="https://picsum.photos/seed/horse-chestnut-botanical/1400/520"
          alt="Botanical herbs and natural supplements"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 py-20 px-4 max-w-5xl mx-auto">
          <Link href="/shop" className="text-brand-300 hover:text-white text-sm font-medium transition-colors">
            &larr; All Products
          </Link>
          <h1 className="text-4xl font-extrabold mt-3 mb-4">Horse Chestnut</h1>
          <div className="w-14 h-1 bg-gold-500 mb-5" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Horse chestnut seed extract (HCSE), standardised to 50 mg Aescin, is the most Cochrane-reviewed
            natural venotonic for chronic venous insufficiency — with evidence equivalent to compression
            stockings for mild-to-moderate CVI.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* How it works */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Mechanism</p>
            <h2 className="text-3xl font-extrabold text-brand-800 mb-1">How It Works</h2>
            <div className="w-14 h-1 bg-gold-500 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              The active compound in horse chestnut seed extract is <strong>Aescin</strong> (also spelled Escin),
              a mixture of triterpene saponins. Aescin acts on venous and capillary walls through several complementary mechanisms:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5">—</span>
                <span><strong>Inhibits lysosomal enzymes</strong> (hyaluronidase and elastase) that degrade the proteoglycan matrix supporting capillary walls, reducing capillary permeability and leakage.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5">—</span>
                <span><strong>Reduces venous wall distensibility</strong>, improving venous tone and reducing the pooling of blood that causes heaviness and aching.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5">—</span>
                <span><strong>Inhibits prostaglandin synthesis</strong>, contributing to its anti-inflammatory and anti-oedematous effects.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600 font-bold mt-0.5">—</span>
                <span><strong>Increases venous contractility</strong>, enhancing the efficiency of the calf muscle pump that returns blood toward the heart.</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded p-7">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Dosing</p>
            <h2 className="text-xl font-bold text-brand-800 mb-4">Standard Dose</h2>
            <div className="bg-white border border-brand-200 rounded p-5 mb-4">
              <p className="text-3xl font-extrabold text-brand-700">50 mg Aescin</p>
              <p className="text-sm text-gray-600 mt-1">Twice daily (morning and evening), taken with food</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Products should be standardised to contain exactly 50 mg Aescin per dose and should be
              enteric-coated to minimise gastrointestinal side effects.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Allow <strong>4–6 weeks</strong> before assessing response. Maximum benefit is typically
              seen at 12 weeks of consistent use.
            </p>
          </div>
        </div>

        {/* Clinical evidence */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Research</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Clinical Evidence</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-brand-700 mb-2">17</p>
              <p className="text-sm font-semibold text-gray-800 mb-2">Randomised Controlled Trials</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Reviewed in the 2012 Cochrane systematic review by Pittler &amp; Ernst, making HCSE one of the most
                extensively studied herbal venotonics.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-brand-700 mb-2">=</p>
              <p className="text-sm font-semibold text-gray-800 mb-2">Equivalent to Compression</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                One well-designed RCT found HCSE reduced leg volume as effectively as Class II compression
                stockings over 12 weeks in mild-to-moderate CVI patients.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-brand-700 mb-2">Sig.</p>
              <p className="text-sm font-semibold text-gray-800 mb-2">Symptom Reduction</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Significant reduction in leg pain, oedema, and leg volume versus placebo — with a good safety
                profile and low rate of discontinuation due to side effects.
              </p>
            </div>
          </div>
        </div>

        {/* Who benefits */}
        <div className="mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Indications</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Who Benefits</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Mild-to-Moderate CVI (CEAP C2–C3)',
                body: 'Patients with varicose veins and leg oedema who are not yet candidates for, or prefer to defer, interventional procedures. HCSE can be used alone or as an adjunct to compression.',
              },
              {
                title: 'Patients Who Struggle with Compression',
                body: 'For patients who find compression stockings difficult to don, tolerate, or wear consistently — especially in warm climates — HCSE offers an oral alternative with comparable evidence.',
              },
              {
                title: 'Adjunct to Compression or Post-Procedure',
                body: 'HCSE can be combined with compression for additive benefit, or used in the post-sclerotherapy or post-ablation period to manage residual inflammation and swelling.',
              },
              {
                title: 'Travelers and Frequent Flyers',
                body: 'For individuals at risk of leg swelling during long-haul flights or extended sitting, HCSE taken before and during travel may reduce oedema and discomfort.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white border border-gray-200 rounded p-5 shadow-sm">
                <div className="w-1 bg-brand-600 rounded flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety */}
        <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r p-6 mb-10">
          <h3 className="font-bold text-brand-800 text-lg mb-3">Safety &amp; Contraindications</h3>
          <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
            <li><strong>Contraindicated</strong> in severe hepatic or renal impairment.</li>
            <li><strong>Use with caution</strong> alongside anticoagulants — Aescin may have mild antiplatelet effects.</li>
            <li><strong>Avoid in pregnancy</strong> — insufficient safety data; do not use in the first trimester.</li>
            <li>Most common side effect: mild GI upset, minimised by taking with food and using enteric-coated formulations.</li>
            <li>Not a replacement for medical assessment or compression in moderate-to-severe disease.</li>
          </ul>
        </div>

        {/* Education link */}
        <div className="bg-brand-700 text-white rounded p-5 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-medium">
            <strong>Want the full evidence review?</strong> Our clinical guide to HCSE covers the Cochrane
            evidence, dosing, and how to combine it with other treatments.
          </p>
          <Link href="/education/horse-chestnut" className="text-gold-400 hover:text-gold-300 font-bold text-sm whitespace-nowrap transition-colors">
            Read the guide &rarr;
          </Link>
        </div>

        {/* Products */}
        {products.length > 0 && (
          <div>
            <h2 className="text-2xl font-extrabold text-brand-800 mb-6">Shop Horse Chestnut</h2>
            <ProductGrid products={products} />
          </div>
        )}
      </div>
    </div>
  )
}
