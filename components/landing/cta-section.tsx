'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-[#063B27] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and text */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                Empieza a usar <span className="text-accent">DollApp</span> hoy
              </h2>
              <p className="text-white/80 mt-1">
                Descárgala gratis y lleva el control de tus tasas siempre contigo.
              </p>
            </div>
          </div>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white rounded-xl px-6 h-14 flex items-center gap-3"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-80">Disponible en</div>
                <div className="text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </Button>
            
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white rounded-xl px-6 h-14 flex items-center gap-3"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-80">Consíguelo en el</div>
                <div className="text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
