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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Informações do Showroom */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
              {getToken(1002)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              {getToken(1092)}
            </h1>
            <p className="text-zinc-400 leading-relaxed">
              {getToken(1093)}
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800 text-sm text-zinc-300">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <span>Av. Beira Rio, 1200 — Showroom Privativo</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <span>Seg a Sex: 09h às 19h • Sáb: 09h às 14h</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <span>+55 (47) 99999-9999</span>
            </div>
          </div>
        </div>

        {/* Formulário Direto para WhatsApp */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSendCustomRequest}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 space-y-6"
          >
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                {getToken(1095)}
              </label>
              <input
                type="text"
                required
                value={desiredModel}
                onChange={(e) => setDesiredModel(e.target.value)}
                placeholder="Ex: Porsche 911 Carrera S / BMW M3 Competition"
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                {getToken(1096)}
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ano desejado, cor externa/interna, blindagem ou pacote específico..."
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <MessageCircle size={20} />
              <span>{getToken(1094)}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}