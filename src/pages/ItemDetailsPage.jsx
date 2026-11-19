import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-react';
import { catalogItems } from '@/data/catalogData';
import { getToken } from '@/utils/i18n';
import { buildQuoteWhatsappUrl } from '@/utils/whatsappHelper';

export default function ItemDetailsPage() {
  const { id } = useParams();
  const item = catalogItems.find((entry) => entry.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">{getToken(1025)}</h1>
        <Link
          to="/acervo"
          className="inline-flex items-center gap-2 text-amber-400 font-bold hover:underline"
        >
          <ArrowLeft size={18} />
          <span>{getToken(1006)}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/acervo"
        className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-amber-400 transition-colors mb-8"
      >
        <ArrowLeft size={18} />
        <span>{getToken(1000)}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Coluna Esquerda: Galeria + Especificações */}
        <div className="lg:col-span-8">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 mb-4">
            <img
              src={item.images[selectedImage]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Miniaturas */}
          {item.images.length > 1 && (
            <div className="flex gap-3 mb-10">
              {item.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === idx
                      ? 'border-amber-500 opacity-100'
                      : 'border-zinc-800 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Descrição e Ficha Técnica */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">{getToken(1042)}</h2>
            <p className="text-zinc-300 leading-relaxed mb-8">
              {getToken(item.descriptionToken)}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {item.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-xl"
                >
                  <span className="block text-xs text-zinc-400 mb-1">
                    {getToken(spec.labelToken)}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {spec.valueToken ? getToken(spec.valueToken) : spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Itens de Série */}
          {item.featureTokens && item.featureTokens.length > 0 && (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">{getToken(1043)}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.featureTokens.map((token, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-zinc-950/50 border border-zinc-800/80 px-4 py-3 rounded-xl text-sm text-zinc-300"
                  >
                    <span className="text-amber-400 mr-3 font-bold">✓</span>
                    <span>{getToken(token)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Coluna Direita: Painel Fixo de Cotação */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {item.badgeToken && (
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 inline-block mb-3">
                {getToken(item.badgeToken)}
              </span>
            )}
            <p className="text-sm text-zinc-400">
              {item.subtitle} • Ref: {item.sku}
            </p>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-6">
              {item.title}
            </h1>

            <div className="space-y-3 border-t border-b border-zinc-800 py-5 mb-6 text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-amber-400 shrink-0" />
                <span>{getToken(1010)}</span>
              </div>
            </div>

            <a
              href={buildQuoteWhatsappUrl(item)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20"
            >
              <MessageCircle size={20} />
              <span>{getToken(1041)}</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}