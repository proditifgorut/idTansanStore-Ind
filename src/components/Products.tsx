import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Package2, Award, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

interface ProductsProps {
  language: 'id' | 'en';
}

const Products: React.FC<ProductsProps> = ({ language }) => {
  const content = {
    id: {
      title: 'Produk Unggulan',
      subtitle: 'Rempah-rempah berkualitas tinggi dari berbagai daerah di Indonesia',
      modern: 'Kemasan Modern',
      handmade: 'Handmade UMKM',
      viewAll: 'Lihat Semua Produk',
    },
    en: {
      title: 'Featured Products',
      subtitle: 'High-quality spices from various regions in Indonesia',
      modern: 'Modern Packaging',
      handmade: 'Handmade UMKM',
      viewAll: 'View All Products',
    },
  };

  const featuredProducts = products.slice(0, 6);

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name[language]}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    product.category.en === 'Modern Packaging'
                      ? 'bg-blue-500'
                      : 'bg-green-500'
                  }`}>
                    {product.category[language]}
                  </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name[language]}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features[language].map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Package2 size={18} />
                    <span className="text-sm">{language === 'id' ? 'Siap Ekspor' : 'Export Ready'}</span>
                  </div>
                  <Award className="text-orange-600" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg space-x-2"
          >
            <span>{content[language].viewAll}</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <Package2 size={48} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3">{content[language].modern}</h3>
            <p className="text-blue-100">
              {language === 'id'
                ? 'Produk dengan kemasan modern, vakum, dan siap ekspor dengan standar internasional.'
                : 'Products with modern packaging, vacuum-sealed, and export-ready with international standards.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
            <Leaf size={48} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3">{content[language].handmade}</h3>
            <p className="text-green-100">
              {language === 'id'
                ? 'Produk handmade dari UMKM lokal dengan proses tradisional dan kualitas terjamin.'
                : 'Handmade products from local UMKM with traditional processes and guaranteed quality.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
