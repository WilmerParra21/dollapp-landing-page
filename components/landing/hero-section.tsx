'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Clock, Zap, WifiOff, Download } from 'lucide-react'

const features = [
  { icon: Clock, label: 'Actualizaciones en tiempo real' },
  { icon: Zap, label: 'Confiable y seguro' },
  { icon: WifiOff, label: 'Funciona sin internet' },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Tus tasas al día,{' '}
              <span className="text-primary">siempre contigo.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              DollApp es tu calculadora de tasas de cambio en tiempo real. Consulta, compara y convierte monedas al instante de forma rápida, segura y sin complicaciones.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                <a href="/dollapp.apk" download>
                  <Download className="w-5 h-5 mr-2" />
                  Descargar APK
                  <span className="ml-2 text-xs opacity-80">Android</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8 py-6 text-base font-semibold border-2 hover:bg-secondary transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                </svg>
                Ver cómo funciona
                <span className="ml-2 text-xs text-muted-foreground">1 min</span>
              </Button>
            </div>

            {/* Feature badges */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Floating coins */}
            <div className="absolute -top-4 right-8 md:right-16 w-12 h-12 md:w-16 md:h-16 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">$</span>
              </div>
            </div>
            <div className="absolute top-1/4 -left-4 md:left-0 w-10 h-10 md:w-14 md:h-14 animate-float-slow" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-lg">€</span>
              </div>
            </div>
            <div className="absolute bottom-1/4 -right-4 md:right-4 w-10 h-10 md:w-12 md:h-12 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">₮</span>
              </div>
            </div>

            {/* Phone frame */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[3rem] blur-2xl scale-90 animate-glow" />
              
              {/* Phone body with realistic frame */}
              <div className="relative bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-2 shadow-2xl ring-1 ring-gray-700/50">
                {/* Inner frame border */}
                <div className="absolute inset-1 rounded-[2.75rem] ring-1 ring-gray-600/30 pointer-events-none" />
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                </div>
                
                {/* Screen with screenshot */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
                  <Image
                    src="/screenshots/rates-screen.png"
                    alt="DollApp Tasas - Dólar BCV, Euro BCV y más tasas en tiempo real"
                    width={340}
                    height={720}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Side buttons */}
                <div className="absolute -right-0.5 top-28 w-1 h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute -right-0.5 top-44 w-1 h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute -left-0.5 top-32 w-1 h-16 bg-gray-700 rounded-r-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
