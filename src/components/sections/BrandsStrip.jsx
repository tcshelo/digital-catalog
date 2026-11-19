import React from 'react';
import { BRAND_CONFIG } from '@/config/brandConfig';

export default function BrandsStrip() {
  return (
    <div className="bg-zinc-900/50 border-b border-zinc-800/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 opacity-60">
          {BRAND_CONFIG.featuredBrands.map((brand, idx) => (
            <span
              key={idx}
              className="text-sm sm:text-base font-black tracking-[0.25em] text-zinc-300 select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}