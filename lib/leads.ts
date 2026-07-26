import { desc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'

export type Lead = Awaited<ReturnType<typeof getLeads>>[number]

export async function getLeads() {
  return db.select().from(leads).orderBy(desc(leads.createdAt))
}

export function summarize(rows: Awaited<ReturnType<typeof getLeads>>) {
  const total = rows.length
  const high = rows.filter((row) => row.riskLevel === 'high').length
  const now = Date.now()
  const last7Days = rows.filter(
    (row) => row.createdAt && now - new Date(row.createdAt).getTime() < 7 * 864e5,
  ).length
  const averageScore =
    total === 0 ? 0 : Math.round(rows.reduce((sum, row) => sum + (row.riskScore ?? 0), 0) / total)

  return { total, high, last7Days, averageScore }
}
