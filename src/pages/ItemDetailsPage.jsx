import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  Calendar,
} from 'lucide-react';
import { catalogItems } from '@/data/catalogData';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';
import { formatCurrency } from '@/utils/formatters';

export default function ItemDetailsPage() {
  const { id } = useParams();
  const item = catalogItems.find((entry) => entry.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(40);
  const [installments, setInstallments] = useState(48);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">{getToken(1025)}</h1>
        <Link to="/acervo" className="text-blue-700 font-bold hover:underline">
          {getToken(1006)}
        </Link>
      </div>
    );
  }

  // Cálculo ilustrativo de parcela
  const downPaymentValue = (item.price * downPaymentPercent) / 100;
  const financedAmount = item.price - downPaymentValue;
  const monthlyRate = 0.0139;
  const monthlyInstallment =
    (financedAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -installments));

  const buildDetailedWhatsappUrl = () => {
    const intro = getToken(BRAND_CONFIG.whatsappIntroToken);
    const message = [
      intro,
      `• Veículo: ${item.title} (${item.sku})`,
      `• Valor: ${formatCurrency(item.price)}`,
      `• Simulação: Entrada de ${formatCurrency(downPaymentValue)} (${downPaymentPercent}%) + ${installments}x de ${formatCurrency(monthlyInstallment)}`,
    ].join('\n');

    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Voltar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/acervo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{getToken(1000)}</span>
          </Link>
          <span className="text-xs font-semibold text-slate-400">
            SKU: {item.sku}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna Principal (8 colunas) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Galeria */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
              <div className="aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                <img
                  src={item.images[selectedImage]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {item.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {item.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-24 aspect-16/10 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        selectedImage === idx
                          ? 'border-blue-700 ring-2 ring-blue-700/20'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sobre o Veículo */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">
                {getToken(1132)}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {getToken(item.descriptionToken)}
              </p>
            </section>

            {/* Ficha Técnica Agrupada */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                {getToken(1042)}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {item.specGroups.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className="bg-slate-50 border border-slate-200/80 rounded-xl p-5"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
                      {getToken(group.groupTitleToken)}
                    </h3>
                    <dl className="space-y-3">
                      {group.items.map((spec, sIdx) => (
                        <div key={sIdx} className="border-b border-slate-200/60 pb-2 last:border-b-0 last:pb-0">
                          <dt className="text-xs text-slate-500">
                            {getToken(spec.labelToken)}
                          </dt>
                          <dd className="text-sm font-bold text-slate-900 mt-0.5">
                            {spec.valueToken ? getToken(spec.valueToken) : spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </section>

            {/* Opcionais e Equipamentos */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                {getToken(1043)}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.featureTokens.map((token, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-xl text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 size={17} className="text-blue-700 shrink-0" />
                    <span>{getToken(token)}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Lateral Fixa: Preço + Simulador + Ações (4 colunas) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              {item.badgeToken && (
                <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
                  {getToken(item.badgeToken)}
                </span>
              )}

              <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {item.title}
              </h1>
              <p className="text-sm text-slate-500 mt-1 mb-5">{item.subtitle}</p>

              <div className="py-4 border-t border-b border-slate-100 mb-6">
                <span className="block text-xs font-semibold text-slate-400 uppercase">
                  {getToken(1133)}
                </span>
                <span className="text-3xl font-black text-slate-950">
                  {formatCurrency(item.price)}
                </span>
              </div>

              {/* Simulador Rápido de Financiamento */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  <Calculator size={15} className="text-blue-700" />
                  <span>{getToken(1134)}</span>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                    <span>{getToken(1135)} ({downPaymentPercent}%)</span>
                    <span className="text-slate-900">{formatCurrency(downPaymentValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="70"
                    step="10"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-blue-700 cursor-pointer"
                  />
                </div>

                <div className="flex gap-1.5 mb-4">
                  {[24, 36, 48, 60].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setInstallments(months)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        installments === months
                          ? 'bg-blue-700 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {months}x
                    </button>
                  ))}
                </div>

                <div className="flex items-baseline justify-between pt-3 border-t border-slate-200">
                  <span className="text-xs text-slate-500">{getToken(1136)}:</span>
                  <span className="text-base font-extrabold text-blue-700">
                    {installments}x {formatCurrency(monthlyInstallment)}
                  </span>
                </div>
              </div>

              {/* Botões de Conversão */}
              <div className="space-y-3">
                <a
                  href={buildDetailedWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle size={19} />
                  <span>{getToken(1041)}</span>
                </a>

                <Link
                  to="/consultoria"
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
                >
                  <Calendar size={17} />
                  <span>{getToken(1137)}</span>
                </Link>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>{getToken(1010)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}