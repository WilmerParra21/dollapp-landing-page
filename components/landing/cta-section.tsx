'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Image from 'next/image'

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-[#063B27] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and text */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="DollApp Logo"
              width={56}
              height={56}
              className="w-14 h-14 rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                Empieza a usar <span className="text-accent">DollApp</span> hoy
              </h2>
              <p className="text-white/80 mt-1">
                Descárgala gratis y lleva el control de tus tasas siempre contigo.
              </p>
            </div>
          </div>

          {/* Download button */}
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-primary rounded-xl px-8 h-14 flex items-center gap-3 font-semibold shadow-lg"
          >
            <a href="https://github.com/WilmerParra21/DollApp/releases/download/v1.0/DollApp.v1.0.5.apk" download>
              <Download className="w-5 h-5" />
              Descargar App
              <span className="text-xs opacity-70 ml-1">Android</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
