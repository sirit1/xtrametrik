'use client'

import { useActionState } from 'react'
import { Lock, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { login } from '@/app/admin/actions'

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined)

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
            </span>
            <h1 className="font-montserrat text-xl font-black tracking-tight">Panel privado</h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Introduce la contraseña de administrador para ver los leads del diagnóstico.
            </p>
          </div>

          <form action={formAction} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            {state?.error ? (
              <p role="alert" className="text-sm font-medium text-destructive">
                Contraseña incorrecta.
              </p>
            ) : null}

            <Button
              type="submit"
              disabled={pending}
              className="h-11 gap-2 bg-primary font-bold text-primary-foreground hover:opacity-90"
            >
              {pending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Comprobando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
