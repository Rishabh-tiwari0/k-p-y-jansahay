import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'K.P.Y. Jansahyogi Inter College | Affordable Excellence Since 1999',
  description:
    'K.P.Y. Jansahyogi Inter College, Hanspuram, Naubasta, Kanpur — a UP Board-affiliated school (Playgroup–Class XII) blending future-ready learning like Robotics and Smart Classes with strong moral values. Anushasan • Sanskar • Safalta.',
  keywords: [
    'K.P.Y. Jansahyogi Inter College',
    'Kanpur school',
    'UP Board school Kanpur',
    'affordable school Naubasta',
    'Hanspuram school admission',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#102a56',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
