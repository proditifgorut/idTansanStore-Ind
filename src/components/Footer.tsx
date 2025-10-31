import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface FooterProps {
  language: 'id' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const content = {
    id: {
      tagline: 'Rempah-rempah Premium Indonesia untuk Dunia',
      about: 'Tentang',
      products: 'Produk',
      catalog: 'Katalog',
      contact: 'Kontak',
      followUs: 'Ikuti Kami',
      rights: 'Hak Cipta Dilindungi.',
    },
    en: {
      tagline: 'Premium Indonesian Spices for the World',
      about: 'About',
      products: 'Products',
      catalog: 'Catalog',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All Rights Reserved.',
    },
  };

  const handleNavClick = (sectionId: string) => {
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">iT</span>
              </div>
              <span className="text-2xl font-bold">idTansan Store</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {content[language].tagline}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{language === 'id' ? 'Navigasi' : 'Navigation'}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  {language === 'id' ? 'Beranda' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  {content[language].about}
                </button>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {content[language].catalog}
                </Link>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-orange-400 transition-colors">
                  {content[language].contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{content[language].contact}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  +62 831-1922-6089
                </a>
              </li>
              <li>
                <a href="mailto:infoproduk@unisgu.ac.id" className="hover:text-orange-400 transition-colors">
                  infoproduk@unisgu.ac.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 idTansan Store. {content[language].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
