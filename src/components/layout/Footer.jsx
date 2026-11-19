import React from 'react';
import { BRAND_CONFIG } from '@/config/brandConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>
          © {currentYear} {BRAND_CONFIG.brandName} {BRAND_CONFIG.brandHighlight}.
        </p>
        <p>Digital Catalog Architecture</p>
      </div>
    </footer>
  );
}