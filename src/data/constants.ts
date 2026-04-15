export const WHATSAPP_NUMBER = "254722433910";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const whatsappLink = (message: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

export const PHONE = "+254 722 433 910";
export const EMAIL = "info@roamingafricasafaris.com";
export const COMPANY = "Roaming Africa Tours and Safaris";
export const LOCATION = "Nairobi, Kenya";
