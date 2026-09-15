'use client'

import Link from 'next/link'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { CONTACT_EMAIL } from '@/lib/site'

const CWS_ID = 'ffccgddaibjcogkbofnpofhcpbpcloia'

const copy = {
  es: {
    kicker: 'AILock · corte del piloto',
    title: 'Cargar el candado',
    lead:
      'Esto no es la tienda de Chrome ni un empujón de Workspace. Es la carpeta que un administrador carga en diez navegadores, en una sola sesión, para que el dueño vea el envío detenerse antes de cruzar. El procedimiento no se publica; se entrega el paquete y la carta.',
    packTitle: 'El paquete',
    pack:
      'Descomprima el archivo. En esa carpeta tiene que estar el manifiesto. En Chrome o en Edge abra el panel de extensiones —no es una web: se escribe en la barra de direcciones—, active el modo de desarrollador y elija Cargar descomprimida. Señale esa carpeta, no un archivo de dentro. Debe aparecer AILock de Xtrametrik. Si el navegador se queja de que no hay manifiesto, se ha elegido un nivel de más o de menos.',
    houseTitle: 'La casa',
    house:
      'En las opciones se declara el nombre de la empresa, el correo de quien debe recibir los avisos y, si se desea, hasta veinte palabras propias. En Probar, una clave de servicio no debe salir; el registro anota el hecho y no el valor. Pegue después en ChatGPT un texto de trabajo con un cliente de esa lista: el envío se detiene o se vela. El secreto no figura en el CSV.',
    storeTitle: 'La tienda y Workspace',
    store:
      'El identificador de la tienda es el de abajo. La ficha sigue en borrador: Google no la ha publicado. Hasta que salga, el piloto se carga a mano, delante del dueño. Cuando esté publicada y no listada, Workspace e Intune podrán imponer esa misma pieza a la plantilla con ese identificador, sin que el empleado elija instalarla.',
    downloadPack: 'Descargar el paquete',
    downloadLetter: 'Descargar la carta de instalación',
    write: 'Escribir a la casa',
    back: 'Volver a AILock',
  },
  en: {
    kicker: 'AILock · pilot build',
    title: 'Load the lock',
    lead:
      'This is not the Chrome Web Store, and it is not a Workspace force-install. It is the folder an administrator loads into ten browsers, in a single sitting, so the owner sees a prompt stop before it leaves. The method is not published; the package and the letter are what you receive.',
    packTitle: 'The package',
    pack:
      'Unzip the file. The manifest must sit in that folder. In Chrome or Edge open the extensions panel — it is not a website: type it in the address bar — turn on developer mode and choose Load unpacked. Point to that folder, not a file inside it. AILock by Xtrametrik should appear. If the browser complains that there is no manifest, the wrong level was selected.',
    houseTitle: 'The house',
    house:
      'In options, declare the company name, the owner email that should receive notices and, if you wish, up to twenty house words. In Test, a service key must not leave; the log records the fact, not the value. Then paste into ChatGPT a working text that names a client from that list: the send is stopped or veiled. The secret does not appear in the CSV.',
    storeTitle: 'The store and Workspace',
    store:
      'The store identifier is the one below. The listing is still a draft: Google has not published it. Until it is out, the pilot is loaded by hand, in front of the owner. Once it is published and unlisted, Workspace and Intune can force that same piece onto the fleet with that identifier, without the employee choosing to install it.',
    downloadPack: 'Download the package',
    downloadLetter: 'Download the install letter',
    write: 'Write to the house',
    back: 'Back to AILock',
  },
} as const

export default function AilockPiloto() {
  const { locale } = useI18n()
  const c = copy[locale]
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('AILock · información o demo')}`

  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{c.kicker}</p>
        <h1 className="mb-6 font-montserrat text-4xl font-black text-balance sm:text-5xl">{c.title}</h1>
        <p className="mb-12 text-base leading-relaxed text-foreground/70">{c.lead}</p>

        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/ailock/ailock-chrome.zip"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {c.downloadPack}
          </a>
          <a
            href="/ailock/AILock-carta-instalacion.txt"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            {c.downloadLetter}
          </a>
          <a
            href={mail}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {c.write}
          </a>
        </div>

        <div className="flex flex-col gap-10">
          <article>
            <h2 className="mb-3 font-montserrat text-xl font-bold text-primary">{c.packTitle}</h2>
            <p className="text-sm leading-relaxed text-foreground/75">{c.pack}</p>
          </article>
          <article>
            <h2 className="mb-3 font-montserrat text-xl font-bold text-primary">{c.houseTitle}</h2>
            <p className="text-sm leading-relaxed text-foreground/75">{c.house}</p>
          </article>
          <article>
            <h2 className="mb-3 font-montserrat text-xl font-bold text-primary">{c.storeTitle}</h2>
            <p className="text-sm leading-relaxed text-foreground/75">{c.store}</p>
            <p className="mt-4 font-mono text-sm tracking-wide break-all text-foreground">{CWS_ID}</p>
          </article>
        </div>

        <p className="mt-14">
          <Link
            href="/#ailock"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80"
          >
            {c.back}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  )
}
