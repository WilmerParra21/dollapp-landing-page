'use client'

import { Footer } from '@/components/landing/footer'
import { Navbar } from '@/components/landing/navbar'
import { Card } from '@/components/ui/card'
import { AlertTriangle, Clock, FileText, Globe, RefreshCw, Scale, Shield, Smartphone } from 'lucide-react'

const terms = [
  {
    icon: FileText,
    title: 'Aceptación de los términos',
    content: 'Al descargar, instalar o utilizar DollApp, aceptas estar sujeto a estos términos y condiciones de uso. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar la aplicación.'
  },
  {
    icon: Smartphone,
    title: 'Uso permitido',
    content: 'DollApp está diseñada exclusivamente para fines informativos. Puedes utilizar la aplicación para consultar tasas de cambio, realizar conversiones y visualizar tendencias de manera personal y no comercial.'
  },
  {
    icon: AlertTriangle,
    title: 'Limitación de responsabilidad',
    content: 'Las tasas de cambio mostradas en DollApp son obtenidas de fuentes públicas y oficiales. Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos la exactitud absoluta de los datos. Las tasas pueden variar sin previo aviso.'
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones y disponibilidad',
    content: 'Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto de la aplicación en cualquier momento, incluyendo la disponibilidad de ciertas funcionalidades o fuentes de datos.'
  },
  {
    icon: Globe,
    title: 'Fuentes de información',
    content: 'Las tasas de cambio presentadas provienen de fuentes públicas y reconocidas. DollApp actúa únicamente como un medio de visualización y no tiene control directo sobre los valores mostrados ni su actualización.'
  },
  {
    icon: Shield,
    title: 'Uso correcto de la aplicación',
    content: 'Te comprometes a utilizar DollApp de manera legal y ética. No debes intentar modificar, descompilar, realizar ingeniería inversa o crear obras derivadas de la aplicación sin autorización expresa.'
  }
]

const disclaimers = [
  {
    title: 'Carácter informativo',
    description: 'DollApp es una herramienta meramente informativa. Los valores mostrados no constituyen asesoría financiera, cambiaria ni de inversión.'
  },
  {
    title: 'Decisiones financieras',
    description: 'Las decisiones financieras que tomes basándote en la información de DollApp son bajo tu propia responsabilidad. Te recomendamos verificar las tasas con fuentes oficiales antes de realizar transacciones.'
  },
  {
    title: 'Precisión de datos',
    description: 'Aunque trabajamos con fuentes confiables, los datos pueden presentar variaciones o retrasos respecto a los valores vigentes de cada fuente.'
  },
  {
    title: 'Disponibilidad del servicio',
    description: 'La disponibilidad de DollApp puede verse afectada por factores técnicos, problemas de conectividad o cambios en las fuentes de datos.'
  }
]

const permissions = [
  'Usar la aplicación para consulta personal de tasas de cambio',
  'Realizar conversiones entre las monedas disponibles',
  'Compartir capturas de pantalla o valores de tasas de manera personal',
  'Usar la aplicación en modo offline con datos en caché'
]

const restrictions = [
  'Vender, alquilar o comercializar la aplicación',
  'Modificar o crear versiones derivadas del software',
  'Utilizar la aplicación para actividades ilegales',
  'Intentar acceder al código fuente mediante ingeniería inversa',
  'Interferir con el funcionamiento normal de la aplicación',
  'Utilizar los datos para proveer servicios comerciales de tasas de cambio'
]

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce las condiciones de uso de DollApp. Al utilizar nuestra aplicación, aceptas estos términos.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Última actualización: Agosto 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Sobre DollApp
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DollApp es una aplicación móvil desarrollada por <strong>devsparra</strong> en el año 2026. 
              Su propósito es proporcionar una herramienta práctica, rápida y confiable para consultar tasas de cambio de monedas 
              en Venezuela y realizar conversiones entre diferentes divisas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La aplicación funciona como un medio de visualización de información obtenida de fuentes públicas y oficiales, 
              sin recopilar datos personales de los usuarios ni realizar transacciones financieras de ningún tipo.
            </p>
          </Card>
        </div>
      </section>

      {/* Main Terms */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Términos de uso
          </h2>
          <div className="space-y-6">
            {terms.map((term, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/30 transition-colors">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <term.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {term.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Declaration - Sources and Non-Responsibility */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Declaración importante sobre fuentes y responsabilidad
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="p-4 md:p-6 bg-background/60 rounded-xl border border-border">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                  Fuentes oficiales de información
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  DollApp distribuye información de tasas oficiales del comercio internacional y nacional, obtenidas de 
                  fuentes públicas reconocidas y entidades oficiales. La aplicación actúa únicamente como un medio de 
                  visualización y no tiene control sobre la creación, modificación ni actualización de los valores mostrados.
                </p>
              </div>

              <div className="p-4 md:p-6 bg-background/60 rounded-xl border border-border">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                  No intervención en tasas
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  DollApp <strong>no se presta para manipulación ni alteración de tasas irregulares</strong> que promuevan 
                  la especulación cambiaria. Los valores mostrados son reflejo de fuentes externas y DollApp no interviene 
                  ni modificará dichos valores bajo ninguna circunstancia.
                </p>
              </div>

              <div className="p-4 md:p-6 bg-background/60 rounded-xl border border-border">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                  No responsabilidad sobre fluctuaciones
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  DollApp <strong>no se hace responsable del manejo cambiario de las tasas oficiales</strong>, ya que la 
                  información no es creada por nosotros, sino por terceros. No somos responsables de si una tasa sube o 
                  baja, ni intervendremos para alterar ninguna en ningún momento. Las fluctuaciones en los valores son 
                  inherentes al mercado cambiario y escapan al control de la aplicación.
                </p>
              </div>

              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  <strong>Importante:</strong> Al utilizar DollApp, entiendes y aceptas que la aplicación es solo un 
                  medio informativo que presenta datos de terceros. Cualquier decisión financiera basada en esta información 
                  es responsabilidad exclusiva del usuario.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Avisos importantes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {disclaimers.map((item, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Permissions and Restrictions */}
      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Permissions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-lg">✓</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Está permitido</h3>
              </div>
              <div className="space-y-3">
                {permissions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Restrictions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-lg">✕</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">No está permitido</h3>
              </div>
              <div className="space-y-3">
                {restrictions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-xs">✕</span>
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
          <Card className="p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <h2 className="text-lg md:text-xl font-bold text-foreground">Propiedad intelectual</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              DollApp, incluyendo su diseño, código, gráficos, iconos y demás elementos, es propiedad de 
              <strong> devsparra</strong>. Todos los derechos reservados © 2026. 
              La aplicación está protegida por las leyes de propiedad intelectual vigentes.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <h2 className="text-lg md:text-xl font-bold text-foreground">Modificaciones de términos</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
              Las modificaciones serán efectivas inmediatamente después de su publicación en esta página. 
              El uso continuado de DollApp después de cualquier cambio constituye la aceptación de los nuevos términos.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <h2 className="text-lg md:text-xl font-bold text-foreground">Legislación aplicable</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Estos términos y condiciones se rigen por las leyes de la República Bolivariana de Venezuela. 
              Cualquier disputa relacionada con el uso de DollApp será resuelta de acuerdo con la legislación venezolana vigente.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <h2 className="text-lg md:text-xl font-bold text-foreground">Contacto y soporte</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Si tienes preguntas sobre estos términos y condiciones, o necesitas aclaraciones sobre el uso de DollApp, 
              puedes contactarnos a través de:
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-foreground">
                <strong>Desarrollador:</strong> devsparra
              </p>
              <p className="text-foreground break-all">
                <strong>Correo:</strong> 
                <a 
                  href="mailto:wilmerparragomez@gmail.com" 
                  className="text-primary hover:underline ml-1"
                >
                  wilmerparragomez@gmail.com
                </a>
              </p>
              <p className="text-foreground break-all">
                <strong>GitHub:</strong> 
                <a 
                  href="https://github.com/WilmerParra21/DollApp" 
                  className="text-primary hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/WilmerParra21/DollApp
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
