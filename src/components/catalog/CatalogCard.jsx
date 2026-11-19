import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getToken } from '@/utils/i18n';
import { formatCurrency } from '@/utils/formatters';

export default function CatalogCard({ item }) {
  return (
    <article className="vehicle-card">
      <div>
        <Link to={`/item/${item.id}`} className="vehicle-card-media">
          <img
            src={item.images[0]}
            alt={item.title}
            className="vehicle-card-img"
          />
          {item.badgeToken && (
            <span className="vehicle-card-badge">
              {getToken(item.badgeToken)}
            </span>
          )}
        </Link>

        <div className="vehicle-card-body">
          <div className="vehicle-card-meta">
            <span>{item.attributes.brand}</span>
            <span>Ref: {item.sku}</span>
          </div>

          <Link to={`/item/${item.id}`}>
            <h3 className="vehicle-card-title">{item.title}</h3>
          </Link>

          <p className="vehicle-card-subtitle">{item.subtitle}</p>
          <p className="vehicle-card-price">{formatCurrency(item.price)}</p>

          <div className="vehicle-card-specs">
            {item.highlights.map((spec, idx) => (
              <div key={idx} className="spec-chip">
                <span className="spec-chip-label">{getToken(spec.labelToken)}</span>
                <span className="spec-chip-value">
                  {spec.valueToken ? getToken(spec.valueToken) : spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="vehicle-card-footer">
        <Link to={`/item/${item.id}`} className="btn-primary-block">
          <span>{getToken(1040)}</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}