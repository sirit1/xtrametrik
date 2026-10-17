import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-static'

const SITE = 'https://seguimentum.app'
const DEMO = 'https://seguimentum-demo.vercel.app'
const WA = 'https://wa.me/584241674909?text=' + encodeURIComponent('Hola, vi Seguimentum en xtrametrik.com y quiero una demo.')

export const metadata: Metadata = {
  title: 'Seguimentum · Seguimiento comercial con método en WhatsApp',
  description:
    'Seguimentum by Xtrametrik: su ejecutivo de cuentas con IA, en su WhatsApp. Responde, da seguimiento a cada prospecto y usted aprueba todo. Planes desde US$49.',
  alternates: { canonical: '/seguimentum' },
}

const planes = [
  { n: 'Express', p: 'US$49', d: 'pago único', i: ['Agente gratuito de Meta configurado con guion de ventas', 'Hasta 3 formas de pago listas para responder'] },
  { n: 'Esencial', p: 'US$39/mes', d: '+ US$99 de instalación', i: ['API oficial, conserva su número', 'Logo, colores y todas sus formas de pago', 'Ideal para clínicas dentales y estéticas'] },
  { n: 'Pro KAM', p: 'US$69/mes', d: '+ US$149 de instalación', i: ['Seguimiento KAM y junta de ventas del lunes', 'Panel del dueño y auditoría de la IA', 'Ideal para distribuidoras mayoristas'] },
]

export default function SeguimentumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <p className="text-primary font-bold uppercase tracking-wide text-sm">Nuevo servicio de Xtrametrik</p>
        <h1 className="font-montserrat text-4xl sm:text-5xl font-extrabold mt-3 text-foreground">
          Seguimentum: seguimiento comercial con método.
        </h1>
        <p className="mt-5 text-lg text-foreground/80 max-w-3xl">
          Su ejecutivo de cuentas con IA, en su WhatsApp. Responde a sus clientes, da seguimiento a cada prospecto,
          le propone la siguiente mejor acción y le pasa el chat cuando hace falta una persona. Usted aprueba todo
          desde su teléfono. Con la metodología KAM de Xtrametrik y la misma disciplina de gobernanza de IA que aplicamos
          con nuestros clientes: aviso de IA desde el primer mensaje, revisión humana y registro de auditoría.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={SITE} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold">Conocer Seguimentum</a>
          <a href={DEMO} target="_blank" rel="noopener" className="px-6 py-3 border border-primary text-primary rounded-lg font-bold">Probar la demo</a>
          <a href={WA} target="_blank" rel="noopener" className="px-6 py-3 border border-border text-foreground rounded-lg font-bold">Escribir por WhatsApp</a>
        </div>

        <section className="mt-16 grid gap-5 md:grid-cols-3" aria-label="Planes">
          {planes.map((p) => (
            <article key={p.n} className="rounded-xl border border-border/50 p-6 bg-card">
              <h2 className="font-montserrat text-xl font-bold text-foreground">{p.n}</h2>
              <p className="mt-2 text-3xl font-extrabold text-primary">{p.p}</p>
              <p className="text-sm text-foreground/70">{p.d}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80 list-disc pl-5">
                {p.i.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </article>
          ))}
        </section>
        <p className="mt-6 text-sm text-foreground/70">
          Programa Fundador: 50% de descuento en la mensualidad durante 3 meses para los primeros 3 a 5 negocios. La instalación se paga completa.
          Los mensajes de Meta por encima de los 1.000 gratis al mes los paga el negocio directamente a Meta.
        </p>
      </main>
      <Footer />
    </div>
  )
}
