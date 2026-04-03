"use client"

import { ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"

// GitHub repository URL - easily editable
const GITHUB_REPO_URL = "https://github.com/arturo-bandini-21/tuthoria_1"

// Project name
const PROJECT_NAME = "TuThorIA"

const TECH_STACK = [
  "Python",
  "WhatsApp API",
  "OpenAI API",
  "Looker Studio",
  "Web Scraping",
  "Data Pipelines",
]

export default function Case2Page() {
  const { t } = useLanguage()
  const c = t.case2

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
            <List items={c.sections.problem.list} />
            <Paragraph>{c.sections.problem.content}</Paragraph>
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
            <Paragraph>{c.sections.implementation.content2}</Paragraph>
          </Section>

          {/* Result */}
          <Section title={c.sections.result.title}>
            <List items={c.sections.result.list} />
          </Section>

          {/* Extension */}
          <Section title={c.sections.extension.title}>
            <Paragraph>{c.sections.extension.content}</Paragraph>
            <List items={c.sections.extension.list} />

            <SubSection title={c.sections.extension.solutionTitle}>
              <List items={c.sections.extension.solutionList} />
            </SubSection>

            <SubSection title={c.sections.extension.impactTitle}>
              <List items={c.sections.extension.impactList} />
            </SubSection>
          </Section>

          {/* Impact */}
          <Section title={c.sections.impact.title}>
            <List items={c.sections.impact.list} />
          </Section>

          {/* Learnings */}
          <Section title={c.sections.learnings.title}>
            <List items={c.sections.learnings.list} />
          </Section>

          {/* Repository */}
          <Section title={c.sections.repository.title}>
            <Paragraph>{c.sections.repository.content}</Paragraph>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 font-mono text-sm transition-colors hover:border-foreground/20 hover:bg-accent/50"
            >
              <ExternalLink className="h-4 w-4" />
              {c.sections.repository.linkText}
            </a>
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
