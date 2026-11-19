import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brandConfig';
import { getToken, setStoredLang } from '@/utils/i18n';

export default function Navbar({ currentLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setStoredLang(currentLang === 'PT' ? 'EN' : 'PT');
  };

  const navItems = [
    { path: '/', labelToken: 1008 },
    { path: '/acervo', labelToken: 1000 },
    { path: '/consultoria', labelToken: 1002 },
  ];

  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link-active' : 'nav-link';

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-logo">
          {BRAND_CONFIG.brandName}
          <span className="brand-logo-accent">{BRAND_CONFIG.brandHighlight}</span>
        </Link>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={getLinkClass}>
              {getToken(item.labelToken)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleLanguage} className="btn-lang">
            <Globe size={15} className="text-primary" />
            <span>{currentLang === 'PT' ? 'PT-BR' : 'EN-US'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden btn-lang"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-surface border-b border-border px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={getLinkClass}
            >
              {getToken(item.labelToken)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}