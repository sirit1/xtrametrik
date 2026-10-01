/** Apex home canonical. Do not use revelatio.app or invent product keywords. */
export const HOME_CANONICAL = 'https://xtrametrik.com'

export const GOOGLE_SITE_VERIFICATION =
  'FjCx5lNWhQKJZL8ixbD2usxHpd_b5aDeUk3D2BDynpY'

export const HOME_OG_IMAGE = '/og.png'
export const HOME_LOGO = '/brand/xtrametrik-logo.png'

export const HOME_TITLE =
  'Riesgo de IA en pymes: fuga a ChatGPT y multa | XtraMetrik'

export const HOME_DESCRIPTION =
  'Riesgo de IA para pymes: evita fugas de datos a ChatGPT o Claude y el riesgo de multa. El primer paso es el diagnóstico de AILock: 5 preguntas y un PDF.'

export const HOME_KEYWORDS =
  'riesgo de IA pymes, fuga de datos ChatGPT, Claude, multa, diagnóstico AILock, XtraMetrik'

export const homeOgImages = [
  {
    url: HOME_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: 'XtraMetrik',
  },
]

/**
 * One FAQPage for the home. What XtraMetrik is, what the AILock diagnosis is,
 * how to start. No gobernanza. No claim of a forced install.
 */
export const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es XtraMetrik?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XtraMetrik es la casa matriz de AILock, manejo de riesgo de IA: menos fuga de datos de empresa a ChatGPT y Claude, y menos riesgo de multa. También construye webapps. Los productos en vivo son prueba de ejecución.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el diagnóstico de AILock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El primer paso de AILock. Cinco preguntas sobre cómo usa tu equipo ChatGPT, Claude u otras IAs con datos de empresa. Al terminar descargas un PDF con tu exposición. Hoy existen las 5 preguntas y el PDF.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo empiezo con AILock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empieza el diagnóstico de AILock y mide tu exposición. No afirmamos un despliegue forzado en tu empresa. El cuestionario es la conversión: 5 preguntas y un PDF.',
      },
    },
  ],
} as const

/** Organization + ProfessionalService. Name, url and logo only. No reviews or figures. */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Xtrametrik',
  url: HOME_CANONICAL,
  logo: `${HOME_CANONICAL}${HOME_LOGO}`,
  image: `${HOME_CANONICAL}${HOME_OG_IMAGE}`,
} as const

/** Landing /diagnostico-riesgo-ia — Spanish only, no invent figures. */
export const DIAGNOSTICO_CANONICAL = `${HOME_CANONICAL}/diagnostico-riesgo-ia`

export const DIAGNOSTICO_TITLE =
  'Diagnóstico gratis de riesgo de IA para pymes | Xtrametrik'

export const DIAGNOSTICO_DESCRIPTION =
  'Responde 5 preguntas y recibe un PDF con el nivel de riesgo de IA de tu pyme: fuga de datos a ChatGPT y Claude, y cómo evitar multas. AILock de Xtrametrik.'

export const diagnosticoFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Es gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El diagnóstico de 5 preguntas y el PDF son gratuitos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Tengo que instalar algo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Solo respondes el cuestionario en el navegador y descargas el PDF.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hacen con mis respuestas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solo se usan para tu informe y para contactarte.',
      },
    },
  ],
} as const
