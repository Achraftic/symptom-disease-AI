import React from 'react';
import Features from '@/components/Features';
import MainHero from '@/components/MainHero';
import CTA from '@/components/CTA';
import MainSection from '@/components/MainSection';
// import Disease from '@/components/Disease';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <MainSection />
      <MainHero />
      <Features />
      <CTA />
    </div>
  );
}

