// Single source of truth for business data (NAP, services, areas).
// Reused across pages, schema, and the booking flow.

export const site = {
  name: 'Sena Premium Detailing & Tint',
  shortName: 'Sena Premium Detailing',
  tagline: 'Mobile Car Detailing & Window Tint',
  // Owner can confirm/replace the exact street address. City/state shown for now.
  city: 'Prosper',
  region: 'TX',
  regionName: 'Texas',
  zip: '75078',
  url: 'https://senadetailing.com',
  phoneDisplay: '(214) 656-0656',
  phoneHref: '+12146560656',
  instagram: 'senadetailingtint',
  instagramUrl: 'https://instagram.com/senadetailingtint',
  email: 'senapremiumdetailingtint@gmail.com', // where booking requests are sent
  priceRange: '$$',
} as const;

// Web3Forms access key (public, safe in the client) — delivers the booking
// form to the owner's email. Get a free key at https://web3forms.com using
// senapremiumdetailingtint@gmail.com, then paste it here.
export const web3formsKey = '590d7740-9b71-4c12-88c9-6d8659e2fedd';

// Cities served — also generate /[city] SEO pages from this list.
// `intro` + `neighborhoods` give each city page unique, locally-relevant copy.
export const serviceAreas = [
  {
    slug: 'prosper',
    name: 'Prosper',
    region: 'TX',
    intro:
      "Prosper is our home base, so you'll never wait long for a spotless ride. We bring our full mobile car wash and detailing setup right to your driveway across town.",
    neighborhoods: ['Windsong Ranch', 'Star Trail', 'Prosper Trail', 'Lakewood'],
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    region: 'TX',
    intro:
      "From The Star to Stonebriar, Frisco drivers trust Sena for a showroom finish without the shop visit. Our mobile team comes to your home or office anywhere in the city.",
    neighborhoods: ['Stonebriar', 'Frisco Square', 'Phillips Creek Ranch', 'The Star'],
  },
  {
    slug: 'plano',
    name: 'Plano',
    region: 'TX',
    intro:
      "Busy Plano professionals love getting their car washed and detailed while they work. We cover everywhere from Legacy West to West Plano and Willow Bend.",
    neighborhoods: ['Legacy West', 'West Plano', 'Willow Bend', 'Hunters Glen'],
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    region: 'TX',
    intro:
      "Whether you're near Historic Downtown McKinney or out in Stonebridge Ranch, our mobile car wash and detailing come to you — no drop-off, no waiting room.",
    neighborhoods: ['Stonebridge Ranch', 'Craig Ranch', 'Adriatica', 'Historic Downtown'],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    region: 'TX',
    intro:
      "Across North Dallas — from Preston Hollow to Uptown and Lakewood — we deliver premium mobile car wash, detailing and window tint right where you live or work.",
    neighborhoods: ['Preston Hollow', 'Uptown', 'Lakewood', 'North Dallas'],
  },
] as const;

// Approx. geo anchor (Prosper, TX) — used for LocalBusiness schema.
export const geo = { latitude: 33.2365, longitude: -96.8006 } as const;
export const openingHours = ['Mo-Sa 08:00-19:00'] as const;

export const areaLabel = 'Frisco · Plano · McKinney · Dallas · Prosper';

// --- Detailing packages (official pricing, owner-confirmed) ---
// Prices are "Starting at" (sedan); trucks & SUVs slightly higher.
export const packages = [
  {
    name: 'Essential Detail',
    price: '$99',
    image: '/images/detail-hand.jpg',
    blurb: 'Perfect for well-maintained vehicles that need a refresh.',
    features: [
      'Hand wash & dry',
      'Wheels & tires cleaned + tire shine',
      'Interior vacuum',
      'Dashboard, console & door panels wiped',
      'Cup holders cleaned',
      'Interior & exterior windows',
      'Light dust removal',
    ],
    featured: false,
  },
  {
    name: 'Premium Detail',
    price: '$150',
    image: '/images/interior.jpg',
    blurb: 'Ideal for vehicles needing a deeper clean without shampooing.',
    features: [
      'Everything in Essential, plus:',
      'Deep interior cleaning',
      'Steam cleaning on high-touch areas',
      'Leather cleaning & conditioning',
      'UV protection for interior surfaces',
      'Door jambs cleaned',
      'Detailed cracks & crevices',
    ],
    featured: false,
  },
  {
    name: 'Premium Plus Detail',
    price: '$185',
    image: '/images/paint.jpg',
    blurb: 'Great for stain removal and added paint protection.',
    features: [
      'Everything in Premium, plus:',
      'Carpet & floor mat shampoo',
      'Cloth seat shampoo (if applicable)',
      'Light stain treatment',
      'Spray ceramic sealant for paint',
      'Extra attention to high-use areas',
    ],
    featured: true,
  },
  {
    name: 'Premium Full Detail',
    price: '$220',
    image: '/images/hero.jpg',
    blurb: 'Our most complete detail — deep extraction and paint decontamination.',
    features: [
      'Everything in Premium Plus, plus:',
      'Full carpet & seat extraction/shampoo',
      'Clay bar paint decontamination',
    ],
    featured: false,
  },
] as const;

// Window tint — separate service line. Lifetime warranty on film.
export const tintTiers = [
  {
    name: 'Carbon Tint',
    price: 'from $299',
    blurb: 'Fade-resistant carbon film with strong heat rejection. Lifetime warranty.',
  },
  {
    name: 'Ceramic Tint',
    price: 'from $449',
    blurb: 'Premium ceramic film — up to 98% IR heat rejection, crystal clarity. Lifetime warranty.',
  },
] as const;

// The combo is Sena's key differentiator: detail + tint in one visit.
export const comboOffer = {
  label: 'Detail + Tint Combo',
  discount: 'Save $50',
  blurb: 'Book any detail package together with window tint and save $50 — done in one visit.',
} as const;

export const serviceOptions = [
  'Essential Detail — $99',
  'Premium Detail — $150',
  'Premium Plus Detail — $185',
  'Premium Full Detail — $220',
  'Window Tint — Carbon',
  'Window Tint — Ceramic',
  'Ceramic Coating',
  'Not sure yet — recommend for me',
] as const;

// Real before/after transformations (client photos). orientation drives the
// slider's aspect ratio so portrait and landscape pairs both look right.
export const beforeAfters = [
  {
    label: 'Mercedes Interior',
    before: '/images/ba-interior-before.jpg',
    after: '/images/ba-interior-after.jpg',
    orientation: 'portrait' as const,
  },
  {
    label: 'Mercedes GLC',
    before: '/images/ba-glc-before.jpg',
    after: '/images/ba-glc-after.jpg',
    orientation: 'landscape' as const,
  },
  {
    label: 'F-150 Front',
    before: '/images/ba-truck-front-before.jpg',
    after: '/images/ba-truck-front-after.jpg',
    orientation: 'portrait' as const,
  },
  {
    label: 'F-150 Rear',
    before: '/images/ba-truck-rear-before.jpg',
    after: '/images/ba-truck-rear-after.jpg',
    orientation: 'portrait' as const,
  },
];

// Home FAQ — common questions (also feeds FAQPage schema for Google & LLMs).
export const homeFaq = [
  {
    q: 'How much does mobile car detailing cost?',
    a: 'Our detail packages start at $99 for the Essential Detail, with Premium ($150), Premium Plus ($185) and Premium Full ($220) tiers, plus add-ons like ceramic coating and window tint. Pricing is per vehicle, and you only pay after the service is done.',
  },
  {
    q: 'Do you really come to me?',
    a: 'Yes — we are 100% mobile. We bring everything needed to your home or office, including our own water and power, so you never have to leave your driveway.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Frisco, Plano, McKinney, Prosper, Dallas and the surrounding DFW metroplex.',
  },
  {
    q: 'How long does a detail take?',
    a: 'An Essential Detail takes about 60–90 minutes. The Premium, Premium Plus and Premium Full packages, ceramic coating, or paint correction take longer. We give you a time estimate when you book.',
  },
  {
    q: 'Can I get detailing and window tint in one visit?',
    a: 'Yes — and it’s one of the things that sets us apart. We can detail your vehicle and install window tint in the same appointment, and you save $50 when you book them together.',
  },
  {
    q: 'How do I book?',
    a: 'Fill out the booking form on this page or call/text us at (214) 656-0656. We’ll confirm your appointment and the time we’ll arrive.',
  },
];

// --- Service pages (bottom-of-funnel SEO landing pages) ---
// One page per transactional keyword. Each ranks on its own service term and
// drives to the booking form. Prices follow DFW market research — owner confirms.
export interface ServicePage {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  h1Lead: string; // plain part of the H1
  h1Accent: string; // gold italic part of the H1
  intro: string;
  price: string;
  image: string;
  includes: string[];
  benefits: { icon: string; label: string }[];
  faq: { q: string; a: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'mobile-car-wash',
    name: 'Mobile Car Wash',
    title: 'Mobile Car Wash in DFW | We Come to You | Sena Premium',
    description:
      'Mobile car wash in Frisco, Plano, McKinney & Dallas. Hand wash, wheels, interior vacuum & windows — at your home or office, from $99. Book in 30 seconds.',
    eyebrow: 'Mobile Car Wash',
    h1Lead: 'Mobile Car Wash,',
    h1Accent: 'At Your Door',
    intro:
      "Skip the lines and the drive. Our mobile car wash comes to your home or office anywhere in DFW — hand wash, wheels, tires, interior vacuum and streak-free windows, done while you go about your day.",
    price: 'from $99',
    image: '/images/detail-hand.jpg',
    includes: [
      'Full exterior hand wash & dry',
      'Wheels, tires & tire shine',
      'Interior vacuum',
      'Dashboard, console & door panels wiped',
      'Interior & exterior windows',
      'We bring our own water & power',
    ],
    benefits: [
      { icon: 'car', label: 'We come to you' },
      { icon: 'droplet', label: 'No hookups needed' },
      { icon: 'clock', label: 'Done in ~60–90 min' },
      { icon: 'shield', label: 'Licensed & insured' },
    ],
    faq: [
      {
        q: 'How much is a mobile car wash?',
        a: 'Our mobile car wash (the Essential Detail) starts at $99 for sedans, with trucks and SUVs slightly higher. It includes a full hand wash, wheels, interior vacuum and windows — done at your location.',
      },
      {
        q: 'Do you come to my home or office?',
        a: 'Yes — we are 100% mobile and bring our own water and power. We serve Frisco, Plano, McKinney, Prosper, Dallas and the surrounding DFW area.',
      },
      {
        q: 'How long does a mobile car wash take?',
        a: 'A standard mobile car wash takes about 60–90 minutes depending on the size and condition of your vehicle. Larger detail packages take longer.',
      },
    ],
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    title: 'Mobile Ceramic Coating in DFW | Sena Premium Detailing',
    description:
      'Professional mobile ceramic coating in Frisco, Plano, McKinney & Dallas. Long-lasting paint protection against Texas sun, from $499. We come to you.',
    eyebrow: 'Ceramic Coating',
    h1Lead: 'Ceramic Coating That',
    h1Accent: 'Outlasts Texas Heat',
    intro:
      'A ceramic coating bonds to your paint and protects it for years — locking in a deep gloss while shrugging off UV, bird droppings, and water spots. Applied at your home across DFW.',
    price: 'from $499',
    image: '/images/paint.jpg',
    includes: [
      'Paint decontamination & clay bar',
      'Single-stage paint correction',
      'Professional ceramic coating',
      'Up to 12 months of protection',
      'Hydrophobic, self-cleaning finish',
      'Wheels & glass coating available',
    ],
    benefits: [
      { icon: 'sun', label: 'Blocks UV & oxidation' },
      { icon: 'droplet', label: 'Water beads & rolls off' },
      { icon: 'shield', label: 'Guards against swirls' },
      { icon: 'award', label: 'Protects resale value' },
    ],
    faq: [
      {
        q: 'How long does a ceramic coating last?',
        a: 'Our ceramic coatings protect your paint for up to 12 months, depending on the package and how the vehicle is maintained. Longer-lasting professional coatings are available on request.',
      },
      {
        q: 'Is ceramic coating worth it in Texas?',
        a: 'Yes. North Texas sun and heat are brutal on paint. A ceramic coating blocks UV, prevents oxidation and fading, and makes washing far easier — protecting both the look and resale value of your vehicle.',
      },
      {
        q: 'Do you apply the coating at my home?',
        a: 'Yes — we are fully mobile. We come to your home or office in Frisco, Plano, McKinney, Prosper or Dallas with everything needed, including power and water.',
      },
    ],
  },
  {
    slug: 'window-tint',
    name: 'Window Tint',
    title: 'Mobile Window Tint in DFW | Carbon & Ceramic | Sena Premium',
    description:
      'Mobile window tint in Frisco, Plano, McKinney & Dallas. Carbon from $299, ceramic from $449. Texas-law compliant, lifetime warranty. We come to you.',
    eyebrow: 'Window Tint',
    h1Lead: 'Window Tint That',
    h1Accent: 'Beats the Heat',
    intro:
      'Keep your cabin cooler, protect your interior, and sharpen your vehicle’s look. We install carbon and ceramic film at your home — Texas-law compliant, backed by a lifetime warranty.',
    price: 'from $299',
    image: '/images/tint.jpg',
    includes: [
      'Carbon or ceramic film options',
      'Up to 98% IR heat rejection',
      'Blocks 99% of UV rays',
      'Texas-law compliant install',
      'Crystal-clear, no-bubble finish',
      'Lifetime warranty on film',
    ],
    benefits: [
      { icon: 'sun', label: 'Rejects heat & glare' },
      { icon: 'shield', label: 'Blocks 99% of UV' },
      { icon: 'droplet', label: 'Protects interior' },
      { icon: 'award', label: 'Lifetime warranty' },
    ],
    faq: [
      {
        q: 'How dark can I legally tint my car in Texas?',
        a: 'Texas law allows front side windows at 25% VLT or lighter, and any darkness on rear side and back windows. Windshields allow a visor strip above the AS-1 line. We install fully compliant tint.',
      },
      {
        q: 'What’s the difference between carbon and ceramic tint?',
        a: 'Carbon film is fade-resistant with strong heat rejection at a great price. Ceramic film offers the highest heat and UV rejection (up to 98% IR) with crystal clarity and no signal interference.',
      },
      {
        q: 'Can you tint my car at my house?',
        a: 'Yes. Our mobile team installs window tint at your home or office across the DFW metroplex — no need to visit a shop.',
      },
    ],
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    title: 'Mobile Paint Correction in DFW | Swirl & Scratch Removal | Sena',
    description:
      'Mobile paint correction in Frisco, Plano, McKinney & Dallas. Remove swirls, scratches & oxidation for a flawless, glossy finish, from $299. We come to you.',
    eyebrow: 'Paint Correction',
    h1Lead: 'Bring Back That',
    h1Accent: 'Mirror Finish',
    intro:
      'Swirls, scratches, and oxidation rob your paint of its shine. Our machine paint correction removes those defects and restores a deep, glassy, showroom-level gloss.',
    price: 'from $299',
    image: '/images/hero.jpg',
    includes: [
      'Paint decontamination & clay bar',
      'Machine paint correction',
      'Swirl & light scratch removal',
      'Oxidation & water-spot removal',
      'High-gloss refined finish',
      'Pairs perfectly with ceramic coating',
    ],
    benefits: [
      { icon: 'sparkles', label: 'Removes swirls & scratches' },
      { icon: 'sun', label: 'Restores deep gloss' },
      { icon: 'award', label: 'Boosts resale value' },
      { icon: 'shield', label: 'Prep for ceramic coating' },
    ],
    faq: [
      {
        q: 'What is paint correction?',
        a: 'Paint correction uses a machine polisher and cutting compounds to remove swirl marks, light scratches, and oxidation from your clear coat, restoring a smooth, high-gloss finish.',
      },
      {
        q: 'Should I get paint correction before a ceramic coating?',
        a: 'Yes — always. A ceramic coating locks in whatever is underneath, so correcting the paint first ensures you seal in a flawless finish rather than the existing defects.',
      },
      {
        q: 'Do you do paint correction mobile?',
        a: 'Yes, we perform paint correction at your home or office throughout Frisco, Plano, McKinney, Prosper and Dallas.',
      },
    ],
  },
  {
    slug: 'interior-detailing',
    name: 'Interior Detailing',
    title: 'Mobile Interior Detailing in DFW | Deep Clean | Sena Premium',
    description:
      'Mobile interior car detailing in Frisco, Plano, McKinney & Dallas. Deep clean, shampoo, leather care & odor removal, from $149. We come to you.',
    eyebrow: 'Interior Detailing',
    h1Lead: 'A Cabin That Feels',
    h1Accent: 'Brand New',
    intro:
      'From kid messes to years of buildup, our interior deep clean resets your cabin — shampooed carpets, conditioned leather, sanitized surfaces, and a fresh finish.',
    price: 'from $149',
    image: '/images/interior.jpg',
    includes: [
      'Full vacuum & crevice cleaning',
      'Carpet & upholstery shampoo',
      'Leather cleaned & conditioned',
      'Interior glass & all surfaces',
      'Pet hair & stain removal',
      'Odor elimination & sanitizing',
    ],
    benefits: [
      { icon: 'sparkles', label: 'Stains & spills gone' },
      { icon: 'droplet', label: 'Shampoo & extraction' },
      { icon: 'shield', label: 'Sanitized surfaces' },
      { icon: 'car', label: 'Pet hair removal' },
    ],
    faq: [
      {
        q: 'How much does interior car detailing cost?',
        a: 'Our mobile interior detailing starts at $149 for sedans, with trucks and SUVs slightly higher depending on size and condition. A deep clean with shampoo and leather care is included.',
      },
      {
        q: 'Can you get stains and pet hair out of my seats?',
        a: 'Yes. We use hot-water extraction, shampoo, and specialized tools to remove most stains, spills, and pet hair, and we finish with odor elimination and sanitizing.',
      },
      {
        q: 'Do you clean the interior at my home?',
        a: 'Yes — we are fully mobile and bring everything needed to deep clean your interior at your home or office across DFW.',
      },
    ],
  },
];
