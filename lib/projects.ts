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
  engine: 'ia' | 'blindaje' | 'o2o' | 'conversion' | 'webapp'
  name: string
  /** Live, clickable proof. */
  url: string
  urlLabel: string
  image: string
  /** Contain for brand marks; cover for screenshots. */
  imageFit?: 'cover' | 'contain'
  /** Short line under the name on cards (optional). */
  subtitle?: Record<Locale, string>
  /** Show a small “Hecho por XtraMetrik” credit on this project. */
  creditXtraMetrik?: boolean
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
    slug: 'revelatio',
    engine: 'ia',
    name: 'Revelatio',
    subtitle: {
      es: 'Biblia de estudio / inteligencia exegética',
      en: 'Bible study / exegetical intelligence',
    },
    url: 'https://revelatiobiblia.vercel.app',
    urlLabel: 'revelatiobiblia.vercel.app',
    image: '/brand/revelatio-logo-master.jpeg',
    imageFit: 'contain',
    creditXtraMetrik: true,
    orientation: 'landscape',
    imageAlt: {
      es: 'Logo de Revelatio by Efata: Biblia de estudio e inteligencia exegética',
      en: 'Revelatio by Efata logo: Bible study and exegetical intelligence',
    },
    sector: { es: 'Plataforma IA · Estudio bíblico · Community', en: 'AI Platform · Bible study · Community' },
    summary: {
      es: 'Producto IA en vivo de XtraMetrik para estudio profundo de Escrituras. Asistente que interpreta el texto bíblico, estructura el camino evangelístico en tres etapas, y activa la comunidad con campañas automatizadas vía API de WhatsApp —incluyendo "Buenos Días".',
      en: 'Live XtraMetrik AI product for deep Scripture study. Assistant interprets biblical text, structures the evangelistic journey in three stages, and activates community with automated WhatsApp API campaigns — including "Good Morning" activation.',
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
    slug: 'cafe-central',
    engine: 'webapp',
    name: 'Café Central',
    subtitle: {
      es: 'Carta digital · Castro, Chiloé',
      en: 'Digital menu · Castro, Chiloé',
    },
    url: 'https://cafe-central-8719.vercel.app',
    urlLabel: 'cafe-central-8719.vercel.app',
    image: '/projects/cafe-central-logo.png',
    imageFit: 'contain',
    creditXtraMetrik: true,
    orientation: 'landscape',
    imageAlt: {
      es: 'Logo de Café Central, carta digital en Castro, Chiloé',
      en: 'Café Central logo, digital menu in Castro, Chiloé',
    },
    sector: { es: 'Webapp · Gastronomía · Chiloé', en: 'Webapp · Hospitality · Chiloé' },
    summary: {
      es: 'Webapp pública y clickable: carta digital y pedidos para Café Central en Castro, Chiloé. Todavía no está terminada. Prueba de que la casa también construye webapps.',
      en: 'Public, clickable webapp: digital menu and orders for Café Central in Castro, Chiloé. Not finished yet. Proof that the firm also builds webapps.',
    },
    features: {
      es: [
        'Carta digital para pedir sin fila',
        'Pedidos con pago en la barra y retiro para llevar',
        'Local en Blanco Encalada, Castro, Chiloé',
        'Pública y clickable ahora. Aún en construcción.',
      ],
      en: [
        'Digital menu so guests can order without a queue',
        'Orders paid at the bar, pickup to go',
        'Shop on Blanco Encalada, Castro, Chiloé',
        'Public and clickable now. Still being built.',
      ],
    },
    stack: ['Next.js', 'Vercel', 'Carta digital'],
  },
  {
    slug: 'cobra',
    engine: 'webapp',
    name: 'Cobra',
    subtitle: {
      es: 'PWA de recibos por WhatsApp',
      en: 'WhatsApp receipts PWA',
    },
    url: 'https://cobra-rho.vercel.app',
    urlLabel: 'cobra-rho.vercel.app',
    image: '/projects/cobra-icon.png',
    imageFit: 'contain',
    creditXtraMetrik: true,
    orientation: 'landscape',
    imageAlt: {
      es: 'Icono de Cobra, PWA de recibos por WhatsApp hecha por XtraMetrik',
      en: 'Cobra icon, WhatsApp receipts PWA made by XtraMetrik',
    },
    sector: { es: 'Webapp · PWA · Recibos', en: 'Webapp · PWA · Receipts' },
    summary: {
      es: 'PWA de recibos por WhatsApp. Hecho por XtraMetrik. Ábrela: recibo, historial y ajustes. Sin cifras de usuarios que no podamos demostrar.',
      en: 'WhatsApp receipts PWA. Made by XtraMetrik. Open it: receipt, history and settings. No user counts we cannot prove.',
    },
    features: {
      es: [
        'Emitir un recibo y enviarlo por WhatsApp',
        'Historial de recibos en el dispositivo',
        'Ajustes de la PWA',
        'Hecho por XtraMetrik. Sin métricas inventadas.',
      ],
      en: [
        'Issue a receipt and send it on WhatsApp',
        'Receipt history on the device',
        'PWA settings',
        'Made by XtraMetrik. No invented metrics.',
      ],
    },
    stack: ['PWA', 'WhatsApp', 'Vercel'],
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
