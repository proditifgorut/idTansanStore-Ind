import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';

type ContextType = { language: 'id' | 'en' };

const HomePage: React.FC = () => {
  const { language } = useOutletContext<ContextType>();

  return (
    <>
      <Hero language={language} />
      <About language={language} />
      <Products language={language} />
      <Contact language={language} />
    </>
  );
};

export default HomePage;
