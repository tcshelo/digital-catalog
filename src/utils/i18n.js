import { ptBR } from './languages/language-pt-br';
import { enUS } from './languages/language-en';

const STORAGE_KEY = 'catalog_lang';

export function getStoredLang() {
  return localStorage.getItem(STORAGE_KEY) || 'PT';
}

export function setStoredLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new Event('languageChange'));
}

export function getToken(key) {
  const lang = getStoredLang();
  const dictionary = lang === 'EN' ? enUS : ptBR;
  return dictionary[key] !== undefined ? dictionary[key] : `[${key}]`;
}