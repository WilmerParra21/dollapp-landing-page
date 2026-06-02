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

export const metadataBase = new URL('https://dollapp.com')

export const metadata: Metadata = {
  title: 'DollApp | Calculadora de tasas de cambio en tiempo real',
  description: 'DollApp calcula y compara las tasas de cambio oficiales y paralelas en tiempo real para Venezuela. Convierte dólares, euros y bolívares con rapidez, seguridad y sin sorpresas.',
  keywords: ['tasas de cambio', 'calculadora', 'BCV', 'dólar', 'euro', 'bolivar', 'Venezuela', 'fintech', 'cambio de divisas', 'convertidor de monedas'],
  authors: [{ name: 'DollApp' }],
  applicationName: 'DollApp',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'DollApp | Calculadora de tasas de cambio',
    description: 'DollApp calcula y compara las tasas de cambio oficiales y paralelas en tiempo real para Venezuela. Convierte dólares, euros y bolívares al instante.',
    type: 'website',
    url: 'https://dollapp.com',
    siteName: 'DollApp',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo de DollApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DollApp',
    description: 'DollApp calcula y compara las tasas de cambio oficiales y paralelas en tiempo real para Venezuela.',
  },
  alternates: {
    canonical: 'https://dollapp.com',
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
