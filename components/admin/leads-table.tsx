'use client'

import { useMemo, useState } from 'react'
import { Download, Mail, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Lead } from '@/lib/leads'

const LEVELS = [
  { value: 'all', label: 'Todos' },
  { value: 'high', label: 'Alto' },
  { value: 'medium', label: 'Medio' },
  { value: 'low', label: 'Contenido' },
] as const

const LEVEL_STYLES: Record<string, string> = {
  high: 'bg-destructive/10 text-destructive',
  medium: 'bg-primary/10 text-primary',
  low: 'bg-muted text-muted-foreground',
}

const LEVEL_LABELS: Record<string, string> = {
  high: 'Alto',
  medium: 'Medio',
  low: 'Contenido',
}

const ANSWER_LABELS: Record<string, string> = {
  '1-10': '1-10 empleados',
  '11-50': '11-50 empleados',
  '51-200': '51-200 empleados',
  '200+': '+200 empleados',
  none: 'Nadie usa IA',
  few: 'Uso puntual',
  many: 'Uso generalizado',
  unknown: 'No lo saben',
  yes: 'Sí',
  no: 'No',
  partial: 'Parcial',
  suspect: 'Lo sospechan',
  shield: 'Blindaje de IA',
  o2o: 'Método O2O',
  convert: 'Conversión',
  all: 'Las tres',
}

function label(value: string | null) {
  if (!value) return '—'
  return ANSWER_LABELS[value] ?? value
}

function formatDate(value: Date | string | null) {
  if (!value) return '—'
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

export function LeadsTable({ rows }: { rows: Lead[] }) {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState<(typeof LEVELS)[number]['value']>('all')

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return rows.filter((row) => {
      if (level !== 'all' && row.riskLevel !== level) return false
      if (!needle) return true
      return [row.name, row.email, row.company, row.role]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(needle))
    })
  }, [rows, query, level])

  function exportCsv() {
    const headers = [
      'Fecha',
      'Nombre',
      'Email',
      'Empresa',
      'Cargo',
      'Indice',
      'Nivel',
      'Tamano',
      'Uso IA',
      'Politica',
      'Datos expuestos',
      'Prioridad',
      'Idioma',
    ]
    const escape = (value: unknown) => `"${String(value ?? '').replace(/"/g, '""')}"`
    const lines = filtered.map((row) =>
      [
        formatDate(row.createdAt),
        row.name,
        row.email,
        row.company,
        row.role,
        row.riskScore,
        LEVEL_LABELS[row.riskLevel ?? ''] ?? row.riskLevel,
        label(row.companySize),
        label(row.aiUsage),
        label(row.hasPolicy),
        label(row.dataExposure),
        label(row.goal),
        row.locale,
      ]
        .map(escape)
        .join(','),
    )

    const csv = [headers.map(escape).join(','), ...lines].join('\n')
    const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `xtrametrik-leads-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative md:w-80">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nombre, email o empresa"
            aria-label="Buscar leads"
            className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-1 rounded-lg bg-muted p-1" role="group" aria-label="Filtrar por nivel">
            {LEVELS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLevel(option.value)}
                aria-pressed={level === option.value}
                className={`rounded-md px-3 py-1.5 text-xs font-bold transition-colors ${
                  level === option.value
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={exportCsv}
            disabled={filtered.length === 0}
            className="h-10 gap-2 font-bold"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            CSV
          </Button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border px-6 py-16 text-center text-sm text-muted-foreground">
          {rows.length === 0
            ? 'Todavía no hay leads. Aparecerán aquí en cuanto alguien complete el diagnóstico.'
            : 'Ningún lead coincide con este filtro.'}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">Leads del diagnóstico de exposición</caption>
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left">
                <th scope="col" className="px-4 py-3 font-bold">Contacto</th>
                <th scope="col" className="px-4 py-3 font-bold">Empresa</th>
                <th scope="col" className="px-4 py-3 font-bold">Índice</th>
                <th scope="col" className="px-4 py-3 font-bold">Respuestas</th>
                <th scope="col" className="px-4 py-3 font-bold">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-0 align-top">
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">{row.name}</span>
                      <a
                        href={`mailto:${row.email}`}
                        className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                      >
                        <Mail className="h-3 w-3" aria-hidden="true" />
                        {row.email}
                      </a>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span>{row.company || '—'}</span>
                      {row.role ? (
                        <span className="text-xs text-muted-foreground">{row.role}</span>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-montserrat text-lg font-black">{row.riskScore}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                          LEVEL_STYLES[row.riskLevel ?? ''] ?? 'bg-muted'
                        }`}
                      >
                        {LEVEL_LABELS[row.riskLevel ?? ''] ?? row.riskLevel}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <ul className="flex flex-col gap-0.5 text-xs text-muted-foreground">
                      <li>{label(row.companySize)}</li>
                      <li>{label(row.aiUsage)}</li>
                      <li>Política: {label(row.hasPolicy)}</li>
                      <li>Datos expuestos: {label(row.dataExposure)}</li>
                      <li>Prioridad: {label(row.goal)}</li>
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-xs text-muted-foreground">
                    {formatDate(row.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        {filtered.length} de {rows.length} leads
      </p>
    </div>
  )
}
