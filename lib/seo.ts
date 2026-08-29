/** Apex home canonical. Do not use revelatio.app or invent product keywords. */
export const HOME_CANONICAL = 'https://xtrametrik.com'

export const HOME_TITLE =
  'Fuga de datos ChatGPT empresa: menos multa · diagnóstico de 5 preguntas | XtraMetrik'

export const HOME_DESCRIPTION =
  'Menos riesgo de multa y menos fuga de datos de empresa a ChatGPT y Claude. Diagnóstico gratuito de 5 preguntas. PDF al instante. AILock, el producto que detiene la fuga, está en construcción.'

export const HOME_KEYWORDS =
  'fuga de datos ChatGPT empresa, multa, diagnóstico, Claude, AILock, XtraMetrik'

/**
 * One FAQPage for the home. Three facts only: who we are, what the
 * questionnaire is, that AILock is not built yet. No gobernanza keyword.
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
        text: 'XtraMetrik es la casa matriz que construye webapps y AILock. El trabajo comercial es manejo de riesgo de IA: menos fuga de datos de empresa a ChatGPT y Claude, y menos riesgo de multa. Los productos en vivo son prueba de ejecución, no la marca.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el diagnóstico de 5 preguntas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un cuestionario gratuito. Cinco preguntas sobre cómo usa tu equipo ChatGPT, Claude u otras IAs con datos de empresa. Al terminar descargas un PDF con tu exposición. Esa es la puerta comercial. No es una demo de producto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿AILock ya está en producción?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AILock es el producto estrella de XtraMetrik para control de fugas — lo que pegas en ChatGPT o Claude no se va a la competencia — y todavía está en construcción. No hay demo ni instalación. Hoy medimos la exposición con el diagnóstico de 5 preguntas.',
      },
    },
  ],
} as const
