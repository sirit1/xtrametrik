'use client'

import { useI18n } from '@/components/i18n/language-provider'
import { CONTACT_EMAIL } from '@/lib/site'

type Section = { id: string; title: string; body: string[] }

const content: Record<'es' | 'en', { title: string; intro: string; sections: Section[] }> = {
  es: {
    title: 'Información legal',
    intro:
      'XtraMetrik presta servicios de diagnóstico de riesgo de IA, control de fugas y auditoría para empresas B2B. Esta página resume cómo tratamos tus datos y en qué condiciones prestamos el servicio.',
    sections: [
      {
        id: 'privacidad',
        title: 'Privacidad',
        body: [
          'Los datos que envías a través del formulario de diagnóstico (nombre, email corporativo, empresa, teléfono, tamaño de equipo y contexto) se usan exclusivamente para elaborar tu informe de riesgo y contactarte con la versión ampliada.',
          'No vendemos ni cedemos tus datos a terceros con fines comerciales. Puedes solicitar acceso, rectificación o supresión escribiendo a ' +
            CONTACT_EMAIL +
            '.',
          'Conservamos la solicitud durante el tiempo necesario para atender la relación comercial y cumplir obligaciones legales.',
        ],
      },
      {
        id: 'terminos',
        title: 'Términos de servicio',
        body: [
          'El diagnóstico preliminar es gratuito y de carácter informativo: estima tu nivel de exposición a partir de la información que declaras, y no sustituye a una auditoría formal.',
          'Los plazos de 7 días descritos en el sitio corresponden al protocolo estándar de las tres fases (diagnóstico, control de fugas y auditoría) y requieren disponibilidad del equipo del cliente y acceso a la información solicitada.',
          'Las cifras de casos publicadas corresponden a proyectos ejecutados y se presentan de forma anonimizada por acuerdos de confidencialidad.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        body: [
          'Este sitio no utiliza cookies publicitarias ni de perfilado de terceros.',
          'Únicamente se almacena en tu navegador la preferencia de idioma, con el fin de mostrarte el contenido en español o inglés en visitas posteriores.',
        ],
      },
      {
        id: 'compliance',
        title: 'Compliance ISO 42001',
        body: [
          'ISO/IEC 42001 es la norma internacional de sistemas de gestión de inteligencia artificial. Nuestro marco de trabajo implanta los controles de manejo de riesgo, clasificación de datos y trazabilidad que exige la norma.',
          'La fase de auditoría se ejecuta con revisión independiente y produce un expediente documental que puedes presentar ante reguladores, clientes enterprise o tu propio comité de riesgos.',
          'XtraMetrik implanta y audita el marco de gestión; la emisión de un certificado acreditado corresponde siempre a un organismo de certificación externo.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal information',
    intro:
      'XtraMetrik provides AI risk diagnostics, leak control and audit services for B2B companies. This page summarises how we handle your data and the terms under which we deliver the service.',
    sections: [
      {
        id: 'privacidad',
        title: 'Privacy',
        body: [
          'The data you submit through the diagnostic form (name, corporate email, company, phone, team size and context) is used solely to produce your risk report and to send you the extended version.',
          'We do not sell or share your data with third parties for commercial purposes. You can request access, correction or deletion by writing to ' +
            CONTACT_EMAIL +
            '.',
          'We retain the request for as long as needed to manage the commercial relationship and to meet legal obligations.',
        ],
      },
      {
        id: 'terminos',
        title: 'Terms of service',
        body: [
          'The preliminary diagnostic is free and informational: it estimates your exposure based on the information you declare and does not replace a formal audit.',
          'The 7-day timeline described on this site refers to the standard three-phase protocol (diagnostic, leak control, audit) and requires client team availability and access to the requested information.',
          'Published case figures correspond to delivered projects and are presented anonymised due to confidentiality agreements.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        body: [
          'This site uses no advertising or third-party profiling cookies.',
          'We only store your language preference in the browser so we can show content in Spanish or English on later visits.',
        ],
      },
      {
        id: 'compliance',
        title: 'ISO 42001 compliance',
        body: [
          'ISO/IEC 42001 is the international standard for artificial intelligence management systems. Our framework implements the risk management, data classification and traceability controls the standard requires.',
          'The audit phase includes independent review and produces a documented file you can present to regulators, enterprise clients or your own risk committee.',
          'XtraMetrik implements and audits the management framework; issuing an accredited certificate is always the role of an external certification body.',
        ],
      },
    ],
  },
}

export default function LegalContent() {
  const { locale } = useI18n()
  const data = content[locale]

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black font-montserrat mb-4 text-balance">
          {data.title}
        </h1>
        <p className="text-foreground/70 leading-relaxed mb-12">{data.intro}</p>

        <div className="flex flex-col gap-12">
          {data.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-xl font-bold font-montserrat mb-4 text-primary">
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-foreground/75 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
