import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DollApp',
  description: 'DollApp es tu calculadora de tasas de cambio en tiempo real. Consulta, compara y convierte monedas al instante de forma rápida, segura y sin complicaciones.',
  keywords: ['tasas de cambio', 'calculadora', 'BCV', 'dólar', 'euro', 'bolivar', 'Venezuela', 'fintech'],
  authors: [{ name: 'DollApp' }],
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
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
          <Analytics />
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
