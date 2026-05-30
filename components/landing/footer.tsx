'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="DollApp Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <span className="font-bold text-foreground">DollApp</span>
              <p className="text-xs text-muted-foreground">Tus tasas al día, siempre contigo.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="#caracteristicas" className="text-muted-foreground hover:text-foreground transition-colors">
              Características
            </Link>
            <Link href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
              Beneficios
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              Preguntas
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 DollApp. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
