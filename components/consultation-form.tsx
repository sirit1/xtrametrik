'use client'

import { useState } from 'react'
import { useI18n } from '@/components/i18n/language-provider'
import { Button } from '@/components/ui/button'
import {
  dailyCostOfInaction,
  formatDate,
  formatEuro,
  scoreDiagnostic,
  validUntil,
} from '@/lib/diagnostic'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  FileDown,
  Loader2,
} from 'lucide-react'

type Answers = {
  companySize: string
  aiUsage: string
  hasPolicy: string
  dataExposure: string
  goal: string
}

export default function ConsultationForm() {
  const { t, locale } = useI18n()
  const f = t.form

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    companySize: '',
    aiUsage: '',
    hasPolicy: '',
    dataExposure: '',
    goal: '',
  })
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [submitted, setSubmitted] = useState(false)
  const [warning, setWarning] = useState('')

  // Derived on the client so the report follows the active language:
  // the scoring is a pure function of the answers.
  const result = submitted ? scoreDiagnostic(answers, locale) : null

  const questions = [
    {
      key: 'companySize' as const,
      label: f.employees,
      options: [
        { value: '1-10', label: f.sizeSmall },
        { value: '11-50', label: f.sizeMid },
        { value: '51-200', label: f.sizeLarge },
        { value: '200+', label: f.sizeXl },
      ],
    },
    {
      key: 'aiUsage' as const,
      label: f.usage,
      options: [
        { value: 'none', label: f.usageNone },
        { value: 'few', label: f.usageFew },
        { value: 'many', label: f.usageMany },
        { value: 'unknown', label: f.usageUnknown },
      ],
    },
    {
      key: 'hasPolicy' as const,
      label: f.aiUse,
      options: [
        { value: 'yes', label: f.optionsYes },
        { value: 'no', label: f.optionsNo },
        { value: 'unknown', label: f.optionsUnknown },
      ],
    },
    {
      key: 'dataExposure' as const,
      label: f.sensitive,
      options: [
        { value: 'yes', label: f.optionsSensitiveYes },
        { value: 'no', label: f.optionsSensitiveNo },
        { value: 'unknown', label: f.optionsUnknown },
      ],
    },
    {
      key: 'goal' as const,
      label: f.goal,
      options: [
        { value: 'ai', label: f.goalAi },
        { value: 'o2o', label: f.goalO2o },
        { value: 'social', label: f.goalSocial },
        { value: 'all', label: f.goalAll },
      ],
    },
  ]

  function goToContact() {
    if (questions.some((question) => !answers[question.key])) {
      setWarning(f.selectRequired)
      return
    }
    setWarning('')
    setStep(1)
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, ...contact, locale }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error ?? 'error')
      setSubmitted(true)
      setStatus('idle')
      setStep(2)
      // The report is the promised deliverable: hand it over immediately.
      await buildPdf()
    } catch {
      setStatus('error')
    }
  }

  function answerSummary() {
    return questions.map((question) => ({
      label: question.label,
      value:
        question.options.find((option) => option.value === answers[question.key])?.label ?? '—',
    }))
  }

  async function buildPdf() {
    const computed = scoreDiagnostic(answers, locale)
    const { generateReportPdf } = await import('@/lib/report-pdf')
    generateReportPdf({
      name: contact.name,
      email: contact.email,
      company: contact.company,
      role: contact.role,
      locale,
      result: computed,
      answers: answerSummary(),
    })
  }

  const levelLabel =
    result?.level === 'high' ? f.riskHigh : result?.level === 'medium' ? f.riskMedium : f.riskLow

  return (
    <section id="diagnostico" className="scroll-mt-24 bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            {f.badge}
          </span>
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-balance md:text-4xl">
            {f.title}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {f.sub}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
          {step < 2 && (
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {f.stepLabel} {step + 1} {f.stepOf} 2
              </span>
              <div className="flex h-1.5 flex-1 gap-1.5">
                <span className="flex-1 rounded-full bg-primary" />
                <span className={`flex-1 rounded-full ${step === 1 ? 'bg-primary' : 'bg-border'}`} />
              </div>
            </div>
          )}

          {step === 0 && (
            <div className="flex flex-col gap-8">
              <h3 className="font-montserrat text-lg font-bold">{f.stepQuestions}</h3>
              {questions.map((question) => (
                <fieldset key={question.key}>
                  <legend className="mb-3 text-sm font-semibold leading-relaxed">
                    {question.label}
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {question.options.map((option) => {
                      const active = answers[question.key] === option.value
                      return (
                        <label
                          key={option.value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                            active
                              ? 'border-primary bg-primary/5 font-semibold text-foreground'
                              : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.key}
                            value={option.value}
                            checked={active}
                            onChange={() =>
                              setAnswers((prev) => ({ ...prev, [question.key]: option.value }))
                            }
                            className="sr-only"
                          />
                          <span
                            className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                              active ? 'border-primary' : 'border-muted-foreground/40'
                            }`}
                            aria-hidden="true"
                          >
                            {active && <span className="h-2 w-2 rounded-full bg-primary" />}
                          </span>
                          {option.label}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>
              ))}

              {warning && (
                <p className="flex items-center gap-2 text-sm font-medium text-destructive">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  {warning}
                </p>
              )}

              <Button
                type="button"
                size="lg"
                onClick={goToContact}
                className="gap-2 self-start bg-primary font-bold text-primary-foreground hover:opacity-90"
              >
                {f.next}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h3 className="font-montserrat text-lg font-bold">{f.stepContact}</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label={f.name}
                  required
                  placeholder={f.namePlaceholder}
                  value={contact.name}
                  onChange={(value) => setContact((prev) => ({ ...prev, name: value }))}
                />
                <Field
                  label={f.email}
                  required
                  type="email"
                  placeholder={f.emailPlaceholder}
                  value={contact.email}
                  onChange={(value) => setContact((prev) => ({ ...prev, email: value }))}
                />
                <Field
                  label={f.company}
                  placeholder={f.companyPlaceholder}
                  value={contact.company}
                  onChange={(value) => setContact((prev) => ({ ...prev, company: value }))}
                />
                <Field
                  label={f.role}
                  placeholder={f.rolePlaceholder}
                  value={contact.role}
                  onChange={(value) => setContact((prev) => ({ ...prev, role: value }))}
                />
                <Field
                  label={f.phone}
                  type="tel"
                  placeholder={f.phonePlaceholder}
                  value={contact.phone}
                  onChange={(value) => setContact((prev) => ({ ...prev, phone: value }))}
                />
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">{f.message}</span>
                <textarea
                  rows={3}
                  value={contact.notes}
                  onChange={(event) => setContact((prev) => ({ ...prev, notes: event.target.value }))}
                  placeholder={f.messagePlaceholder}
                  className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm font-medium text-destructive">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  {f.errorTitle}
                </p>
              )}

              <p className="text-xs leading-relaxed text-muted-foreground">{f.required}</p>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="button" variant="ghost" onClick={() => setStep(0)} className="gap-2">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {f.back}
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'sending'}
                  className="gap-2 bg-primary font-bold text-primary-foreground hover:opacity-90"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      {f.submitting}
                    </>
                  ) : (
                    <>
                      {f.submit}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {step === 2 && result && (
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-montserrat text-xl font-bold">{f.successTitle}</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {f.resultTitle}
                  </p>
                  <p className="font-montserrat text-3xl font-bold">{result.score}/100</p>
                </div>
                <div className="rounded-xl border border-border p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {f.riskLevel}
                  </p>
                  <p className="font-montserrat text-3xl font-bold text-primary">{levelLabel}</p>
                </div>
                <div className="rounded-xl border border-border p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {f.resultExposure}
                  </p>
                  <p className="font-montserrat text-xl font-bold leading-snug">
                    {formatEuro(result.exposureLow, locale)} –{' '}
                    {formatEuro(result.exposureHigh, locale)}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {f.resultFindings}
                </h4>
                <ul className="flex flex-col gap-3">
                  {result.findings.map((finding) => (
                    <li key={finding} className="flex gap-3 text-sm leading-relaxed">
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">{f.resultNote}</p>

              <div className="flex flex-col gap-5 rounded-xl bg-foreground p-6 text-background">
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {f.urgencyDaily}
                  </p>
                  <p className="font-montserrat text-3xl font-black">
                    {formatEuro(dailyCostOfInaction(result), locale)}
                    <span className="ml-1 text-base font-bold">/ {f.perDay}</span>
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-background/70">{f.urgencyBody}</p>
                <p className="flex flex-wrap items-center gap-2 border-t border-background/15 pt-4 text-sm font-bold text-primary">
                  <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {f.urgencyValid} {formatDate(validUntil(), locale)}
                </p>
              </div>

              <div className="flex flex-col gap-4 border-t border-border pt-6">
                <div className="flex gap-4">
                  <FileDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div className="flex flex-col gap-1.5">
                    <p className="font-montserrat text-sm font-bold">{f.deliveryTitle}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.successBody}</p>
                  </div>
                </div>
                <Button
                  type="button"
                  size="lg"
                  onClick={buildPdf}
                  className="gap-2 self-start bg-primary font-bold text-primary-foreground hover:opacity-90"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  {f.downloadAgain}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </label>
  )
}
