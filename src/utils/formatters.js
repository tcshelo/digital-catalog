import { getStoredLang } from './i18n';

export function formatCurrency(value) {
  const lang = getStoredLang();
  if (lang === 'EN') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value / 5.5);
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}