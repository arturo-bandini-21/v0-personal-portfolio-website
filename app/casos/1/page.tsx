"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"

export default function Case1Page() {
  const { t } = useLanguage()
  const c = t.case1

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <article className="prose-custom">
          {/* Title */}
          <h1 className="mb-12 font-mono text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
            {c.title}
          </h1>

          {/* Context */}
          <Section title={c.sections.context.title}>
            <Paragraph>{c.sections.context.content}</Paragraph>
          </Section>

          {/* Problem */}
          <Section title={c.sections.problem.title}>
            <Paragraph>{c.sections.problem.content}</Paragraph>
            <List items={c.sections.problem.list} />
            <Paragraph>{c.sections.problem.content2}</Paragraph>
            <List items={c.sections.problem.list2} />
            <Paragraph>{c.sections.problem.content3}</Paragraph>
          </Section>

          {/* Approach */}
          <Section title={c.sections.approach.title}>
            <Paragraph>{c.sections.approach.content}</Paragraph>
            <List items={c.sections.approach.list} />
            <Paragraph>{c.sections.approach.content2}</Paragraph>
          </Section>

          {/* Implementation */}
          <Section title={c.sections.implementation.title}>
            <Paragraph>{c.sections.implementation.content}</Paragraph>
            <List items={c.sections.implementation.list} />

            <SubSection title={c.sections.implementation.metricsTitle}>
              <List items={c.sections.implementation.metricsList} />
            </SubSection>

            <SubSection title={c.sections.implementation.evolutionTitle}>
              <List items={c.sections.implementation.evolutionList} />
            </SubSection>

            <SubSection title={c.sections.implementation.extensionsTitle}>
              <List items={c.sections.implementation.extensionsList} />
            </SubSection>
          </Section>

          {/* Result */}
          <Section title={c.sections.result.title}>
            <List items={c.sections.result.list} />

            <SubSection title={c.sections.result.operationTitle}>
              <List items={c.sections.result.operationList} />
            </SubSection>

            <SubSection title={c.sections.result.businessTitle}>
              <List items={c.sections.result.businessList} />
            </SubSection>
          </Section>

          {/* Quantitative Impact */}
          <Section title={c.sections.quantitativeImpact.title}>
            <List items={c.sections.quantitativeImpact.list} />
          </Section>

          {/* Adoption */}
          <Section title={c.sections.adoption.title}>
            <Paragraph>{c.sections.adoption.content}</Paragraph>
            <List items={c.sections.adoption.list} />
            <Paragraph>{c.sections.adoption.content2}</Paragraph>
          </Section>

          {/* Evolution */}
          <Section title={c.sections.evolution.title}>
            <Paragraph>{c.sections.evolution.content}</Paragraph>
            <List items={c.sections.evolution.list} />
          </Section>

          {/* Learnings */}
          <Section title={c.sections.learnings.title}>
            <List items={c.sections.learnings.list} />
          </Section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Alonso Lamilla
          </p>
        </div>
      </footer>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-mono text-base font-semibold">{title}</h2>
      {children}
    </section>
  )
}

function SubSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 font-mono text-sm font-medium text-muted-foreground">
        {title}
      </h3>
      {children}
    </div>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 whitespace-pre-line leading-relaxed text-foreground/90">
      {children}
    </p>
  )
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="mb-4 list-none space-y-2 pl-0">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative pl-5 text-foreground/90 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/50"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
