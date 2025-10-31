export interface Product {
  id: number;
  name: {
    id: string;
    en: string;
  };
  category: {
    id: 'Kemasan Modern' | 'Handmade UMKM';
    en: 'Modern Packaging' | 'Handmade UMKM';
  };
  image: string;
  features: {
    id: string[];
    en: string[];
  };
  description: {
    id: string;
    en: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: { id: 'Kunyit Premium', en: 'Premium Turmeric' },
    category: { id: 'Kemasan Modern', en: 'Modern Packaging' },
    image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc768?w=400&h=400&fit=crop',
    features: {
      id: ['Organik', 'Kualitas Ekspor', 'Kemasan Vakum'],
      en: ['Organic', 'Export Quality', 'Vacuum Packed'],
    },
    description: {
      id: 'Kunyit bubuk organik dari petani lokal, diproses secara higienis dan dikemas vakum untuk menjaga kesegaran.',
      en: 'Organic turmeric powder from local farmers, hygienically processed and vacuum-packed to maintain freshness.',
    },
  },
  {
    id: 2,
    name: { id: 'Jahe Merah', en: 'Red Ginger' },
    category: { id: 'Handmade UMKM', en: 'Handmade UMKM' },
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=400&h=400&fit=crop',
    features: {
      id: ['Pilihan', 'Handmade', 'Tradisional'],
      en: ['Selected', 'Handmade', 'Traditional'],
    },
    description: {
      id: 'Jahe merah pilihan yang dikeringkan secara tradisional oleh UMKM untuk menjaga kualitas dan khasiatnya.',
      en: 'Selected red ginger traditionally dried by UMKM to preserve its quality and benefits.',
    },
  },
  {
    id: 3,
    name: { id: 'Kayu Manis', en: 'Cinnamon' },
    category: { id: 'Kemasan Modern', en: 'Modern Packaging' },
    image: 'https://images.unsplash.com/photo-1599909533730-f9ff5c58f36e?w=400&h=400&fit=crop',
    features: {
      id: ['Premium', 'Siap Ekspor', 'Segar'],
      en: ['Premium', 'Export Ready', 'Fresh'],
    },
    description: {
      id: 'Batang kayu manis kualitas premium dari pegunungan Indonesia, memiliki aroma yang kuat dan khas.',
      en: 'Premium quality cinnamon sticks from the mountains of Indonesia, with a strong and distinctive aroma.',
    },
  },
  {
    id: 4,
    name: { id: 'Lada Hitam', en: 'Black Pepper' },
    category: { id: 'Handmade UMKM', en: 'Handmade UMKM' },
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=400&fit=crop',
    features: {
      id: ['Pilihan Terbaik', 'Aroma Kuat', 'Kualitas Ekspor'],
      en: ['Best Quality', 'Strong Aroma', 'Export Quality'],
    },
    description: {
      id: 'Lada hitam utuh yang dipetik dan dijemur secara manual oleh petani, menghasilkan rasa pedas yang otentik.',
      en: 'Whole black pepper manually picked and dried by farmers, resulting in an authentic spicy taste.',
    },
  },
  {
    id: 5,
    name: { id: 'Cengkeh', en: 'Cloves' },
    category: { id: 'Kemasan Modern', en: 'Modern Packaging' },
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=400&fit=crop',
    features: {
      id: ['Premium', 'Organik', 'Kualitas Ekspor'],
      en: ['Premium', 'Organic', 'Export Quality'],
    },
    description: {
      id: 'Cengkeh kering kualitas super, dipanen dari perkebunan organik dan siap untuk pasar domestik maupun internasional.',
      en: 'Super quality dried cloves, harvested from organic plantations and ready for domestic and international markets.',
    },
  },
  {
    id: 6,
    name: { id: 'Kemiri', en: 'Candlenut' },
    category: { id: 'Handmade UMKM', en: 'Handmade UMKM' },
    image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400&h=400&fit=crop',
    features: {
      id: ['Tradisional', 'Dipilih Manual', 'Segar'],
      en: ['Traditional', 'Handpicked', 'Fresh'],
    },
    description: {
      id: 'Kemiri utuh yang dipilih secara manual oleh pengrajin UMKM, menjaga kualitas dan rasa asli.',
      en: 'Whole candlenuts manually selected by UMKM artisans, preserving the original quality and taste.',
    },
  },
  {
    id: 7,
    name: { id: 'Pala', en: 'Nutmeg' },
    category: { id: 'Kemasan Modern', en: 'Modern Packaging' },
    image: 'https://images.unsplash.com/photo-1556484250-96f4f42b363a?w=400&h=400&fit=crop',
    features: {
      id: ['Utuh', 'Aroma Tajam', 'Kualitas A'],
      en: ['Whole', 'Sharp Aroma', 'Grade A Quality'],
    },
    description: {
      id: 'Biji pala utuh kualitas A dari kepulauan Maluku, dikenal dengan aroma dan rasanya yang superior.',
      en: 'Grade A whole nutmeg from the Maluku islands, known for its superior aroma and taste.',
    },
  },
  {
    id: 8,
    name: { id: 'Kapulaga', en: 'Cardamom' },
    category: { id: 'Handmade UMKM', en: 'Handmade UMKM' },
    image: 'https://images.unsplash.com/photo-1558197148-04724a198c6b?w=400&h=400&fit=crop',
    features: {
      id: ['Hijau', 'Organik', 'Dipanen Manual'],
      en: ['Green', 'Organic', 'Hand-harvested'],
    },
    description: {
      id: 'Kapulaga hijau organik yang dipanen dan dikeringkan secara manual untuk menjaga kualitas minyak atsirinya.',
      en: 'Organic green cardamom that is hand-harvested and dried to preserve its essential oil quality.',
    },
  },
];
