export type Locale = "es" | "en" | "pt"

export const translations = {
  es: {
    // Navigation
    home: "Inicio",
    cases: "Casos",
    backToHome: "Volver al inicio",
    
    // Home
    headline: "Senior Product Analyst | Data & Product",
    description: "Analizo, construyo y optimizo productos digitales con foco en métricas, conversión y sistemas de decisión.",
    viewCase: "Ver caso",
    
    // Case titles
    case1Title: "Sistema de analítica para producto B2B",
    case1Subtitle: "Yavendió",
    case2Title: "Producto educativo con automatización",
    case2Subtitle: "TuThorIA",
    case3Title: "Optimización de rating en tienda",
    case3Subtitle: "Favo",
    
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
    }
  },

  en: {
    // Navigation
    home: "Home",
    cases: "Cases",
    backToHome: "Back to home",
    
    // Home
    headline: "Senior Product Analyst | Data & Product",
    description: "I analyze, build, and optimize digital products with a focus on metrics, conversion, and decision systems.",
    viewCase: "View case",
    
    // Case titles
    case1Title: "Analytics system for B2B product",
    case1Subtitle: "Yavendió",
    case2Title: "Educational product with automation",
    case2Subtitle: "TuThorIA",
    case3Title: "App store rating optimization",
    case3Subtitle: "Favo",
    
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
    }
  },

  pt: {
    // Navigation
    home: "Início",
    cases: "Casos",
    backToHome: "Voltar ao início",
    
    // Home
    headline: "Senior Product Analyst | Data & Product",
    description: "Analiso, construo e otimizo produtos digitais com foco em métricas, conversão e sistemas de decisão.",
    viewCase: "Ver caso",
    
    // Case titles
    case1Title: "Sistema de analytics para produto B2B",
    case1Subtitle: "Yavendió",
    case2Title: "Produto educacional com automação",
    case2Subtitle: "TuThorIA",
    case3Title: "Otimização de rating na loja",
    case3Subtitle: "Favo",
    
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
    }
  }
} as const

export type Translations = typeof translations.es
