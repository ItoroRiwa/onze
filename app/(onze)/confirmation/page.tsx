'use client'

import Link from 'next/link'
import { useCart } from '@/lib/onze-cart'
import OnzeFooter from '../components/OnzeFooter'

export default function ConfirmationPage() {
  const { items, total } = useCart()
  const orderNum = 'ONZE-24817'

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', alignItems: 'center', padding: '18px 30px', borderBottom: '1px solid #232327' }}>
        <Link href="/panier" style={{ font: "30px/1 var(--font-anton), 'Anton', sans-serif", letterSpacing: 2, color: '#f4f3ee', textDecoration: 'none' }}>
          ONZE
        </Link>
      </header>

      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '40px 30px' }}>
        <div style={{ width: 720, background: '#0e0e10', borderRadius: 3, boxShadow: '0 6px 34px rgba(0,0,0,.2)', border: '1px solid #232327', overflow: 'hidden' }}>

          <div style={{ padding: '48px 40px 8px', textAlign: 'center' }}>
            <div style={{ width: 66, height: 66, borderRadius: '50%', background: '#d4f034', color: '#0e0e10', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', fontSize: 30 }}>
              ✓
            </div>
            <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: '#d4f034', marginBottom: 12 }}>
              COMMANDE CONFIRMÉE
            </div>
            <div style={{ font: "44px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', marginBottom: 14 }}>
              MERCI POUR<br />TA COMMANDE
            </div>
            <p style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.6)', lineHeight: 1.6, margin: 0 }}>
              Commande <strong style={{ color: '#f4f3ee', fontWeight: 700 }}>#{orderNum}</strong> · Un e-mail de confirmation t&apos;a été envoyé.<br />
              Livraison estimée : <span style={{ color: '#f4f3ee' }}>jeudi 26 juin</span>.
            </p>
          </div>

          <div style={{ margin: '28px 40px 0', border: '1px solid #232327', borderRadius: 14, background: '#141417', padding: 20 }}>
            <div style={{ font: "700 12px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', letterSpacing: '.5px', marginBottom: 14 }}>
              RÉCAPITULATIF
            </div>
            {items.map((item, idx) => (
              <div key={item.id} style={{ display: 'flex', gap: 12, padding: '9px 0', borderBottom: idx < items.length - 1 ? '1px solid #232327' : 'none' }}>
                <div style={{ width: 44, height: 52, flexShrink: 0, borderRadius: 8, background: 'radial-gradient(120% 80% at 35% 20%, #2a2a30, #131316)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ font: "600 13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>{item.name}</div>
                  <div style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)' }}>
                    Taille {item.size}{item.flocage ? ` · Flocage ${item.flocage}` : ''}
                  </div>
                </div>
                <div style={{ font: "600 13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>
                  {item.price * item.qty}€
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid #232327', marginTop: 8, paddingTop: 14 }}>
              <span style={{ font: "700 14px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>Total payé</span>
              <span style={{ font: "700 22px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034' }}>{total}€</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, padding: '24px 40px 40px' }}>
            <Link href="#" style={{ flex: 1, background: '#d4f034', color: '#0e0e10', borderRadius: 10, padding: 14, textAlign: 'center', font: "700 13px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', textDecoration: 'none', display: 'block' }}>
              SUIVRE MA COMMANDE
            </Link>
            <Link href="/panier" style={{ flex: 1, border: '1px solid #2f2f34', color: '#f4f3ee', borderRadius: 10, padding: 14, textAlign: 'center', font: "600 13px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', textDecoration: 'none', display: 'block' }}>
              CONTINUER MES ACHATS
            </Link>
          </div>
        </div>
      </main>
      <OnzeFooter />
    </div>
  )
}
