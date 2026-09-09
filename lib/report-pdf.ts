import { jsPDF } from 'jspdf'
import {
  REPORT_COPY,
  dailyCostOfInaction,
  formatDate,
  formatEuro,
  validUntil,
  type Locale,
  type RiskResult,
} from '@/lib/diagnostic'

export type ReportInput = {
  name: string
  email: string
  company?: string
  role?: string
  locale: Locale
  result: RiskResult
  answers: { label: string; value: string }[]
}

const ORANGE: [number, number, number] = [255, 107, 53]
const INK: [number, number, number] = [13, 13, 13]
const MUTED: [number, number, number] = [110, 110, 110]
const LINE: [number, number, number] = [226, 226, 226]

const PAGE_W = 595.28
const PAGE_H = 841.89
const M = 48
const CONTENT_W = PAGE_W - M * 2

export function buildReportDoc(input: ReportInput) {
  const { locale, result } = input
  const copy = REPORT_COPY[locale]
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const issued = new Date()

  let y = 0
  let page = 1

  function ensure(space: number) {
    if (y + space <= PAGE_H - M - 28) return
    footer()
    doc.addPage()
    page += 1
    y = M
  }

  function footer() {
    doc.setDrawColor(...LINE)
    doc.setLineWidth(0.5)
    doc.line(M, PAGE_H - M - 16, PAGE_W - M, PAGE_H - M - 16)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(...MUTED)
    doc.text(copy.footer, M, PAGE_H - M - 4)
    doc.text(String(page), PAGE_W - M, PAGE_H - M - 4, { align: 'right' })
  }

  function heading(text: string) {
    ensure(40)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8.5)
    doc.setTextColor(...ORANGE)
    doc.text(text.toUpperCase(), M, y)
    y += 7
    doc.setDrawColor(...ORANGE)
    doc.setLineWidth(1.5)
    doc.line(M, y, M + 26, y)
    y += 17
  }

  function paragraph(text: string, size = 9.5, color = MUTED) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(size)
    doc.setTextColor(...color)
    const lines = doc.splitTextToSize(text, CONTENT_W) as string[]
    ensure(lines.length * (size + 3.5))
    doc.text(lines, M, y)
    y += lines.length * (size + 3.5)
  }

  // ---------- Brand header ----------
  doc.setFillColor(...INK)
  doc.rect(0, 0, PAGE_W, 96, 'F')
  doc.setFillColor(...ORANGE)
  doc.rect(0, 92, PAGE_W, 4, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(17)
  doc.setTextColor(255, 255, 255)
  doc.text(copy.brand.toUpperCase(), M, 42)

  doc.setFontSize(8)
  doc.setTextColor(...ORANGE)
  doc.text('AILOCK · AI RISK MANAGEMENT', M, 57)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(255, 255, 255)
  doc.text(copy.docTitle, M, 79)

  doc.setFontSize(8)
  doc.setTextColor(190, 190, 190)
  doc.text(`${copy.date}: ${formatDate(issued, locale)}`, PAGE_W - M, 79, { align: 'right' })

  y = 96 + 34

  // ---------- Prepared for ----------
  const who = [input.name, input.role, input.company].filter(Boolean).join(' · ')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...MUTED)
  doc.text(copy.preparedFor.toUpperCase(), M, y)
  y += 14
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...INK)
  doc.text(who || input.email, M, y)
  y += 13
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...MUTED)
  doc.text(input.email, M, y)
  y += 26

  // ---------- Score cards ----------
  const gap = 12
  const cardW = (CONTENT_W - gap * 2) / 3
  const cardH = 74
  const cards = [
    { label: copy.scoreLabel, value: `${result.score}/100`, accent: true },
    { label: copy.levelLabel, value: copy.levels[result.level], accent: true },
    {
      label: copy.exposureTitle,
      value: `${formatEuro(result.exposureLow, locale)} – ${formatEuro(result.exposureHigh, locale)}`,
      accent: false,
    },
  ]

  cards.forEach((card, index) => {
    const x = M + index * (cardW + gap)
    doc.setDrawColor(...LINE)
    doc.setLineWidth(0.8)
    doc.roundedRect(x, y, cardW, cardH, 5, 5, 'S')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7)
    doc.setTextColor(...MUTED)
    const labelLines = doc.splitTextToSize(card.label.toUpperCase(), cardW - 20) as string[]
    doc.text(labelLines.slice(0, 2), x + 10, y + 17)

    doc.setFontSize(card.accent ? 19 : 10.5)
    doc.setTextColor(...(card.accent ? ORANGE : INK))
    const valueLines = doc.splitTextToSize(card.value, cardW - 20) as string[]
    doc.text(valueLines.slice(0, 2), x + 10, y + (card.accent ? 52 : 48))
  })

  y += cardH + 12
  paragraph(copy.exposureNote, 7.5)
  y += 12

  // ---------- Findings ----------
  heading(copy.findingsTitle)
  result.findings.forEach((finding) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    const lines = doc.splitTextToSize(finding, CONTENT_W - 20) as string[]
    ensure(lines.length * 13 + 12)
    doc.setFillColor(...ORANGE)
    doc.circle(M + 3, y - 3, 2, 'F')
    doc.setTextColor(...MUTED)
    doc.text(lines, M + 16, y)
    y += lines.length * 13 + 10
  })
  y += 6

  // ---------- Recorded answers ----------
  heading(copy.answersTitle)
  input.answers.forEach((answer) => {
    ensure(30)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...MUTED)
    const qLines = doc.splitTextToSize(answer.label, CONTENT_W * 0.62) as string[]
    doc.text(qLines.slice(0, 2), M, y)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(...INK)
    doc.text(answer.value, PAGE_W - M, y, { align: 'right' })
    y += Math.max(qLines.slice(0, 2).length * 10, 12) + 6
    doc.setDrawColor(...LINE)
    doc.setLineWidth(0.4)
    doc.line(M, y - 3, PAGE_W - M, y - 3)
    y += 6
  })
  y += 8

  // ---------- 7-day containment plan ----------
  heading(copy.actionsTitle)
  result.actions.forEach((action, index) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    const lines = doc.splitTextToSize(action, CONTENT_W - 26) as string[]
    ensure(lines.length * 13 + 12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...ORANGE)
    doc.text(`${index + 1}.`, M, y)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...MUTED)
    doc.text(lines, M + 18, y)
    y += lines.length * 13 + 9
  })
  y += 6

  // ---------- How we close it ----------
  heading(copy.stepsTitle)
  copy.steps.forEach((step) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const lines = doc.splitTextToSize(step, CONTENT_W - 20) as string[]
    ensure(lines.length * 12 + 8)
    doc.setTextColor(...MUTED)
    doc.text(lines, M + 4, y)
    y += lines.length * 12 + 7
  })
  y += 10

  // ---------- Urgency CTA ----------
  const daily = dailyCostOfInaction(result)
  const deadline = formatDate(validUntil(issued), locale)
  // Inner width accounts for the 22pt padding on both sides of the box.
  const boxInner = CONTENT_W - 44
  // splitTextToSize measures with the CURRENT font size, so set it before each split.
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  const bodyLines = doc.splitTextToSize(copy.urgencyBody, boxInner) as string[]
  const ctaLines = doc.splitTextToSize(copy.ctaBody, boxInner) as string[]
  doc.setFontSize(7.5)
  const scarcityLines = doc.splitTextToSize(copy.scarcityNote, boxInner) as string[]
  const boxH =
    142 + bodyLines.length * 11 + scarcityLines.length * 10 + ctaLines.length * 11

  ensure(boxH + 10)

  doc.setFillColor(...INK)
  doc.roundedRect(M, y, CONTENT_W, boxH, 6, 6, 'F')
  doc.setFillColor(...ORANGE)
  doc.rect(M, y, 4, boxH, 'F')

  let iy = y + 26
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(255, 255, 255)
  doc.text(copy.urgencyTitle, M + 22, iy)
  iy += 24

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...ORANGE)
  doc.text(copy.dailyCostLabel.toUpperCase(), M + 22, iy)
  iy += 21
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(23)
  doc.setTextColor(255, 255, 255)
  doc.text(`${formatEuro(daily, locale)} / ${locale === 'es' ? 'día' : 'day'}`, M + 22, iy)
  iy += 19

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(200, 200, 200)
  doc.text(bodyLines, M + 22, iy)
  iy += bodyLines.length * 11 + 12

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...ORANGE)
  doc.text(`${copy.validLabel}: ${deadline}`, M + 22, iy)
  iy += 15

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(175, 175, 175)
  doc.text(scarcityLines, M + 22, iy)
  iy += scarcityLines.length * 10 + 14

  doc.setDrawColor(70, 70, 70)
  doc.setLineWidth(0.5)
  doc.line(M + 22, iy - 6, PAGE_W - M - 22, iy - 6)
  iy += 6

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10.5)
  doc.setTextColor(255, 255, 255)
  doc.text(copy.ctaTitle, M + 22, iy)
  iy += 14
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(200, 200, 200)
  doc.text(ctaLines, M + 22, iy)

  y += boxH + 16

  // ---------- Disclaimer ----------
  paragraph(copy.disclaimer, 7)
  footer()

  return doc
}

/** Builds the report and hands it straight to the browser as a download. */
export function generateReportPdf(input: ReportInput) {
  const doc = buildReportDoc(input)

  const slug = (input.company || input.name || 'xtrametrik')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)

  doc.save(`diagnostico-ia-${slug || 'xtrametrik'}.pdf`)
}
