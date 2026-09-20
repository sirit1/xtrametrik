import type { Metadata } from 'next'
import { LogOut } from 'lucide-react'
import { logout } from '@/app/admin/actions'
import { LoginForm } from '@/components/admin/login-form'
import { LeadsTable } from '@/components/admin/leads-table'
import { Button } from '@/components/ui/button'
import { isAuthenticated } from '@/lib/admin-auth'
import { getLeads, summarize } from '@/lib/leads'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Leads | XtraMetrik',
  robots: { index: false, follow: false },
}

export default async function LeadsPage() {
  if (!(await isAuthenticated())) {
    return <LoginForm />
  }

  const rows = await getLeads()
  const stats = summarize(rows)

  const cards = [
    { label: 'Leads totales', value: stats.total },
    { label: 'Riesgo alto', value: stats.high, accent: true },
    { label: 'Últimos 7 días', value: stats.last7Days },
    { label: 'Índice medio', value: stats.averageScore },
  ]

  return (
    <main className="min-h-screen bg-muted/30 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-montserrat text-2xl font-black tracking-tight md:text-3xl">
              Leads del diagnóstico
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ordenados por fecha. Prioriza los de riesgo alto: son los que más urgencia tienen.
            </p>
          </div>
          <form action={logout}>
            <Button type="submit" variant="outline" className="gap-2 font-bold">
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Salir
            </Button>
          </form>
        </header>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {card.label}
              </span>
              <span
                className={`font-montserrat text-3xl font-black ${
                  card.accent ? 'text-destructive' : ''
                }`}
              >
                {card.value}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <LeadsTable rows={rows} />
        </div>
      </div>
    </main>
  )
}
