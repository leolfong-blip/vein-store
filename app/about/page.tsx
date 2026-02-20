import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About — VeinCare' }

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About VeinCare</h1>
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        VeinCare was founded by vascular health professionals frustrated by the lack of a single, trusted source
        for evidence-based venous health products and education.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[
          { heading: 'Our Mission', body: 'To make clinically-validated treatment options accessible and understandable for every patient with varicose veins or chronic venous disease.' },
          { heading: 'Our Products', body: 'Every product we carry is selected based on clinical evidence, international guidelines, and independent quality testing.' },
          { heading: 'Our Education', body: 'Our education hub is written by medical professionals using the latest international guidelines and peer-reviewed evidence.' },
        ].map((card) => (
          <div key={card.heading} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-gray-800 text-lg mb-2">{card.heading}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-brand-50 rounded-2xl p-8 mb-10">
        <h2 className="font-bold text-brand-800 text-xl mb-3">Medical Disclaimer</h2>
        <p className="text-brand-900 text-sm leading-relaxed">
          The content on VeinCare is for informational and educational purposes only. It does not constitute
          medical advice and should not be used as a substitute for consultation with a qualified healthcare
          professional. Always seek the advice of your doctor or vascular specialist before starting, changing,
          or stopping any treatment.
        </p>
      </div>

      <div className="text-center">
        <Link href="/education" className="inline-block bg-brand-600 text-white font-bold px-8 py-3 rounded-full hover:bg-brand-700 transition-colors mr-4">
          Explore Education Hub
        </Link>
        <Link href="/shop" className="inline-block border-2 border-brand-600 text-brand-700 font-bold px-8 py-3 rounded-full hover:bg-brand-50 transition-colors">
          Shop Products
        </Link>
      </div>
    </div>
  )
}
