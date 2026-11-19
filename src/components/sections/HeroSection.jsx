import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

export default function HeroSection() {
  const customWhatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    getToken(BRAND_CONFIG.whatsappCustomRequestToken)
  )}`;

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <span className="badge-pill">
            {getToken(BRAND_CONFIG.heroBadgeToken)}
          </span>

          <h1 className="heading-hero">
            {getToken(BRAND_CONFIG.heroTitleToken)}
          </h1>

          <p className="text-lead">
            {getToken(BRAND_CONFIG.heroSubtitleToken)}
          </p>

          <div className="hero-actions">
            <Link to="/acervo" className="btn-primary">
              <span>{getToken(1006)}</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={customWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-block"
            >
              <MessageCircle size={18} />
              <span>{getToken(1007)}</span>
            </a>
          </div>

          <div className="hero-stats">
            {BRAND_CONFIG.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="hero-stat-value">{stat.value}</p>
                <p className="hero-stat-label">{getToken(stat.labelToken)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-media-col">
          <div className="hero-media-frame">
            <img
              src={BRAND_CONFIG.heroImage}
              alt="Showroom Hero"
              className="hero-media-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}