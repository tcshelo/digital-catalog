import React, { useState } from 'react';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

export default function ConciergePage() {
  const [desiredModel, setDesiredModel] = useState('');
  const [notes, setNotes] = useState('');

  const handleSendCustomRequest = (e) => {
    e.preventDefault();
    const intro = getToken(BRAND_CONFIG.whatsappCustomRequestToken);
    const details = desiredModel ? `\n• Modelo desejado: ${desiredModel}` : '';
    const extra = notes ? `\n• Preferências: ${notes}` : '';
    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      `${intro}${details}${extra}`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-wrapper">
      <div className="split-layout-12">
        <div className="col-info-5">
          <span className="badge-pill">{getToken(1002)}</span>
          <h1 className="heading-page">{getToken(1092)}</h1>
          <p className="text-lead">{getToken(1093)}</p>

          <div className="info-list-box">
            <div className="info-row">
              <MapPin size={19} className="info-icon" />
              <span>Av. Beira Rio, 1200 — Showroom Privativo</span>
            </div>
            <div className="info-row">
              <Clock size={19} className="info-icon" />
              <span>Seg a Sex: 09h às 19h • Sáb: 09h às 14h</span>
            </div>
            <div className="info-row">
              <Phone size={19} className="info-icon" />
              <span>+55 (47) 99999-9999</span>
            </div>
          </div>
        </div>

        <div className="col-form-7">
          <form onSubmit={handleSendCustomRequest} className="panel-box-lg">
            <div className="field-group">
              <label className="field-label">{getToken(1095)}</label>
              <input
                type="text"
                required
                value={desiredModel}
                onChange={(e) => setDesiredModel(e.target.value)}
                placeholder="Ex: Porsche 911 Carrera S / BMW M3 Competition"
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label">{getToken(1096)}</label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ano desejado, cor externa/interna, blindagem ou pacote específico..."
                className="field-textarea"
              />
            </div>

            <button type="submit" className="btn-whatsapp-block">
              <MessageCircle size={20} />
              <span>{getToken(1094)}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}