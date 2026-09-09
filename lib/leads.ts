import { desc } from 'drizzle-orm'
import { getDb } from '@/lib/db'
import { leads } from '@/lib/db/schema'

export type Lead = typeof leads.$inferSelect

export async function getLeads(): Promise<Lead[]> {
  const db = getDb()
  if (!db) return []
  try {
    return await db.select().from(leads).orderBy(desc(leads.createdAt))
  } catch (error) {
    console.error('[leads] getLeads failed:', error instanceof Error ? error.message : error)
    return []
  }
}

export function summarize(rows: Lead[]) {
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
