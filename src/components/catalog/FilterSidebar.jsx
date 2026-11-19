import React from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import { FILTER_DEFINITIONS } from '@/data/catalogData';
import { getToken } from '@/utils/i18n';

export default function FilterSidebar({
  activeFilters,
  onToggleFilter,
  onClearAll,
  totalResults,
}) {
  const hasActiveFilters = Object.values(activeFilters).some(
    (arr) => arr && arr.length > 0
  );

  return (
    <aside className="sidebar-box">
      <div className="sidebar-header">
        <div className="sidebar-title-wrap">
          <SlidersHorizontal size={18} className="sidebar-icon" />
          <span>{getToken(1100)}</span>
        </div>

        {hasActiveFilters && (
          <button onClick={onClearAll} className="btn-clear-filters">
            <RotateCcw size={13} />
            <span>{getToken(1026)}</span>
          </button>
        )}
      </div>

      <div className="sidebar-groups">
        {FILTER_DEFINITIONS.map((group) => {
          const selectedValues = activeFilters[group.key] || [];

          return (
            <div key={group.key} className="filter-group">
              <h3 className="filter-group-title">
                {getToken(group.labelToken)}
              </h3>

              <div className="filter-options">
                {group.options.map((opt) => {
                  const optionValue = typeof opt === 'string' ? opt : opt.value;
                  const optionLabel =
                    typeof opt === 'string' ? opt : getToken(opt.labelToken);
                  const isChecked = selectedValues.includes(optionValue);

                  return (
                    <label key={optionValue} className="filter-option-label">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleFilter(group.key, optionValue)}
                        className="filter-checkbox"
                      />
                      <span className={isChecked ? 'filter-option-active' : undefined}>
                        {optionLabel}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="sidebar-footer-count">
        {totalResults} {getToken(1104)}
      </div>
    </aside>
  );
}