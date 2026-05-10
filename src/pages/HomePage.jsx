import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ContentSection from '@/components/ContentSection.jsx';
import CTABanner from '@/components/CTABanner.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Mania de Thais - Astrologia e Autoconhecimento</title>
        <meta 
          name="description" 
          content="Descubra seu universo interior através da astrologia, tarot e oráculos. Leituras personalizadas para transformar sua jornada de autoconhecimento." 
        />
      </Helmet>

      <div className="min-h-screen bg-[hsl(var(--cosmic-deep))]">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContentSection />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;