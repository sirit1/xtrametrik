'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          Listo para revolucionar tu análisis de datos
        </h2>
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          Únete a miles de empresas que ya están tomando decisiones más inteligentes con XtraMetrik. 14 días gratis, sin tarjeta de crédito.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input
            type="email"
            placeholder="tu@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary rounded-lg hover:bg-opacity-90 transition-all font-semibold whitespace-nowrap group"
          >
            Comenzar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {isSubmitted && (
          <p className="text-primary font-semibold">✓ ¡Te enviaremos un link de acceso pronto!</p>
        )}

        <p className="text-white/60 text-sm">
          No spam. Cancelable en cualquier momento.
        </p>
      </div>
    </section>
  )
}
