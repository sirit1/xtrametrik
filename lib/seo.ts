/** Apex home canonical. Do not use revelatio.app or invent product keywords. */
export const HOME_CANONICAL = 'https://xtrametrik.com'

export const HOME_TITLE =
  'Fuga de datos ChatGPT empresa: menos multa · diagnóstico de 5 preguntas | XtraMetrik'

export const HOME_DESCRIPTION =
  'AILock: manejo de riesgo de IA. Menos fuga de datos de empresa a ChatGPT y Claude, menos riesgo de multa. Empieza el diagnóstico de AILock: 5 preguntas, PDF al instante.'

export const HOME_KEYWORDS =
  'fuga de datos ChatGPT empresa, multa, diagnóstico, Claude, AILock, XtraMetrik'

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
