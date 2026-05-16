'use client'

import Image from 'next/image'
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
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-[280px] sm:w-[300px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-2xl scale-90" />
              
              {/* Phone screenshot */}
              <div className="relative">
                <Image
                  src="/screenshots/rates-screen.png"
                  alt="DollApp Tasas - Dólar BCV, Euro BCV y más tasas en tiempo real"
                  width={300}
                  height={640}
                  className="w-full h-auto rounded-[2rem] shadow-2xl"
                />
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
