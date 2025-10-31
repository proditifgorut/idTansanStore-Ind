import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout: React.FC = () => {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Outlet context={{ language }} />
      </main>
      <Footer language={language} />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
