import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Award, Truck, Headphones } from 'lucide-react';
import CatalogCard from '@/components/catalog/CatalogCard';
import { catalogItems, FILTER_DEFINITIONS } from '@/data/catalogData';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

const ICON_MAP = { ShieldCheck, Award, Truck, Headphones };

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [quickQuery, setQuickQuery] = useState('');

  const brands = FILTER_DEFINITIONS.find((f) => f.key === 'brand')?.options || [];

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedBrand) params.set('brand', selectedBrand);
    if (quickQuery.trim()) params.set('q', quickQuery.trim());
    navigate(`/acervo?${params.toString()}`);
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Claro & Editorial */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              {getToken(BRAND_CONFIG.heroBadgeToken)}
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {getToken(BRAND_CONFIG.heroTitleToken)}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {getToken(BRAND_CONFIG.heroSubtitleToken)}
            </p>

            {/* Buscador Rápido Integrado */}
            <form
              onSubmit={handleQuickSearch}
              className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md flex flex-col sm:flex-row gap-2.5"
            >
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-blue-600 sm:w-44 cursor-pointer"
              >
                <option value="">{getToken(1101)} (Todas)</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder={getToken(1020)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Search size={18} />
                <span>{getToken(1006)}</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-16/10 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <img
                src={BRAND_CONFIG.heroImage}
                alt="Showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Destaques do Estoque (Separado com fundo branco limpo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              {getToken(1005)}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              {getToken(1009)}
            </h2>
          </div>

          <Link
            to="/acervo"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800"
          >
            <span>{getToken(1006)}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.slice(0, 3).map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 3. Diferenciais (Bloco separado em slate-50) */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              {getToken(1028)}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              {getToken(1029)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_CONFIG.pillars.map((pillar, idx) => {
              const Icon = ICON_MAP[pillar.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {getToken(pillar.titleToken)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {getToken(pillar.descToken)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}