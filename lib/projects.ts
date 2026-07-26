import type { Locale } from '@/lib/i18n/dictionary'

/**
 * Real, shipped work.
 *
 * RULE: every field here must be verifiable by clicking the live URL.
 * We deliberately do NOT publish user counts, download counts or revenue
 * figures that cannot be proven from the outside. This site sells compliance
 * auditing — an inflated number that a prospect can disprove in one click
 * costs more credibility than any metric could ever buy.
 *
 * If a metric is ever added here, it must be backed by analytics or invoicing
 * the client is willing to stand behind.
 */
export type Project = {
  slug: string
  /**
   * Which capability this work proves. 'ia' covers building AI products
   * end-to-end — the technical ground the AI Shielding engine stands on.
   */
  engine: 'ia' | 'blindaje' | 'o2o' | 'conversion'
  name: string
  /** Live, clickable proof. */
  url: string
  urlLabel: string
  image: string
  /** Mobile captures are portrait and must be height-capped, not stretched. */
  orientation: 'landscape' | 'portrait'
  imageAlt: Record<Locale, string>
  sector: Record<Locale, string>
  /** What it is, described by what it actually does. */
  summary: Record<Locale, string>
  /** Concrete, checkable capabilities. */
  features: Record<Locale, string[]>
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: 'cielo-efata-biblia',
    engine: 'ia',
    name: 'Cielo Efatá - Biblia de Estudio',
    url: 'https://v0-cieloefata-biblia.vercel.app',
    urlLabel: 'v0-cieloefata-biblia.vercel.app',
    image: '/projects/cielo-efata-web.png',
    orientation: 'landscape',
    imageAlt: {
      es: 'Cielo Efatá: asistente de IA para estudio profundo de la Biblia',
      en: 'Cielo Efatá: AI assistant for deep Bible study',
    },
    sector: { es: 'Plataforma IA · Estudio bíblico · Community', en: 'AI Platform · Bible study · Community' },
    summary: {
      es: 'Producto IA potenciado para estudio profundo de Escrituras. Asistente que interpreta el texto bíblico, estructura el camino evangelístico en tres etapas, y activa la comunidad con campañas automatizadas vía API de WhatsApp —incluyendo "Buenos Días".',
      en: 'AI-powered product for deep Scripture study. Assistant interprets biblical text, structures the evangelistic journey in three stages, and activates community with automated WhatsApp API campaigns — including "Good Morning" activation.',
    },
    features: {
      es: [
        'Asistente de IA que interpreta el texto bíblico en contexto profundo',
        'Análisis riguroso en hebreo y griego original',
        'Recorrido de tres etapas: Confesión → Conversión → Firmeza',
        'API de WhatsApp integrada para campañas automatizadas (Buenos Días y más)',
        'Área privada con historial y seguimiento verificable de progreso',
      ],
      en: [
        'AI assistant interpreting biblical text in deep context',
        'Rigorous analysis in Hebrew and Greek originals',
        'Three-stage journey: Confession → Conversion → Steadfastness',
        'Integrated WhatsApp API for automated campaigns (Good Morning and beyond)',
        'Private area with history and verifiable progress tracking',
      ],
    },
    stack: ['Next.js', 'AI SDK', 'Neon Postgres', 'Supabase Auth', 'WhatsApp API', 'Automation'],
  },
  {
    slug: 'cielo-efata-emocional',
    engine: 'ia',
    name: 'Cielo Efatá - App Evaluación Emocional',
    url: 'https://cielo-efata-app.vercel.app',
    urlLabel: 'cielo-efata-app.vercel.app',
    image: '/projects/cielo-efata-mobile.png',
    orientation: 'portrait',
    imageAlt: {
      es: 'App móvil de IA de Cielo Efatá: evaluación emocional científica',
      en: 'Cielo Efatá mobile AI app: scientific emotional evaluation',
    },
    sector: { es: 'Aplicación IA · Evaluación emocional · Salud mental', en: 'AI App · Emotional evaluation · Mental wellness' },
    summary: {
      es: 'Segundo producto IA: evaluación emocional científica basada en neurociencia. App móvil que administra un test de 7 preguntas (diseño divino + neurociencia) y genera un perfil emocional personal. Base para activación comunitaria y seguimiento de bienestar.',
      en: 'Second AI product: scientific emotional evaluation based on neuroscience. Mobile app administering a 7-question assessment (divine design + neuroscience) and generating a personal emotional profile. Foundation for community activation and wellness tracking.',
    },
    features: {
      es: [
        'Evaluación científica de emociones basada en neurociencia (7 preguntas)',
        'Generación instantánea de perfil emocional personalizado',
        'Registro de usuarios con historial y progreso de evaluaciones',
        'Análisis de patrones emocionales a lo largo del tiempo',
        'Integración con campañas de comunidad vía WhatsApp',
      ],
      en: [
        'Scientific emotional assessment based on neuroscience (7 questions)',
        'Instant generation of personalised emotional profile',
        'User accounts with evaluation history and progress',
        'Emotional pattern analysis over time',
        'Integration with community campaigns via WhatsApp',
      ],
    },
    stack: ['Next.js', 'React', 'AI Assessment', 'PWA', 'Responsive Design'],
  },
  {
    slug: 'tachira-protein',
    engine: 'o2o',
    name: 'Táchira Protein',
    url: 'https://linktr.ee/tachiraproteiin',
    urlLabel: 'linktr.ee/tachiraproteiin',
    image: '/projects/tachira-protein.png',
    orientation: 'portrait',
    imageAlt: {
      es: 'Canal digital O2O de Táchira Protein: de seguidores a clientes',
      en: 'Táchira Protein O2O digital channel: from followers to customers',
    },
    sector: { es: 'Suplementos deportivos · Retail', en: 'Sports supplements · Retail' },
    summary: {
      es: 'Método O2O en acción: identidad de marca + canal digital que convierte seguidores en clientes. Centraliza todos los puntos de contacto —Instagram, WhatsApp, catálogo y ubicación— en un único destino que educa, facilita y empuja hacia la venta.',
      en: 'O2O Method in action: brand identity + digital channel that converts followers into customers. Centralises every touchpoint — Instagram, WhatsApp, catalogue and location — into a single destination that educates, facilitates and drives sales.',
    },
    features: {
      es: [
        'Identidad visual y logotipo de marca alineados con el mercado',
        'Canal O2O único: EDUCA sobre el producto via redes → FACILITA la consulta por WhatsApp → EMPUJA hacia la compra',
        'Contacto directo por WhatsApp con respuesta comercial',
        'Catálogo de producto accesible y actualizable',
        'Ubicación física integrada para conversión offline',
      ],
      en: [
        'Visual identity and logo aligned with market position',
        'Single O2O channel: EDUCATE about products via social → FACILITATE enquiry via WhatsApp → PUSH to purchase',
        'Direct WhatsApp contact with sales response',
        'Accessible and updatable product catalogue',
        'Integrated physical location for offline conversion',
      ],
    },
    stack: ['Brand Identity', 'Linktree', 'Instagram', 'WhatsApp Business', 'Product Funnel'],
  },
]
