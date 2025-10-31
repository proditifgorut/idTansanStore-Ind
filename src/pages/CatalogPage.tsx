import React, { useState, useMemo } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Search, Package, Leaf, ChevronsRight } from 'lucide-react';
import { products as allProducts, Product } from '../data/products';

type ContextType = { language: 'id' | 'en' };

const CatalogPage: React.FC = () => {
  const { language } = useOutletContext<ContextType>();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Modern Packaging' | 'Handmade UMKM'>('All');

  const content = {
    id: {
      title: 'Katalog Produk',
      subtitle: 'Jelajahi koleksi lengkap rempah-rempah premium kami.',
      searchPlaceholder: 'Cari produk...',
      all: 'Semua',
      modern: 'Kemasan Modern',
      handmade: 'Handmade UMKM',
      inquire: 'Tanya Produk',
      emptyState: 'Tidak ada produk yang cocok dengan pencarian Anda.',
    },
    en: {
      title: 'Product Catalog',
      subtitle: 'Explore our complete collection of premium spices.',
      searchPlaceholder: 'Search for products...',
      all: 'All',
      modern: 'Modern Packaging',
      handmade: 'Handmade UMKM',
      inquire: 'Inquire Product',
      emptyState: 'No products match your search.',
    },
  };

  const filters = {
    id: ['Semua', 'Kemasan Modern', 'Handmade UMKM'],
    en: ['All', 'Modern Packaging', 'Handmade UMKM'],
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const nameMatches = product.name[language].toLowerCase().includes(searchTerm.toLowerCase());
      const filterEnum = activeFilter === 'All' ? 'All' : (activeFilter === 'Modern Packaging' ? 'Modern Packaging' : 'Handmade UMKM');
      const categoryMatches = filterEnum === 'All' || product.category.en === filterEnum;
      return nameMatches && categoryMatches;
    });
  }, [searchTerm, activeFilter, language]);

  const handleFilterClick = (filter: string) => {
    if (filter === content.id.all || filter === content.en.all) {
      setActiveFilter('All');
    } else if (filter === content.id.modern || filter === content.en.modern) {
      setActiveFilter('Modern Packaging');
    } else {
      setActiveFilter('Handmade UMKM');
    }
  };

  const getWhatsappLink = (productName: string) => {
    const message = language === 'id' ? `Halo, saya tertarik dengan produk ${productName}. Bisa berikan info lebih lanjut?` : `Hello, I'm interested in the ${productName} product. Could you provide more information?`;
    return `https://wa.me/6283119226089?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{content[language].title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        <div className="mb-12 sticky top-20 bg-white/80 backdrop-blur-md z-10 py-4 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={content[language].searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              {filters[language].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                    (activeFilter === 'All' && (filter === 'All' || filter === 'Semua')) ||
                    (activeFilter === 'Modern Packaging' && (filter === 'Modern Packaging' || filter === 'Kemasan Modern')) ||
                    (activeFilter === 'Handmade UMKM' && (filter === 'Handmade UMKM'))
                      ? 'bg-orange-500 text-white shadow'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name[language]} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${product.category.en === 'Modern Packaging' ? 'bg-blue-500' : 'bg-green-500'}`}>
                    {product.category[language]}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name[language]}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{product.description[language]}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features[language].map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <a href={getWhatsappLink(product.name[language])} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105">
                      {content[language].inquire}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{content[language].emptyState}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
