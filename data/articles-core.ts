import type { Article } from '@/lib/articles'

export const articlesCore: Article[] = [
  {
    slug: 'governance-de-ia-101',
    category: 'Governance',
    readTime: 7,
    date: '2026-07-20',
    es: {
      title: 'Governance de IA 101: por qué tu empresa ya está expuesta',
      excerpt:
        'Tus equipos usan ChatGPT, Claude y Copilot todos los días. La pregunta no es si adoptaste IA, sino si puedes demostrar quién la usa, con qué datos y bajo qué reglas.',
      takeaways: [
        'La adopción de IA en las empresas ocurrió de abajo hacia arriba, sin control.',
        'Governance no es prohibir: es registrar, clasificar y poder demostrar.',
        'Sin evidencia documental, la carga de la prueba recae sobre la empresa.',
      ],
      body: [
        {
          type: 'p',
          text: 'La mayoría de las direcciones descubre su nivel real de adopción de IA cuando ya es tarde. Nadie firmó un proyecto: los equipos empezaron a usar herramientas gratuitas para redactar propuestas, resumir llamadas y limpiar bases de datos. La productividad subió, la trazabilidad desapareció.',
        },
        { type: 'h2', text: 'Governance no significa frenar la IA' },
        {
          type: 'p',
          text: 'El error más común es plantear el problema como una elección entre innovación y control. Prohibir herramientas solo desplaza el uso a dispositivos personales, donde no hay registro posible. Un marco de governance eficaz hace lo contrario: canaliza el uso hacia entornos donde cada consulta queda registrada y cada dato tiene una clasificación asignada.',
        },
        { type: 'h2', text: 'Los cuatro pilares mínimos' },
        {
          type: 'ul',
          items: [
            'Inventario: qué herramientas se usan, en qué área y con qué finalidad.',
            'Clasificación de datos: qué información nunca puede salir del perímetro.',
            'Audit trail: registro de consultas, usuarios y respuestas relevantes.',
            'Revisión independiente: alguien externo valida que el marco funciona.',
          ],
        },
        {
          type: 'p',
          text: 'Con estos cuatro elementos ya se puede responder a un cuestionario de cliente enterprise o a un requerimiento regulatorio. Sin ellos, cualquier respuesta es una declaración de intenciones.',
        },
        {
          type: 'quote',
          text: 'Si no puedes reconstruir qué preguntó tu equipo a un modelo el mes pasado, no tienes governance: tienes suerte.',
        },
        { type: 'h2', text: 'Dónde empezar esta semana' },
        {
          type: 'p',
          text: 'Empieza por el inventario, no por la política. Una encuesta interna de diez preguntas suele revelar más herramientas en uso de las que la dirección imagina. Ese mapa es la base para priorizar: primero se controla lo que toca datos de clientes y precios, después el resto.',
        },
      ],
    },
    en: {
      title: 'AI Governance 101: why your company is already exposed',
      excerpt:
        'Your teams use ChatGPT, Claude and Copilot every day. The question is not whether you adopted AI, but whether you can prove who uses it, with which data and under which rules.',
      takeaways: [
        'Enterprise AI adoption happened bottom-up, with no controls.',
        'Governance is not banning: it is logging, classifying and proving.',
        'With no documented evidence, the burden of proof falls on the company.',
      ],
      body: [
        {
          type: 'p',
          text: 'Most boards discover their real level of AI adoption when it is already late. Nobody signed off a project: teams simply started using free tools to draft proposals, summarize calls and clean up databases. Productivity went up, traceability disappeared.',
        },
        { type: 'h2', text: 'Governance does not mean slowing AI down' },
        {
          type: 'p',
          text: 'The most common mistake is framing this as a choice between innovation and control. Banning tools only pushes usage onto personal devices, where no logging is possible. An effective governance framework does the opposite: it channels usage into environments where every prompt is recorded and every data category has an assigned classification.',
        },
        { type: 'h2', text: 'The four minimum pillars' },
        {
          type: 'ul',
          items: [
            'Inventory: which tools are used, by which team and for what purpose.',
            'Data classification: which information can never leave the perimeter.',
            'Audit trail: logging of prompts, users and relevant outputs.',
            'Independent review: someone external validates that the framework works.',
          ],
        },
        {
          type: 'p',
          text: 'With those four elements you can answer an enterprise client questionnaire or a regulatory request. Without them, any answer is a statement of intent.',
        },
        {
          type: 'quote',
          text: 'If you cannot reconstruct what your team asked a model last month, you do not have governance: you have luck.',
        },
        { type: 'h2', text: 'Where to start this week' },
        {
          type: 'p',
          text: 'Start with the inventory, not the policy. A ten-question internal survey usually reveals more tools in use than leadership expects. That map is the basis for prioritization: first control whatever touches client data and pricing, then the rest.',
        },
      ],
    },
  },
  {
    slug: 'fuga-de-datos-por-uso-de-ia',
    category: 'Security',
    readTime: 6,
    date: '2026-07-17',
    es: {
      title: 'Tu equipo está filtrando datos sin saberlo',
      excerpt:
        'Cada prompt puede contener listas de clientes, márgenes o cláusulas contractuales. Samsung lo aprendió con código fuente; la mayoría de las empresas B2B todavía no se ha enterado.',
      takeaways: [
        'La filtración no es maliciosa: es funcional, buscan hacer su trabajo más rápido.',
        'El riesgo se concentra en ventas, finanzas y soporte.',
        'La mitigación empieza por reemplazar la herramienta, no por castigar al usuario.',
      ],
      body: [
        {
          type: 'p',
          text: 'Un comercial pega el histórico de negociación de una cuenta para que el modelo le redacte la contraoferta. Un analista sube el fichero de márgenes para que le encuentre patrones. Ninguno de los dos está intentando dañar a la empresa: están intentando cumplir su objetivo trimestral.',
        },
        { type: 'h2', text: 'Los tres focos habituales' },
        {
          type: 'ul',
          items: [
            'Ventas: propuestas, precios, condiciones y contactos de clientes.',
            'Finanzas: estructuras de coste, márgenes y proyecciones no publicadas.',
            'Soporte: tickets con datos personales y detalles de arquitectura.',
          ],
        },
        {
          type: 'p',
          text: 'En un diagnóstico típico, más del 60% de los prompts problemáticos provienen de estas tres áreas. No son los perfiles técnicos: son los perfiles con presión comercial.',
        },
        { type: 'h2', text: 'Qué funciona y qué no' },
        {
          type: 'p',
          text: 'Las circulares internas no cambian el comportamiento. Lo que funciona es dar una alternativa igual de rápida dentro de un entorno controlado, con el mismo modelo y sin pasos adicionales. Si la vía segura es más lenta que la insegura, el equipo elegirá la insegura.',
        },
        {
          type: 'quote',
          text: 'La política que no ofrece una alternativa cómoda no es una política: es una declaración para el acta.',
        },
        {
          type: 'p',
          text: 'El segundo componente es la visibilidad. Cuando el equipo sabe que las consultas quedan registradas, el comportamiento cambia de inmediato, sin necesidad de sanciones.',
        },
      ],
    },
    en: {
      title: 'Your team is leaking data without knowing it',
      excerpt:
        'Every prompt can contain client lists, margins or contract clauses. Samsung learned it with source code; most B2B companies have not noticed yet.',
      takeaways: [
        'Leakage is not malicious: it is functional, people want to work faster.',
        'Risk concentrates in sales, finance and support.',
        'Mitigation starts by replacing the tool, not punishing the user.',
      ],
      body: [
        {
          type: 'p',
          text: 'A sales rep pastes an account negotiation history so the model can draft the counteroffer. An analyst uploads the margin file to find patterns. Neither is trying to harm the company: both are trying to hit a quarterly target.',
        },
        { type: 'h2', text: 'The three usual hotspots' },
        {
          type: 'ul',
          items: [
            'Sales: proposals, pricing, terms and client contacts.',
            'Finance: cost structures, margins and unpublished forecasts.',
            'Support: tickets with personal data and architecture details.',
          ],
        },
        {
          type: 'p',
          text: 'In a typical assessment, more than 60% of problematic prompts come from these three areas. Not the technical profiles: the ones under commercial pressure.',
        },
        { type: 'h2', text: 'What works and what does not' },
        {
          type: 'p',
          text: 'Internal memos do not change behaviour. What works is offering an equally fast alternative inside a controlled environment, with the same model and no extra steps. If the safe path is slower than the unsafe one, the team picks the unsafe one.',
        },
        {
          type: 'quote',
          text: 'A policy that offers no comfortable alternative is not a policy: it is a statement for the minutes.',
        },
        {
          type: 'p',
          text: 'The second component is visibility. Once the team knows prompts are logged, behaviour changes immediately, with no need for sanctions.',
        },
      ],
    },
  },
  {
    slug: 'iso-42001-guia-practica',
    category: 'Compliance',
    readTime: 8,
    date: '2026-07-14',
    es: {
      title: 'ISO 42001: guía práctica para directivos con prisa',
      excerpt:
        'No necesitas leer la norma completa. Necesitas saber qué te van a pedir, qué evidencia debes producir y cuánto tarda realmente montarlo.',
      takeaways: [
        'ISO 42001 es un sistema de gestión, no una certificación de producto.',
        'La mayor parte del trabajo es documental, no tecnológico.',
        'Los clientes enterprise ya la usan como filtro de compra.',
      ],
      body: [
        {
          type: 'p',
          text: 'ISO 42001 define un sistema de gestión de inteligencia artificial. En la práctica significa que la organización debe poder explicar, con documentos, cómo decide usar IA, cómo evalúa riesgos y cómo revisa resultados.',
        },
        { type: 'h2', text: 'Qué te van a pedir de verdad' },
        {
          type: 'ul',
          items: [
            'Alcance definido: qué sistemas de IA entran y cuáles no.',
            'Análisis de riesgos por caso de uso, no genérico.',
            'Roles y responsabilidades asignados con nombre.',
            'Registros de revisión y de incidencias.',
          ],
        },
        {
          type: 'p',
          text: 'Lo que rara vez se dice: el 70% del esfuerzo es ordenar y escribir lo que ya haces. Solo el 30% implica cambios técnicos reales, normalmente registro de consultas y control de accesos.',
        },
        { type: 'h2', text: 'Por qué acelera ventas' },
        {
          type: 'p',
          text: 'Los departamentos de compras de grandes cuentas han añadido preguntas de governance de IA a sus cuestionarios de proveedor. Responder con un marco documentado acorta el ciclo de venta; responder con buenas intenciones lo alarga o lo detiene.',
        },
        {
          type: 'quote',
          text: 'La norma no te hace más innovador. Te hace contratable por empresas que no pueden asumir riesgo.',
        },
        { type: 'h2', text: 'Plazos realistas' },
        {
          type: 'p',
          text: 'Un marco operativo mínimo, auditable internamente, se puede levantar en una semana si existe voluntad de decisión. La certificación formal con un organismo acreditado depende de su calendario, pero el expediente ya está listo para enseñarlo mucho antes.',
        },
      ],
    },
    en: {
      title: 'ISO 42001: a practical guide for executives in a hurry',
      excerpt:
        'You do not need to read the full standard. You need to know what will be asked of you, what evidence to produce and how long it really takes to build.',
      takeaways: [
        'ISO 42001 is a management system, not a product certification.',
        'Most of the work is documentary, not technological.',
        'Enterprise buyers already use it as a purchase filter.',
      ],
      body: [
        {
          type: 'p',
          text: 'ISO 42001 defines an artificial intelligence management system. In practice it means the organization must be able to explain, with documents, how it decides to use AI, how it assesses risk and how it reviews outcomes.',
        },
        { type: 'h2', text: 'What you will actually be asked' },
        {
          type: 'ul',
          items: [
            'A defined scope: which AI systems are in and which are out.',
            'Risk analysis per use case, not generic.',
            'Roles and responsibilities assigned by name.',
            'Review and incident records.',
          ],
        },
        {
          type: 'p',
          text: 'What is rarely said: 70% of the effort is organizing and writing down what you already do. Only 30% involves real technical change, usually prompt logging and access control.',
        },
        { type: 'h2', text: 'Why it accelerates sales' },
        {
          type: 'p',
          text: 'Procurement teams at large accounts have added AI governance questions to their vendor questionnaires. Answering with a documented framework shortens the sales cycle; answering with good intentions stretches or stops it.',
        },
        {
          type: 'quote',
          text: 'The standard does not make you more innovative. It makes you buyable by companies that cannot absorb risk.',
        },
        { type: 'h2', text: 'Realistic timelines' },
        {
          type: 'p',
          text: 'A minimum operational framework, internally auditable, can be stood up in a week when there is willingness to decide. Formal certification with an accredited body depends on their calendar, but the file is ready to show long before that.',
        },
      ],
    },
  },
  {
    slug: 'roi-de-la-governance-de-ia',
    category: 'Business',
    readTime: 7,
    date: '2026-07-11',
    es: {
      title: 'El ROI de la governance: no es un gasto de seguridad',
      excerpt:
        'Ordenar el uso de IA reduce riesgo, pero el retorno visible viene de otro lado: ciclos de venta más cortos, menos retrabajo y decisiones más rápidas.',
      takeaways: [
        'El ahorro por multas evitadas es real pero difícil de defender internamente.',
        'El retorno tangible aparece en velocidad comercial y productividad.',
        'Sin línea base medida, cualquier cifra de ROI es marketing.',
      ],
      body: [
        {
          type: 'p',
          text: 'Presentar governance como un seguro contra multas es la peor forma de venderlo internamente. Los comités aprueban inversiones que generan ingresos o liberan capacidad, no las que evitan hipótesis.',
        },
        { type: 'h2', text: 'Las tres palancas medibles' },
        {
          type: 'ul',
          items: [
            'Ciclo de venta: responder cuestionarios de compliance en horas en lugar de semanas.',
            'Productividad: uso de IA autorizado con plantillas por rol, sin miedo ni bloqueos.',
            'Retrabajo: menos errores por respuestas de modelos sin validación.',
          ],
        },
        {
          type: 'p',
          text: 'En los casos que hemos medido, la palanca comercial explica la mayor parte del retorno. Una cuenta enterprise desbloqueada compensa el proyecto completo varias veces.',
        },
        { type: 'h2', text: 'Cómo medirlo sin engañarse' },
        {
          type: 'p',
          text: 'Antes de tocar nada, se congela una línea base: tiempo medio de respuesta a cuestionarios, horas dedicadas a tareas repetitivas, número de incidencias por contenido incorrecto. Sin esos tres números, el informe final es una narración.',
        },
        {
          type: 'quote',
          text: 'Un ROI sin línea base es una opinión con decimales.',
        },
      ],
    },
    en: {
      title: 'The ROI of governance: it is not a security expense',
      excerpt:
        'Organizing AI usage reduces risk, but the visible return comes from elsewhere: shorter sales cycles, less rework and faster decisions.',
      takeaways: [
        'Savings from avoided fines are real but hard to defend internally.',
        'Tangible return shows up in commercial speed and productivity.',
        'With no measured baseline, any ROI figure is marketing.',
      ],
      body: [
        {
          type: 'p',
          text: 'Pitching governance as insurance against fines is the worst way to sell it internally. Committees approve investments that generate revenue or release capacity, not ones that avoid hypotheticals.',
        },
        { type: 'h2', text: 'The three measurable levers' },
        {
          type: 'ul',
          items: [
            'Sales cycle: answering compliance questionnaires in hours instead of weeks.',
            'Productivity: authorized AI usage with role-based templates, without fear or blockers.',
            'Rework: fewer errors caused by unvalidated model output.',
          ],
        },
        {
          type: 'p',
          text: 'In the cases we have measured, the commercial lever explains most of the return. One unblocked enterprise account pays for the whole project several times over.',
        },
        { type: 'h2', text: 'How to measure it honestly' },
        {
          type: 'p',
          text: 'Before touching anything, freeze a baseline: average response time to questionnaires, hours spent on repetitive tasks, number of incidents from incorrect content. Without those three numbers, the final report is storytelling.',
        },
        {
          type: 'quote',
          text: 'ROI without a baseline is an opinion with decimals.',
        },
      ],
    },
  },
  {
    slug: 'copilot-chatgpt-claude-comparativa-b2b',
    category: 'Security',
    readTime: 6,
    date: '2026-07-08',
    es: {
      title: 'Copilot, ChatGPT o Claude: qué mirar antes de decidir',
      excerpt:
        'La comparación relevante para una empresa no es qué modelo escribe mejor, sino qué contrato firmas, dónde se procesan los datos y qué puedes auditar después.',
      takeaways: [
        'La diferencia decisiva está en el plan contratado, no en el modelo.',
        'Los planes de consumo no ofrecen las garantías que exige compliance.',
        'Sin exportación de registros, no puedes demostrar nada.',
      ],
      body: [
        {
          type: 'p',
          text: 'Las tres herramientas son competentes. La decisión empresarial se juega en otro terreno: qué dice el contrato sobre entrenamiento con tus datos, qué residencia tienen, cuánto retienen y si puedes extraer los registros para una auditoría.',
        },
        { type: 'h2', text: 'La checklist de compra' },
        {
          type: 'ul',
          items: [
            'Compromiso explícito de no entrenar con datos del cliente.',
            'Residencia y plazo de retención configurables.',
            'Administración centralizada de usuarios y permisos.',
            'Exportación de logs en formato utilizable.',
            'Certificaciones vigentes del proveedor.',
          ],
        },
        {
          type: 'p',
          text: 'Un plan individual de cualquiera de las tres marcas suele fallar en al menos tres de estos cinco puntos. El mismo proveedor con plan enterprise los cumple. La conversación, por tanto, es de contratación, no de preferencia técnica.',
        },
        { type: 'h2', text: 'El error de estandarizar demasiado pronto' },
        {
          type: 'p',
          text: 'Elegir un único proveedor antes de mapear los casos de uso reales suele terminar en licencias infrautilizadas y equipos que siguen usando su herramienta favorita por la puerta de atrás. Primero el inventario, después el contrato.',
        },
      ],
    },
    en: {
      title: 'Copilot, ChatGPT or Claude: what to check before deciding',
      excerpt:
        'The relevant comparison for a company is not which model writes better, but which contract you sign, where data is processed and what you can audit afterwards.',
      takeaways: [
        'The decisive difference is the plan you buy, not the model.',
        'Consumer plans do not provide the guarantees compliance requires.',
        'With no log export, you cannot prove anything.',
      ],
      body: [
        {
          type: 'p',
          text: 'All three tools are competent. The enterprise decision plays out elsewhere: what the contract says about training on your data, where it is processed, how long it is retained and whether you can extract logs for an audit.',
        },
        { type: 'h2', text: 'The buying checklist' },
        {
          type: 'ul',
          items: [
            'Explicit commitment not to train on customer data.',
            'Configurable residency and retention period.',
            'Centralized user and permission administration.',
            'Log export in a usable format.',
            'Current vendor certifications.',
          ],
        },
        {
          type: 'p',
          text: 'An individual plan from any of the three brands typically fails at least three of these five points. The same vendor on an enterprise plan meets them. So the conversation is contractual, not a technical preference.',
        },
        { type: 'h2', text: 'The mistake of standardizing too early' },
        {
          type: 'p',
          text: 'Picking a single vendor before mapping real use cases usually ends in underused licences and teams quietly sticking to their favourite tool. Inventory first, contract second.',
        },
      ],
    },
  },
  {
    slug: 'gdpr-lgpd-y-ai-act',
    category: 'Compliance',
    readTime: 8,
    date: '2026-07-05',
    es: {
      title: 'GDPR, LGPD y AI Act: tres marcos, una sola evidencia',
      excerpt:
        'No necesitas tres proyectos de compliance. Necesitas un expediente común que responda a las tres normativas con la misma documentación.',
      takeaways: [
        'Los tres marcos piden pruebas parecidas expresadas de forma distinta.',
        'Duplicar proyectos multiplica coste sin reducir riesgo.',
        'El punto común es la trazabilidad del tratamiento de datos.',
      ],
      body: [
        {
          type: 'p',
          text: 'GDPR y LGPD regulan el tratamiento de datos personales. El AI Act regula sistemas de IA por nivel de riesgo. Aunque el lenguaje difiere, las tres exigen lo mismo en la práctica: saber qué haces, poder justificar por qué, y demostrarlo con registros.',
        },
        { type: 'h2', text: 'El expediente único' },
        {
          type: 'ul',
          items: [
            'Registro de actividades y sistemas de IA en uso.',
            'Base legal o justificación de uso por caso.',
            'Evaluación de impacto y medidas de mitigación.',
            'Registros de acceso y de revisión periódica.',
          ],
        },
        {
          type: 'p',
          text: 'Ese conjunto sirve para las tres normativas cambiando únicamente la portada y el vocabulario. Montarlo una vez y mantenerlo es infinitamente más barato que reconstruirlo cada vez que llega un cuestionario.',
        },
        { type: 'h2', text: 'Clasificación por riesgo, no por herramienta' },
        {
          type: 'p',
          text: 'El AI Act obliga a pensar en términos de riesgo del caso de uso. Un modelo generando borradores internos no equivale al mismo modelo interviniendo en decisiones de crédito o de contratación. La documentación debe reflejar esa diferencia.',
        },
        {
          type: 'quote',
          text: 'La pregunta del regulador no es qué herramienta usas, sino qué decisión tomó y quién la revisó.',
        },
      ],
    },
    en: {
      title: 'GDPR, LGPD and the AI Act: three frameworks, one evidence file',
      excerpt:
        'You do not need three compliance projects. You need a shared file that answers all three regulations with the same documentation.',
      takeaways: [
        'The three frameworks ask for similar proof, worded differently.',
        'Duplicating projects multiplies cost without reducing risk.',
        'The common ground is traceability of data processing.',
      ],
      body: [
        {
          type: 'p',
          text: 'GDPR and LGPD regulate personal data processing. The AI Act regulates AI systems by risk level. Although the language differs, in practice all three demand the same thing: knowing what you do, being able to justify why, and proving it with records.',
        },
        { type: 'h2', text: 'The single file' },
        {
          type: 'ul',
          items: [
            'Register of activities and AI systems in use.',
            'Legal basis or justification per use case.',
            'Impact assessment and mitigation measures.',
            'Access logs and periodic review records.',
          ],
        },
        {
          type: 'p',
          text: 'That set serves all three regulations by changing only the cover page and vocabulary. Building it once and maintaining it is far cheaper than rebuilding it every time a questionnaire arrives.',
        },
        { type: 'h2', text: 'Classify by risk, not by tool' },
        {
          type: 'p',
          text: 'The AI Act forces you to think in terms of use-case risk. A model drafting internal documents is not the same as the same model influencing credit or hiring decisions. Documentation must reflect that difference.',
        },
        {
          type: 'quote',
          text: 'The regulator will not ask which tool you use, but what decision it made and who reviewed it.',
        },
      ],
    },
  },
  {
    slug: 'bi-mas-ia-saber-y-actuar',
    category: 'Analytics',
    readTime: 6,
    date: '2026-07-02',
    es: {
      title: 'BI + IA: la diferencia entre saber y actuar',
      excerpt:
        'El business intelligence explica lo que pasó. La IA propone qué hacer. Separados producen informes; juntos producen decisiones.',
      takeaways: [
        'Un dashboard que nadie usa para decidir es un coste, no un activo.',
        'La IA sin datos gobernados amplifica los errores existentes.',
        'La integración empieza por definir la decisión, no la visualización.',
      ],
      body: [
        {
          type: 'p',
          text: 'Muchas empresas tienen dashboards y también tienen IA. Lo que no tienen es una conexión entre ambos: el dato se mira en una pantalla y la decisión se toma en una reunión, con criterios que no vuelven al sistema.',
        },
        { type: 'h2', text: 'Empieza por la decisión' },
        {
          type: 'p',
          text: 'La pregunta correcta no es qué métricas mostrar, sino qué decisión recurrente queremos mejorar. Aprobar un descuento, priorizar una cuenta, reordenar stock. Definida la decisión, el conjunto de datos necesario se vuelve evidente y pequeño.',
        },
        { type: 'h2', text: 'Requisitos mínimos de calidad' },
        {
          type: 'ul',
          items: [
            'Una única definición de cada métrica, documentada.',
            'Propietario responsable por dominio de datos.',
            'Frecuencia de actualización acordada con negocio.',
            'Registro de qué recomendó el modelo y qué decidió la persona.',
          ],
        },
        {
          type: 'p',
          text: 'El último punto es el que casi nadie implementa y el que más valor produce: permite auditar la calidad de las recomendaciones y mejorar el sistema con evidencia, no con impresiones.',
        },
      ],
    },
    en: {
      title: 'BI + AI: the difference between knowing and acting',
      excerpt:
        'Business intelligence explains what happened. AI proposes what to do. Apart they produce reports; together they produce decisions.',
      takeaways: [
        'A dashboard nobody decides with is a cost, not an asset.',
        'AI on ungoverned data amplifies existing errors.',
        'Integration starts by defining the decision, not the visualization.',
      ],
      body: [
        {
          type: 'p',
          text: 'Many companies have dashboards and also have AI. What they lack is a connection between the two: data is viewed on a screen and the decision is made in a meeting, using criteria that never return to the system.',
        },
        { type: 'h2', text: 'Start with the decision' },
        {
          type: 'p',
          text: 'The right question is not which metrics to show, but which recurring decision we want to improve. Approving a discount, prioritizing an account, reordering stock. Once the decision is defined, the required dataset becomes obvious and small.',
        },
        { type: 'h2', text: 'Minimum quality requirements' },
        {
          type: 'ul',
          items: [
            'A single documented definition per metric.',
            'An accountable owner per data domain.',
            'Refresh frequency agreed with the business.',
            'A record of what the model recommended and what the human decided.',
          ],
        },
        {
          type: 'p',
          text: 'The last point is the one almost nobody implements and the one that produces the most value: it lets you audit recommendation quality and improve the system with evidence rather than impressions.',
        },
      ],
    },
  },
  {
    slug: 'automatizacion-b2b-tres-procesos',
    category: 'Automation',
    readTime: 6,
    date: '2026-06-29',
    es: {
      title: 'Automatización B2B: los tres procesos que sí devuelven dinero',
      excerpt:
        'Automatizar todo es la forma más rápida de gastar presupuesto sin resultado. Estos tres procesos concentran el retorno en la mayoría de las empresas B2B.',
      takeaways: [
        'Automatiza lo repetitivo y estable, no lo excepcional.',
        'Cualificación, propuestas y reporting son los candidatos habituales.',
        'Sin dueño del proceso, la automatización se degrada en meses.',
      ],
      body: [
        {
          type: 'p',
          text: 'El criterio de selección es simple: volumen alto, reglas estables y resultado verificable. Todo lo que no cumpla las tres condiciones producirá más excepciones que ahorro.',
        },
        { type: 'h2', text: 'Los tres candidatos' },
        {
          type: 'ul',
          items: [
            'Cualificación de leads con criterios explícitos y trazables.',
            'Generación de propuestas a partir de plantillas y datos del CRM.',
            'Reporting comercial y operativo recurrente.',
          ],
        },
        {
          type: 'p',
          text: 'Estos tres comparten una característica: hoy consumen horas de perfiles caros en tareas que no requieren su criterio. Liberar ese tiempo tiene un impacto medible en pipeline dentro del mismo trimestre.',
        },
        { type: 'h2', text: 'El factor que decide el éxito' },
        {
          type: 'p',
          text: 'Cada automatización necesita un responsable con nombre que revise excepciones y actualice reglas. Sin ese rol, el flujo funciona seis semanas y luego el equipo vuelve a hacerlo a mano en paralelo, duplicando trabajo.',
        },
        {
          type: 'quote',
          text: 'Una automatización sin dueño es deuda operativa disfrazada de eficiencia.',
        },
      ],
    },
    en: {
      title: 'B2B automation: the three processes that actually pay back',
      excerpt:
        'Automating everything is the fastest way to spend budget without results. These three processes concentrate the return in most B2B companies.',
      takeaways: [
        'Automate what is repetitive and stable, not what is exceptional.',
        'Qualification, proposals and reporting are the usual candidates.',
        'With no process owner, automation degrades within months.',
      ],
      body: [
        {
          type: 'p',
          text: 'The selection criteria are simple: high volume, stable rules and verifiable output. Anything failing all three will produce more exceptions than savings.',
        },
        { type: 'h2', text: 'The three candidates' },
        {
          type: 'ul',
          items: [
            'Lead qualification with explicit, traceable criteria.',
            'Proposal generation from templates and CRM data.',
            'Recurring commercial and operational reporting.',
          ],
        },
        {
          type: 'p',
          text: 'These three share one trait: today they consume hours from expensive profiles on tasks that do not need their judgment. Releasing that time has measurable pipeline impact within the same quarter.',
        },
        { type: 'h2', text: 'The factor that decides success' },
        {
          type: 'p',
          text: 'Every automation needs a named owner who reviews exceptions and updates rules. Without that role, the flow works for six weeks and then the team quietly redoes it by hand in parallel, duplicating work.',
        },
        {
          type: 'quote',
          text: 'Automation without an owner is operational debt disguised as efficiency.',
        },
      ],
    },
  },
  {
    slug: 'embudo-b2b-donde-se-pierde',
    category: 'Sales',
    readTime: 7,
    date: '2026-06-26',
    es: {
      title: 'Dónde se pierde realmente el 60% de tu embudo B2B',
      excerpt:
        'La fuga rara vez está en la generación de leads. Está en las transiciones entre etapas, donde nadie es responsable del dato.',
      takeaways: [
        'Las transiciones sin dueño son el punto real de fuga.',
        'Medir por etapa sin medir el tiempo entre etapas oculta el problema.',
        'La mayor parte de la mejora no requiere más inversión en marketing.',
      ],
      body: [
        {
          type: 'p',
          text: 'Cuando una dirección comercial detecta caída de conversión, la reacción habitual es aumentar el presupuesto de captación. En los diagnósticos que hemos hecho, el problema estaba casi siempre después: entre la cualificación y la propuesta, o entre la propuesta y la negociación.',
        },
        { type: 'h2', text: 'Las tres transiciones críticas' },
        {
          type: 'ul',
          items: [
            'Marketing a ventas: criterios de cualificación distintos en cada lado.',
            'Ventas a propuesta: tiempo muerto esperando datos internos.',
            'Propuesta a cierre: seguimiento sin cadencia definida.',
          ],
        },
        {
          type: 'p',
          text: 'La métrica que revela el problema no es el porcentaje de conversión por etapa, sino el tiempo medio de permanencia en cada transición. Ahí aparecen semanas invisibles que nadie está gestionando.',
        },
        { type: 'h2', text: 'Qué corregir primero' },
        {
          type: 'p',
          text: 'Una definición compartida de lead cualificado, acordada por escrito entre marketing y ventas, suele recuperar más conversión que cualquier campaña adicional. Es gratis y se implementa en una reunión bien preparada.',
        },
      ],
    },
    en: {
      title: 'Where you actually lose 60% of your B2B funnel',
      excerpt:
        'The leak is rarely in lead generation. It is in the transitions between stages, where nobody owns the data.',
      takeaways: [
        'Unowned transitions are the real leakage point.',
        'Measuring per stage without measuring time between stages hides the problem.',
        'Most of the improvement needs no extra marketing spend.',
      ],
      body: [
        {
          type: 'p',
          text: 'When sales leadership sees conversion drop, the usual reaction is to increase acquisition budget. In the assessments we have run, the problem was almost always downstream: between qualification and proposal, or between proposal and negotiation.',
        },
        { type: 'h2', text: 'The three critical transitions' },
        {
          type: 'ul',
          items: [
            'Marketing to sales: different qualification criteria on each side.',
            'Sales to proposal: dead time waiting for internal data.',
            'Proposal to close: follow-up with no defined cadence.',
          ],
        },
        {
          type: 'p',
          text: 'The metric that reveals the problem is not conversion rate per stage, but average dwell time in each transition. That is where invisible weeks appear that nobody is managing.',
        },
        { type: 'h2', text: 'What to fix first' },
        {
          type: 'p',
          text: 'A shared definition of a qualified lead, agreed in writing between marketing and sales, usually recovers more conversion than any additional campaign. It is free and can be implemented in one well-prepared meeting.',
        },
      ],
    },
  },
  {
    slug: 'prompt-injection-riesgo-real',
    category: 'Security',
    readTime: 6,
    date: '2026-06-23',
    es: {
      title: 'Prompt injection: el ataque que ya está en tu bandeja de entrada',
      excerpt:
        'Si conectas un modelo a tu correo, tus documentos o tu web, un tercero puede escribir instrucciones que tu sistema obedecerá sin preguntar.',
      takeaways: [
        'El ataque no requiere acceso a tu infraestructura, solo a tu contenido.',
        'El riesgo crece cuando el modelo tiene permisos de acción.',
        'La mitigación pasa por limitar privilegios, no por confiar en el modelo.',
      ],
      body: [
        {
          type: 'p',
          text: 'Un asistente que resume correos entrantes lee todo lo que llega, incluidas instrucciones ocultas en un mensaje. Si además tiene permiso para responder o consultar sistemas internos, el atacante consigue ejecución sin haber tocado tu red.',
        },
        { type: 'h2', text: 'Por qué las defensas clásicas no aplican' },
        {
          type: 'p',
          text: 'No hay firma de malware ni patrón fijo: el vector es lenguaje natural. Filtrar palabras clave se elude con un sinónimo. El control tiene que estar en los permisos, no en el texto.',
        },
        { type: 'h2', text: 'Controles que funcionan' },
        {
          type: 'ul',
          items: [
            'Privilegio mínimo: el modelo solo accede a lo estrictamente necesario.',
            'Confirmación humana para cualquier acción con efecto externo.',
            'Separación entre contenido no confiable y contexto de instrucciones.',
            'Registro completo de acciones ejecutadas por agentes.',
          ],
        },
        {
          type: 'quote',
          text: 'Trata la salida de un modelo como entrada de usuario no confiable, porque es exactamente eso.',
        },
      ],
    },
    en: {
      title: 'Prompt injection: the attack already sitting in your inbox',
      excerpt:
        'If you connect a model to your email, your documents or your website, a third party can write instructions your system will obey without asking.',
      takeaways: [
        'The attack needs no access to your infrastructure, only to your content.',
        'Risk grows when the model has permission to act.',
        'Mitigation is about limiting privileges, not trusting the model.',
      ],
      body: [
        {
          type: 'p',
          text: 'An assistant summarizing inbound email reads everything that arrives, including instructions hidden inside a message. If it can also reply or query internal systems, the attacker gets execution without ever touching your network.',
        },
        { type: 'h2', text: 'Why classic defences do not apply' },
        {
          type: 'p',
          text: 'There is no malware signature and no fixed pattern: the vector is natural language. Keyword filtering is bypassed with a synonym. Control has to live in permissions, not in the text.',
        },
        { type: 'h2', text: 'Controls that work' },
        {
          type: 'ul',
          items: [
            'Least privilege: the model accesses only what is strictly needed.',
            'Human confirmation for any action with external effect.',
            'Separation between untrusted content and instruction context.',
            'Complete logging of actions executed by agents.',
          ],
        },
        {
          type: 'quote',
          text: 'Treat model output as untrusted user input, because that is exactly what it is.',
        },
      ],
    },
  },
]
