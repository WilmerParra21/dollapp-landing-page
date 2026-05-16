'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: '¿DollApp es gratuita?',
    answer: 'Sí, DollApp es completamente gratuita. Puedes descargarla y usar todas sus funciones sin ningún costo.',
  },
  {
    question: '¿De dónde obtienen las tasas de cambio?',
    answer: 'Las tasas BCV se obtienen directamente del Banco Central de Venezuela. Las tasas de USDT se calculan a partir de promedios del mercado P2P de plataformas confiables.',
  },
  {
    question: '¿Funciona sin conexión a internet?',
    answer: 'Sí, DollApp guarda la última actualización de tasas para que puedas consultar y calcular incluso sin conexión. Las tasas se actualizarán cuando vuelvas a tener internet.',
  },
  {
    question: '¿Cada cuánto se actualizan las tasas?',
    answer: 'Las tasas se actualizan automáticamente varias veces al día. También puedes actualizar manualmente en cualquier momento con solo deslizar hacia abajo.',
  },
  {
    question: '¿Es segura la aplicación?',
    answer: 'Absolutamente. DollApp no recopila datos personales ni requiere registro. Tu privacidad está garantizada.',
  },
  {
    question: '¿Está disponible para iOS?',
    answer: 'Actualmente DollApp está disponible para Android. La versión para iOS está en desarrollo y estará disponible próximamente.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas sobre DollApp
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-5 pb-5 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
