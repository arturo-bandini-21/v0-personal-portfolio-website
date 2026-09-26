"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Mail, Phone } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const homeContent = {
  en: {
    roles: "Product Builder · Product Manager · Product Analyst",
    intro: "I turn ambiguous customer and business problems into measurable products. My work sits at the intersection of discovery, product strategy, product analytics, growth experimentation, AI, and hands-on delivery - from framing the decision to shipping and measuring what changed.",
    howIWorkTitle: "How I work", selectedWorkTitle: "Selected work", ctaTitle: "Let's build something measurable.",
    ctaDescription: "I'm available for product roles where customer insight, commercial judgment, and technical execution need to move together.",
    howIWork: [["01 /Discover", "Interviews, operational signals, and product analytics to make the problem observable."], ["02 /Decide", "Trade-offs, clear success criteria, and PRDs that turn evidence into an executable bet."], ["03 /Build", "Prototypes, automations, and technical delivery with the team - not hand-offs into a void."], ["04 /Measure", "Product metrics, growth loops, and evaluations that tell us what changed and what to do next."]],
    work: [
      { href: "/cases/5", eyebrow: "Squads Ventures · Referent", title: "Squads Ventures: building a measurable product operating system for Referent", description: "Turned fragmented customer, delivery, and analytics signals into a continuous product operating system; cut a key manual refresh from 15 to 3 minutes.", tags: ["Discovery", "Kanban", "Prioritization", "Analytics", "AI operations"], logo: "/logos/squads-ventures.png", logoAlt: "Squads Ventures", featured: true },
      { href: "/cases/4", eyebrow: "Yavendió", title: "Yavendió: designing a production experiment for an LLM model decision", description: "Protected a high-stakes model rollout with valid experimental design, segmentation, and a cost-aware decision framework.", tags: ["Experiment design", "LLM evaluation", "Product analytics"], logo: "/logos/yavendio.png", logoAlt: "Yavendió" },
      { href: "/cases/1", eyebrow: "Yavendió", title: "Yavendió: building its first product decision system", description: "Replaced manual analysis with an operating analytics layer used across product and operations.", tags: ["Product analytics", "Data modeling", "Decision systems"], logo: "/logos/yavendio.png", logoAlt: "Yavendió" },
      { href: "/cases/2", eyebrow: "TuThorIA", title: "TuThorIA: validating an AI-assisted education product from zero to MVP", description: "Framed a user problem, chose a conversational wedge, and shipped a real-world product for validation.", tags: ["MVP strategy", "AI automation", "Monetization"] },
      { href: "/cases/3", eyebrow: "Favo", title: "Favo: improving a product's store-rating signal through activation", description: "Co-led a focused intervention that moved the rating from ~3.1 to ~4.5.", tags: ["Growth", "Activation", "User feedback"], logo: "/logos/favo.png", logoAlt: "Favo" },
    ],
  },
  es: {
    roles: "Product Builder · Product Manager · Product Analyst",
    intro: "Convierto problemas ambiguos de clientes y negocio en productos medibles. Mi trabajo está en la intersección de discovery, estrategia de producto, analítica de producto, experimentación de growth, IA y entrega hands-on: desde encuadrar la decisión hasta lanzar y medir qué cambió.",
    howIWorkTitle: "Cómo trabajo", selectedWorkTitle: "Trabajo seleccionado", ctaTitle: "Construyamos algo medible.",
    ctaDescription: "Estoy disponible para roles de producto donde el insight de cliente, el criterio comercial y la ejecución técnica necesitan avanzar juntos.",
    howIWork: [["01 /Descubrir", "Entrevistas, señales operativas y analítica de producto para hacer observable el problema."], ["02 /Decidir", "Trade-offs, criterios claros de éxito y PRDs que convierten evidencia en una apuesta ejecutable."], ["03 /Construir", "Prototipos, automatizaciones y entrega técnica con el equipo, no hand-offs hacia el vacío."], ["04 /Medir", "Métricas de producto, loops de growth y evaluaciones que muestran qué cambió y qué hacer después."]],
    work: [
      { href: "/cases/5", eyebrow: "Squads Ventures · Referent", title: "Squads Ventures: construyendo un sistema operativo de producto medible para Referent", description: "Convirtió señales fragmentadas de clientes, delivery y analítica en un sistema continuo de producto; redujo una actualización manual clave de 15 a 3 minutos.", tags: ["Discovery", "Kanban", "Priorización", "Analítica", "Operaciones con IA"], logo: "/logos/squads-ventures.png", logoAlt: "Squads Ventures", featured: true },
      { href: "/cases/4", eyebrow: "Yavendió", title: "Yavendió: diseñando un experimento de producción para decidir un modelo LLM", description: "Protegió un rollout de alto impacto con diseño experimental válido, segmentación y un marco de decisión consciente del costo.", tags: ["Diseño experimental", "Evaluación de LLM", "Analítica de producto"], logo: "/logos/yavendio.png", logoAlt: "Yavendió" },
      { href: "/cases/1", eyebrow: "Yavendió", title: "Yavendió: construyendo su primer sistema de decisiones de producto", description: "Reemplazó el análisis manual por una capa operativa de analítica usada por producto y operaciones.", tags: ["Analítica de producto", "Modelado de datos", "Sistemas de decisión"], logo: "/logos/yavendio.png", logoAlt: "Yavendió" },
      { href: "/cases/2", eyebrow: "TuThorIA", title: "TuThorIA: validando un producto educativo asistido por IA desde cero hasta un MVP", description: "Enmarcó un problema de usuario, eligió una cuña conversacional y lanzó un producto real para validarlo.", tags: ["Estrategia de MVP", "Automatización con IA", "Monetización"] },
      { href: "/cases/3", eyebrow: "Favo", title: "Favo: mejorando la señal de rating en tienda a través de activación", description: "Co-lideró una intervención enfocada que movió el rating de ~3.1 a ~4.5.", tags: ["Growth", "Activación", "Feedback de usuarios"], logo: "/logos/favo.png", logoAlt: "Favo" },
    ],
  },
  pt: {
    roles: "Product Builder · Product Manager · Product Analyst",
    intro: "Transformo problemas ambíguos de clientes e negócio em produtos mensuráveis. Meu trabalho fica na interseção entre discovery, estratégia de produto, analytics de produto, experimentação de growth, IA e entrega hands-on: de enquadrar a decisão a lançar e medir o que mudou.",
    howIWorkTitle: "Como trabalho", selectedWorkTitle: "Trabalho selecionado", ctaTitle: "Vamos construir algo mensurável.",
    ctaDescription: "Estou disponível para funções de produto em que insight de cliente, julgamento comercial e execução técnica precisam avançar juntos.",
    howIWork: [["01 /Descobrir", "Entrevistas, sinais operacionais e analytics de produto para tornar o problema observável."], ["02 /Decidir", "Trade-offs, critérios claros de sucesso e PRDs que transformam evidência em uma aposta executável."], ["03 /Construir", "Protótipos, automações e entrega técnica com o time, não hand-offs para o vazio."], ["04 /Medir", "Métricas de produto, loops de growth e avaliações que mostram o que mudou e o que fazer depois."]],
    work: [
      { href: "/cases/5", eyebrow: "Squads Ventures · Referent", title: "Squads Ventures: construindo um sistema operacional de produto mensurável para Referent", description: "Transformou sinais fragmentados de clientes, delivery e analytics em um sistema contínuo de produto; reduziu uma atualização manual-chave de 15 para 3 minutos.", tags: ["Discovery", "Kanban", "Priorização", "Analytics", "Operações com IA"], logo: "/logos/squads-ventures.png", logoAlt: "Squads Ventures", featured: true },
      { href: "/cases/4", eyebrow: "Yavendió", title: "Yavendió: desenhando um experimento de produção para decidir um modelo LLM", description: "Protegeu um rollout de alto impacto com desenho experimental válido, segmentação e um framework de decisão sensível a custos.", tags: ["Desenho experimental", "Avaliação de LLM", "Analytics de produto"], logo: "/logos/yavendio.png", logoAlt: "Yavendió" },
      { href: "/cases/1", eyebrow: "Yavendió", title: "Yavendió: construindo seu primeiro sistema de decisão de produto", description: "Substituiu análises manuais por uma camada operacional de analytics usada por produto e operações.", tags: ["Analytics de produto", "Modelagem de dados", "Sistemas de decisão"], logo: "/logos/yavendio.png", logoAlt: "Yavendió" },
      { href: "/cases/2", eyebrow: "TuThorIA", title: "TuThorIA: validando um produto educacional assistido por IA do zero ao MVP", description: "Enquadrou um problema de usuário, escolheu uma abordagem conversacional e lançou um produto real para validação.", tags: ["Estratégia de MVP", "Automação com IA", "Monetização"] },
      { href: "/cases/3", eyebrow: "Favo", title: "Favo: melhorando o sinal de rating na loja por meio de ativação", description: "Co-liderou uma intervenção focada que levou o rating de ~3.1 para ~4.5.", tags: ["Growth", "Ativação", "Feedback de usuários"], logo: "/logos/favo.png", logoAlt: "Favo" },
    ],
  },
} as const

export default function Home() {
  const { t, locale } = useLanguage()
  const content = homeContent[locale]
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <section className="mb-16">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
              <Image src="/avatar.png" alt="Alonso Lamilla" fill className="object-cover" priority />
            </div>
            <div className="flex-1">
              <h1 className="font-mono text-2xl font-semibold tracking-tight">Alonso Lamilla <span className="whitespace-nowrap text-muted-foreground">(aka Arturo Bandini)</span></h1>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {content.roles}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
            {content.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="https://www.linkedin.com/in/alonso-diego-lamilla-meza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
              <FaLinkedinIn className="h-4 w-4" />
              <span>{t.linkedin}</span>
            </a>
            <a href="https://github.com/arturo-bandini-21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
              <FaGithub className="h-4 w-4" />
              <span>{t.github}</span>
            </a>
            <a href="mailto:alonso.lamilla.meza@gmail.com" className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-4 w-4" />
              <span>{t.emailMe}</span>
            </a>
            <a href="tel:+51933903202" className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4" />
              <span>{t.callMe}</span>
            </a>
            <a href="https://wa.me/51933903202" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">{content.howIWorkTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.howIWork.map(([title, description]) => (
              <div key={title} className="rounded-lg border border-border bg-card p-4">
                <h3 className="font-mono text-sm font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">{content.selectedWorkTitle}</h2>
          <div className="flex flex-col gap-4">
            {content.work.map((item) => (
              <Link key={item.href} href={item.href} className={`group flex flex-col rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50 ${"featured" in item && item.featured ? "border-foreground/20" : "border-border hover:border-foreground/20"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      {"logo" in item && item.logo && (
                        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-border bg-white">
                          <Image src={item.logo} alt={`${item.logoAlt} logo`} fill sizes="32px" className="object-contain" />
                        </div>
                      )}
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{item.eyebrow}</p>
                    </div>
                    <h3 className="font-mono text-sm font-medium">{item.title}</h3>
                    <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-lg border border-border bg-card p-5">
          <h2 className="font-mono text-sm font-medium">{content.ctaTitle}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {content.ctaDescription}
          </p>
          <a href="mailto:alonso.lamilla.meza@gmail.com" className="mt-4 inline-flex items-center gap-2 font-mono text-sm transition-colors hover:text-muted-foreground">
            <Mail className="h-4 w-4" />
            alonso.lamilla.meza@gmail.com
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.participations}</h2>
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
            <button onClick={() => setImageOpen(true)} className="relative h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border border-border bg-muted transition-opacity hover:opacity-80">
              <Image src="/images/participaciones/pm-beers-evento.jpg" alt={t.participation1Event} fill className="object-cover" />
            </button>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-sm text-foreground">{t.participation1Role} {"\u00B7"} {t.participation1Event}</p>
              <p className="font-mono text-xs text-muted-foreground">{t.participation1Org}</p>
              <div className="mt-1 flex gap-3">
                <a href="https://www.pmbeers.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
                  <ExternalLink className="h-3 w-3" />
                  {t.participation1CommunityLink}
                </a>
                <a href="https://luma.com/zq4hwg5a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
                  <ExternalLink className="h-3 w-3" />
                  {t.participation1EventLink}
                </a>
              </div>
            </div>
          </div>
          <Dialog open={imageOpen} onOpenChange={setImageOpen}>
            <DialogContent className="max-w-lg p-2">
              <DialogTitle className="sr-only">{t.participation1Event}</DialogTitle>
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <Image src="/images/participaciones/pm-beers-evento.jpg" alt={t.participation1Event} fill className="object-contain" />
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <p className="font-mono text-xs text-muted-foreground">(c) {new Date().getFullYear()} Alonso Lamilla</p>
        </div>
      </footer>
    </div>
  )
}
