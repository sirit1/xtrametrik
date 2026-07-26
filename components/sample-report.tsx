'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Check,
  FileDown,
  Lock,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

type Stage = 'problem' | 'diagnosis' | 'solution'

const stageIcons: Record<Stage, typeof AlertTriangle> = {
  problem: AlertTriangle,
  diagnosis: Search,
  solution: ShieldCheck,
}

export default function SampleReport() {
  const { t } = useI18n()
  const s = t.sample
  const [stage, setStage] = useState<Stage>('problem')

  const stages: Stage[] = ['problem', 'diagnosis', 'solution']

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/40 bg-card/40 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Lock className="h-3 w-3" aria-hidden="true" />
            {s.badge}
          </p>
          <h1 className="font-montserrat text-3xl font-black text-balance sm:text-5xl">
            {s.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{s.sub}</p>
          <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border/40 pt-6">
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {s.clientLabel}
              </dt>
              <dd className="font-montserrat text-sm font-bold">{s.client}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {s.engineLabel}
              </dt>
              <dd className="font-montserrat text-sm font-bold text-primary">{s.engine}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Stage navigation */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div
            className="flex flex-col gap-3 sm:flex-row"
            role="tablist"
            aria-label={s.title}
          >
            {stages.map((key, index) => {
              const Icon = stageIcons[key]
              const active = stage === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`tab-${key}`}
                  aria-selected={active}
                  aria-controls={`panel-${key}`}
                  onClick={() => setStage(key)}
                  className={`flex flex-1 items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    active
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                      active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-montserrat text-sm font-bold ${active ? 'text-primary' : ''}`}
                    >
                      {s.tabs[key]}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Problem */}
          {stage === 'problem' && (
            <div
              role="tabpanel"
              id="panel-problem"
              aria-labelledby="tab-problem"
              className="flex flex-col gap-8 lg:flex-row"
            >
              <div className="flex flex-1 flex-col gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {s.problem.eyebrow}
                </p>
                <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
                  {s.problem.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">{s.problem.body}</p>
                <div className="mt-2 flex flex-col gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {s.problem.findingsLabel}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {s.problem.findings.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed">
                        <AlertTriangle
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <aside className="flex w-full flex-col gap-2 self-start rounded-xl bg-foreground p-6 text-background lg:w-80">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {s.problem.statLabel}
                </p>
                <p className="font-montserrat text-4xl font-black">{s.problem.statValue}</p>
                <p className="text-sm leading-relaxed text-background/70">{s.problem.statNote}</p>
              </aside>
            </div>
          )}

          {/* Diagnosis */}
          {stage === 'diagnosis' && (
            <div
              role="tabpanel"
              id="panel-diagnosis"
              aria-labelledby="tab-diagnosis"
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-1 flex-col gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {s.diagnosis.eyebrow}
                  </p>
                  <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
                    {s.diagnosis.title}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">{s.diagnosis.body}</p>
                </div>
                <aside className="flex w-full flex-col gap-2 self-start rounded-xl border border-primary/20 bg-primary/5 p-6 lg:w-80">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {s.diagnosis.scoreLabel}
                  </p>
                  <p className="font-montserrat text-4xl font-black">{s.diagnosis.scoreValue}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.diagnosis.scoreNote}
                  </p>
                </aside>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {s.diagnosis.rowsLabel}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-montserrat text-xs font-bold uppercase tracking-wider">
                          {s.diagnosis.columns.area}
                        </th>
                        <th scope="col" className="px-4 py-3 font-montserrat text-xs font-bold uppercase tracking-wider">
                          {s.diagnosis.columns.leak}
                        </th>
                        <th scope="col" className="px-4 py-3 font-montserrat text-xs font-bold uppercase tracking-wider">
                          {s.diagnosis.columns.severity}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.diagnosis.rows.map((row) => (
                        <tr key={row.area} className="border-t border-border">
                          <td className="px-4 py-3 font-bold">{row.area}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.leak}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                              {row.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Solution */}
          {stage === 'solution' && (
            <div
              role="tabpanel"
              id="panel-solution"
              aria-labelledby="tab-solution"
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-1 flex-col gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {s.solution.eyebrow}
                  </p>
                  <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
                    {s.solution.title}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">{s.solution.body}</p>
                  <div className="mt-2 flex flex-col gap-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      {s.solution.stepsLabel}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {s.solution.steps.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <Check
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {s.solution.afterLabel}
                </h3>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {s.solution.results.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5"
                    >
                      <p className="font-montserrat text-3xl font-black text-primary">
                        {item.value}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="border-t border-border/40 pt-6 text-xs leading-relaxed text-muted-foreground">
            {s.anonNote}
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/40 bg-card/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="font-montserrat text-2xl font-black text-balance sm:text-4xl">
            {s.ctaTitle}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{s.ctaSub}</p>
          <Link
            href="/#diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            {s.ctaButton}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="text-sm text-muted-foreground">{s.ctaNote}</p>
        </div>
      </section>
    </div>
  )
}
