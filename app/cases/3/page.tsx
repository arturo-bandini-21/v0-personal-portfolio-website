"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"

const TECH_STACK = ["Growth", "App Store Optimization", "User Activation"]

export default function CaseFavoRatingPage() {
  const { t } = useLanguage()
  const c = t.case3

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
          </Section>

          {/* Approach */}
          <Section title={c.sections.approach.title}>
            <Paragraph>{c.sections.approach.content}</Paragraph>
          </Section>

          {/* Implementation */}
          <Section title={c.sections.implementation.title}>
            <List items={c.sections.implementation.list} />
          </Section>

          {/* Result */}
          <Section title={c.sections.result.title}>
            <p className="mb-4 font-mono text-lg font-semibold text-foreground">
              {c.sections.result.content}
            </p>
          </Section>

          {/* Impact */}
          <Section title={c.sections.impact.title}>
            <List items={c.sections.impact.list} />
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
    <p className="mb-4 leading-relaxed text-foreground/90">
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
