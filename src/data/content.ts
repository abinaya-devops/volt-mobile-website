export interface PhoneProduct {
  id: string;
  name: string;
  tagline: string;
  story: string;
  personality: string;
  price: number;
  colors: { name: string; hex: string }[];
  specs: {
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    processor: string;
    display: string;
  };
  image: string;
  accent: string;
}

export const phones: PhoneProduct[] = [
  {
    id: 'volt-x-pro',
    name: 'Volt X Pro',
    tagline: 'Built for Creators',
    story: 'A canvas in your pocket. Every frame, every cut, every color — captured the way you imagined it.',
    personality: 'Creators',
    price: 1099,
    colors: [
      { name: 'Midnight Steel', hex: '#36454F' },
      { name: 'Glacier Silver', hex: '#C0C8D4' },
      { name: 'Ocean Blue', hex: '#4682B4' },
    ],
    specs: {
      ram: '16GB',
      storage: '512GB',
      camera: '200MP Triple',
      battery: '5200mAh',
      processor: 'Volt Core X3',
      display: '6.8" LTPO AMOLED',
    },
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: '#4682B4',
  },
  {
    id: 'volt-air',
    name: 'Volt Air',
    tagline: 'Made for Professionals',
    story: 'Thin, powerful, relentless. Built for the ones who turn ideas into action before lunch.',
    personality: 'Professionals',
    price: 849,
    colors: [
      { name: 'Charcoal Blue', hex: '#36454F' },
      { name: 'Platinum', hex: '#E2E8F0' },
      { name: 'Slate Blue', hex: '#737CA1' },
    ],
    specs: {
      ram: '12GB',
      storage: '256GB',
      camera: '108MP Dual',
      battery: '4800mAh',
      processor: 'Volt Core A2',
      display: '6.4" AMOLED',
    },
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: '#737CA1',
  },
  {
    id: 'volt-lite',
    name: 'Volt Lite',
    tagline: 'Designed for Everyday Moments',
    story: 'The phone that fits your life, not the other way around. Effortless from morning to night.',
    personality: 'Everyday',
    price: 549,
    colors: [
      { name: 'Denim Blue', hex: '#79BAEC' },
      { name: 'Soft White', hex: '#FAFBFC' },
      { name: 'Steel Blue', hex: '#4682B4' },
    ],
    specs: {
      ram: '8GB',
      storage: '128GB',
      camera: '64MP Dual',
      battery: '5000mAh',
      processor: 'Volt Core L1',
      display: '6.1" OLED',
    },
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: '#79BAEC',
  },
];

export interface EcosystemItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  icon: string;
}

export const ecosystem: EcosystemItem[] = [
  {
    id: 'watch',
    name: 'Volt Watch',
    description: 'Health, time, and rhythm — on your wrist.',
    price: 349,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: 'watch',
  },
  {
    id: 'earbuds',
    name: 'Volt Buds Pro',
    description: 'Silence the world. Hear what matters.',
    price: 199,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: 'earbuds',
  },
  {
    id: 'powerbank',
    name: 'Volt Power Bank',
    description: 'Three days of energy. In your pocket.',
    price: 89,
    image: 'https://images.pexels.com/photos/3606348/pexels-photo-3606348.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: 'powerbank',
  },
  {
    id: 'charger',
    name: 'Volt Wireless Charger',
    description: 'Set it down. Power up. No strings.',
    price: 69,
    image: 'https://images.pexels.com/photos/4526473/pexels-photo-4526473.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: 'charger',
  },
  {
    id: 'cases',
    name: 'Volt Cases',
    description: 'Protection that feels like a second skin.',
    price: 49,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: 'cases',
  },
];

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: 'trade-in',
    title: 'Trade-In',
    description: 'Exchange your old device and get instant credit toward your new VoltMobile.',
    icon: 'repeat',
  },
  {
    id: 'emi',
    title: 'Easy EMI',
    description: 'Own your device with flexible, zero-interest monthly plans that fit your life.',
    icon: 'credit-card',
  },
  {
    id: 'warranty',
    title: 'Official Warranty',
    description: 'Two-year comprehensive coverage. Because trust should be built-in, not optional.',
    icon: 'shield-check',
  },
  {
    id: 'delivery',
    title: 'Express Delivery',
    description: 'Same-day dispatch, next-day arrival. Your new chapter starts tomorrow.',
    icon: 'truck',
  },
  {
    id: 'care',
    title: 'Premium Customer Care',
    description: 'Real humans, real answers, anytime. Support that actually supports you.',
    icon: 'headphones',
  },
  {
    id: 'membership',
    title: 'Membership Benefits',
    description: 'Exclusive previews, priority service, and member-only pricing. Welcome to the inner circle.',
    icon: 'crown',
  },
];

export interface CustomerStory {
  id: string;
  name: string;
  role: string;
  location: string;
  story: string;
  image: string;
  rating: number;
}

export const stories: CustomerStory[] = [
  {
    id: '1',
    name: 'Aisha Khan',
    role: 'Travel Photographer',
    location: 'Lisbon, Portugal',
    story: 'I was carrying three cameras across four countries. The Volt X Pro became my primary. The colors it captures at golden hour — I stopped second-guessing my gear and started seeing moments again.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Startup Founder',
    location: 'Singapore',
    story: 'My phone used to die before my last meeting. The Volt Air runs from my 6am call to midnight without a flinch. It just works. I forgot what battery anxiety felt like — and I do not miss it.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Mother & Teacher',
    location: 'Florence, Italy',
    story: 'I wanted a phone that would not fight me. The Volt Lite is simple, beautiful, and it captures my children exactly as they are. No fussy settings. Just the moment, kept.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
];

export const lifestyleCategories = [
  { label: 'Photography', image: 'https://images.pexels.com/photos/3601098/pexels-photo-3601098.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Travel', image: 'https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Work', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Creativity', image: 'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Family', image: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800' },
];
