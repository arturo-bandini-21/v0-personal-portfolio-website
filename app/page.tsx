"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-16">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Avatar placeholder - easily replaceable */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
              <Image
                src="/avatar.jpg"
                alt="Alonso Lamilla"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <h1 className="font-mono text-2xl font-semibold tracking-tight">
                Alonso Lamilla
              </h1>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {t.headline}
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-foreground/90">
            {t.description}
          </p>

          {/* External Links */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/alonso-diego-lamilla-meza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span>{t.linkedin}</span>
            </a>
            <a
              href="https://github.com/arturo-bandini-21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>{t.github}</span>
            </a>
          </div>
        </section>

        {/* Cases Section */}
        <section>
          <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t.cases}
          </h2>

          <div className="flex flex-col gap-4">
            {/* Case 1 */}
            <Link
              href="/cases/1"
              className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-accent/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-mono text-sm font-medium group-hover:text-foreground">
                    {t.case1Title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {t.case1Subtitle}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["PostgreSQL", "SQL", "Looker Studio", "Metabase", "Slack API", "PostHog"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>

            {/* Case 2 */}
            <Link
              href="/cases/2"
              className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-accent/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-mono text-sm font-medium group-hover:text-foreground">
                    {t.case2Title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {t.case2Subtitle}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Python", "WhatsApp API", "OpenAI API", "Looker Studio", "Web Scraping"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </section>
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
