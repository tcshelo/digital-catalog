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
    <div className="filter-bar-wrap">
      <div className="filter-pills-row">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={isActive ? 'filter-pill-btn-active' : 'filter-pill-btn'}
            >
              {getToken(category.labelToken)}
            </button>
          );
        })}
      </div>

      <div className="search-box-wrap">
        <Search size={18} className="search-box-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={getToken(1020)}
          className="search-box-input"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="search-box-clear"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}