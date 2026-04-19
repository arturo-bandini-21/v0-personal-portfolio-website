"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"

const TECH_STACK = [
  "A/B Testing",
  "Statistical Analysis",
  "LLM Evaluation",
  "PostHog",
  "Metabase",
]

export default function Case4Page() {
  const { t } = useLanguage()
  const c = t.case4

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <article className="prose-custom">
          {/* Title */}
          <h1 className="mb-6 font-mono text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
            {c.title}
          </h1>

          {/* Tech Stack Tags */}
          <div className="mb-12 flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Context */}
          <Section title={c.sections.context.title}>
            <Paragraph>{c.sections.context.content}</Paragraph>
          </Section>

          {/* Problem */}
          <Section title={c.sections.problem.title}>
            <Paragraph>{c.sections.problem.content}</Paragraph>
            <List items={c.sections.problem.list} />
          </Section>

          {/* Approach */}
          <Section title={c.sections.approach.title}>
            <Paragraph>{c.sections.approach.content}</Paragraph>
            <List items={c.sections.approach.list} />
          </Section>

          {/* Implementation */}
          <Section title={c.sections.implementation.title}>
            <Paragraph>{c.sections.implementation.content}</Paragraph>
            <List items={c.sections.implementation.list} />
          </Section>

          {/* Result */}
          <Section title={c.sections.result.title}>
            <List items={c.sections.result.list} />
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
