import { CollectionItem, Testimonial } from '../types';

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'romantic-roses',
    title: 'Romantic Roses',
    tagline: 'Timeless Poetry in Velvet & Silk',
    description: 'High-altitude heritage roses in soft blush, garden peach, and passionate crimson.',
    image: '/images/collection_romantic_roses.jpg',
    itemCount: 14,
    categoryKey: 'roses',
  },
  {
    id: 'seasonal-blooms',
    title: 'Seasonal Blooms',
    tagline: 'Fresh From Regenerative Fields',
    description: 'Meadow mixes, dynamic larkspur, foraged botanicals, and delicate garden chamomile.',
    image: '/images/collection_seasonal_blooms.jpg',
    itemCount: 22,
    categoryKey: 'seasonal',
  },
  {
    id: 'elegant-tulips',
    title: 'Elegant Tulips',
    tagline: 'Dutch Heritage Stems',
    description: 'Parrot, French, and double-petal tulips gathered at peak morning freshness.',
    image: '/images/collection_elegant_tulips.jpg',
    itemCount: 18,
    categoryKey: 'tulips',
  },
  {
    id: 'luxury-bouquets',
    title: 'Luxury Bouquets',
    tagline: 'Artisanal Grand Arrangements',
    description: 'Lavish pillowy peonies, rare orchids, and cascading lisianthus in bespoke presentation.',
    image: '/images/collection_luxury_bouquets.jpg',
    itemCount: 12,
    categoryKey: 'luxury',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Eleanor Vance',
    location: 'Kensington, London',
    occasion: '10th Wedding Anniversary',
    review: 'The Blush Romance bouquet arrived in pristine condition, wrapped in the most exquisite paper with a handwritten ribbon. My partner was truly moved to tears. Five days in and they are still opening gracefully.',
    rating: 5,
    date: 'October 18, 2026',
    purchasedProduct: 'Blush Romance Bouquet',
  },
  {
    id: 'test-2',
    author: 'Marcus Sterling',
    location: 'Tribeca, New York',
    occasion: 'Milestone Birthday Gift',
    review: 'Bloom & Petal is in an entirely different league from standard florists. The stems were extraordinarily fresh, fragrant, and arranged with genuine sculptural intent. The recipient remarked on the stunning tulip varieties.',
    rating: 5,
    date: 'October 21, 2026',
    purchasedProduct: 'Lavender Dreams',
  },
  {
    id: 'test-3',
    author: 'Clara Montclaire',
    location: 'Paris, France',
    occasion: 'Dinner Party Host Gift',
    review: 'Every single petal was perfection. The peonies opened into huge, fragrant clouds over 48 hours. The care card and flower food were thoughtful additions. I will never order from another flower atelier.',
    rating: 5,
    date: 'October 23, 2026',
    purchasedProduct: 'Pastel Peony Collection',
  },
];
