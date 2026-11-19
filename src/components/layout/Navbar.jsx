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
    { path: '/', labelToken: 1008 },          // Início
    { path: '/acervo', labelToken: 1000 },    // Acervo
    { path: '/consultoria', labelToken: 1002 } // Consultoria VIP
  ];

  const getLinkClass = ({ isActive }) =>
    `text-sm font-bold tracking-wide transition-colors ${
      isActive ? 'text-amber-400' : 'text-zinc-300 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          {BRAND_CONFIG.brandName}
          <span className="text-amber-400 ml-1">{BRAND_CONFIG.brandHighlight}</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={getLinkClass}>
              {getToken(item.labelToken)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            aria-label="Toggle Language"
          >
            <Globe size={15} className="text-amber-400" />
            <span>{currentLang === 'PT' ? 'PT-BR' : 'EN-US'}</span>
          </button>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-xl border border-zinc-800 cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4 flex flex-col gap-4">
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