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
    <section id="diferenciais" className="features-section">
      <div className="features-inner">
        <div className="features-header">
          <span className="section-eyebrow">{getToken(1028)}</span>
          <h2 className="heading-page">{getToken(1029)}</h2>
        </div>

        <div className="features-grid">
          {BRAND_CONFIG.pillars.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.icon] || ShieldCheck;
            return (
              <div key={idx} className="feature-card">
                <div className="feature-icon-box">
                  <IconComponent size={22} />
                </div>
                <h3 className="feature-title">{getToken(pillar.titleToken)}</h3>
                <p className="feature-desc">{getToken(pillar.descToken)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}