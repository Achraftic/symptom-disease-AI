
import React from 'react';
import Features from '@/components/Features';
import MainHero from '@/components/MainHero';
import CTA from '@/components/CTA';

export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col gap-10">
      <MainHero />
      <Features />
      <CTA />
    </div>
  );
}

