import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

export default function ConciergeBanner() {
  const customWhatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    getToken(BRAND_CONFIG.whatsappCustomRequestToken)
  )}`;

  return (
    <section id="consultoria" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/30 border border-zinc-800 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              {getToken(1092)}
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {getToken(1093)}
            </p>
          </div>

          <a
            href={customWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/10"
          >
            <MessageCircle size={20} />
            <span>{getToken(1094)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}