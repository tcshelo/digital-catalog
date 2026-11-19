import React from 'react';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

export default function HeroSection() {
  const customWhatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    getToken(BRAND_CONFIG.whatsappCustomRequestToken)
  )}`;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-zinc-800/80">
      {/* Imagem de Fundo + Overlay Gradiente Cinematográfico */}
      <div className="absolute inset-0 z-0">
        <img
          src={BRAND_CONFIG.heroImage}
          alt="Showroom Hero"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {getToken(BRAND_CONFIG.heroBadgeToken)}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            {getToken(BRAND_CONFIG.heroTitleToken)}
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {getToken(BRAND_CONFIG.heroSubtitleToken)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#acervo"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              <span>{getToken(1006)}</span>
              <ArrowDownRight size={20} />
            </a>

            <a
              href={customWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold px-7 py-4 rounded-xl transition-all backdrop-blur-md"
            >
              <MessageCircle size={19} className="text-amber-400" />
              <span>{getToken(1007)}</span>
            </a>
          </div>

          {/* Métricas de Autoridade */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80 max-w-lg">
            {BRAND_CONFIG.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-zinc-400 mt-1">{getToken(stat.labelToken)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}