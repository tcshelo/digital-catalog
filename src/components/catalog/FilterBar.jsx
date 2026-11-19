import React from 'react';
import { Search, X } from 'lucide-react';
import { getToken } from '@/utils/i18n';
import { CATEGORIES } from '@/data/catalogData';

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-10">
      {/* Botões de Categoria */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {getToken(category.labelToken)}
            </button>
          );
        })}
      </div>

      {/* Campo de Pesquisa */}
      <div className="relative w-full md:w-80">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={getToken(1020)}
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 rounded-xl pl-10 pr-9 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}