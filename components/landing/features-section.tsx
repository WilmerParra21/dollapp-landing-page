'use client'

import { Calculator, Coins, Moon, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Coins,
    title: 'Múltiples monedas',
    description: 'Consulta desde fuentes oficiales las tasas del dólar, euro, yuan y más en tiempo real.',
  },
  {
    icon: Calculator,
    title: 'Calculadora rápida',
    description: 'Convierte entre monedas al instante con resultados precisos.',
  },
  {
    icon: TrendingUp,
    title: 'Tendencia de la tasa',
    description: 'Visualiza el comportamiento de las tasas con gráficos claros.',
  },
  {
    icon: Moon,
    title: 'Modo oscuro',
    description: 'Comodidad visual para usar la app de día o de noche.',
  },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Todo lo que necesitas en una sola app
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
