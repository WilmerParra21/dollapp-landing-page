'use client'

import { Footer } from '@/components/landing/footer'
import { Navbar } from '@/components/landing/navbar'
import { Card } from '@/components/ui/card'
import { Database, Eye, Lock, RefreshCw, Shield } from 'lucide-react'

const sections = [
  {
    icon: Lock,
    title: 'Sin datos personales',
    content: 'DollApp no solicita cuentas ni recopila nombres, correos electrónicos, teléfonos, contactos, ubicación, fotos, archivos o información financiera personal.'
  },
  {
    icon: Database,
    title: 'Procesamiento local y caché',
    content: 'Las conversiones y preferencias se procesan localmente. La aplicación puede guardar tasas y configuraciones en caché en tu dispositivo para funcionar sin conexión.'
  },
  {
    icon: Eye,
    title: 'Sin seguimiento',
    content: 'No utilizamos cookies, píxeles de seguimiento, analíticas de terceros ni ninguna otra tecnología de rastreo. Tu actividad en la app es completamente privada.'
  },
  {
    icon: Shield,
    title: 'Conexiones seguras',
    content: 'Las conexiones para obtener las tasas de cambio se realizan únicamente hacia fuentes oficiales y públicas, sin intermediarios que puedan acceder a tu información.'
  },
  {
    icon: Database,
    title: 'Diagnóstico y mejora',
    content: 'Si la aplicación presenta un problema, podemos enviar información relacionada con ese fallo únicamente para diagnosticarlo, corregirlo y mejorar su estabilidad. No se envía el contenido de tus conversiones ni tus datos personales.'
  },
  {
    icon: RefreshCw,
    title: 'Datos en tiempo real',
    content: 'Las tasas de cambio mostradas provienen de fuentes públicas y oficiales. DollApp actúa únicamente como un medio de visualización e información.'
  }
]

const highlights = [
  'No solicitamos registro ni cuenta de usuario',
  'No recopilamos nombres, correos electrónicos ni teléfonos',
  'No accedemos a tus contactos, ubicación ni archivos',
  'La información de fallos se usa para mejorar la estabilidad',
  'No utilizamos servicios de terceros para analíticas',
  'No mostramos publicidad personalizada'
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tu privacidad es fundamental. DollApp está diseñada para respetar y proteger tu información personal.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Última actualización: Agosto 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="py-8 bg-primary/5 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="p-6 md:p-8 mb-8 md:mb-12 border-border">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Nuestro compromiso con tu privacidad
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              DollApp es una aplicación meramente informativa desarrollada por <strong>devsparra</strong>. 
              Su único propósito es proporcionar tasas de cambio de monedas de manera rápida, precisa y confiable para usuarios en Venezuela y cualquier persona interesada en el mercado cambiario.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Debido a la naturaleza de la aplicación, <strong>no recopilamos datos personales ni el contenido de tus conversiones</strong>. 
              Para detectar y corregir errores, sí podemos enviar información relacionada con los fallos. Esta política describe cómo funciona DollApp en relación con tu privacidad y los datos que maneja.
            </p>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-4 md:space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="p-4 md:p-6 border-border hover:border-primary/30 transition-colors">
                <div className="flex gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Información que no recopilamos
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Para ser completamente transparentes, estos son los datos personales y contenidos que DollApp no recopila:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  'Datos personales (nombre, email, teléfono)',
                  'Ubicación geográfica',
                  'Contactos o agendas',
                  'Fotos o archivos multimedia',
                  'Historial de navegación',
                  'Preferencias del dispositivo',
                  'Contenido de tus conversiones',
                  'Información financiera personal',
                  'Identificadores de publicidad',
                  'Datos biométricos'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-xs md:text-sm">✕</span>
                    </div>
                    <span className="text-xs md:text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Permisos de la aplicación
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                DollApp solicita únicamente los permisos estrictamente necesarios para su funcionamiento básico:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-500 text-xs md:text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium text-foreground">Acceso a Internet</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Para obtener las tasas de cambio actualizadas desde fuentes oficiales.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Menores de edad
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  DollApp no está dirigida específicamente a menores de edad. No solicitamos cuentas ni recopilamos datos personales o contenido de conversiones; únicamente puede enviarse información relacionada con fallos para mejorar la estabilidad de la aplicación.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Cambios en esta política
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Esta política de privacidad puede actualizarse ocasionalmente para reflejar cambios en la aplicación o 
                mejoras en nuestras prácticas de privacidad. Cualquier cambio significativo será notificado dentro de la aplicación. 
                Te recomendamos revisar esta página periódicamente.
              </p>
            </Card>

            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Contacto
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                Si tienes preguntas, sugerencias o inquietudes sobre esta política de privacidad o sobre el funcionamiento de DollApp, 
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
