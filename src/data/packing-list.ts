// packing-list.ts — Laos-specific packing config
import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const LAOS_ESSENTIALS: PackingItem[] = [
  { id: 'la-modest', name: 'Temple / Monastery Clothing', category: 'destination', description: 'Luang Prabang\'s morning alms-giving ceremony (tak bat) and its many wats require modest clothing — covered shoulders and knees. Tourists in shorts are asked to step back.', essential: true, amazonSearchFallback: 'lightweight+linen+modest+travel+clothing' },
  { id: 'la-repellent', name: 'DEET Insect Repellent', category: 'destination', description: 'Malaria is present in rural Laos and along the Mekong. Dengue is common in towns. DEET every evening — especially on the Mekong slow boat and in Vang Vieng.', essential: true, amazonSearchFallback: 'deet+insect+repellent+tropical', affiliatePrice: '$8–15' },
  { id: 'la-cash', name: 'Cash (USD + LAK)', category: 'destination', description: 'ATMs are limited outside Vientiane and Luang Prabang. USD is widely accepted. Carry enough cash for 3–4 days when traveling between towns — don\'t count on finding a working ATM in rural areas.', essential: true, quantityMultiplier: 0 },
  { id: 'la-waterpurify', name: 'Water Purification', category: 'destination', description: 'Tap water is not safe anywhere in Laos. Bottled water works in towns but is hard to find on slow boats and remote treks. Purification tablets or SteriPen are essential for adventure travel.', essential: true, amazonSearchFallback: 'water+purification+tablets+steripen', affiliatePrice: '$15–50' },
  { id: 'la-drybag', name: 'Dry Bag for Mekong Boat Trips', category: 'destination', description: 'The 2-day slow boat from Huay Xai to Luang Prabang is the iconic Laos experience — and your bags sit on an open wooden boat. A dry bag protects everything from rain and spray.', essential: true, amazonSearchFallback: 'dry+bag+waterproof+10l+boat', affiliatePrice: '$15–25' },
];

export const LAOS_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-la-repellent', name: 'DEET Insect Repellent', reason: 'Malaria in rural Laos and dengue in towns make DEET non-negotiable. The Mekong slow boat trip, Vang Vieng tubing, and the Plain of Jars all have significant mosquito activity at dusk.', amazonSearchFallback: 'deet+insect+repellent+tropical+30+percent', affiliatePrice: '~$9' },
  { id: 'gr-la-steripen', name: 'Water Purification (SteriPen or tablets)', reason: 'Tap water is unsafe throughout Laos. On the 2-day slow boat and in remote villages, bottled water is unavailable. A SteriPen or purification tablets are essential, not optional.', amazonSearchFallback: 'steripen+water+purifier+travel+uv', affiliatePrice: '~$50' },
  { id: 'gr-la-drybag', name: 'Dry Bag (10–20L)', reason: 'The Mekong slow boat, tubing in Vang Vieng, and kayaking near Vientiane all put your gear at water risk. A dry bag is the single most important piece of gear for the classic Laos route.', amazonSearchFallback: 'dry+bag+20l+waterproof+boat+travel', affiliatePrice: '~$20' },
  { id: 'gr-la-daypack', name: 'Packable Daypack', reason: 'Pak Ou Caves, Kuang Si Falls, and the Bolaven Plateau all require carrying gear. A daypack that compresses small fits in your main bag until you need it.', amazonSearchFallback: 'packable+daypack+20l+lightweight+foldable', affiliatePrice: '~$25' },
  { id: 'gr-la-towel', name: 'Quick-Dry Travel Towel', reason: 'Guesthouses in rural Laos and along the slow boat route provide thin or no towels. Kuang Si waterfall swimming means a towel that dries in the sun before your next stop.', amazonSearchFallback: 'quick+dry+microfiber+travel+towel', affiliatePrice: '~$18' },
];

export const LAOS_CONFIG: PackingConfig = {
  sitePrefix: 'dla',
  destination: 'Laos',
  climate: ['tropical'],
  currency: 'LAK',
  plugType: 'Type A/B/C/E/F',
  plugVoltage: '230V',
  affiliateTag: 'discovermore-20',
  destinationEssentials: LAOS_ESSENTIALS,
  gearRecommendations: LAOS_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = LAOS_CONFIG;

export const LAOS_PACKING_FAQS = [
  { question: 'What should I pack for Laos?', answer: 'The essentials are DEET insect repellent (malaria/dengue risk), water purification (tap water unsafe everywhere), modest temple clothing for Luang Prabang\'s wats, a dry bag for the Mekong slow boat, and USD cash for rural areas. Our checklist covers 60+ items for Laos\'s tropical climate.' },
  { question: 'Do I need malaria medication for Laos?', answer: 'Malaria prophylaxis is recommended for rural Laos, the Mekong River route, and remote trekking areas. Vientiane and Luang Prabang towns have lower risk. Consult a travel medicine clinic before departure. DEET insect repellent is essential everywhere regardless of malaria risk.' },
  { question: 'What power adapter do I need for Laos?', answer: 'Laos uses a mix of plug types depending on the building age: Type A, B, C, E, and F are all found. The voltage is 230V/50Hz. A universal adapter is the safest choice. Note: power outages are common in rural areas — a power bank is essential.' },
  { question: 'Is tap water safe in Laos?', answer: 'No — tap water is not safe to drink anywhere in Laos, including cities. Use bottled water in towns, and a SteriPen or purification tablets when bottled water isn\'t available (slow boat, rural trekking, remote guesthouses). The Mekong River looks beautiful but carries pathogens.' },
  { question: 'How many outfits should I pack for Laos?', answer: 'Pack light — 4 shirts, 2 lightweight pants that cover knees (for temples), 1 pair of shorts, 2 t-shirts. Laundry is cheap everywhere — ₭10,000–20,000/kg (about $0.50–1/kg) at guesthouses. Pack for 4 days and wash frequently.' },
  { question: 'What should I NOT bring to Laos?', answer: 'Skip heavy luggage (tuk-tuks and slow boats have limited space), expensive electronics (dust, humidity, theft risk), and sleeveless tops as your only shirts (temples and guesthouses require shoulders covered). Don\'t bring USD in bad condition — torn or marked bills are refused throughout Laos.' },
];
