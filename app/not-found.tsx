'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Download } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="DollApp Logo"
            width={80}
            height={80}
            className="w-20 h-20 rounded-2xl shadow-lg"
          />
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* APK specific message */}
        <div className="bg-secondary/50 border border-border rounded-2xl p-4 mb-8">
          <p className="text-sm text-muted-foreground">
            Si estabas buscando descargar la APK, es posible que el archivo aún no esté disponible. 
            Por favor, vuelve a intentarlo más tarde.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Ir al inicio
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="rounded-xl px-6"
          >
            <a href="https://github.com/WilmerParra21/DollApp/releases/download/V1/v1.0.3.Dollapp.apk" download>
              <Download className="w-4 h-4 mr-2" />
              Intentar descarga
            </a>
          </Button>
        </div>

        {/* Back link */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver atrás
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center">
        <p className="text-xs text-muted-foreground">
          DollApp - Tus tasas al día, siempre contigo.
        </p>
      </div>
    </div>
  )
}
