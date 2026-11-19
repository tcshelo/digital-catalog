import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getToken } from '@/utils/i18n';

export default function CatalogCard({ item }) {
  return (
    <article className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all flex flex-col justify-between group">
      <div>
        <Link
          to={`/item/${item.id}`}
          className="block relative aspect-video w-full overflow-hidden bg-zinc-950"
        >
          <img
            src={item.images[0]}
            alt={item.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          {item.badgeToken && (
            <span className="absolute top-3 left-3 text-xs font-bold text-amber-400 uppercase tracking-wider bg-zinc-950/90 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/30">
              {getToken(item.badgeToken)}
            </span>
          )}
        </Link>

        <div className="p-6">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
            {item.subtitle}
          </p>
          <Link to={`/item/${item.id}`}>
            <h3 className="text-xl font-black text-white hover:text-amber-400 transition-colors mb-2">
              {item.title}
            </h3>
          </Link>
          <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
            {getToken(item.descriptionToken)}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-800/80">
            {item.highlights.map((spec, idx) => (
              <div
                key={idx}
                className="bg-zinc-950/70 px-3 py-2 rounded-lg border border-zinc-800/80"
              >
                <span className="block text-[11px] text-zinc-500 uppercase">
                  {getToken(spec.labelToken)}
                </span>
                <span className="text-xs font-bold text-zinc-200">
                  {spec.valueToken ? getToken(spec.valueToken) : spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Link
          to={`/item/${item.id}`}
          className="w-full py-3 px-4 bg-zinc-800 hover:bg-amber-500 text-zinc-100 hover:text-zinc-950 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <span>{getToken(1040)}</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}