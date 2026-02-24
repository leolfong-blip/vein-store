import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Us — VeinCare' }

const team = [
  {
    name: 'Dr. Leo Fong, MD',
    role: 'Medical Director & Vascular Specialist',
    bio: 'Board-certified vascular surgeon with over 15 years of experience treating venous disease in the Central Valley. Dr. Fong has performed thousands of minimally invasive vein procedures and is committed to translating the latest clinical evidence into accessible patient care.',
  },
  {
    name: 'Clinical Advisory Team',
    role: 'Vascular Medicine & Wound Care',
    bio: 'Our multidisciplinary team includes vascular medicine physicians, wound care nurses, and certified compression fitting specialists — all based in the Central Valley and dedicated to the communities we serve.',
  },
]

const locations = [
  'Fresno', 'Clovis', 'Visalia', 'Hanford', 'Selma', 'Stockton',
]

export default function AboutPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="bg-brand-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl font-extrabold mb-4">About VeinCare</h1>
          <div className="w-14 h-1 bg-gold-500 mb-6" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Founded by vascular health professionals in California&apos;s Central Valley, VeinCare exists
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

        {/* Medical Team */}
        <div className="mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Specialists</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">The Medical Team</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-brand-50 border border-brand-100 rounded p-6">
                <h3 className="font-bold text-brand-800 text-xl mb-1">{member.name}</h3>
                <p className="text-brand-500 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Where We Are</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Based in California&apos;s Central Valley</h2>
          <div className="w-14 h-1 bg-gold-500 mb-6" />
          <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
            VeinCare is rooted in the Central Valley of California — one of the most medically underserved regions
            in the state. We operate clinics across the Valley to ensure patients have access to specialist-level
            vein care close to home.
          </p>
          <div className="flex flex-wrap gap-3">
            {locations.map((city) => (
              <span key={city} className="bg-brand-100 text-brand-700 font-semibold text-sm px-4 py-2 rounded">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-12 rounded-r">
          <h2 className="font-bold text-brand-800 text-lg mb-2">Medical Disclaimer</h2>
          <p className="text-brand-900 text-sm leading-relaxed">
            The content on VeinCare is for informational and educational purposes only. It does not constitute
            medical advice and should not be used as a substitute for consultation with a qualified healthcare
            professional. Always seek the advice of your doctor or vascular specialist before starting, changing,
            or stopping any treatment.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/education" className="btn-primary">
            Explore Education Hub
          </Link>
          <Link href="/shop" className="border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white font-semibold px-8 py-3 rounded transition-colors inline-block">
            Shop Products
          </Link>
        </div>
      </div>
    </div>
  )
}
