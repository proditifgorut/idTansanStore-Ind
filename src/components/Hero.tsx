import React from 'react';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

interface HeroProps {
  language: 'id' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    id: {
      title: 'Rempah-Rempah Premium Indonesia',
      subtitle: 'Dari UMKM Indonesia untuk Dunia',
      description: 'Produk rempah-rempah berkualitas tinggi dalam kemasan modern dan handmade. Mendukung UMKM lokal dengan standar internasional.',
      cta: 'Hubungi Kami',
      feature1: 'Kualitas Premium',
      feature2: 'Ekspor Internasional',
      feature3: 'Mendukung UMKM',
    },
    en: {
      title: 'Premium Indonesian Spices',
      subtitle: 'From Indonesian UMKM to the World',
      description: 'High-quality spice products in modern and handmade packaging. Supporting local UMKM with international standards.',
      cta: 'Contact Us',
      feature1: 'Premium Quality',
      feature2: 'International Export',
      feature3: 'Supporting UMKM',
    },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-600 font-semibold text-sm">✨ {content[language].subtitle}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {content[language].title}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {content[language].description}
            </p>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {content[language].cta}
            </button>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="text-orange-600 mb-2" size={32} />
                <span className="text-sm font-medium text-gray-700">{content[language].feature1}</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <TrendingUp className="text-orange-600 mb-2" size={32} />
                <span className="text-sm font-medium text-gray-700">{content[language].feature2}</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Sparkles className="text-orange-600 mb-2" size={32} />
                <span className="text-sm font-medium text-gray-700">{content[language].feature3}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-300 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a0b55ee31c03?w=800&h=600&fit=crop"
                alt="Indonesian Spices"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm">{language === 'id' ? 'Produk Tersedia' : 'Products Available'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
