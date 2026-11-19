import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

export default function ConciergeBanner() {
  const customWhatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    getToken(BRAND_CONFIG.whatsappCustomRequestToken)
  )}`;

  return (
    <section id="consultoria" className="concierge-section">
      <div className="concierge-inner">
        <div className="concierge-box">
          <div className="concierge-copy">
            <h2 className="concierge-title">{getToken(1092)}</h2>
            <p className="concierge-desc">{getToken(1093)}</p>
          </div>

          <a
            href={customWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={19} />
            <span>{getToken(1094)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}