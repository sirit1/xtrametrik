export type Locale = 'es' | 'en'

export type DiagnosticAnswers = {
  companySize: string
  aiUsage: string
  hasPolicy: string
  dataExposure: string
  goal: string
}

export type RiskResult = {
  score: number
  level: 'high' | 'medium' | 'low'
  exposureLow: number
  exposureHigh: number
  findings: string[]
  actions: string[]
}

/** Weight tables. Higher weight = more exposure. */
const SIZE_WEIGHT: Record<string, number> = {
  '1-10': 8,
  '11-50': 16,
  '51-200': 24,
  '200+': 30,
}

const USAGE_WEIGHT: Record<string, number> = {
  none: 0,
  few: 12,
  many: 24,
  unknown: 28,
}

const POLICY_WEIGHT: Record<string, number> = {
  yes: 0,
  no: 20,
  unknown: 16,
}

const EXPOSURE_WEIGHT: Record<string, number> = {
  no: 0,
  yes: 22,
  unknown: 18,
}

/** Baseline remediation + sanction ceiling per team size, in euros. */
const SIZE_EXPOSURE: Record<string, number> = {
  '1-10': 40000,
  '11-50': 150000,
  '51-200': 480000,
  '200+': 1200000,
}

export function scoreDiagnostic(answers: DiagnosticAnswers, locale: Locale = 'es'): RiskResult {
  const score = Math.min(
    100,
    (SIZE_WEIGHT[answers.companySize] ?? 16) +
      (USAGE_WEIGHT[answers.aiUsage] ?? 20) +
      (POLICY_WEIGHT[answers.hasPolicy] ?? 16) +
      (EXPOSURE_WEIGHT[answers.dataExposure] ?? 18),
  )

  const level: RiskResult['level'] = score >= 65 ? 'high' : score >= 40 ? 'medium' : 'low'

  const ceiling = SIZE_EXPOSURE[answers.companySize] ?? 150000
  const factor = 0.25 + (0.75 * score) / 100
  const exposureHigh = Math.round((ceiling * factor) / 1000) * 1000
  const exposureLow = Math.round((exposureHigh * 0.35) / 1000) * 1000

  const es = locale === 'es'
  const findings: string[] = []
  const actions: string[] = []

  if (answers.hasPolicy === 'no') {
    findings.push(
      es
        ? 'No existe una política interna de uso de IA. Cualquier dato que un empleado pegue en una herramienta externa queda fuera de tu control y sin registro.'
        : 'No internal AI usage policy exists. Any data an employee pastes into an external tool leaves your control with no record of it.',
    )
    actions.push(
      es
        ? 'Publicar una política de uso de IA de una página, con herramientas aprobadas y datos prohibidos.'
        : 'Publish a one-page AI usage policy listing approved tools and forbidden data.',
    )
  } else if (answers.hasPolicy === 'unknown') {
    findings.push(
      es
        ? 'No hay certeza sobre la existencia de una política de IA. Ante un auditor, "creemos que sí" equivale a no tenerla.'
        : 'There is no certainty about an AI policy. To an auditor, "we think so" is the same as not having one.',
    )
    actions.push(
      es
        ? 'Verificar y centralizar la política vigente en un único documento firmado.'
        : 'Verify and centralise the current policy into a single signed document.',
    )
  }

  if (answers.dataExposure === 'yes') {
    findings.push(
      es
        ? 'Se introducen datos de clientes o financieros en herramientas de IA. Esto es tratamiento de datos sin base legal documentada y es directamente sancionable bajo el RGPD.'
        : 'Client or financial data is entered into AI tools. That is data processing without documented legal basis and is directly sanctionable under GDPR.',
    )
    actions.push(
      es
        ? 'Cortar el flujo de datos sensibles hacia herramientas no aprobadas y sustituirlas por un entorno con registro.'
        : 'Cut the flow of sensitive data to unapproved tools and replace them with a logged environment.',
    )
  } else if (answers.dataExposure === 'unknown') {
    findings.push(
      es
        ? 'No se sabe qué datos entran en las herramientas de IA. La falta de visibilidad es, en sí misma, el hallazgo más grave de este informe.'
        : 'It is unknown what data enters AI tools. That lack of visibility is itself the most serious finding in this report.',
    )
    actions.push(
      es
        ? 'Inventariar qué herramientas de IA se usan hoy y con qué datos, antes de decidir cualquier política.'
        : 'Inventory which AI tools are used today and with what data, before deciding any policy.',
    )
  }

  if (answers.aiUsage === 'unknown') {
    findings.push(
      es
        ? 'No hay medición del uso real de IA en el equipo. No puedes contener lo que no ves.'
        : 'There is no measurement of actual AI usage across the team. You cannot contain what you cannot see.',
    )
    actions.push(
      es
        ? 'Activar medición de uso de IA en la red corporativa durante una semana.'
        : 'Enable AI usage measurement on the corporate network for one week.',
    )
  } else if (answers.aiUsage === 'many') {
    findings.push(
      es
        ? 'El uso de IA está extendido en el equipo. La superficie de fuga crece con cada persona que no tiene una alternativa aprobada.'
        : 'AI usage is widespread across the team. The leak surface grows with every person who lacks an approved alternative.',
    )
  }

  if (findings.length === 0) {
    findings.push(
      es
        ? 'Tu punto de partida es sólido: hay política y los datos sensibles están acotados. El siguiente riesgo no es la fuga, es la falta de evidencia auditable de que ese control funciona.'
        : 'Your starting point is solid: a policy exists and sensitive data is contained. The next risk is not leakage, it is the lack of auditable evidence that the control works.',
    )
  }

  actions.push(
    es
      ? 'Certificar el control con evidencia trazable alineada a ISO/IEC 42001.'
      : 'Certify the control with traceable evidence aligned to ISO/IEC 42001.',
  )

  return { score, level, exposureLow, exposureHigh, findings, actions }
}

export const REPORT_COPY = {
  es: {
    docTitle: 'Diagnóstico de riesgo de IA',
    brand: 'XtraMetrik',
    preparedFor: 'Preparado para',
    date: 'Fecha',
    scoreLabel: 'Índice de exposición',
    levelLabel: 'Nivel de riesgo',
    levels: { high: 'ALTO', medium: 'MEDIO', low: 'CONTENIDO' },
    exposureTitle: 'Exposición económica estimada',
    exposureNote:
      'Rango estimado a partir de tus respuestas: coste de remediación más el tramo sancionador aplicable según el tamaño del equipo. No constituye asesoramiento legal.',
    findingsTitle: 'Hallazgos',
    actionsTitle: 'Plan de contención en 7 días',
    stepsTitle: 'Cómo lo cerramos',
    steps: [
      'Días 1-2 · Detectar: inventario de herramientas de IA y datos expuestos.',
      'Días 3-5 · Contener: política aplicada y flujos sensibles cortados.',
      'Días 6-7 · Certificar: evidencia trazable alineada a ISO/IEC 42001.',
    ],
    footer: 'XtraMetrik · info@xtrametrik.com · xtrametrik.com',
    disclaimer:
      'Informe automático generado a partir de un cuestionario de autoevaluación. La versión ampliada, revisada por el Dr. Sirit, llega a tu email.',
    answersTitle: 'Respuestas registradas',
    urgencyTitle: 'Cada día que esperas tiene un precio',
    dailyCostLabel: 'Coste estimado por cada día sin actuar',
    urgencyBody:
      'Tu exposición no se congela mientras decides: crece con cada dato que sale sin registro. La cifra de arriba es tu propio rango de exposición repartido por día.',
    validLabel: 'Esta lectura y la plaza de auditoría son válidas hasta',
    scarcityNote:
      'Reservamos 4 auditorías de contención al mes para poder cerrarlas en 7 días. Después de la fecha indicada, la plaza pasa al mes siguiente.',
    ctaTitle: 'Reserva tu plaza ahora',
    ctaBody: 'Escribe a info@xtrametrik.com con el asunto "AUDITORIA 7 DIAS" o responde al email que acabas de recibir. Te confirmamos la plaza en menos de 24 horas.',
    ctaButton: 'Reservar la auditoría de contención',
  },
  en: {
    docTitle: 'AI Risk Assessment',
    brand: 'XtraMetrik',
    preparedFor: 'Prepared for',
    date: 'Date',
    scoreLabel: 'Exposure index',
    levelLabel: 'Risk level',
    levels: { high: 'HIGH', medium: 'MEDIUM', low: 'CONTAINED' },
    exposureTitle: 'Estimated financial exposure',
    exposureNote:
      'Range estimated from your answers: remediation cost plus the applicable sanction bracket for your team size. This is not legal advice.',
    findingsTitle: 'Findings',
    actionsTitle: '7-day containment plan',
    stepsTitle: 'How we close it',
    steps: [
      'Days 1-2 · Detect: inventory of AI tools and exposed data.',
      'Days 3-5 · Contain: enforced policy and sensitive flows cut off.',
      'Days 6-7 · Certify: traceable evidence aligned to ISO/IEC 42001.',
    ],
    footer: 'XtraMetrik · info@xtrametrik.com · xtrametrik.com',
    disclaimer:
      'Automated report generated from a self-assessment questionnaire. The extended version, reviewed by Dr. Sirit, arrives in your inbox.',
    answersTitle: 'Recorded answers',
    urgencyTitle: 'Every day you wait has a price',
    dailyCostLabel: 'Estimated cost for every day without acting',
    urgencyBody:
      'Your exposure does not freeze while you decide: it grows with every piece of data that leaves unlogged. The figure above is your own exposure range spread across a day.',
    validLabel: 'This reading and your audit slot are valid until',
    scarcityNote:
      'We reserve 4 containment audits per month so we can close them in 7 days. After the date above, the slot rolls over to the following month.',
    ctaTitle: 'Reserve your slot now',
    ctaBody: 'Email info@xtrametrik.com with the subject "7 DAY AUDIT" or reply to the email you just received. We confirm your slot within 24 hours.',
    ctaButton: 'Reserve the containment audit',
  },
} as const

/**
 * Cost of every day without acting, derived from the lead's own low-end
 * exposure spread across a year. Real arithmetic, not invented scarcity.
 */
export function dailyCostOfInaction(result: RiskResult) {
  return Math.max(1, Math.round(result.exposureLow / 365))
}

/** Deadline for the diagnostic to stay valid: 7 days from issue. */
export function validUntil(from: Date = new Date()) {
  const date = new Date(from)
  date.setDate(date.getDate() + 7)
  return date
}

export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function formatEuro(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === 'es' ? 'es-ES' : 'en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}
