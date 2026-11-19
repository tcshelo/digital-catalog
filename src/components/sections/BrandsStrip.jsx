import React from 'react';
import { BRAND_CONFIG } from '@/config/brandConfig';

export default function BrandsStrip() {
  return (
    <div className="brands-strip">
      <div className="brands-strip-inner">
        {BRAND_CONFIG.featuredBrands.map((brand, idx) => (
          <span key={idx} className="brand-wordmark">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}