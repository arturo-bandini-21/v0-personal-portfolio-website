export type Locale = "es" | "en" | "pt"

export const translations = {
  es: {
    // Navigation
    home: "Inicio",
    cases: "Casos",
    backToHome: "Volver al inicio",
    
    // Home
    headline: "Product Analyst | Data & Product",
    description: "Analizo, construyo y optimizo productos digitales con foco en métricas, conversión y sistemas de decisión.",
    viewCase: "Ver caso",
    
    // Case titles
    case1Title: "Sistema de analítica para producto B2B",
    case1Subtitle: "Yavendió",
    case2Title: "Producto educativo con automatización",
    case2Subtitle: "TuThorIA",
    case3Title: "Optimización de rating en tienda",
    case3Subtitle: "Favo",
    case4Title: "A/B test para selección de modelo LLM",
    case4Subtitle: "B2B conversational commerce",

    // Participaciones
    participations: "Participaciones",
    participation1Role: "Panelista",
    participation1Event: "Producto en Startups",
    participation1Org: "PM Beers Product Club, Lima",
    participation1CommunityLink: "PM Beers",
    participation1EventLink: "Evento",

    // External links
    linkedin: "LinkedIn",
    github: "GitHub",
    emailMe: "Email",
    callMe: "Llámame",

    // Theme
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    
    // Language
    language: "Idioma",
    spanish: "Español",
    english: "English",
    portuguese: "Português",

    // Case 1 content
    case1: {
      title: "Construcción del sistema de analítica desde cero para un producto B2B (Yavendió)",
      sections: {
        context: {
          title: "Contexto",
          content: `Yavendió es una plataforma que automatiza el flujo de ventas en canales conversacionales, principalmente WhatsApp, para negocios con alto volumen de consultas y equipos comerciales reducidos.

Al momento de mi ingreso, la empresa no contaba con un sistema estructurado de métricas. El análisis del rendimiento se realizaba de forma manual, lo que limitaba la visibilidad del negocio y la capacidad de tomar decisiones informadas.`
        },
        problem: {
          title: "Problema",
          content: `El performance se medía mediante procesos manuales:`,
          list: [
            "conteo de conversaciones directamente desde la interfaz",
            "revisión individual de chats para identificar ventas",
            "registro manual en Google Sheets"
          ],
          content2: `Esto generaba múltiples limitaciones:`,
          list2: [
            "ausencia de visibilidad en tiempo real",
            "imposibilidad de medir conversión de forma confiable",
            "dificultad para identificar qué clientes o leads rendían mejor",
            "nula capacidad de segmentación o atribución",
            "alto costo operativo en análisis"
          ],
          content3: `Las decisiones se tomaban con información incompleta y con un proceso lento e ineficiente.`
        },
        approach: {
          title: "Enfoque",
          content: `Priorización de velocidad de implementación sobre perfección técnica, con el objetivo de generar visibilidad lo antes posible.`,
          list: [
            "acceso directo a la base de datos (PostgreSQL)",
            "construcción de queries para extracción de datos",
            "diseño de un dataset base para análisis",
            "implementación de un pipeline simple (DB → Google Sheets → Looker Studio)"
          ],
          content2: `El objetivo fue crear rápidamente una fuente confiable de información para el negocio.`
        },
        implementation: {
          title: "Implementación",
          content: `Se desarrolló el primer sistema de analítica operativa de la empresa:`,
          list: [
            "extracción y transformación de datos desde PostgreSQL",
            "actualización automatizada de datasets (frecuencia horaria)",
            "construcción de dashboards en Looker Studio"
          ],
          metricsTitle: "Métricas iniciales:",
          metricsList: [
            "volumen de conversaciones (por cliente y fecha)",
            "segmentación de leads (frío / tibio / caliente)",
            "evolución temporal del tráfico"
          ],
          evolutionTitle: "Evolución del sistema:",
          evolutionList: [
            "implementación de tracking de ventas mediante flags en base de datos",
            "cálculo de conversión inicial",
            "incorporación de atributos como fuente de lead",
            "creación de dashboards personalizados por cliente"
          ],
          extensionsTitle: "Extensiones:",
          extensionsList: [
            "integración con Slack para alertas operativas",
            "uso del dashboard por equipos de Customer Success, Marketing y Ventas",
            "incorporación del acceso a métricas como parte del discurso comercial"
          ]
        },
        result: {
          title: "Resultado",
          list: [
            "primer sistema de métricas centralizado y automatizado de la empresa",
            "eliminación de procesos manuales de análisis",
            "habilitación de monitoreo continuo del negocio"
          ],
          operationTitle: "Impacto en operación:",
          operationList: [
            "priorización de clientes según performance",
            "mejora en toma de decisiones del equipo de Customer Success",
            "optimización más informada de campañas de adquisición"
          ],
          businessTitle: "Impacto en negocio:",
          businessList: [
            "uso de métricas como propuesta de valor en ventas",
            "incremento en engagement de clientes mediante dashboards personalizados"
          ]
        },
        quantitativeImpact: {
          title: "Impacto cuantitativo",
          list: [
            "Reducción del tiempo de análisis: de ~2 horas manuales → menos de 5 minutos",
            "Eliminación de: conteo manual de chats, revisión individual de conversaciones",
            "Mejora en adquisición: incremento estimado de 20–30% en leads calificados"
          ]
        },
        adoption: {
          title: "Adopción",
          content: `El sistema fue adoptado de forma transversal:`,
          list: [
            "uso diario por founders y equipos operativos",
            "integración en el flujo de Customer Success",
            "uso recurrente por clientes"
          ],
          content2: `Se convirtió en una fuente central de referencia para el estado del negocio, incluyendo la métrica principal (volumen de conversaciones), directamente vinculada a ingresos.`
        },
        evolution: {
          title: "Evolución",
          content: `El crecimiento del sistema llevó a decisiones estructurales:`,
          list: [
            "migración a Metabase para mayor escalabilidad",
            "democratización del acceso a datos dentro de la organización",
            "base para implementación posterior de analítica de producto (PostHog)"
          ]
        },
        learnings: {
          title: "Aprendizajes",
          list: [
            "la velocidad de implementación es crítica en contextos sin data",
            "entender qué métricas necesita el negocio es más complejo que construir el sistema",
            "un MVP funcional puede generar alto impacto si resuelve un vacío real",
            "la adopción es tan importante como la implementación técnica",
            "los sistemas de analítica pueden evolucionar hacia ventajas comerciales"
          ]
        }
      }
    },

    // Case 2 content
    case2: {
      title: "TuThorIA: Desarrollo de producto educativo con automatización y monetización basada en datos",
      sections: {
        context: {
          title: "Contexto",
          content: `Un grupo de docentes buscaba digitalizar la creación de sesiones de aprendizaje, un proceso obligatorio, manual y altamente demandante en tiempo.

Uno de los fundadores contaba con una audiencia de aproximadamente 50,000 seguidores, lo que representaba una oportunidad clara de distribución, pero no existía un producto tecnológico que capitalizara esa demanda. De esta necesidad nació TuThorIA.`
        },
        problem: {
          title: "Problema",
          list: [
            "creación manual de sesiones educativas",
            "proceso repetitivo y poco escalable",
            "alta carga operativa para docentes",
            "ausencia de herramientas accesibles para automatizar el proceso"
          ],
          content: `Existía una oportunidad clara de producto, pero sin implementación tecnológica.`
        },
        approach: {
          title: "Enfoque",
          content: `TuThorIA se abordó como construcción de MVP desde cero:`,
          list: [
            "definición de requerimientos a partir del problema del usuario",
            "diseño de solución conversacional accesible (WhatsApp)",
            "estructuración del desarrollo en iteraciones (sprints)",
            "enfoque en velocidad de implementación para validación temprana"
          ]
        },
        implementation: {
          title: "Implementación",
          content: `Se desarrolló TuThorIA como un sistema conversacional que:`,
          list: [
            "recopila información del docente",
            "sugiere contenido basado en estructura curricular",
            "genera sesiones de aprendizaje completas"
          ],
          content2: `El producto fue desplegado en un entorno real para validación.`
        },
        result: {
          title: "Resultado",
          list: [
            "TuThorIA MVP funcional entregado",
            "producto listo para uso por la audiencia del cliente",
            "validación de la viabilidad de automatizar la creación de contenido educativo"
          ]
        },
        extension: {
          title: "Extensión: monetización con datos",
          content: `Posteriormente, el cliente identificó una nueva oportunidad:`,
          list: [
            "acceso a resultados de evaluaciones docentes (data pública, pero de difícil acceso)"
          ],
          solutionTitle: "Solución:",
          solutionList: [
            "extracción y estructuración de datos",
            "construcción de dashboard en Looker Studio",
            "habilitación de acceso pago a la información"
          ],
          impactTitle: "Impacto:",
          impactList: [
            "generación directa de ingresos",
            "mejora significativa en accesibilidad y usabilidad de datos"
          ]
        },
        impact: {
          title: "Impacto",
          list: [
            "reducción del esfuerzo manual en la creación de sesiones educativas",
            "habilitación de un producto escalable sobre una audiencia existente",
            "creación de una nueva fuente de ingresos basada en datos"
          ]
        },
        learnings: {
          title: "Aprendizajes",
          list: [
            "importancia de construir MVPs rápidos en contextos de incertidumbre",
            "valor de combinar producto + distribución para validar ideas",
            "oportunidades de monetización a partir de datos públicos bien estructurados",
            "trade-offs entre velocidad de implementación y robustez técnica"
          ]
        },
        repository: {
          title: "Repositorio",
          content: "El código fuente de este proyecto está disponible en GitHub:",
          linkText: "Ver repositorio en GitHub"
        }
      }
    },

    // Case 3 content
    case3: {
      title: "Optimización de rating en tienda (Favo)",
      sections: {
        context: {
          title: "Contexto",
          content: "Aplicación móvil con bajo rating en tienda (~3.1), afectando la percepción del producto y potencialmente la conversión en adquisición."
        },
        problem: {
          title: "Problema",
          content: "El bajo rating reflejaba fricciones en la experiencia del usuario y ausencia de mecanismos para capturar feedback positivo de usuarios satisfechos."
        },
        approach: {
          title: "Enfoque",
          content: "Co-lideré una estrategia de activación de reseñas, orientada a incentivar a usuarios activos y satisfechos a calificar la aplicación."
        },
        implementation: {
          title: "Implementación",
          list: [
            "diseño de estrategia de comunicación hacia usuarios",
            "activación de solicitudes de reseñas en momentos clave de uso",
            "coordinación con equipo para ejecución de la estrategia"
          ]
        },
        result: {
          title: "Resultado",
          content: "Incremento del rating de la aplicación de ~3.1 a ~4.5 (+1.4)."
        },
        impact: {
          title: "Impacto",
          list: [
            "mejora significativa en la percepción del producto en tienda",
            "fortalecimiento del canal de adquisición orgánico"
          ]
        }
      }
    },

    // Case 4 content
    case4: {
      title: "Diseño de A/B test para selección de modelo LLM en producción",
      sections: {
        context: {
          title: "Contexto",
          content: `Operamos una plataforma de comercio conversacional donde los merchants usan un asistente basado en LLM para conversar con clientes e impulsar ventas sobre canales de mensajería. El modelo base es una palanca con impacto real: un modelo mejor puede significar más conversiones, pero también mayor costo por mensaje.

Apareció una nueva generación del modelo base (candidato). En teoría prometía mejor razonamiento, pero "en teoría" no paga las cuentas: antes de comprometer una migración necesitábamos evidencia en producción, con merchants reales y conversaciones reales.`
        },
        problem: {
          title: "Problema",
          content: "Un A/B limpio sobre esto parece simple hasta que lo mirás de cerca. Tres cosas lo hacían no trivial:",
          list: [
            "Conversiones ralas y merchants heterogéneos: las conversiones por conversación son eventos ralos, y los merchants de mayor volumen abarcan verticales, tipos de catálogo y tasas base de conversión distintas.",
            "Trampa de la unidad de análisis: la unidad natural de asignación (sesión, que se resetea tras un período sin respuesta del cliente) no es la unidad natural de análisis. Dos sesiones de una misma conversación no son independientes — analizar a nivel sesión produciría pseudo-replicación e inflaría los p-values.",
            "Riesgo asimétrico de rollout: rollear un modelo peor daña trust y revenue directamente; rollear uno mejor tarde es recuperable. El test debía proteger el downside."
          ]
        },
        approach: {
          title: "Metodología",
          content: "Diseño del experimento:",
          list: [
            "Asignación: aleatoria 50/50 a nivel sesión de conversación vía feature flag, con toda la cohorte expuesta a ambas variantes.",
            "Unidad de análisis: conversación, no sesión, para evitar pseudo-replicación. Las conversaciones mixtas (que vieron ambos modelos) se excluyeron del análisis.",
            "Métricas: evento de venta marcada como primaria (cobertura completa) y orden registrada como secundaria (cobertura parcial). Ticket promedio por currency como exploratoria.",
            "Estadística: test de dos proporciones (z-test) para conversión, Mann-Whitney U para ticket (no asume normalidad en montos). Umbral convencional de significancia.",
            "Ventana: varias semanas de tráfico en producción."
          ]
        },
        implementation: {
          title: "Validación del diseño",
          content: "Antes de mirar los resultados, verifiqué que el test se comportara como estaba diseñado:",
          list: [
            "Asignación sticky: la gran mayoría de las conversaciones quedaron pegadas a un solo modelo a lo largo de sus sesiones. El resto se excluyó del análisis.",
            "Split balanceado: desviación mínima del 50/50 a nivel agregado y todos los merchants individuales dentro del rango esperado. Sin drift.",
            "Tracking de lift acumulado: el lift se volvió significativo temprano en la ventana y se mantuvo por encima del umbral hasta el cierre. Resultado robusto, no una ventana afortunada."
          ]
        },
        result: {
          title: "Resultados",
          list: [
            "Lift agregado de conversión de dos dígitos a favor del modelo candidato, estadísticamente significativo. Magnitud similar en la métrica secundaria de orden registrada.",
            "Lift dramáticamente mayor — varias veces el agregado — concentrado en el segmento de merchants con catálogo integrado a una plataforma e-commerce de terceros. En el segmento con catálogo nativo el lift fue mucho menor y no significativo.",
            "Ticket promedio sin cambios significativos en ninguna combinación merchant/currency. El valor está en volumen de ventas, no en ticket.",
            "Un par de merchants mostraron lift negativo relevante: ambos con catálogo nativo, volumen medio, tasa base alta de conversión y prompts altamente customizados."
          ]
        },
        learnings: {
          title: "Aprendizajes",
          list: [
            "El promedio escondía la historia real: el lift agregado era también un spread amplio entre merchants, desde fuertemente positivo hasta claramente negativo. La segmentación por fuente de catálogo explicó casi todo el comportamiento — la segmentación por país casi nada.",
            "Data de catálogo más estructurada amplifica la capacidad del modelo. Mecanismo probable: los merchants con plataforma integrada manejan promociones como data estructurada; los merchants con catálogo nativo las encastran en el prompt en texto libre, donde un modelo más capaz es más sensible a inconsistencias.",
            "Asignación a nivel sesión está bien si analizás a nivel conversación. El alto sticky rate confirmó que en la práctica eran casi equivalentes, pero la elección metodológica impactaba los p-values — para próximos experimentos, conviene mover la granularidad del feature flag a nivel conversación.",
            "Antes de escalar, el costo es la decisión bloqueante. Un lift porcentual dado es una decisión distinta a 1.5x, 3x o 10x de costo de inferencia. El tracking de costo por merchant es el análisis gating antes de decidir un rollout."
          ]
        }
      }
    }
  },

  en: {
    // Navigation
    home: "Home",
    cases: "Cases",
    backToHome: "Back to home",
    
    // Home
    headline: "Product Analyst | Data & Product",
    description: "I analyze, build, and optimize digital products with a focus on metrics, conversion, and decision systems.",
    viewCase: "View case",
    
    // Case titles
    case1Title: "Analytics system for B2B product",
    case1Subtitle: "Yavendió",
    case2Title: "Educational product with automation",
    case2Subtitle: "TuThorIA",
    case3Title: "App store rating optimization",
    case3Subtitle: "Favo",
    case4Title: "A/B test for LLM model selection",
    case4Subtitle: "B2B conversational commerce",
    
    // Participaciones
    participations: "Participations",
    participation1Role: "Panelist",
    participation1Event: "Producto en Startups",
    participation1Org: "PM Beers Product Club, Lima",
    participation1CommunityLink: "PM Beers",
    participation1EventLink: "Event",

    // External links
    linkedin: "LinkedIn",
    github: "GitHub",
    emailMe: "Email",
    callMe: "Call me",

    // Theme
    lightMode: "Light mode",
    darkMode: "Dark mode",
    
    // Language
    language: "Language",
    spanish: "Español",
    english: "English",
    portuguese: "Português",

    // Case 1 content
    case1: {
      title: "Building an analytics system from scratch for a B2B product (Yavendió)",
      sections: {
        context: {
          title: "Context",
          content: `Yavendió is a platform that automates the sales flow in conversational channels, mainly WhatsApp, for businesses with high volume of queries and small commercial teams.

At the time of my joining, the company did not have a structured metrics system. Performance analysis was done manually, which limited business visibility and the ability to make informed decisions.`
        },
        problem: {
          title: "Problem",
          content: `Performance was measured through manual processes:`,
          list: [
            "counting conversations directly from the interface",
            "individual chat review to identify sales",
            "manual recording in Google Sheets"
          ],
          content2: `This generated multiple limitations:`,
          list2: [
            "lack of real-time visibility",
            "inability to reliably measure conversion",
            "difficulty identifying which clients or leads performed best",
            "no segmentation or attribution capability",
            "high operational cost in analysis"
          ],
          content3: `Decisions were made with incomplete information and through a slow and inefficient process.`
        },
        approach: {
          title: "Approach",
          content: `Prioritization of implementation speed over technical perfection, with the goal of generating visibility as soon as possible.`,
          list: [
            "direct access to the database (PostgreSQL)",
            "building queries for data extraction",
            "design of a base dataset for analysis",
            "implementation of a simple pipeline (DB → Google Sheets → Looker Studio)"
          ],
          content2: `The goal was to quickly create a reliable source of information for the business.`
        },
        implementation: {
          title: "Implementation",
          content: `The company's first operational analytics system was developed:`,
          list: [
            "data extraction and transformation from PostgreSQL",
            "automated dataset updates (hourly frequency)",
            "dashboard construction in Looker Studio"
          ],
          metricsTitle: "Initial metrics:",
          metricsList: [
            "conversation volume (by client and date)",
            "lead segmentation (cold / warm / hot)",
            "temporal traffic evolution"
          ],
          evolutionTitle: "System evolution:",
          evolutionList: [
            "implementation of sales tracking through database flags",
            "initial conversion calculation",
            "incorporation of attributes such as lead source",
            "creation of personalized dashboards per client"
          ],
          extensionsTitle: "Extensions:",
          extensionsList: [
            "Slack integration for operational alerts",
            "dashboard use by Customer Success, Marketing and Sales teams",
            "incorporation of metrics access as part of the sales pitch"
          ]
        },
        result: {
          title: "Result",
          list: [
            "first centralized and automated metrics system in the company",
            "elimination of manual analysis processes",
            "enabling continuous business monitoring"
          ],
          operationTitle: "Impact on operations:",
          operationList: [
            "client prioritization based on performance",
            "improved decision-making by Customer Success team",
            "more informed optimization of acquisition campaigns"
          ],
          businessTitle: "Business impact:",
          businessList: [
            "use of metrics as value proposition in sales",
            "increased client engagement through personalized dashboards"
          ]
        },
        quantitativeImpact: {
          title: "Quantitative Impact",
          list: [
            "Analysis time reduction: from ~2 manual hours → less than 5 minutes",
            "Elimination of: manual chat counting, individual conversation review",
            "Acquisition improvement: estimated 20–30% increase in qualified leads"
          ]
        },
        adoption: {
          title: "Adoption",
          content: `The system was adopted across the organization:`,
          list: [
            "daily use by founders and operational teams",
            "integration into Customer Success workflow",
            "recurring use by clients"
          ],
          content2: `It became a central reference source for business status, including the main metric (conversation volume), directly linked to revenue.`
        },
        evolution: {
          title: "Evolution",
          content: `System growth led to structural decisions:`,
          list: [
            "migration to Metabase for greater scalability",
            "democratization of data access within the organization",
            "foundation for subsequent product analytics implementation (PostHog)"
          ]
        },
        learnings: {
          title: "Learnings",
          list: [
            "implementation speed is critical in contexts without data",
            "understanding what metrics the business needs is more complex than building the system",
            "a functional MVP can generate high impact if it solves a real gap",
            "adoption is as important as technical implementation",
            "analytics systems can evolve into commercial advantages"
          ]
        }
      }
    },

    // Case 2 content
    case2: {
      title: "TuThorIA: Development of educational product with automation and data-based monetization",
      sections: {
        context: {
          title: "Context",
          content: `A group of teachers sought to digitize the creation of learning sessions, a mandatory, manual, and highly time-demanding process.

One of the founders had an audience of approximately 50,000 followers, which represented a clear distribution opportunity, but there was no technological product to capitalize on that demand. From this need, TuThorIA was born.`
        },
        problem: {
          title: "Problem",
          list: [
            "manual creation of educational sessions",
            "repetitive and unscalable process",
            "high operational burden for teachers",
            "lack of accessible tools to automate the process"
          ],
          content: `There was a clear product opportunity, but no technological implementation.`
        },
        approach: {
          title: "Approach",
          content: `TuThorIA was approached as building an MVP from scratch:`,
          list: [
            "requirements definition based on user problem",
            "design of accessible conversational solution (WhatsApp)",
            "structuring development in iterations (sprints)",
            "focus on implementation speed for early validation"
          ]
        },
        implementation: {
          title: "Implementation",
          content: `TuThorIA was developed as a conversational system that:`,
          list: [
            "collects teacher information",
            "suggests content based on curricular structure",
            "generates complete learning sessions"
          ],
          content2: `The product was deployed in a real environment for validation.`
        },
        result: {
          title: "Result",
          list: [
            "TuThorIA functional MVP delivered",
            "product ready for use by client's audience",
            "validation of the viability of automating educational content creation"
          ]
        },
        extension: {
          title: "Extension: data monetization",
          content: `Subsequently, the client identified a new opportunity:`,
          list: [
            "access to teacher evaluation results (public data, but difficult to access)"
          ],
          solutionTitle: "Solution:",
          solutionList: [
            "data extraction and structuring",
            "dashboard construction in Looker Studio",
            "enabling paid access to information"
          ],
          impactTitle: "Impact:",
          impactList: [
            "direct revenue generation",
            "significant improvement in data accessibility and usability"
          ]
        },
        impact: {
          title: "Impact",
          list: [
            "reduction of manual effort in creating educational sessions",
            "enabling a scalable product on an existing audience",
            "creation of a new data-based revenue source"
          ]
        },
        learnings: {
          title: "Learnings",
          list: [
            "importance of building fast MVPs in uncertain contexts",
            "value of combining product + distribution to validate ideas",
            "monetization opportunities from well-structured public data",
            "trade-offs between implementation speed and technical robustness"
          ]
        },
        repository: {
          title: "Repository",
          content: "The source code for this project is available on GitHub:",
          linkText: "View repository on GitHub"
        }
      }
    },

    // Case 3 content
    case3: {
      title: "App store rating optimization (Favo)",
      sections: {
        context: {
          title: "Context",
          content: "Mobile app with low store rating (~3.1), affecting product perception and potentially acquisition conversion."
        },
        problem: {
          title: "Problem",
          content: "The low rating reflected friction in the user experience and the absence of mechanisms to capture positive feedback from satisfied users."
        },
        approach: {
          title: "Approach",
          content: "I co-led a review activation strategy, aimed at encouraging active and satisfied users to rate the app."
        },
        implementation: {
          title: "Implementation",
          list: [
            "design of user communication strategy",
            "activation of review requests at key usage moments",
            "coordination with team for strategy execution"
          ]
        },
        result: {
          title: "Result",
          content: "App rating increase from ~3.1 to ~4.5 (+1.4)."
        },
        impact: {
          title: "Impact",
          list: [
            "significant improvement in product perception in store",
            "strengthening of organic acquisition channel"
          ]
        }
      }
    },

    // Case 4 content
    case4: {
      title: "A/B test design for LLM model selection in production",
      sections: {
        context: {
          title: "Context",
          content: `We operate a conversational commerce platform where merchants use an LLM-powered assistant to engage customers and drive sales over messaging channels. The underlying model is a business-relevant lever: a better model can mean more conversions, but it also costs more per message.

A new generation of our base model had just become available. On paper it promised stronger reasoning, but "on paper" doesn't pay the bills — before committing to a full migration we needed production evidence of the lift, across real merchants and real conversations.`
        },
        problem: {
          title: "Problem",
          content: "A clean A/B on this looks simple until you look closer. Three things made it non-trivial:",
          list: [
            "Sparse, heterogeneous conversions: conversions per conversation are rare events, and the highest-volume merchants span different verticals, catalog types, and baseline conversion rates.",
            "Analysis-unit trap: the natural assignment unit (session, reset after a window without customer reply) is not the natural analysis unit. Two sessions inside the same conversation aren't independent — analyzing at the session level would pseudo-replicate the data and inflate p-values.",
            "Asymmetric rollout risk: shipping a worse model hurts revenue and merchant trust directly; shipping a better model late is recoverable. The test had to protect the downside."
          ]
        },
        approach: {
          title: "Methodology",
          content: "Experimental design:",
          list: [
            "Assignment: random 50/50 at conversation-session level via a feature flag, with the full cohort exposed to both variants.",
            "Unit of analysis: conversation, not session, to avoid pseudo-replication. Conversations that saw both models (mixed) were excluded from analysis.",
            "Metrics: a sale-mark event as the primary conversion metric (full coverage) and an order-level event as secondary (partial coverage). Average order value by currency as exploratory.",
            "Statistics: two-proportion z-test for conversion, Mann-Whitney U for AOV (doesn't assume normality on amounts). Conventional significance threshold.",
            "Window: multi-week production traffic."
          ]
        },
        implementation: {
          title: "Design validation",
          content: "Before looking at results I verified the test had actually behaved as designed:",
          list: [
            "Sticky assignment: the vast majority of conversations stayed on a single model across all their sessions. The rest were excluded from analysis.",
            "Balanced split: negligible deviation from 50/50 at the aggregate, and every individual merchant within the expected range. No drift.",
            "Cumulative lift tracking: the lift became significant early in the window and stayed above threshold through the end. Robust result, not a lucky window."
          ]
        },
        result: {
          title: "Results",
          list: [
            "Double-digit aggregate conversion lift in favor of the candidate model, statistically significant. Similar magnitude on the secondary order-level metric.",
            "Dramatically larger lift — several times the aggregate — concentrated in merchants using an integrated third-party catalog platform. For merchants on the native catalog, the lift was much smaller and not significant.",
            "No meaningful change in average order value on any merchant/currency pair. The gain is in sales volume, not ticket size.",
            "A couple of merchants showed a material negative lift: both on the native catalog, medium volume, with a high baseline conversion rate and heavily customized prompts."
          ]
        },
        learnings: {
          title: "Learnings",
          list: [
            "The average hid the real story: the aggregate lift was also a wide spread across merchants, from strongly positive to clearly negative. Segmentation by catalog source explained most of the variance — segmentation by country explained almost none.",
            "Richer structured catalog data amplifies model capability. Likely mechanism: merchants on an integrated platform handle promotions as structured data; merchants on the native catalog embed promotion rules into free-text prompts, where a more capable model is more sensitive to inconsistency.",
            "Session-level assignment is fine if you analyze at conversation level. The high sticky rate confirmed the two were near-equivalent in practice, but the methodology choice mattered for p-values — future experiments should move the flag granularity to conversation level.",
            "Before scaling, cost is the gating decision. A given percentage lift is a different call at 1.5x, 3x, or 10x inference cost. Per-merchant cost tracking is the blocking analysis before any rollout."
          ]
        }
      }
    }
  },

  pt: {
    // Navigation
    home: "Início",
    cases: "Casos",
    backToHome: "Voltar ao início",
    
    // Home
    headline: "Product Analyst | Data & Product",
    description: "Analiso, construo e otimizo produtos digitais com foco em métricas, conversão e sistemas de decisão.",
    viewCase: "Ver caso",
    
    // Case titles
    case1Title: "Sistema de analytics para produto B2B",
    case1Subtitle: "Yavendió",
    case2Title: "Produto educacional com automação",
    case2Subtitle: "TuThorIA",
    case3Title: "Otimização de rating na loja",
    case3Subtitle: "Favo",
    case4Title: "A/B test para seleção de modelo LLM",
    case4Subtitle: "B2B conversational commerce",
    
    // Participaciones
    participations: "Participações",
    participation1Role: "Painelista",
    participation1Event: "Producto en Startups",
    participation1Org: "PM Beers Product Club, Lima",
    participation1CommunityLink: "PM Beers",
    participation1EventLink: "Evento",

    // External links
    linkedin: "LinkedIn",
    github: "GitHub",
    emailMe: "Email",
    callMe: "Ligue-me",

    // Theme
    lightMode: "Modo claro",
    darkMode: "Modo escuro",
    
    // Language
    language: "Idioma",
    spanish: "Español",
    english: "English",
    portuguese: "Português",

    // Case 1 content
    case1: {
      title: "Construção do sistema de analytics do zero para um produto B2B (Yavendió)",
      sections: {
        context: {
          title: "Contexto",
          content: `Yavendió é uma plataforma que automatiza o fluxo de vendas em canais conversacionais, principalmente WhatsApp, para negócios com alto volume de consultas e equipes comerciais reduzidas.

No momento da minha entrada, a empresa não contava com um sistema estruturado de métricas. A análise de desempenho era realizada manualmente, o que limitava a visibilidade do negócio e a capacidade de tomar decisões informadas.`
        },
        problem: {
          title: "Problema",
          content: `O desempenho era medido através de processos manuais:`,
          list: [
            "contagem de conversas diretamente da interface",
            "revisão individual de chats para identificar vendas",
            "registro manual em Google Sheets"
          ],
          content2: `Isso gerava múltiplas limitações:`,
          list2: [
            "aus��ncia de visibilidade em tempo real",
            "impossibilidade de medir conversão de forma confiável",
            "dificuldade para identificar quais clientes ou leads tinham melhor desempenho",
            "nenhuma capacidade de segmentação ou atribuição",
            "alto custo operacional em análise"
          ],
          content3: `As decisões eram tomadas com informação incompleta e através de um processo lento e ineficiente.`
        },
        approach: {
          title: "Abordagem",
          content: `Priorização da velocidade de implementação sobre perfeição técnica, com o objetivo de gerar visibilidade o mais rápido possível.`,
          list: [
            "acesso direto ao banco de dados (PostgreSQL)",
            "construção de queries para extração de dados",
            "design de um dataset base para análise",
            "implementação de um pipeline simples (DB → Google Sheets → Looker Studio)"
          ],
          content2: `O objetivo foi criar rapidamente uma fonte confiável de informação para o negócio.`
        },
        implementation: {
          title: "Implementação",
          content: `Foi desenvolvido o primeiro sistema de analytics operacional da empresa:`,
          list: [
            "extração e transformação de dados do PostgreSQL",
            "atualização automatizada de datasets (frequência horária)",
            "construção de dashboards no Looker Studio"
          ],
          metricsTitle: "Métricas iniciais:",
          metricsList: [
            "volume de conversas (por cliente e data)",
            "segmentação de leads (frio / morno / quente)",
            "evolução temporal do tráfego"
          ],
          evolutionTitle: "Evolução do sistema:",
          evolutionList: [
            "implementação de tracking de vendas através de flags no banco de dados",
            "cálculo de conversão inicial",
            "incorporação de atributos como fonte de lead",
            "criação de dashboards personalizados por cliente"
          ],
          extensionsTitle: "Extensões:",
          extensionsList: [
            "integração com Slack para alertas operacionais",
            "uso do dashboard por equipes de Customer Success, Marketing e Vendas",
            "incorporação do acesso a métricas como parte do discurso comercial"
          ]
        },
        result: {
          title: "Resultado",
          list: [
            "primeiro sistema de métricas centralizado e automatizado da empresa",
            "eliminação de processos manuais de análise",
            "habilitação de monitoramento contínuo do negócio"
          ],
          operationTitle: "Impacto na operação:",
          operationList: [
            "priorização de clientes segundo desempenho",
            "melhoria na tomada de decisões da equipe de Customer Success",
            "otimização mais informada de campanhas de aquisição"
          ],
          businessTitle: "Impacto no negócio:",
          businessList: [
            "uso de métricas como proposta de valor em vendas",
            "aumento no engajamento de clientes através de dashboards personalizados"
          ]
        },
        quantitativeImpact: {
          title: "Impacto Quantitativo",
          list: [
            "Redução do tempo de análise: de ~2 horas manuais → menos de 5 minutos",
            "Eliminação de: contagem manual de chats, revisão individual de conversas",
            "Melhoria em aquisição: aumento estimado de 20–30% em leads qualificados"
          ]
        },
        adoption: {
          title: "Adoção",
          content: `O sistema foi adotado de forma transversal:`,
          list: [
            "uso diário por founders e equipes operacionais",
            "integração no fluxo de Customer Success",
            "uso recorrente por clientes"
          ],
          content2: `Tornou-se uma fonte central de referência para o estado do negócio, incluindo a métrica principal (volume de conversas), diretamente vinculada à receita.`
        },
        evolution: {
          title: "Evolução",
          content: `O crescimento do sistema levou a decisões estruturais:`,
          list: [
            "migração para Metabase para maior escalabilidade",
            "democratização do acesso a dados dentro da organização",
            "base para implementação posterior de analytics de produto (PostHog)"
          ]
        },
        learnings: {
          title: "Aprendizados",
          list: [
            "a velocidade de implementação é crítica em contextos sem dados",
            "entender quais métricas o negócio precisa é mais complexo do que construir o sistema",
            "um MVP funcional pode gerar alto impacto se resolver um vazio real",
            "a adoção é tão importante quanto a implementação técnica",
            "os sistemas de analytics podem evoluir para vantagens comerciais"
          ]
        }
      }
    },

    // Case 2 content
    case2: {
      title: "TuThorIA: Desenvolvimento de produto educacional com automação e monetização baseada em dados",
      sections: {
        context: {
          title: "Contexto",
          content: `Um grupo de professores buscava digitalizar a criação de sessões de aprendizagem, um processo obrigatório, manual e altamente demandante em tempo.

Um dos fundadores contava com uma audiência de aproximadamente 50.000 seguidores, o que representava uma oportunidade clara de distribuição, mas não existia um produto tecnológico que capitalizasse essa demanda. Dessa necessidade nasceu TuThorIA.`
        },
        problem: {
          title: "Problema",
          list: [
            "criação manual de sessões educacionais",
            "processo repetitivo e pouco escalável",
            "alta carga operacional para professores",
            "ausência de ferramentas acessíveis para automatizar o processo"
          ],
          content: `Existia uma oportunidade clara de produto, mas sem implementação tecnológica.`
        },
        approach: {
          title: "Abordagem",
          content: `TuThorIA foi abordado como construção de MVP do zero:`,
          list: [
            "definição de requisitos a partir do problema do usuário",
            "design de solução conversacional acessível (WhatsApp)",
            "estruturação do desenvolvimento em iterações (sprints)",
            "foco em velocidade de implementação para validação antecipada"
          ]
        },
        implementation: {
          title: "Implementação",
          content: `TuThorIA foi desenvolvido como um sistema conversacional que:`,
          list: [
            "coleta informações do professor",
            "sugere conteúdo baseado na estrutura curricular",
            "gera sessões de aprendizagem completas"
          ],
          content2: `O produto foi implantado em um ambiente real para validação.`
        },
        result: {
          title: "Resultado",
          list: [
            "TuThorIA MVP funcional entregue",
            "produto pronto para uso pela audiência do cliente",
            "validação da viabilidade de automatizar a criação de conteúdo educacional"
          ]
        },
        extension: {
          title: "Extensão: monetização com dados",
          content: `Posteriormente, o cliente identificou uma nova oportunidade:`,
          list: [
            "acesso a resultados de avaliações docentes (dados públicos, mas de difícil acesso)"
          ],
          solutionTitle: "Solução:",
          solutionList: [
            "extração e estruturação de dados",
            "construção de dashboard no Looker Studio",
            "habilitação de acesso pago à informação"
          ],
          impactTitle: "Impacto:",
          impactList: [
            "geração direta de receita",
            "melhoria significativa na acessibilidade e usabilidade dos dados"
          ]
        },
        impact: {
          title: "Impacto",
          list: [
            "redução do esforço manual na criação de sessões educacionais",
            "habilitação de um produto escalável sobre uma audiência existente",
            "criação de uma nova fonte de receita baseada em dados"
          ]
        },
        learnings: {
          title: "Aprendizados",
          list: [
            "importância de construir MVPs rápidos em contextos de incerteza",
            "valor de combinar produto + distribuição para validar ideias",
            "oportunidades de monetização a partir de dados públicos bem estruturados",
            "trade-offs entre velocidade de implementação e robustez técnica"
          ]
        },
        repository: {
          title: "Repositório",
          content: "O código fonte deste projeto está disponível no GitHub:",
          linkText: "Ver repositório no GitHub"
        }
      }
    },

    // Case 3 content
    case3: {
      title: "Otimização de rating na loja (Favo)",
      sections: {
        context: {
          title: "Contexto",
          content: "Aplicativo móvel com baixo rating na loja (~3.1), afetando a percepção do produto e potencialmente a conversão em aquisição."
        },
        problem: {
          title: "Problema",
          content: "O baixo rating refletia fricções na experiência do usuário e ausência de mecanismos para capturar feedback positivo de usuários satisfeitos."
        },
        approach: {
          title: "Abordagem",
          content: "Co-liderei uma estratégia de ativação de avaliações, orientada a incentivar usuários ativos e satisfeitos a avaliar o aplicativo."
        },
        implementation: {
          title: "Implementação",
          list: [
            "design de estratégia de comunicação para usuários",
            "ativação de solicitações de avaliação em momentos-chave de uso",
            "coordenação com equipe para execução da estratégia"
          ]
        },
        result: {
          title: "Resultado",
          content: "Aumento do rating do aplicativo de ~3.1 para ~4.5 (+1.4)."
        },
        impact: {
          title: "Impacto",
          list: [
            "melhoria significativa na percepção do produto na loja",
            "fortalecimento do canal de aquisição orgânico"
          ]
        }
      }
    },

    // Case 4 content
    case4: {
      title: "Design de A/B test para seleção de modelo LLM em produção",
      sections: {
        context: {
          title: "Contexto",
          content: `Operamos uma plataforma de comércio conversacional em que os merchants usam um assistente baseado em LLM para conversar com clientes e impulsionar vendas sobre canais de mensageria. O modelo base é uma alavanca relevante para o negócio: um modelo melhor pode significar mais conversões, mas também custa mais por mensagem.

Surgiu uma nova geração do modelo base (candidato). No papel prometia melhor raciocínio, mas "no papel" não paga as contas — antes de comprometer uma migração completa, precisávamos de evidência em produção, com merchants reais e conversas reais.`
        },
        problem: {
          title: "Problema",
          content: "Um A/B limpo disso parece simples até olhar de perto. Três coisas tornavam não trivial:",
          list: [
            "Conversões esparsas e merchants heterogêneos: conversões por conversa são eventos raros, e os merchants de maior volume abrangem verticais, tipos de catálogo e taxas base de conversão distintas.",
            "Armadilha da unidade de análise: a unidade natural de atribuição (sessão, que se reseta após um período sem resposta do cliente) não é a unidade natural de análise. Duas sessões de uma mesma conversa não são independentes — analisar a nível de sessão produziria pseudo-replicação e inflaria os p-values.",
            "Risco assimétrico de rollout: lançar um modelo pior prejudica trust e revenue diretamente; lançar um melhor tarde é recuperável. O teste precisava proteger o downside."
          ]
        },
        approach: {
          title: "Metodologia",
          content: "Design do experimento:",
          list: [
            "Atribuição: aleatória 50/50 a nível sessão de conversa via feature flag, com toda a cohort exposta a ambas variantes.",
            "Unidade de análise: conversa, não sessão, para evitar pseudo-replicação. Conversas mistas (que viram ambos modelos) foram excluídas da análise.",
            "Métricas: evento de marcação de venda como primária (cobertura completa) e pedido registrado como secundária (cobertura parcial). Ticket médio por currency como exploratória.",
            "Estatística: teste de duas proporções (z-test) para conversão, Mann-Whitney U para ticket (não assume normalidade nos montantes). Limite convencional de significância.",
            "Janela: várias semanas de tráfego em produção."
          ]
        },
        implementation: {
          title: "Validação do design",
          content: "Antes de olhar os resultados verifiquei se o teste tinha se comportado como desenhado:",
          list: [
            "Atribuição sticky: a grande maioria das conversas ficou presa a um único modelo ao longo de suas sessões. O restante foi excluído da análise.",
            "Split balanceado: desvio mínimo do 50/50 no agregado e cada merchant individual dentro do intervalo esperado. Sem drift.",
            "Tracking de lift acumulado: o lift se tornou significativo cedo na janela e se manteve acima do limite até o fechamento. Resultado robusto, não uma janela afortunada."
          ]
        },
        result: {
          title: "Resultados",
          list: [
            "Lift agregado de conversão de dois dígitos a favor do modelo candidato, estatisticamente significativo. Magnitude similar na métrica secundária de pedido registrado.",
            "Lift dramaticamente maior — várias vezes o agregado — concentrado no segmento de merchants com catálogo integrado a uma plataforma de e-commerce de terceiros. No segmento com catálogo nativo o lift foi muito menor e não significativo.",
            "Ticket médio sem mudanças significativas em nenhuma combinação merchant/currency. O ganho está em volume de vendas, não em ticket.",
            "Alguns merchants mostraram lift negativo relevante: ambos com catálogo nativo, volume médio, taxa base alta de conversão e prompts altamente customizados."
          ]
        },
        learnings: {
          title: "Aprendizados",
          list: [
            "A média escondia a história real: o lift agregado era também um spread amplo entre merchants, do fortemente positivo ao claramente negativo. A segmentação por fonte de catálogo explicou quase toda a variância — a segmentação por país quase nada.",
            "Dados de catálogo mais estruturados amplificam a capacidade do modelo. Mecanismo provável: merchants com plataforma integrada gerenciam promoções como dado estruturado; merchants com catálogo nativo embutem regras de promoção em texto livre no prompt, onde um modelo mais capaz é mais sensível a inconsistências.",
            "Atribuição a nível sessão está ok se você analisa a nível conversa. O alto sticky rate confirmou que na prática eram quase equivalentes, mas a escolha metodológica impactava os p-values — para próximos experimentos, mover a granularidade do flag para nível conversa.",
            "Antes de escalar, o custo é a decisão bloqueante. Um lift percentual dado é uma decisão diferente a 1.5x, 3x ou 10x de custo de inferência. O tracking de custo por merchant é a análise gating antes de decidir um rollout."
          ]
        }
      }
    }
  }
} as const

export type Translations = typeof translations.es
