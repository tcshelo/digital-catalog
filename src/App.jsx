import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import ItemDetailsPage from '@/pages/ItemDetailsPage';
import ConciergePage from '@/pages/ConciergePage';
import { getStoredLang } from '@/utils/i18n';

export default function App() {
  const [lang, setLang] = useState(getStoredLang());

  useEffect(() => {
    const handleLanguageChange = () => setLang(getStoredLang());
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-amber-500 selection:text-zinc-950">
        <div>
          <Navbar currentLang={lang} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/acervo" element={<CatalogPage />} />
              <Route path="/item/:id" element={<ItemDetailsPage />} />
              <Route path="/consultoria" element={<ConciergePage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}