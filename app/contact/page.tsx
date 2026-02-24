import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Contact Us — CVVW' }

const locations = [
  {
    city: 'Salinas',
    address: '505 E. Romie Lane, Suite 1',
    cityStateZip: 'Salinas, CA 93901',
  },
  { city: 'Fresno', address: null, cityStateZip: null },
  { city: 'Clovis', address: null, cityStateZip: null },
  { city: 'Visalia', address: null, cityStateZip: null },
  { city: 'Hanford', address: null, cityStateZip: null },
  { city: 'Selma', address: null, cityStateZip: null },
  { city: 'Stockton', address: null, cityStateZip: null },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <div className="w-14 h-1 bg-gold-500 mb-5" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Our clinics serve the Central Valley and Salinas. Call us to schedule an appointment,
            ask about products, or verify insurance coverage for compression therapy.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Phone */}
        <div className="bg-brand-800 text-white rounded p-8 mb-14 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Call Us</p>
            <a
              href="tel:15597214910"
              className="text-4xl font-extrabold tracking-tight hover:text-gold-400 transition-colors"
            >
              (559) 721-4910
            </a>
            <p className="text-brand-200 text-sm mt-2">
              Monday – Friday, office hours. Leave a message and we will return your call promptly.
            </p>
          </div>
          <a
            href="tel:15597214910"
            className="bg-gold-500 hover:bg-gold-400 text-brand-900 font-bold px-8 py-4 rounded text-center transition-colors whitespace-nowrap text-lg"
          >
            Call Now
          </a>
        </div>

        {/* Locations */}
        <div>
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Clinics</p>
          <h2 className="text-3xl font-extrabold text-brand-700 mb-1">Locations</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-white border border-gray-200 rounded shadow-sm p-6">
                <div className="w-6 h-1 bg-gold-500 mb-3" />
                <h3 className="font-bold text-brand-700 text-xl mb-1">{loc.city}</h3>
                {loc.address ? (
                  <>
                    <p className="text-gray-700 text-sm">{loc.address}</p>
                    <p className="text-gray-700 text-sm">{loc.cityStateZip}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + ', ' + loc.cityStateZip)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-brand-600 text-sm font-semibold hover:underline"
                    >
                      Get Directions &rarr;
                    </a>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm mt-1">
                    Call <a href="tel:15597214910" className="text-brand-600 font-semibold hover:underline">(559) 721-4910</a> for address and directions.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What to expect */}
        <div className="mt-14 bg-brand-50 border border-brand-100 rounded p-8">
          <h2 className="font-bold text-brand-700 text-xl mb-4">When You Call</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">—</span>
              <span><strong>Appointments:</strong> Schedule consultations for varicose vein evaluation, wound care, or compression fitting.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">—</span>
              <span><strong>Insurance verification:</strong> We can confirm whether your plan covers compression stockings or other treatments.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">—</span>
              <span><strong>Product questions:</strong> Ask about our compression stockings, horse chestnut, and MPFF supplement options.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">—</span>
              <span><strong>Referrals:</strong> We accept referrals from primary care physicians and other specialists.</span>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/shop" className="btn-primary">
            Shop Products
          </Link>
          <Link href="/education" className="border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white font-semibold px-8 py-3 rounded transition-colors inline-block">
            Education Hub
          </Link>
        </div>
      </div>
    </div>
  )
}
