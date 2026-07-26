import type { Article } from '@/lib/articles'

export const articlesExtra: Article[] = [
  {
    slug: 'alucinaciones-de-ia-en-decisiones',
    category: 'Governance',
    readTime: 6,
    date: '2026-06-20',
    es: {
      title: 'Alucinaciones: cuando el modelo inventa con total seguridad',
      excerpt:
        'Un modelo puede producir una cifra, una cláusula o una referencia que no existe, con el mismo tono de certeza que usa cuando acierta.',
      takeaways: [
        'El problema no es el error, es la confianza con la que se presenta.',
        'El riesgo se multiplica cuando el output entra en un documento firmado.',
        'La verificación debe ser un paso del proceso, no una buena intención.',
      ],
      body: [
        {
          type: 'p',
          text: 'Los modelos generan la continuación más probable de un texto, no la verdad. Cuando el dato pedido no está en su contexto, lo completan con algo plausible. En un borrador interno es una molestia; en una propuesta enviada al cliente es un problema contractual.',
        },
        { type: 'h2', text: 'Dónde duele más' },
        {
          type: 'ul',
          items: [
            'Cifras financieras y porcentajes en propuestas comerciales.',
            'Referencias normativas y artículos concretos.',
            'Nombres de personas, empresas y fechas de contratos.',
          ],
        },
        {
          type: 'p',
          text: 'Estos tres tipos de contenido tienen algo en común: son fáciles de verificar y muy caros de corregir después. Justo por eso deben pasar por control obligatorio.',
        },
        { type: 'h2', text: 'El control mínimo viable' },
        {
          type: 'p',
          text: 'Una regla simple resuelve la mayor parte del riesgo: ningún número, cita normativa o compromiso contractual sale de la empresa sin verificación humana contra la fuente original. La IA acelera la redacción, no sustituye la responsabilidad.',
        },
        {
          type: 'quote',
          text: 'El modelo no miente ni dice la verdad: completa. La responsabilidad de comprobarlo sigue siendo tuya.',
        },
      ],
    },
    en: {
      title: 'Hallucinations: when the model invents with total confidence',
      excerpt:
        'A model can produce a figure, a clause or a reference that does not exist, in the same confident tone it uses when it is right.',
      takeaways: [
        'The problem is not the error, it is the confidence it is delivered with.',
        'Risk multiplies when output lands in a signed document.',
        'Verification must be a process step, not a good intention.',
      ],
      body: [
        {
          type: 'p',
          text: 'Models generate the most likely continuation of a text, not the truth. When the requested fact is not in their context, they complete it with something plausible. In an internal draft that is an annoyance; in a proposal sent to a client it is a contractual problem.',
        },
        { type: 'h2', text: 'Where it hurts most' },
        {
          type: 'ul',
          items: [
            'Financial figures and percentages in commercial proposals.',
            'Regulatory references and specific articles.',
            'Names of people, companies and contract dates.',
          ],
        },
        {
          type: 'p',
          text: 'These three content types share one trait: they are easy to verify and very expensive to correct afterwards. That is precisely why they must go through mandatory review.',
        },
        { type: 'h2', text: 'The minimum viable control' },
        {
          type: 'p',
          text: 'One simple rule solves most of the risk: no number, regulatory citation or contractual commitment leaves the company without human verification against the original source. AI accelerates drafting, it does not replace accountability.',
        },
        {
          type: 'quote',
          text: 'The model neither lies nor tells the truth: it completes. Checking it is still your job.',
        },
      ],
    },
  },
  {
    slug: 'audit-trail-de-ia',
    category: 'Compliance',
    readTime: 6,
    date: '2026-06-17',
    es: {
      title: 'Audit trail de IA: la evidencia que decide una inspección',
      excerpt:
        'Quién preguntó, cuándo, con qué datos y qué respondió el modelo. Sin ese registro, cualquier afirmación sobre tu control de IA es indemostrable.',
      takeaways: [
        'El registro convierte una declaración en evidencia.',
        'No hace falta guardar todo: hace falta guardar lo relevante.',
        'La retención debe estar definida y justificada.',
      ],
      body: [
        {
          type: 'p',
          text: 'En una inspección o en una due diligence de cliente, la pregunta llega siempre en el mismo formato: muéstreme el registro. Un documento de política sin registros asociados demuestra intención, no cumplimiento.',
        },
        { type: 'h2', text: 'Qué registrar' },
        {
          type: 'ul',
          items: [
            'Identidad del usuario y área a la que pertenece.',
            'Marca temporal y herramienta utilizada.',
            'Clasificación del dato involucrado, no necesariamente el dato.',
            'Acciones automáticas ejecutadas a partir de la respuesta.',
          ],
        },
        {
          type: 'p',
          text: 'El tercer punto es clave para no crear un problema nuevo: registrar la categoría del dato en lugar del contenido íntegro reduce riesgo de privacidad manteniendo la trazabilidad.',
        },
        { type: 'h2', text: 'Retención razonable' },
        {
          type: 'p',
          text: 'Guardar todo indefinidamente es tan problemático como no guardar nada. Define un plazo, documenta la razón y aplica borrado automático. Esa decisión, escrita, es exactamente lo que un auditor espera encontrar.',
        },
      ],
    },
    en: {
      title: 'AI audit trail: the evidence that decides an inspection',
      excerpt:
        'Who asked, when, with which data and what the model answered. Without that record, any claim about your AI control is unprovable.',
      takeaways: [
        'Logging turns a statement into evidence.',
        'You do not need to store everything: you need to store what matters.',
        'Retention must be defined and justified.',
      ],
      body: [
        {
          type: 'p',
          text: 'In an inspection or a client due diligence, the question always arrives in the same format: show me the log. A policy document with no associated records proves intent, not compliance.',
        },
        { type: 'h2', text: 'What to log' },
        {
          type: 'ul',
          items: [
            'User identity and business unit.',
            'Timestamp and tool used.',
            'Classification of the data involved, not necessarily the data itself.',
            'Automated actions executed from the response.',
          ],
        },
        {
          type: 'p',
          text: 'The third point is key to avoid creating a new problem: logging the data category instead of full content reduces privacy risk while preserving traceability.',
        },
        { type: 'h2', text: 'Reasonable retention' },
        {
          type: 'p',
          text: 'Keeping everything indefinitely is as problematic as keeping nothing. Define a period, document the rationale and apply automatic deletion. That written decision is exactly what an auditor expects to find.',
        },
      ],
    },
  },
  {
    slug: 'estrategia-o2o-ciclo-corto',
    category: 'Strategy',
    readTime: 7,
    date: '2026-06-14',
    es: {
      title: 'Estrategia O2O: cerrar en días, no en trimestres',
      excerpt:
        'Integrar el canal digital con el equipo presencial no es una campaña: es una reasignación de responsabilidades sobre el mismo dato.',
      takeaways: [
        'El canal digital cualifica, el equipo humano cierra.',
        'El traspaso debe ocurrir con contexto completo o se pierde.',
        'La métrica que importa es el tiempo hasta el primer contacto útil.',
      ],
      body: [
        {
          type: 'p',
          text: 'Online to offline funciona cuando el lead llega al comercial con contexto suficiente para tener una conversación distinta a la primera. Si el traspaso es un nombre y un teléfono, el canal digital solo ha añadido un paso.',
        },
        { type: 'h2', text: 'Los tres elementos del traspaso' },
        {
          type: 'ul',
          items: [
            'Intención detectada: qué buscaba y qué contenido consumió.',
            'Contexto de cuenta: sector, tamaño, relación previa.',
            'Siguiente mejor acción sugerida y por qué.',
          ],
        },
        {
          type: 'p',
          text: 'Con esos tres datos, la primera llamada empieza en el punto donde antes terminaba la tercera. Ahí es donde se comprime el ciclo de venta, no en enviar más correos.',
        },
        { type: 'h2', text: 'La métrica correcta' },
        {
          type: 'p',
          text: 'Medir número de leads es cómodo y engañoso. La métrica que predice ingresos es el tiempo entre la señal de intención y el primer contacto con contexto. Cuando eso baja de horas, la conversión sube sola.',
        },
        {
          type: 'quote',
          text: 'Un lead sin contexto no es un lead: es una interrupción con nombre.',
        },
      ],
    },
    en: {
      title: 'O2O strategy: closing in days, not quarters',
      excerpt:
        'Integrating the digital channel with the field team is not a campaign: it is a reassignment of responsibility over the same data.',
      takeaways: [
        'The digital channel qualifies, the human team closes.',
        'The handover must carry full context or it is wasted.',
        'The metric that matters is time to first useful contact.',
      ],
      body: [
        {
          type: 'p',
          text: 'Online to offline works when the lead reaches the rep with enough context to have a different conversation from the first one. If the handover is a name and a phone number, the digital channel has only added a step.',
        },
        { type: 'h2', text: 'The three handover elements' },
        {
          type: 'ul',
          items: [
            'Detected intent: what they searched and which content they consumed.',
            'Account context: industry, size, prior relationship.',
            'Suggested next best action and the reason for it.',
          ],
        },
        {
          type: 'p',
          text: 'With those three data points, the first call starts where the third one used to end. That is where the sales cycle compresses, not by sending more email.',
        },
        { type: 'h2', text: 'The right metric' },
        {
          type: 'p',
          text: 'Counting leads is comfortable and misleading. The metric that predicts revenue is time between the intent signal and the first contact with context. Once that drops to hours, conversion rises on its own.',
        },
        {
          type: 'quote',
          text: 'A lead with no context is not a lead: it is an interruption with a name.',
        },
      ],
    },
  },
  {
    slug: 'dashboard-para-decidir',
    category: 'Analytics',
    readTime: 6,
    date: '2026-06-11',
    es: {
      title: 'Tu dashboard no sirve para decidir (y así se arregla)',
      excerpt:
        'Cuarenta indicadores en una pantalla no informan: distraen. Un cuadro de mando útil responde a tres preguntas y cabe en un móvil.',
      takeaways: [
        'Más métricas reducen la capacidad de decisión.',
        'Cada indicador necesita un umbral y un responsable.',
        'Si nadie actúa tras verlo, el panel debe eliminarse.',
      ],
      body: [
        {
          type: 'p',
          text: 'El síntoma es reconocible: un panel enorme que se abre en la reunión mensual y se cierra sin que nadie tome una decisión distinta a la que ya traía pensada.',
        },
        { type: 'h2', text: 'La prueba de las tres preguntas' },
        {
          type: 'ul',
          items: [
            '¿Vamos bien o mal respecto al objetivo del periodo?',
            '¿Dónde está la desviación concreta?',
            '¿Quién tiene que actuar hoy y sobre qué?',
          ],
        },
        {
          type: 'p',
          text: 'Si el panel no responde estas tres en menos de treinta segundos, sobra información. Todo indicador que no ayude a responderlas pertenece a un informe de análisis, no al cuadro de mando operativo.',
        },
        { type: 'h2', text: 'Umbral y dueño' },
        {
          type: 'p',
          text: 'Cada métrica visible debe tener un valor que dispare acción y una persona responsable de esa acción. Sin esos dos atributos, el indicador es decoración que consume atención directiva.',
        },
      ],
    },
    en: {
      title: 'Your dashboard is not decision-ready (here is the fix)',
      excerpt:
        'Forty indicators on one screen do not inform: they distract. A useful dashboard answers three questions and fits on a phone.',
      takeaways: [
        'More metrics reduce decision capacity.',
        'Every indicator needs a threshold and an owner.',
        'If nobody acts after seeing it, the panel should be removed.',
      ],
      body: [
        {
          type: 'p',
          text: 'The symptom is recognizable: a huge panel opened in the monthly meeting and closed without anyone making a decision different from the one they already had in mind.',
        },
        { type: 'h2', text: 'The three-question test' },
        {
          type: 'ul',
          items: [
            'Are we ahead or behind the target for the period?',
            'Where exactly is the deviation?',
            'Who has to act today, and on what?',
          ],
        },
        {
          type: 'p',
          text: 'If the panel cannot answer those three in under thirty seconds, there is too much information. Any indicator that does not help answer them belongs in an analysis report, not in the operational dashboard.',
        },
        { type: 'h2', text: 'Threshold and owner' },
        {
          type: 'p',
          text: 'Every visible metric needs a value that triggers action and a person accountable for that action. Without those two attributes, the indicator is decoration consuming executive attention.',
        },
      ],
    },
  },
  {
    slug: 'coste-oculto-de-la-ia',
    category: 'Finance',
    readTime: 6,
    date: '2026-06-08',
    es: {
      title: 'El coste oculto de la IA en tu cuenta de resultados',
      excerpt:
        'Las licencias son la parte visible y la más pequeña. El coste real está en la verificación, la duplicidad de herramientas y el riesgo no provisionado.',
      takeaways: [
        'Las suscripciones dispersas no aparecen como partida única.',
        'El tiempo de verificación humana es coste directo.',
        'Sin catálogo de herramientas, no hay negociación posible con proveedores.',
      ],
      body: [
        {
          type: 'p',
          text: 'Veinte euros por usuario y mes parece irrelevante hasta que se multiplica por doscientas personas y por cuatro herramientas distintas contratadas por áreas diferentes con tarjetas diferentes.',
        },
        { type: 'h2', text: 'Las cuatro partidas invisibles' },
        {
          type: 'ul',
          items: [
            'Suscripciones duplicadas por área sin visibilidad central.',
            'Horas de revisión y corrección de contenido generado.',
            'Retrabajo por errores que llegaron al cliente.',
            'Riesgo regulatorio no provisionado.',
          ],
        },
        {
          type: 'p',
          text: 'La segunda partida suele ser la mayor y nunca aparece en el presupuesto de tecnología: se paga con horas de perfiles senior revisando textos.',
        },
        { type: 'h2', text: 'El primer paso es contable, no técnico' },
        {
          type: 'p',
          text: 'Un catálogo único de herramientas de IA con coste, responsable y finalidad permite consolidar contratos y negociar. En los casos que hemos visto, esa consolidación sola reduce entre un 20% y un 35% el gasto, antes de cualquier mejora de proceso.',
        },
      ],
    },
    en: {
      title: 'The hidden cost of AI in your P&L',
      excerpt:
        'Licences are the visible and smallest part. The real cost sits in verification, duplicated tooling and unprovisioned risk.',
      takeaways: [
        'Scattered subscriptions never show up as a single line item.',
        'Human verification time is a direct cost.',
        'With no tool catalogue, vendor negotiation is impossible.',
      ],
      body: [
        {
          type: 'p',
          text: 'Twenty euros per user per month looks irrelevant until you multiply it by two hundred people and four different tools bought by different teams on different cards.',
        },
        { type: 'h2', text: 'The four invisible line items' },
        {
          type: 'ul',
          items: [
            'Duplicated subscriptions per team with no central visibility.',
            'Hours spent reviewing and correcting generated content.',
            'Rework from errors that reached the client.',
            'Unprovisioned regulatory risk.',
          ],
        },
        {
          type: 'p',
          text: 'The second item is usually the largest and never appears in the technology budget: it is paid with senior hours spent reviewing text.',
        },
        { type: 'h2', text: 'The first step is accounting, not technical' },
        {
          type: 'p',
          text: 'A single catalogue of AI tools with cost, owner and purpose allows contract consolidation and negotiation. In the cases we have seen, that consolidation alone cuts spend by 20% to 35%, before any process improvement.',
        },
      ],
    },
  },
  {
    slug: 'sesgo-algoritmico-en-b2b',
    category: 'Ethics',
    readTime: 7,
    date: '2026-06-05',
    es: {
      title: 'Sesgo algorítmico: el riesgo que no aparece en el dashboard',
      excerpt:
        'Un modelo entrenado con tus decisiones históricas reproduce tus sesgos históricos, y ahora los aplica a escala y con apariencia de objetividad.',
      takeaways: [
        'El sesgo no se corrige con buenas intenciones, se mide.',
        'Afecta especialmente a selección, scoring y priorización comercial.',
        'La ausencia de medición es en sí misma un hallazgo de auditoría.',
      ],
      body: [
        {
          type: 'p',
          text: 'Si durante años se priorizaron determinados perfiles de cliente o candidato, el histórico contiene ese patrón. Un modelo entrenado sobre él lo aprenderá y lo aplicará con una consistencia que ningún humano tendría.',
        },
        { type: 'h2', text: 'Los tres procesos más expuestos' },
        {
          type: 'ul',
          items: [
            'Selección y promoción de personas.',
            'Scoring de riesgo y decisiones de crédito.',
            'Priorización de cuentas y asignación de recursos comerciales.',
          ],
        },
        {
          type: 'p',
          text: 'En los dos primeros el riesgo es legal y reputacional. En el tercero es económico: se dejan de atender segmentos rentables porque históricamente no se les prestó atención.',
        },
        { type: 'h2', text: 'Cómo se controla' },
        {
          type: 'p',
          text: 'Se define qué resultado sería inaceptable, se mide la distribución real de decisiones y se revisa periódicamente con un responsable asignado. No es un problema de algoritmos: es un problema de gobierno con soporte estadístico.',
        },
        {
          type: 'quote',
          text: 'Automatizar una decisión sesgada no la corrige: la vuelve sistemática y demostrable.',
        },
      ],
    },
    en: {
      title: 'Algorithmic bias: the risk your dashboard never shows',
      excerpt:
        'A model trained on your historical decisions reproduces your historical bias, and now applies it at scale with an appearance of objectivity.',
      takeaways: [
        'Bias is not fixed with good intentions, it is measured.',
        'It hits hiring, scoring and commercial prioritization hardest.',
        'The absence of measurement is itself an audit finding.',
      ],
      body: [
        {
          type: 'p',
          text: 'If certain client or candidate profiles were favoured for years, the historical record contains that pattern. A model trained on it will learn it and apply it with a consistency no human would achieve.',
        },
        { type: 'h2', text: 'The three most exposed processes' },
        {
          type: 'ul',
          items: [
            'Hiring and promotion decisions.',
            'Risk scoring and credit decisions.',
            'Account prioritization and commercial resource allocation.',
          ],
        },
        {
          type: 'p',
          text: 'In the first two the risk is legal and reputational. In the third it is economic: profitable segments go unserved because they were historically ignored.',
        },
        { type: 'h2', text: 'How to control it' },
        {
          type: 'p',
          text: 'Define which outcome would be unacceptable, measure the real distribution of decisions and review it periodically with a named owner. This is not an algorithm problem: it is a governance problem with statistical support.',
        },
        {
          type: 'quote',
          text: 'Automating a biased decision does not fix it: it makes it systematic and provable.',
        },
      ],
    },
  },
  {
    slug: 'transformacion-en-siete-dias',
    category: 'Strategy',
    readTime: 7,
    date: '2026-06-02',
    es: {
      title: 'Transformación en 7 días: qué es posible y qué no',
      excerpt:
        'Siete días no alcanzan para reescribir tu arquitectura. Sí alcanzan para pasar de exposición desconocida a control documentado y auditable.',
      takeaways: [
        'El plazo corto obliga a definir alcance con precisión.',
        'Lo que se logra: inventario, políticas, registro y auditoría inicial.',
        'Lo que no: migraciones, integraciones profundas ni cambio cultural.',
      ],
      body: [
        {
          type: 'p',
          text: 'La promesa de siete días genera escepticismo legítimo. Conviene separar qué cabe realmente en una semana y qué se vende con exageración.',
        },
        { type: 'h2', text: 'Lo que sí cabe' },
        {
          type: 'ul',
          items: [
            'Inventario completo de herramientas y casos de uso.',
            'Valoración económica del riesgo actual.',
            'Políticas por rol y clasificación de datos aprobadas.',
            'Registro de consultas activado y auditoría inicial firmada.',
          ],
        },
        { type: 'h2', text: 'Lo que no cabe' },
        {
          type: 'ul',
          items: [
            'Migrar plataformas o rehacer integraciones.',
            'Cambiar la cultura de decisión de la organización.',
            'Certificación formal con organismo acreditado.',
          ],
        },
        {
          type: 'p',
          text: 'La condición que hace posible el plazo no es técnica: es de decisión. Se necesita una persona con autoridad disponible durante esos siete días. Cuando falta, ningún método cumple el calendario.',
        },
        {
          type: 'quote',
          text: 'El cuello de botella nunca es la tecnología: es quién puede firmar.',
        },
      ],
    },
    en: {
      title: 'Transformation in 7 days: what is possible and what is not',
      excerpt:
        'Seven days will not rewrite your architecture. They are enough to move from unknown exposure to documented, auditable control.',
      takeaways: [
        'A short deadline forces precise scope definition.',
        'What you get: inventory, policies, logging and an initial audit.',
        'What you do not: migrations, deep integrations or cultural change.',
      ],
      body: [
        {
          type: 'p',
          text: 'A seven-day promise invites legitimate scepticism. It is worth separating what actually fits in a week from what is oversold.',
        },
        { type: 'h2', text: 'What fits' },
        {
          type: 'ul',
          items: [
            'Full inventory of tools and use cases.',
            'Economic valuation of current risk.',
            'Approved role-based policies and data classification.',
            'Prompt logging enabled and a signed initial audit.',
          ],
        },
        { type: 'h2', text: 'What does not fit' },
        {
          type: 'ul',
          items: [
            'Migrating platforms or rebuilding integrations.',
            'Changing the organization decision culture.',
            'Formal certification with an accredited body.',
          ],
        },
        {
          type: 'p',
          text: 'The condition that makes the timeline possible is not technical: it is decisional. You need one person with authority available during those seven days. When that is missing, no method meets the calendar.',
        },
        {
          type: 'quote',
          text: 'The bottleneck is never technology: it is who can sign.',
        },
      ],
    },
  },
  {
    slug: 'consultoria-software-o-ambos',
    category: 'Strategy',
    readTime: 6,
    date: '2026-05-30',
    es: {
      title: 'Consultoría, software o ambos: cómo elegir sin equivocarse',
      excerpt:
        'El software sin criterio produce paneles vacíos. La consultoría sin ejecución produce documentos. La combinación correcta depende de qué te falta realmente.',
      takeaways: [
        'Si te falta criterio, empieza por consultoría.',
        'Si te falta capacidad de registro, empieza por herramienta.',
        'Si te falta tiempo, necesitas ambas cosas con un único responsable.',
      ],
      body: [
        {
          type: 'p',
          text: 'La decisión se simplifica identificando la carencia real. Comprar herramienta cuando el problema es de criterio termina en licencias sin uso. Contratar consultoría cuando el problema es de registro termina en un informe sin efecto.',
        },
        { type: 'h2', text: 'Tres escenarios' },
        {
          type: 'ul',
          items: [
            'Sabes qué controlar pero no puedes registrarlo: necesitas herramienta.',
            'Tienes herramientas pero nadie define reglas: necesitas criterio.',
            'Tienes plazo regulatorio encima: necesitas ambas con responsabilidad única.',
          ],
        },
        {
          type: 'p',
          text: 'El tercer escenario es el más común en empresas medianas y el que peor se resuelve repartiendo responsabilidad entre varios proveedores.',
        },
        { type: 'h2', text: 'La pregunta que filtra proveedores' },
        {
          type: 'p',
          text: 'Pregunta quién firma el resultado. Si nadie asume el entregable auditable con su nombre, estás comprando actividad, no resultado.',
        },
      ],
    },
    en: {
      title: 'Consulting, software or both: choosing without regret',
      excerpt:
        'Software without judgment produces empty dashboards. Consulting without execution produces documents. The right mix depends on what you actually lack.',
      takeaways: [
        'If you lack judgment, start with consulting.',
        'If you lack logging capability, start with tooling.',
        'If you lack time, you need both under a single owner.',
      ],
      body: [
        {
          type: 'p',
          text: 'The decision simplifies once you identify the real gap. Buying tooling when the problem is judgment ends in unused licences. Hiring consulting when the problem is logging ends in a report with no effect.',
        },
        { type: 'h2', text: 'Three scenarios' },
        {
          type: 'ul',
          items: [
            'You know what to control but cannot log it: you need tooling.',
            'You have tools but nobody sets rules: you need judgment.',
            'You have a regulatory deadline: you need both under one owner.',
          ],
        },
        {
          type: 'p',
          text: 'The third scenario is the most common in mid-sized companies and the worst handled by splitting responsibility across several vendors.',
        },
        { type: 'h2', text: 'The question that filters vendors' },
        {
          type: 'p',
          text: 'Ask who signs the outcome. If nobody puts their name on an auditable deliverable, you are buying activity, not results.',
        },
      ],
    },
  },
  {
    slug: 'shadow-ai-en-tu-organizacion',
    category: 'Governance',
    readTime: 6,
    date: '2026-05-27',
    es: {
      title: 'Shadow AI: el 80% del uso que no ves',
      excerpt:
        'Igual que ocurrió con la nube hace una década, la IA entró por las cuentas personales del equipo. La diferencia es que ahora sale información contigo dentro.',
      takeaways: [
        'El uso no autorizado supera siempre al autorizado en la primera medición.',
        'Bloquear sin alternativa aumenta el uso oculto.',
        'La amnistía documentada es la vía más rápida al inventario real.',
      ],
      body: [
        {
          type: 'p',
          text: 'En el primer inventario de un diagnóstico aparecen sistemáticamente entre tres y cinco veces más herramientas de las que la dirección tenía registradas. No es rebeldía: es iniciativa mal canalizada.',
        },
        { type: 'h2', text: 'Por qué bloquear empeora el problema' },
        {
          type: 'p',
          text: 'Cuando se bloquea el acceso corporativo sin ofrecer sustituto, el uso migra al móvil personal. El trabajo sigue haciéndose con IA, pero ahora sin ninguna posibilidad de registro ni control.',
        },
        { type: 'h2', text: 'La amnistía funciona' },
        {
          type: 'ul',
          items: [
            'Se comunica que el objetivo es inventariar, no sancionar.',
            'Se abre un canal simple para declarar herramientas en uso.',
            'Se ofrece acceso autorizado equivalente en días, no en meses.',
          ],
        },
        {
          type: 'p',
          text: 'Este enfoque produce en una semana un inventario más completo que cualquier auditoría técnica hecha contra la voluntad del equipo.',
        },
        {
          type: 'quote',
          text: 'No puedes gobernar lo que tu equipo no se atreve a contarte.',
        },
      ],
    },
    en: {
      title: 'Shadow AI: the 80% of usage you cannot see',
      excerpt:
        'Just like cloud a decade ago, AI entered through your team personal accounts. The difference is that now your information leaves with it.',
      takeaways: [
        'Unauthorized usage always exceeds authorized usage at first measurement.',
        'Blocking without an alternative increases hidden usage.',
        'A documented amnesty is the fastest route to a real inventory.',
      ],
      body: [
        {
          type: 'p',
          text: 'The first inventory in an assessment consistently surfaces three to five times more tools than leadership had on record. It is not rebellion: it is misdirected initiative.',
        },
        { type: 'h2', text: 'Why blocking makes it worse' },
        {
          type: 'p',
          text: 'When corporate access is blocked with no substitute, usage migrates to personal phones. The work still gets done with AI, but now with no possibility of logging or control.',
        },
        { type: 'h2', text: 'Amnesty works' },
        {
          type: 'ul',
          items: [
            'Communicate that the goal is inventory, not punishment.',
            'Open a simple channel to declare tools in use.',
            'Offer equivalent authorized access in days, not months.',
          ],
        },
        {
          type: 'p',
          text: 'This approach produces a more complete inventory in one week than any technical audit run against the will of the team.',
        },
        {
          type: 'quote',
          text: 'You cannot govern what your team does not dare to tell you.',
        },
      ],
    },
  },
  {
    slug: 'due-diligence-de-proveedores-de-ia',
    category: 'Compliance',
    readTime: 7,
    date: '2026-05-24',
    es: {
      title: 'Due diligence de proveedores de IA: las 8 preguntas obligatorias',
      excerpt:
        'Cuando incorporas un proveedor con IA dentro, heredas su riesgo. Estas ocho preguntas separan a los que tienen control de los que tienen presentación.',
      takeaways: [
        'La responsabilidad frente al cliente final no se subcontrata.',
        'Exige respuestas documentales, no declaraciones comerciales.',
        'La negativa a responder es en sí misma una respuesta.',
      ],
      body: [
        {
          type: 'p',
          text: 'Cada vez más contratos incorporan cláusulas sobre uso de IA en la cadena de suministro. Si tu proveedor procesa datos de tus clientes con un modelo, ese riesgo entra en tu perímetro.',
        },
        { type: 'h2', text: 'Las ocho preguntas' },
        {
          type: 'ul',
          items: [
            '¿Qué modelos utilizan y de qué proveedor?',
            '¿Se entrenan modelos con nuestros datos?',
            '¿Dónde se procesan y cuánto se retienen?',
            '¿Existe registro de consultas exportable?',
            '¿Quién es el responsable interno de governance de IA?',
            '¿Han pasado una auditoría independiente?',
            '¿Cómo notifican incidentes y en qué plazo?',
            '¿Qué subprocesadores intervienen?',
          ],
        },
        {
          type: 'p',
          text: 'Las respuestas deben venir por escrito y con documento de respaldo. Una llamada tranquilizadora no sirve como evidencia cuando la pregunta la haga tu propio cliente.',
        },
        { type: 'h2', text: 'Cómo usar el resultado' },
        {
          type: 'p',
          text: 'Clasifica proveedores en tres niveles y aplica controles proporcionales. No se trata de excluir, sino de saber dónde estás asumiendo riesgo de terceros sin haberlo decidido.',
        },
      ],
    },
    en: {
      title: 'AI vendor due diligence: the 8 mandatory questions',
      excerpt:
        'When you onboard a vendor with AI inside, you inherit their risk. These eight questions separate those with control from those with a slide deck.',
      takeaways: [
        'Accountability to your end client cannot be subcontracted.',
        'Demand documented answers, not sales statements.',
        'A refusal to answer is itself an answer.',
      ],
      body: [
        {
          type: 'p',
          text: 'More contracts now include clauses on AI usage across the supply chain. If your vendor processes your client data with a model, that risk enters your perimeter.',
        },
        { type: 'h2', text: 'The eight questions' },
        {
          type: 'ul',
          items: [
            'Which models do you use and from which provider?',
            'Are models trained on our data?',
            'Where is data processed and how long is it retained?',
            'Is there an exportable prompt log?',
            'Who is your internal AI governance owner?',
            'Have you passed an independent audit?',
            'How and how fast do you notify incidents?',
            'Which subprocessors are involved?',
          ],
        },
        {
          type: 'p',
          text: 'Answers must come in writing with supporting documents. A reassuring call is not evidence when your own client asks the same question.',
        },
        { type: 'h2', text: 'How to use the result' },
        {
          type: 'p',
          text: 'Classify vendors into three tiers and apply proportional controls. This is not about exclusion, but about knowing where you are absorbing third-party risk without having decided to.',
        },
      ],
    },
  },
]
