'use client'

import { ArrowUp, FileDown, ShieldAlert } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ConsultationForm from '@/components/consultation-form'

const LEAK_EXAMPLES = [
  {
    title: 'Datos de clientes',
    body: 'Alguien pega un contrato, un expediente o un correo de cliente en ChatGPT o Claude. Esa información sale del perímetro de la empresa sin registro.',
  },
  {
    title: 'Precios y condiciones',
    body: 'Listas de precios, descuentos o márgenes pegados en un chat de IA. Lo que era confidencial queda fuera de tu control.',
  },
  {
    title: 'Nómina y datos internos',
    body: 'Sueldos, organigramas o datos personales del equipo en un prompt. Riesgo de fuga interna y de cumplimiento.',
  },
] as const

const PDF_ITEMS = [
  {
    title: 'Nivel de riesgo',
    body: 'Una lectura clara de tu exposición a partir de las cinco respuestas.',
  },
  {
    title: 'Puntos débiles',
    body: 'Dónde se rompe el control: uso de IA, políticas y tipo de dato que sale.',
  },
  {
    title: 'Próximos pasos',
    body: 'Qué hacer después del informe, sin vender un producto ya instalado.',
  },
] as const

const FAQ_ITEMS = [
  {
    question: '¿Es gratis?',
    answer: 'Sí. El diagnóstico de 5 preguntas y el PDF son gratuitos.',
  },
  {
    question: '¿Tengo que instalar algo?',
    answer: 'No. Solo respondes el cuestionario en el navegador y descargas el PDF.',
  },
  {
    question: '¿Qué hacen con mis respuestas?',
    answer: 'Solo se usan para tu informe y para contactarte.',
  },
] as const

export default function DiagnosticoRiesgoIaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero + cuestionario (arriba del fold) */}
        <section className="relative overflow-hidden border-b border-border px-4 pt-28 pb-2 sm:px-6 sm:pt-32">
          <div
            className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Diagnóstico gratis · 5 preguntas · PDF
            </p>
            <h1 className="font-montserrat text-2xl font-black leading-[1.15] text-balance sm:text-4xl">
              ¿Tu equipo está pegando datos de tu empresa en ChatGPT? Averígualo en 5
              preguntas
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Responde el cuestionario y descarga un PDF con el nivel de riesgo de IA de tu
              pyme.
            </p>
          </div>
        </section>

        <ConsultationForm hideIntro />

        {/* 2. Qué pasa cuando alguien pega un contrato */}
        <section className="border-t border-border/40 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
              Qué pasa cuando alguien pega un contrato en un chat de IA
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tres ejemplos genéricos de lo que suele salir sin control.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {LEAK_EXAMPLES.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-border bg-card px-5 py-5 sm:px-6"
                >
                  <div className="flex gap-3">
                    <ShieldAlert
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-risk"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-montserrat text-base font-bold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Qué recibes en el PDF */}
        <section className="border-t border-border/40 bg-muted/40 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              El entregable
            </p>
            <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
              Qué recibes en el PDF
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Al terminar el cuestionario descargas el informe al instante.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {PDF_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-border bg-card px-5 py-5"
                >
                  <FileDown className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-montserrat text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Qué es AILock */}
        <section className="border-t border-border/40 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-xl border border-brand/25 bg-card px-5 py-6 sm:px-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              AILock · en preparación
            </p>
            <h2 className="font-montserrat text-2xl font-black">Qué es AILock de Xtrametrik</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              AILock es la línea de Xtrametrik para la gestión del riesgo de IA: menos fuga de
              datos de empresa a ChatGPT y Claude, y menos riesgo de multa. Hoy el primer paso
              es este diagnóstico. El producto está en preparación.
            </p>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="border-t border-border/40 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <dl className="mt-8 flex flex-col gap-4">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-border bg-card px-5 py-5 sm:px-6"
                >
                  <dt className="font-montserrat text-base font-bold">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 6. CTA final → cuestionario */}
        <section className="border-t border-border/40 px-4 py-14 sm:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <h2 className="font-montserrat text-2xl font-black text-balance sm:text-3xl">
              Empieza el diagnóstico ahora
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cinco preguntas. Un PDF con tu nivel de riesgo de IA.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              Ir al cuestionario
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
