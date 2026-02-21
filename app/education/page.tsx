import { articles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export const metadata = { title: 'Education Hub — VeinCare' }

const categories = ['All', 'Basics', 'Compression', 'Supplements', 'Venoactive Drugs', 'Clinical Reference']

const explainers = [
  {
    id: 'cvi',
    question: 'What is Chronic Venous Insufficiency (CVI)?',
    answer: `Chronic venous insufficiency (CVI) is a condition in which the veins of the legs are unable to adequately return blood back to the heart. Normally, one-way valves inside the leg veins prevent blood from flowing backward. When these valves become damaged or weakened — through age, genetics, prior DVT, or sustained venous hypertension — blood pools in the lower leg veins.

Over time, elevated venous pressure causes the vein walls to stretch and leak fluid into the surrounding tissue. This leads to the characteristic features of CVI: swelling, skin darkening (hyperpigmentation), a hardening of the fatty tissue under the skin (lipodermatosclerosis), and ultimately venous leg ulcers.

CVI is classified using the CEAP system (C0–C6), ranging from no visible signs to active venous ulceration. It is a chronic, progressive condition that worsens without treatment — but is highly manageable with compression therapy, venoactive drugs, and, when appropriate, interventional procedures.`,
  },
  {
    id: 'causes',
    question: 'What Causes Varicose Veins?',
    answer: `Varicose veins develop when the valves within the superficial leg veins fail, allowing blood to flow backwards (reflux) and pool in the vein. The vein wall stretches under the elevated pressure and becomes the tortuous, bulging vein visible beneath the skin.

Key risk factors include:

- Family history — genetics is the single strongest predictor. If both parents have varicose veins, the lifetime risk exceeds 80%.
- Sex — women are more commonly affected, partly due to hormonal influences (progesterone relaxes vein walls) and pregnancy.
- Pregnancy — increases blood volume by up to 50% and compresses the pelvic veins, elevating pressure in the leg veins. Risk increases with each pregnancy.
- Prolonged standing or sitting — occupational exposure in nurses, teachers, surgeons, retail workers, and office staff slows venous return and raises venous pressure over time.
- Age — veins lose elasticity and valves weaken with age, making varicose veins increasingly common after 50.
- Prior deep vein thrombosis (DVT) — clot damage to venous valves can cause post-thrombotic syndrome, a severe form of CVI.
- Obesity — increased intra-abdominal pressure impairs venous outflow from the legs.`,
  },
  {
    id: 'compression',
    question: 'How Does Compression Therapy Work?',
    answer: `Compression stockings apply calibrated external pressure that is highest at the ankle and gradually decreases up the leg — this is called "graduated compression." This pressure gradient counteracts the elevated venous pressure that drives the symptoms of CVI.

The physiological effects of graduated compression include:

- Reducing the diameter of superficial and deep veins, which decreases venous reflux and improves valve function.
- Enhancing the efficiency of the calf muscle pump — the primary mechanism by which blood is returned from the legs to the heart during walking.
- Reducing oedema by preventing fluid from leaking out of capillaries and shifting existing interstitial fluid back into the venous and lymphatic circulation.
- Lowering ambulatory venous pressure, which is the fundamental driver of skin changes, ulceration, and progressive CVI.

Compression is available in four main classes (8–15 mmHg, 15–20 mmHg, 20–30 mmHg, 30–40 mmHg), prescribed based on the severity of venous disease. For compression to be effective, it must be properly fitted — measurements taken at the ankle and calf, with the correct length selected — and worn consistently during waking hours.`,
  },
  {
    id: 'doctor',
    question: 'When Should You See a Doctor?',
    answer: `Many people with varicose veins experience only cosmetic concerns or mild symptoms that can be managed with compression and lifestyle changes. However, certain signs indicate that specialist evaluation is needed:

- Skin changes: Browning or darkening of the skin around the ankle (haemosiderin staining), skin that feels hard or woody (lipodermatosclerosis), or a white, scarred patch (atrophie blanche) — all indicate advanced CVI requiring specialist input.
- Venous leg ulcers: An open wound near the ankle that is slow to heal or recurs requires specialist wound care and venous assessment. Do not attempt to manage venous ulcers without medical supervision.
- Bleeding from a varicosity: Varicose veins near the skin surface can rupture and bleed profusely. Elevate the leg and apply firm pressure — then seek urgent medical attention.
- Sudden leg swelling with pain or warmth: This may indicate deep vein thrombosis (DVT), a medical emergency. Do not wait — seek same-day assessment.
- Symptoms worsening despite compression: If consistent compression use does not improve symptoms within 3–6 months, referral for ultrasound duplex assessment and possible intervention is appropriate.
- Phlebitis: Redness, warmth, and tenderness along a varicose vein (superficial thrombophlebitis) requires assessment to exclude extension into the deep venous system.`,
  },
]

export default function EducationPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="bg-brand-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Patient & Clinician Resource</p>
          <h1 className="text-4xl font-extrabold mb-4">Education Hub</h1>
          <div className="w-14 h-1 bg-gold-500 mb-5" />
          <p className="text-brand-200 text-lg max-w-2xl leading-relaxed">
            Evidence-based guides on varicose veins, chronic venous disease, compression therapy, and
            venoactive drugs — written by medical professionals for patients and clinicians.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Core explainer sections */}
        <div className="mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">Venous Health Basics</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Understanding Venous Disease</h2>
          <div className="w-14 h-1 bg-gold-500 mb-10" />

          <div className="space-y-8">
            {explainers.map((item, i) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
                <div className="bg-brand-700 text-white px-6 py-4 flex items-center gap-4">
                  <span className="text-gold-400 font-extrabold text-2xl opacity-60 leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold text-lg leading-snug">{item.question}</h3>
                </div>
                <div className="px-6 py-6">
                  {item.answer.split('\n\n').map((para, j) => {
                    if (para.startsWith('- ') || para.includes('\n- ')) {
                      const lines = para.split('\n').filter(Boolean)
                      return (
                        <ul key={j} className="list-disc list-inside space-y-1.5 text-gray-700 text-sm leading-relaxed mb-4">
                          {lines.map((line, k) => (
                            <li key={k}>{line.replace(/^- /, '')}</li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p key={j} className="text-gray-700 text-sm leading-relaxed mb-4 last:mb-0">
                        {para}
                      </p>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article grid */}
        <div>
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">In-Depth Guides</p>
          <h2 className="text-3xl font-extrabold text-brand-800 mb-1">Clinical Articles</h2>
          <div className="w-14 h-1 bg-gold-500 mb-8" />

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 text-sm font-medium bg-brand-100 text-brand-700 rounded"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Shop CTA */}
        <div className="mt-14 bg-brand-800 text-white rounded p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-xl mb-1">Ready to start treatment?</h3>
            <p className="text-brand-200 text-sm">
              Browse our physician-curated range of compression stockings, horse chestnut, and MPFF.
            </p>
          </div>
          <Link href="/shop" className="btn-primary whitespace-nowrap text-center">
            Shop Products
          </Link>
        </div>
      </div>
    </div>
  )
}
