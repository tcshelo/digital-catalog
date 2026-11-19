import { getToken } from '@/utils/i18n';
import { BRAND_CONFIG } from '@/config/brandConfig';

export function buildQuoteWhatsappUrl(item) {
  const intro = getToken(BRAND_CONFIG.whatsappIntroToken);
  const message = `${intro}\n• ${item.title} (${item.subtitle})\n• Ref: ${item.sku}`;
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}