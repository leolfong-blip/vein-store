export interface Article {
  slug: string
  title: string
  summary: string
  category: string
  readTime: string
  content: string
}

export const articles: Article[] = [
  {
    slug: 'varicose-veins-overview',
    title: 'Understanding Varicose Veins',
    summary: 'What causes varicose veins, who is at risk, and what are the available treatment options — from lifestyle changes to procedures.',
    category: 'Basics',
    readTime: '5 min',
    content: `
## What Are Varicose Veins?

Varicose veins are enlarged, twisted veins that appear just under the skin — most commonly in the legs. They result from faulty valves inside the veins. Normally, one-way valves keep blood flowing upward toward the heart. When these valves weaken or become damaged, blood pools in the vein, causing it to swell and bulge.

## Who Gets Them?

Risk factors include:
- **Family history** — genetics play a major role
- **Age** — veins lose elasticity over time
- **Sex** — women are more commonly affected, partly due to hormonal changes
- **Pregnancy** — increases blood volume and pressure on pelvic veins
- **Prolonged standing or sitting** — occupational risk in nurses, teachers, retail workers

## Symptoms

- Aching or heaviness in the legs, especially at end of day
- Swelling around the ankles
- Itching over the vein
- Skin discolouration (browning) in chronic cases
- Venous leg ulcers in advanced chronic venous insufficiency (CVI)

## Treatment Options

### Conservative (First-Line)
1. **Compression stockings** — graduated compression reduces venous hypertension and is recommended as first-line for all symptomatic patients.
2. **Venoactive drugs (VADs)** — MPFF and horse chestnut extract are the most evidence-supported options.
3. **Lifestyle changes** — weight loss, exercise, leg elevation, avoiding prolonged immobility.

### Interventional
- **Endovenous thermal ablation** (laser or radiofrequency) — minimally invasive, preferred over surgery.
- **Foam sclerotherapy** — injection of a chemical agent to close the vein.
- **Surgical stripping** — traditional surgery, now largely replaced by ablation techniques.

## When to See a Doctor

See a vascular specialist if you have skin changes, leg ulcers, bleeding from a varicosity, or worsening symptoms despite conservative treatment.
    `.trim(),
  },
  {
    slug: 'compression-therapy',
    title: 'Compression Therapy — How It Works & How to Choose',
    summary: 'A practical guide to compression stockings: compression classes, materials, how to measure, and tips for getting patients to wear them.',
    category: 'Compression',
    readTime: '6 min',
    content: `
## How Compression Works

Graduated compression stockings apply the highest pressure at the ankle, gradually decreasing up the leg. This external pressure:

- Reduces the diameter of superficial veins → decreases reflux
- Enhances calf muscle pump efficiency
- Reduces oedema by shifting fluid from interstitial spaces back into capillaries
- Lowers ambulatory venous pressure

## Compression Classes

| Class | Pressure (mmHg) | Indication |
|-------|----------------|------------|
| Class I | 15–21 | Mild varicosities, tired legs, prevention during travel/pregnancy |
| Class II | 23–32 | Moderate varicosities, oedema, post-sclerotherapy, post-DVT |
| Class III | 34–46 | Severe CVI, venous ulcer treatment/prevention |
| Class IV | >49 | Severe lymphoedema (specialist prescription) |

## Measuring for Stockings

Take measurements in the morning before oedema accumulates:
1. **Ankle circumference** — at the narrowest point above the malleolus
2. **Calf circumference** — at the widest point
3. **Leg length** — from heel to back of the knee (knee-high) or to the gluteal fold (thigh-high)

## Tips for Adherence

Adherence to compression is poor, mainly due to difficulty donning and heat. Advise:
- Use a **donning aid or rubber gloves** for grip
- Apply in the morning before getting out of bed
- Choose **open-toe styles** for patients with toe problems or heat intolerance
- Wash stockings daily to maintain elasticity; replace every 3–6 months
    `.trim(),
  },
  {
    slug: 'horse-chestnut',
    title: 'Horse Chestnut Seed Extract (HCSE) — Evidence & Use',
    summary: 'What the Cochrane evidence shows about HCSE for chronic venous insufficiency, and how to use it safely alongside compression therapy.',
    category: 'Supplements',
    readTime: '5 min',
    content: `
## What Is Horse Chestnut?

Horse chestnut (*Aesculus hippocastanum*) seed extract is standardised to contain 50 mg of the active compound **Aescin** (also called Escin). Aescin:

- Inhibits lysosomal enzymes that degrade vascular proteoglycans
- Reduces capillary permeability and fragility
- Has anti-inflammatory and anti-oedematous effects
- Inhibits prostaglandin synthesis

## What the Evidence Shows

A 2012 Cochrane review (Pittler & Ernst) of 17 RCTs found that:

- HCSE (50 mg Aescin twice daily) significantly reduced **leg pain, oedema, and leg volume** compared to placebo
- One well-designed RCT found HCSE equivalent to **compression stockings (class II)** for reducing leg volume over 12 weeks
- Generally well tolerated; the most common side effect was mild GI upset

**Key limitation:** Most trials were short-term (≤12 weeks). Long-term safety and efficacy data are limited.

## Dosing

- Standard dose: **50 mg Aescin twice daily** (morning and evening with food)
- Allow 4–6 weeks before assessing response
- Products should be standardised and enteric-coated to minimise GI side effects

## Safety

- **Contraindicated** in severe hepatic or renal impairment
- **Caution** with anticoagulants — Aescin may potentiate antiplatelet effects
- **Avoid in pregnancy** (insufficient safety data)
- Not a replacement for compression or medical assessment in moderate-severe disease
    `.trim(),
  },
  {
    slug: 'mpff',
    title: 'MPFF (Micronized Purified Flavonoid Fraction) — Clinical Guide',
    summary: 'Everything you need to know about MPFF (Diosmin/Hesperidin) — mechanism, evidence from clinical trials, and guideline recommendations.',
    category: 'Venoactive Drugs',
    readTime: '7 min',
    content: `
## What Is MPFF?

MPFF (brand name Daflon®) consists of **90% Diosmin** and **10% Hesperidin**, micronized to increase bioavailability. It is the most extensively studied venoactive drug (VAD) for chronic venous disease (CVD).

## Mechanism of Action

MPFF works at multiple levels:

1. **Venous tone** — decreases venous distensibility and capacitance
2. **Microcirculation** — normalises capillary permeability and fragility
3. **Inflammation** — inhibits leukocyte adhesion to the endothelium, a key step in venous inflammation
4. **Lymphatics** — improves lymphatic contractility

## Clinical Evidence

### Symptoms of CVD (C2–C4 CEAP)
Multiple RCTs show significant improvement in:
- Leg heaviness, aching, and fatigue
- Oedema (ankle/leg volume)
- Cramps and restless legs

### Venous Leg Ulcers (C6 CEAP)
The **MPFF + compression vs compression alone** strategy:
- The PARTNER trial showed significantly higher healing rates at 6 months with adjunctive MPFF
- Greatest benefit in ulcers 5–10 cm²

## Guideline Recommendations

- **2022 European Venous Guidelines (Wittens et al.):** Grade 1B recommendation for MPFF in symptomatic CVD
- **2018 UIP consensus:** MPFF recommended as adjunct to compression for active venous ulcers

## Dosing

- **Standard:** 1000 mg once daily (or 500 mg twice daily) with meals
- **Acute haemorrhoidal crisis:** 3000 mg/day for 4 days, then 2000 mg/day for 3 days
- Onset of action: 2–4 weeks for symptom relief

## Safety Profile

MPFF has an excellent safety profile across >30 years of use:
- Most common: mild GI symptoms (nausea, diarrhoea)
- No known drug interactions of clinical significance
- **Pregnancy:** Category B — avoid in first trimester; usable in 2nd/3rd trimester if benefit outweighs risk (limited data)
    `.trim(),
  },
  {
    slug: 'ceap-classification',
    title: 'CEAP Classification of Chronic Venous Disease',
    summary: 'A concise reference for the CEAP clinical classification system used to stage varicose veins and chronic venous disease.',
    category: 'Clinical Reference',
    readTime: '4 min',
    content: `
## What Is CEAP?

CEAP is the international standard for classifying and communicating the severity of chronic venous disease. It covers four domains: **C**linical, **E**tiological, **A**natomical, **P**athophysiological.

## Clinical Classification (C0–C6)

| Class | Description |
|-------|-------------|
| C0 | No visible or palpable signs |
| C1 | Telangiectasias or reticular veins (<3mm) |
| C2 | Varicose veins (≥3mm) |
| C2r | Recurrent varicose veins |
| C3 | Oedema |
| C4a | Pigmentation or eczema |
| C4b | Lipodermatosclerosis or atrophie blanche |
| C4c | Corona phlebectatica |
| C5 | Healed venous ulcer |
| C6 | Active venous ulcer |
| C6r | Recurrent active venous ulcer |

Add **S** (symptomatic) or **A** (asymptomatic): e.g., C2S, C3A.

## Treatment Implications by Class

- **C1–C2:** Compression (Class I–II), VADs, cosmetic sclerotherapy
- **C3–C4:** Compression (Class II), VADs, consider ablation
- **C5–C6:** Compression (Class III+), MPFF, wound care, ablation after ulcer healing

## Why It Matters

CEAP staging guides both treatment selection and insurance/reimbursement decisions. Document CEAP class for all patients with chronic venous disease.
    `.trim(),
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
