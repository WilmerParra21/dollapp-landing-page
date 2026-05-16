'use client'

import { Coins, DollarSign, Zap } from 'lucide-react'

const steps = [
  {
    icon: Coins,
    number: '01',
    title: 'Selecciona tus monedas',
    description: 'Elige las divisas que quieres convertir: USD, EUR, VES, USDT y más.',
  },
  {
    icon: DollarSign,
    number: '02',
    title: 'Ingresa el monto',
    description: 'Escribe la cantidad que deseas convertir o usa los montos rápidos.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Obtén tu resultado',
    description: 'Recibe la conversión instantánea con la tasa actualizada del momento.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En solo tres pasos tendrás tu conversión lista
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              
              <div className="relative text-center p-6">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 relative">
                  <step.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number.split('')[1]}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
