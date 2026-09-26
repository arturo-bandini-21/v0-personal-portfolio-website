"use client"

import { Header } from "@/components/header"

const tags = [
  "Continuous discovery",
  "Product operations",
  "Kanban",
  "Prioritization",
  "Analytics",
  "AI systems",
]

export default function ReferentCasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <article className="prose-custom">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Squads Ventures {"\u00B7"} Referent
          </p>
          <h1 className="mb-5 font-mono text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
            Squads Ventures: building a measurable product operating system for Referent
          </h1>

          <div className="mb-12 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          <Section title="Context & problem">
            <P>
              At Squads Ventures, I work on Referent, its AI SEO product. It needed to make faster, more reliable product decisions while customer feedback, delivery work, analytics freshness, and AI operating costs were distributed across separate workflows. The issue was not a lack of activity - it was the absence of a shared operating system that connected evidence to decisions and delivery.
            </P>
          </Section>

          <Section title="Discovery & evidence">
            <P>
              I synthesized operational intelligence from 24 client-operations conversations spanning 9 accounts, alongside signals from 13 commercial opportunities. That created a concrete evidence base for recurring pain points, product gaps, and opportunities - not a backlog driven by the loudest request.
            </P>
          </Section>

          <Section title="Decisions">
            <List items={[
              "Designed a dual-track, continuous Discovery and Delivery model in Kanban so learning and execution could run in parallel.",
              "Introduced ICE prioritization and WIP limits to make sequencing explicit, protect focus, and expose blocked work.",
              "Made analytics freshness and variable AI cost observable product concerns, rather than invisible operational overhead.",
            ]} />
          </Section>

          <Section title="Delivery">
            <P>
              I owned the product-operating design, evidence synthesis, prioritization approach, and the technical initiatives that made critical signals measurable. Delivery was collaborative: the team built and operated the product changes and automation together.
            </P>
            <List items={[
              "A scheduled analytics workflow brought freshness to 21 of 22 organizations and reduced a key manual refresh from 15 minutes to 3 minutes - about an 80% reduction.",
              "A warm-audit approach reduced a relevant AI operation's internal cost by 86%, creating a clearer path to traceable variable-cost management.",
            ]} />
          </Section>

          <Section title="Verified outcomes">
            <List items={[
              "A continuous discovery and delivery cadence with explicit prioritization, WIP, and operational metrics.",
              "A reusable intelligence layer grounded in customer-operations and commercial signals.",
              "Analytics freshness improved across 21 of 22 organizations, with manual refresh time reduced by ~80%.",
              "An 86% internal cost reduction in the audited AI operation.",
            ]} />
          </Section>

          <Section title="What I owned and what the team built">
            <P><strong>I owned:</strong> framing the operating problem, the dual-track model, evidence synthesis, prioritization mechanics, and driving the decision-making around measurability.</P>
            <P><strong>The team built:</strong> the production workflows, automations, and product improvements that made the system real. The outcomes are team outcomes; my contribution was connecting product judgment to technical execution.</P>
          </Section>

          <Section title="Learning">
            <P>
              For AI products, a roadmap is not enough. You need a system that continuously connects customer evidence, delivery capacity, product quality, and unit economics. The job is not just to ship - it is to make the next decision better than the last.
            </P>
          </Section>
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <p className="font-mono text-xs text-muted-foreground">(c) {new Date().getFullYear()} Alonso Lamilla</p>
        </div>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mb-10"><h2 className="mb-4 font-mono text-base font-semibold">{title}</h2>{children}</section>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 leading-relaxed text-foreground/90">{children}</p>
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 list-none space-y-2 pl-0">
      {items.map((item) => (
        <li key={item} className="relative pl-5 text-foreground/90 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted-foreground/50">
          {item}
        </li>
      ))}
    </ul>
  )
}
