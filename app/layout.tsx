import type { Metadata } from 'next'
import { Anton, Archivo } from 'next/font/google'
import { CartProvider } from '@/lib/onze-cart'
import './globals.css'

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', weight: ['400', '500', '600', '700', '800'], display: 'swap' })

export const metadata: Metadata = {
  title: 'ONZE — Maillots de foot authentiques',
  description: 'Revente de maillots de football — nations, clubs & fans. Floqués à la demande, livrés en 48h.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${anton.variable} ${archivo.variable}`}>
      <body style={{ margin: 0, background: '#0e0e10', minHeight: '100vh' }}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
