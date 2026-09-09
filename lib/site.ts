export const SITE_URL = 'https://www.xtrametrik.com'

export const LINKEDIN_NEWSLETTER_URL =
  'https://www.linkedin.com/newsletters/transformaci%C3%B3n-digital-ai-6985165860545912832'

export const LINKEDIN_PROFILE_URL =
  'https://www.linkedin.com/in/dr-alejandro-sirit-0659a414/'

export const CONTACT_EMAIL = 'info@xtrametrik.com'

/** Quiet WhatsApp line on the marketing site. Not a competing primary CTA. */
export const WHATSAPP_URL =
  'https://wa.me/573107860864?text=' +
  encodeURIComponent('Hola, quiero el diagnóstico de 5 preguntas de XtraMetrik.')

/**
 * Builds a LinkedIn share URL. We always encode an absolute URL so the link
 * never breaks when the article is published or re-shared.
 */
export function linkedinShareUrl(absoluteUrl: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`
}
