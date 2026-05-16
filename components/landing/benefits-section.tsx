'use client'

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
              
              {/* Phone body */}
              <div className="relative bg-card rounded-[2.5rem] p-3 shadow-2xl border border-border">
                <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-2 text-gray-500 dark:text-gray-400 text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.33 4.67L19 11.33V12a7 7 0 01-14 0v-.67l6.67-6.66a.5.5 0 01.66 0z"/>
                      </svg>
                      <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 24 16">
                        <rect x="0" y="2" width="20" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <rect x="2" y="4" width="14" height="8" rx="1" fill="currentColor"/>
                        <rect x="21" y="5" width="2" height="6" rx="1" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 pt-2 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">D</span>
                      </div>
                      <div>
                        <div className="font-bold text-foreground">DollApp</div>
                        <div className="text-xs text-muted-foreground">Tus tasas al día</div>
                      </div>
                      <div className="ml-auto px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">Actualizado</span>
                      </div>
                    </div>

                    {/* Rates list */}
                    <div className="space-y-3">
                      {[
                        { flag: '🇺🇸', name: 'Dólar BCV', source: 'Banco Central de Venezuela', rate: 'Bs. 98,45', change: '-0.16%', negative: true },
                        { flag: '🇪🇺', name: 'Euro BCV', source: 'Banco Central de Venezuela', rate: 'Bs. 107,80', change: '-0.32%', negative: true },
                        { flag: '🇨🇳', name: 'Yuan BCV', source: 'Banco Central de Venezuela', rate: 'Bs. 13,62', change: '+0.05%', negative: false },
                        { flag: '₮', name: 'USDT Binance', source: 'Binance P2P', rate: 'Bs. 101,20', change: '+0.27%', negative: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-lg">
                              {item.flag}
                            </div>
                            <div>
                              <div className="font-medium text-sm text-foreground">{item.name}</div>
                              <div className="text-[10px] text-muted-foreground">{item.source}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-sm text-foreground">{item.rate}</div>
                            <div className={`text-[10px] ${item.negative ? 'text-red-500' : 'text-green-500'}`}>
                              {item.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Calculate button */}
                    <button className="w-full mt-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl">
                      Calcular
                    </button>

                    {/* Quick convert */}
                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <span>$ USD a Bs</span>
                      <span>€ EUR a Bs</span>
                      <span>₮ USDT a Bs</span>
                    </div>
                  </div>
                </div>
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
