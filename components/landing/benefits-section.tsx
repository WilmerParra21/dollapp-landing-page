'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Zap, WifiOff, Shield, Bell, RefreshCw, Smartphone } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Rápida y ligera',
    description: 'Rendimiento óptimo para que tengas tus tasas al instante.',
  },
  {
    icon: WifiOff,
    title: 'Sin internet',
    description: 'Funciona sin conexión con la última actualización disponible.',
  },
  {
    icon: Shield,
    title: 'Privada y segura',
    description: 'No recopilamos tus datos. Tu información está siempre protegida.',
  },
  {
    icon: Bell,
    title: 'Notificaciones',
    description: 'Recibe alertas cuando cambien las tasas que te importan.',
  },
  {
    icon: RefreshCw,
    title: 'Siempre actualizada',
    description: 'Obtén las tasas más recientes en todo momento.',
  },
  {
    icon: Smartphone,
    title: 'Hecha para móviles',
    description: 'Experiencia 100% optimizada para tu smartphone.',
  },
]

export function BenefitsSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const screenshotSrc = mounted && resolvedTheme === 'light' 
    ? '/screenshots/calculator-screen-light.png' 
    : '/screenshots/calculator-screen.png'

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-[280px] sm:w-[300px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-2xl scale-90" />
              
              {/* Phone body with realistic frame */}
              <div className="relative bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-2 shadow-2xl ring-1 ring-gray-700/50">
                {/* Inner frame border */}
                <div className="absolute inset-1 rounded-[2.75rem] ring-1 ring-gray-600/30 pointer-events-none" />
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                </div>
                
                {/* Screen with screenshot */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
                  <Image
                    src={screenshotSrc}
                    alt="DollApp Calculadora - Conversión de monedas en tiempo real"
                    width={300}
                    height={640}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Side buttons */}
                <div className="absolute -right-0.5 top-24 w-1 h-10 bg-gray-700 rounded-l-sm" />
                <div className="absolute -right-0.5 top-38 w-1 h-10 bg-gray-700 rounded-l-sm" />
                <div className="absolute -left-0.5 top-28 w-1 h-14 bg-gray-700 rounded-r-sm" />
              </div>
            </div>
          </div>

          {/* Benefits content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Diseñada para tu{' '}
              <span className="text-primary">día a día</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              DollApp te acompaña donde estés. Ya sea que necesites consultar tasas, hacer conversiones rápidas o comparar valores, todo en una interfaz simple, moderna y confiable.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
