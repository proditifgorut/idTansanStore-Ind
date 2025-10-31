import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface HeaderProps {
  language: 'id' | 'en';
  setLanguage: (lang: 'id' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const content = {
    id: {
      home: 'Beranda',
      about: 'Tentang',
      products: 'Produk',
      catalog: 'Katalog',
      contact: 'Kontak',
    },
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      catalog: 'Catalog',
      contact: 'Contact',
    },
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">iT</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              idTansan Store
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {content[language].home}
            </button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {content[language].about}
            </button>
            <button onClick={() => handleNavClick('products')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {content[language].products}
            </button>
            <Link to="/catalog" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {content[language].catalog}
            </Link>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              {content[language].contact}
            </button>
            
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all"
            >
              <Globe size={18} />
              <span className="font-medium">{language === 'id' ? 'EN' : 'ID'}</span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left">
                {content[language].home}
              </button>
              <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left">
                {content[language].about}
              </button>
              <button onClick={() => handleNavClick('products')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left">
                {content[language].products}
              </button>
              <Link to="/catalog" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left">
                {content[language].catalog}
              </Link>
              <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-left">
                {content[language].contact}
              </button>
              <button
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all w-fit"
              >
                <Globe size={18} />
                <span className="font-medium">{language === 'id' ? 'EN' : 'ID'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
