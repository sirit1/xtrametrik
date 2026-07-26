'use server'

import { redirect } from 'next/navigation'
import { createSession, destroySession, verifyPassword } from '@/lib/admin-auth'

export async function login(_prev: { error?: string } | undefined, formData: FormData) {
  const password = String(formData.get('password') ?? '')

  if (!password || !verifyPassword(password)) {
    // Constant-ish delay to blunt rapid brute forcing.
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { error: 'invalid' as const }
  }

  await createSession()
  redirect('/admin/leads')
}

export async function logout() {
  await destroySession()
  redirect('/admin/leads')
}
