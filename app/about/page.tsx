import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Us — CVVW' }

const locations = [
  { city: 'Clovis', address: '3120 Willow Ave, Suite 101', cityStateZip: 'Clovis, CA 93612' },
  { city: 'Fresno', address: '1247 E Alluvial Ave, Suite 101', cityStateZip: 'Fresno, CA 93720' },
  { city: 'Visalia', address: '1918 S Court St', cityStateZip: 'Visalia, CA 93277' },
  { city: 'Hanford', address: '1320 Bailey Dr, Suite 103', cityStateZip: 'Hanford, CA 93230' },
  { city: 'Selma', address: '1850 Floral Ave', cityStateZip: 'Selma, CA 93662' },
  { city: 'Stockton', address: '1140 W Hammer Ln', cityStateZip: 'Stockton, CA 95209' },
  { city: 'Salinas', address: '505 E. Romie Lane, Suite 1', cityStateZip: 'Salinas, CA 93901' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="bg-brand-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl font-extrabold mb-4">About CVVW</h1>
          <div className="w-14 h-1 bg-gold-500 mb-6" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Founded by vascular health professionals in California&apos;s Central Valley, CVVW exists
            to make clinically-validated venous health products and education accessible to every patient.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Mission cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              heading: 'Our Mission',
              body: 'To make clinically-validated treatment options accessible and understandable for every patient with varicose veins or chronic venous disease — regardless of where they live in the Central Valley.',
            },
            {
              heading: 'Our Products',
              body: 'Every product we carry is selected based on clinical evidence, international venous guidelines, and independent quality testing. We do not carry unproven supplements or unvalidated devices.',
            },
            {
              heading: 'Our Education',
              body: 'Our education hub is written by medical professionals using the latest international guidelines and peer-reviewed research — designed for both patients and clinicians.',
            },
          ].map((card) => (
            <div key={card.heading} className="bg-white border border-gray-200 rounded shadow-sm p-6">
              <div className="w-8 h-1 bg-gold-500 mb-4" />
              <h2 className="font-bold text-brand-800 text-lg mb-2">{card.heading}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Meet Dr. Leo Fong */}
        <div className="mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Founder</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Meet Dr. Leo Fong, MD</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />

          <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
            <div className="bg-brand-800 px-8 py-6">
              <h3 className="text-white font-extrabold text-2xl">Leo L. Fong, MD</h3>
              <p className="text-gold-400 font-semibold text-sm mt-1">Founder &amp; Medical Director &mdash; Central Valley Vein and Wound Centers</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-brand-700 text-brand-100 text-xs font-semibold px-3 py-1 rounded">Vascular Surgery</span>
                <span className="bg-brand-700 text-brand-100 text-xs font-semibold px-3 py-1 rounded">Venous Disease</span>
                <span className="bg-brand-700 text-brand-100 text-xs font-semibold px-3 py-1 rounded">Wound Care</span>
                <span className="bg-brand-700 text-brand-100 text-xs font-semibold px-3 py-1 rounded">Amputation Prevention</span>
                <span className="bg-brand-700 text-brand-100 text-xs font-semibold px-3 py-1 rounded">Lymphedema</span>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Bio */}
              <div>
                <h4 className="font-bold text-brand-800 text-lg mb-4">Biography</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Dr. Leo Fong is a board-certified vascular surgeon and the founder and medical director of
                  Central Valley Vein and Wound Centers. With over 30 years of experience, he has dedicated
                  his career to treating venous disease, peripheral arterial disease, chronic wounds, and
                  lymphedema throughout California&apos;s Central Valley.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Dr. Fong trained at some of the most prestigious institutions in the country and served
                  as an Assistant Clinical Professor at UCSF before founding CVVW. He is fluent in both
                  English and Mandarin, enabling him to serve the diverse patient population of the Central Valley.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  His flagship clinic in Clovis is a 5,000 sq ft facility with over 10 exam rooms, a dedicated
                  vascular ultrasound imaging room, and a separate procedural center — designed to provide
                  comprehensive vein and wound care under one roof.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-brand-800 text-sm uppercase tracking-wider mb-3">Education &amp; Training</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Medical School', value: 'Tufts University School of Medicine', year: '1992' },
                      { label: 'Internship', value: 'LA County / USC Medical Center', year: '1993' },
                      { label: 'Residency', value: 'UCSF / Fresno Medical Education Program (Surgery)', year: '1993–1998' },
                      { label: 'Fellowship', value: 'University of Tennessee (Vascular Surgery)', year: '1998–1999' },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 text-sm">
                        <div className="w-1 bg-gold-500 rounded flex-shrink-0 self-stretch" />
                        <div>
                          <p className="font-semibold text-brand-800">{item.label} <span className="text-brand-400 font-normal">{item.year}</span></p>
                          <p className="text-gray-600">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-800 text-sm uppercase tracking-wider mb-3">Board Certification</h4>
                  <div className="bg-brand-50 border border-brand-100 rounded p-4 text-sm">
                    <p className="font-semibold text-brand-800">American Board of Surgery</p>
                    <p className="text-gray-600">Vascular Surgery &mdash; Certified 2002</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-800 text-sm uppercase tracking-wider mb-3">Hospital Affiliations</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Community Regional Medical Center, Fresno</li>
                    <li>Saint Agnes Medical Center, Fresno</li>
                    <li>Fresno Heart and Surgical Hospital</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-800 text-sm uppercase tracking-wider mb-3">Languages</h4>
                  <div className="flex gap-2">
                    <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded">English</span>
                    <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded">Mandarin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Where We Are</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Based in California&apos;s Central Valley</h2>
          <div className="w-14 h-1 bg-gold-500 mb-6" />
          <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl">
            CVVW operates clinics across the Valley and Salinas to ensure patients have access to
            specialist-level vein care close to home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-white border border-gray-200 rounded p-5 flex flex-col gap-2 shadow-sm">
                <div className="w-5 h-0.5 bg-gold-500" />
                <h3 className="font-bold text-brand-700">{loc.city}</h3>
                <p className="text-gray-600 text-xs">{loc.address}</p>
                <p className="text-gray-600 text-xs">{loc.cityStateZip}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + ', ' + loc.cityStateZip)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs font-semibold text-brand-600 hover:underline"
                >
                  Get Directions &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-12 rounded-r">
          <h2 className="font-bold text-brand-800 text-lg mb-2">Medical Disclaimer</h2>
          <p className="text-brand-900 text-sm leading-relaxed">
            The content on CVVW is for informational and educational purposes only. It does not constitute
            medical advice and should not be used as a substitute for consultation with a qualified healthcare
            professional. Always seek the advice of your doctor or vascular specialist before starting, changing,
            or stopping any treatment.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/education" className="border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white font-semibold px-8 py-3 rounded transition-colors inline-block">
            Explore Education Hub
          </Link>
        </div>
      </div>
    </div>
  )
}
