import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Contact Us — CVVW' }

const locations = [
  {
    city: 'Clovis',
    label: 'Main Clinic',
    address: '3120 Willow Ave, Suite 101',
    cityStateZip: 'Clovis, CA 93612',
  },
  {
    city: 'Fresno',
    label: null,
    address: '1247 E Alluvial Ave, Suite 101',
    cityStateZip: 'Fresno, CA 93720',
  },
  {
    city: 'Visalia',
    label: null,
    address: '1918 S Court St',
    cityStateZip: 'Visalia, CA 93277',
  },
  {
    city: 'Hanford',
    label: null,
    address: '1320 Bailey Dr, Suite 103',
    cityStateZip: 'Hanford, CA 93230',
  },
  {
    city: 'Selma',
    label: null,
    address: '1850 Floral Ave',
    cityStateZip: 'Selma, CA 93662',
  },
  {
    city: 'Stockton',
    label: null,
    address: '1140 W Hammer Ln',
    cityStateZip: 'Stockton, CA 95209',
  },
  {
    city: 'Salinas',
    label: null,
    address: '505 E. Romie Lane, Suite 1',
    cityStateZip: 'Salinas, CA 93901',
  },
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
              Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM. Leave a message and we will return your call promptly.
            </p>
            <p className="text-brand-400 text-xs mt-1">Fax: (559) 721-4920</p>
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
              <div key={loc.city} className="bg-white border border-gray-200 rounded shadow-sm p-6 flex flex-col">
                <div className="w-6 h-1 bg-gold-500 mb-3" />
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-brand-700 text-xl">{loc.city}</h3>
                  {loc.label && (
                    <span className="text-xs bg-brand-700 text-white font-semibold px-2 py-0.5 rounded">
                      {loc.label}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 text-sm">{loc.address}</p>
                <p className="text-gray-700 text-sm">{loc.cityStateZip}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + ', ' + loc.cityStateZip)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-brand-700 hover:bg-brand-600 text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
                  >
                    Get Directions
                  </a>
                  <a
                    href="tel:15597214910"
                    className="inline-flex items-center gap-1 border border-brand-300 text-brand-600 hover:bg-brand-50 text-xs font-semibold px-4 py-2 rounded transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to expect */}
        <div className="mt-14 bg-brand-50 border border-brand-100 rounded p-8">
          <h2 className="font-bold text-brand-700 text-xl mb-4">When You Call</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">&mdash;</span>
              <span><strong>Appointments:</strong> Schedule consultations for varicose vein evaluation, wound care, or compression fitting.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">&mdash;</span>
              <span><strong>Insurance verification:</strong> We can confirm whether your plan covers compression stockings or other treatments.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">&mdash;</span>
              <span><strong>Product questions:</strong> Ask about our compression stockings, horse chestnut, and MPFF supplement options.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">&mdash;</span>
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
