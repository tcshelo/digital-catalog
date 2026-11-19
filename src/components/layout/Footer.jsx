import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken } from '@/utils/i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="footer-brand">
            {BRAND_CONFIG.brandName}
            <span className="brand-logo-accent">{BRAND_CONFIG.brandHighlight}</span>
          </Link>
          <p className="footer-copy">
            © {currentYear} {BRAND_CONFIG.brandName} {BRAND_CONFIG.brandHighlight}.
          </p>
        </div>

        <nav className="footer-nav">
          <Link to="/" className="footer-link">
            {getToken(1008)}
          </Link>
          <Link to="/acervo" className="footer-link">
            {getToken(1000)}
          </Link>
          <Link to="/consultoria" className="footer-link">
            {getToken(1002)}
          </Link>
        </nav>
      </div>
    </footer>
  );
}