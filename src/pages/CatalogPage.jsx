import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import CatalogCard from '@/components/catalog/CatalogCard';
import { catalogItems } from '@/data/catalogData';
import { getToken } from '@/utils/i18n';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const initialBrand = searchParams.get('brand');

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({
    brand: initialBrand ? [initialBrand] : [],
    category: [],
    color: [],
    fuel: [],
  });

  const handleToggleFilter = (groupKey, value) => {
    setActiveFilters((prev) => {
      const currentList = prev[groupKey] || [];
      const exists = currentList.includes(value);
      return {
        ...prev,
        [groupKey]: exists
          ? currentList.filter((item) => item !== value)
          : [...currentList, value],
      };
    });
  };

  const handleClearAll = () => {
    setActiveFilters({ brand: [], category: [], color: [], fuel: [] });
    setSearchQuery('');
  };

  // Lógica de filtragem combinada (AND entre grupos, OR dentro do mesmo grupo)
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = catalogItems.filter((item) => {
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      return Object.entries(activeFilters).every(([key, selectedValues]) => {
        if (!selectedValues || selectedValues.length === 0) return true;
        return selectedValues.includes(item.attributes[key]);
      });
    });

    if (sortBy === 'price-asc') {
      return [...result].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeFilters, searchQuery, sortBy]);

  // Chips dos filtros selecionados no topo
  const activeChips = Object.entries(activeFilters).flatMap(([key, values]) =>
    values.map((val) => ({ key, val }))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Página */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {getToken(1000)}
          </h1>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">
            {getToken(1004)}
          </p>
        </div>

        {/* Barra Superior de Busca + Ordenação */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 shadow-sm flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getToken(1020)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl pl-10 pr-9 py-2.5 text-sm text-slate-900 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="sort" className="text-xs font-semibold text-slate-500">
              {getToken(1105)}:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-blue-600 cursor-pointer"
            >
              <option value="featured">{getToken(1106)}</option>
              <option value="price-asc">{getToken(1107)}</option>
              <option value="price-desc">{getToken(1108)}</option>
            </select>
          </div>
        </div>

        {/* Chips de Filtros Combinados Ativos */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {activeChips.map(({ key, val }) => (
              <span
                key={`${key}-${val}`}
                className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
              >
                <span>{val}</span>
                <button
                  onClick={() => handleToggleFilter(key, val)}
                  className="hover:text-blue-950 cursor-pointer"
                >
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Layout Principal: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3">
            <FilterSidebar
              activeFilters={activeFilters}
              onToggleFilter={handleToggleFilter}
              onClearAll={handleClearAll}
              totalResults={filteredItems.length}
            />
          </div>

          <div className="lg:col-span-9">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">
                <p className="text-slate-600 font-medium mb-4">{getToken(1025)}</p>
                <button
                  onClick={handleClearAll}
                  className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {getToken(1026)}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}