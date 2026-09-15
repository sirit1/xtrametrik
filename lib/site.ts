export const SITE_URL = 'https://www.xtrametrik.com'

export const LINKEDIN_NEWSLETTER_URL =
  'https://www.linkedin.com/newsletters/transformaci%C3%B3n-digital-ai-6985165860545912832'

export const LINKEDIN_PROFILE_URL =
  'https://www.linkedin.com/in/dr-alejandro-sirit-0659a414/'

export const CONTACT_EMAIL = 'alejandro.sirit@xtrametrik.com'

/**
 * Builds a LinkedIn share URL. We always encode an absolute URL so the link
 * never breaks when the article is published or re-shared.
 */
export function linkedinShareUrl(absoluteUrl: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl)}`
}