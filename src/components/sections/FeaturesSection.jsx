import React from 'react';
import { ShieldCheck, Award, Truck, Headphones } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

const ICON_MAP = {
  ShieldCheck,
  Award,
  Truck,
  Headphones,
};

export default function FeaturesSection() {
  return (
    <section id="diferenciais" className="py-20 bg-zinc-900/30 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
            {getToken(1028)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            {getToken(1029)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_CONFIG.pillars.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl hover:border-amber-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getToken(pillar.titleToken)}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {getToken(pillar.descToken)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}