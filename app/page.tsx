'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProductsSection } from '@/components/products-section';
import { AboutSection } from '@/components/about-section';
import { CertificationsSection } from '@/components/certifications-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ProductsSkeleton } from '@/components/ui/skeleton-loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {isLoading ? (
        <ProductsSkeleton />
      ) : (
        <ProductsSection />
      )}
      <AboutSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}