import React from 'react';
import { Heart, Users, Globe2, Package } from 'lucide-react';

interface AboutProps {
  language: 'id' | 'en';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    id: {
      title: 'Tentang idTansan Store',
      description: 'Kami adalah platform ekspor yang menghubungkan produk rempah-rempah berkualitas tinggi dari UMKM Indonesia ke pasar internasional. Dengan fokus pada kualitas, keberlanjutan, dan pemberdayaan masyarakat lokal.',
      mission: 'Misi Kami',
      missionText: 'Memberdayakan UMKM Indonesia dan memperkenalkan kekayaan rempah-rempah nusantara ke seluruh dunia.',
      values: [
        {
          icon: Heart,
          title: 'Kualitas Terjamin',
          desc: 'Produk dengan standar internasional',
        },
        {
          icon: Users,
          title: 'Mendukung UMKM',
          desc: 'Memberdayakan pengrajin lokal',
        },
        {
          icon: Globe2,
          title: 'Jangkauan Global',
          desc: 'Ekspor ke berbagai negara',
        },
        {
          icon: Package,
          title: 'Kemasan Premium',
          desc: 'Modern dan tradisional handmade',
        },
      ],
    },
    en: {
      title: 'About idTansan Store',
      description: 'We are an export platform connecting high-quality spice products from Indonesian UMKM to international markets. With a focus on quality, sustainability, and empowering local communities.',
      mission: 'Our Mission',
      missionText: 'Empowering Indonesian UMKM and introducing the richness of Indonesian spices to the world.',
      values: [
        {
          icon: Heart,
          title: 'Quality Assured',
          desc: 'Products with international standards',
        },
        {
          icon: Users,
          title: 'Supporting UMKM',
          desc: 'Empowering local artisans',
        },
        {
          icon: Globe2,
          title: 'Global Reach',
          desc: 'Export to various countries',
        },
        {
          icon: Package,
          title: 'Premium Packaging',
          desc: 'Modern and traditional handmade',
        },
      ],
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{content[language].mission}</h3>
              <p className="text-gray-700 text-lg">{content[language].missionText}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-orange-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-orange-600" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Sparkles: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default About;
