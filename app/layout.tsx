import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DollApp - Tus tasas al día, siempre contigo',
  description: 'DollApp es tu calculadora de tasas de cambio en tiempo real. Consulta, compara y convierte monedas al instante de forma rápida, segura y sin complicaciones.',
  keywords: ['tasas de cambio', 'calculadora', 'BCV', 'USDT', 'dólar', 'bolivar', 'Venezuela', 'fintech'],
  authors: [{ name: 'DollApp' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F8F7' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F0D' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
