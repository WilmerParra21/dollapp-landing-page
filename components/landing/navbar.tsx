'use client'

import { Button } from '@/components/ui/button'
import { GooglePlayIcon } from '@/components/ui/google-play-icon'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#faq', label: 'Preguntas' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="DollApp Logo"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
            />
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-base md:text-lg leading-tight">DollApp</span>
              <span className="text-[10px] md:text-xs text-muted-foreground leading-tight">Tus tasas al día</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Cambiar tema"
              >
                {resolvedTheme === 'dark' ? (
                  <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}

            <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-5 shadow-lg shadow-primary/20">
              <a href="https://play.google.com/store/apps/details?id=com.devsparra.dollapp" target="_blank" rel="noreferrer">
                <GooglePlayIcon className="w-4 h-4 mr-2" />
                Descargar App
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
              <a href="https://play.google.com/store/apps/details?id=com.devsparra.dollapp" target="_blank" rel="noreferrer">
                <GooglePlayIcon className="w-4 h-4 mr-2" />
                Descargar App
              </a>
            </Button>
        </div>
      </div>
    </header>
  )
}
