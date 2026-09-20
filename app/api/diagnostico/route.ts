import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import { scoreDiagnostic, type Locale } from '@/lib/diagnostic'
import { NextResponse } from 'next/server'

export const maxDuration = 15
export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function hostAllowed(origin: string) {
  if (!origin) return true
  try {
    const host = new URL(origin).hostname
    return (
      host === 'xtrametrik.com' ||
      host === 'www.xtrametrik.com' ||
      host.endsWith('.xtrametrik.com') ||
      host === 'localhost' ||
      host === '127.0.0.1'
    )
  } catch {
    return false
  }
}

function looksLikeSpam(body: Record<string, unknown>) {
  if (String(body.companyUrl ?? '').trim()) return true
  const opened = Number(body.openedAt)
  if (!Number.isFinite(opened) || Date.now() - opened < 4000) return true
  const notes = String(body.notes ?? '')
  const urls = notes.match(/https?:\/\//gi) ?? []
  if (urls.length >= 3) return true
  return false
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin') ?? ''
    if (!hostAllowed(origin)) {
      return NextResponse.json({ ok: true })
    }

    const body = (await request.json()) as Record<string, unknown>

    if (looksLikeSpam(body)) {
      return NextResponse.json({ ok: true })
    }

    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '')
      .trim()
      .toLowerCase()

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'invalid_name' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
    }

    const locale: Locale = body.locale === 'en' ? 'en' : 'es'
    const answers = {
      companySize: String(body.companySize ?? 'unknown'),
      aiUsage: String(body.aiUsage ?? 'unknown'),
      hasPolicy: String(body.hasPolicy ?? 'unknown'),
      dataExposure: String(body.dataExposure ?? 'unknown'),
      goal: String(body.goal ?? 'all'),
    }

    const result = scoreDiagnostic(answers, locale)

    await db.insert(leads).values({
      name,
      email,
      company: body.company ? String(body.company).trim() : null,
      role: body.role ? String(body.role).trim() : null,
      phone: body.phone ? String(body.phone).trim() : null,
      companySize: answers.companySize,
      aiUsage: answers.aiUsage,
      hasPolicy: answers.hasPolicy,
      dataExposure: answers.dataExposure,
      goal: answers.goal,
      notes: body.notes ? String(body.notes).trim().slice(0, 2000) : null,
      riskScore: result.score,
      riskLevel: result.level,
      locale,
      source: 'landing',
    })

    return NextResponse.json({ ok: true, result })
  } catch (error) {
    console.log('[v0] diagnostico error:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
