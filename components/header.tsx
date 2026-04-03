"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/language-context"
import { Sun, Moon, ChevronDown, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Locale } from "@/lib/translations"

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useLanguage()

  const localeLabels: Record<Locale, string> = {
    es: "ES",
    en: "EN",
    pt: "PT",
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {showBackButton ? (
            <Link
              href="/"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-mono">{t.backToHome}</span>
            </Link>
          ) : (
            <Link href="/" className="font-mono text-sm font-medium">
              ~/alonso
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-1 font-mono text-xs">
                {localeLabels[locale]}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLocale("es")} className="font-mono text-xs">
                {t.spanish}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale("en")} className="font-mono text-xs">
                {t.english}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale("pt")} className="font-mono text-xs">
                {t.portuguese}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
