import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import BrandsStrip from '@/components/sections/BrandsStrip';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ConciergeBanner from '@/components/sections/ConciergeBanner';
import CatalogCard from '@/components/catalog/CatalogCard';
import { catalogItems } from '@/data/catalogData';
import { getToken } from '@/utils/i18n';

export default function HomePage() {
  const featuredItems = catalogItems.slice(0, 3);

  return (
    <>
      <HeroSection />
      <BrandsStrip />

      {/* Vitrine de Destaques (Prévia do Acervo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              {getToken(1005)}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              {getToken(1009)}
            </h2>
          </div>

          <Link
            to="/acervo"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>{getToken(1006)}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <FeaturesSection />
      <ConciergeBanner />
    </>
  );
}