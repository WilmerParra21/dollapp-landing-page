'use client'

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
              
              {/* Phone body */}
              <div className="relative bg-card rounded-[2.5rem] p-3 shadow-2xl border border-border">
                {/* Screen */}
                <div className="bg-[#0E5C3A] rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-2 text-white/80 text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.33 4.67L19 11.33V12a7 7 0 01-14 0v-.67l6.67-6.66a.5.5 0 01.66 0z"/>
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 17h20v4H2zM4 10h3v5H4zM9 6h3v9H9zM14 3h3v12h-3zM19 7h3v8h-3z"/>
                      </svg>
                      <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 24 16">
                        <rect x="0" y="2" width="20" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <rect x="2" y="4" width="14" height="8" rx="1" fill="currentColor"/>
                        <rect x="21" y="5" width="2" height="6" rx="1" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="px-4 pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold">Calculadora</span>
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Amount input */}
                    <div className="bg-white/10 rounded-2xl p-4 mb-4">
                      <span className="text-white/60 text-xs">Monto</span>
                      <div className="text-white text-3xl font-bold">100</div>
                    </div>

                    {/* Currency selectors */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-2">
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-white font-medium">USD</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-2">
                        <span className="text-lg">🇻🇪</span>
                        <span className="text-white font-medium">VES</span>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="bg-white rounded-2xl p-4 text-center">
                      <span className="text-gray-500 text-xs">Resultado</span>
                      <div className="text-[#0E5C3A] text-2xl font-bold">Bs. 9.845,00</div>
                      <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
                        <span>Tasa: USD BCV = Bs. 98,45</span>
                      </div>
                    </div>

                    {/* Quick amounts */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {[1, 5, 10, 20, 50, 100].map((amount) => (
                        <button
                          key={amount}
                          className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                            amount === 100
                              ? 'bg-[#22C76F] text-white'
                              : 'bg-white/10 text-white/80'
                          }`}
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
