import React, { useState, useMemo } from 'react';
import FilterBar from '@/components/catalog/FilterBar';
import CatalogCard from '@/components/catalog/CatalogCard';
import { catalogItems } from '@/data/catalogData';
import { getToken } from '@/utils/i18n';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return catalogItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;

      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.subtitle.toLowerCase().includes(normalizedQuery) ||
        item.sku.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <header className="mb-10 border-b border-zinc-800/80 pb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
          {getToken(1005)}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-3">
          {getToken(1000)}
        </h1>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
          {getToken(1004)}
        </p>
      </header>

      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-zinc-900/40 border border-zinc-800 rounded-2xl">
          <p className="text-zinc-400 mb-4">{getToken(1025)}</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-amber-400 text-sm font-bold rounded-xl transition-colors cursor-pointer"
          >
            {getToken(1026)}
          </button>
        </div>
      )}
    </div>
  );
}