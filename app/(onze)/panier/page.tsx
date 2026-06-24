'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/onze-cart'
import OnzeHeader from '../components/OnzeHeader'
import OnzeFooter from '../components/OnzeFooter'

export default function PanierPage() {
  const router = useRouter()
  const { items, setQty, remove, total } = useCart()

  const hasFlocage = items.some(i => i.flocage)
  const count = items.reduce((s, i) => s + i.qty, 0)

  if (items.length === 0) {
    return (
      <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
        <OnzeHeader />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 30px' }}>
          <div style={{ width: 560, background: '#0e0e10', border: '1px solid #232327', borderRadius: 3, boxShadow: '0 6px 34px rgba(0,0,0,.2)', padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, border: '1px solid #2f2f34', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', color: 'rgba(244,243,238,.5)', fontSize: 24 }}>
              ⛒
            </div>
            <div style={{ font: "38px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', marginBottom: 12 }}>
              PANIER VIDE
            </div>
            <p style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)', marginBottom: 24, lineHeight: 1.6 }}>
              Tu n&apos;as pas encore choisi tes couleurs.<br />Explore nos univers et trouve ton maillot.
            </p>
            <a href="#" style={{ display: 'inline-block', background: '#d4f034', color: '#0e0e10', borderRadius: 10, padding: '13px 26px', font: "700 13px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', textDecoration: 'none' }}>
              DÉCOUVRIR LES MAILLOTS
            </a>
          </div>
        </div>
        <OnzeFooter />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <OnzeHeader />
      <main style={{ flex: 1 }}>
        <div style={{ padding: '24px 30px 8px' }}>
          <div style={{ font: "42px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee' }}>
            TON PANIER{' '}
            <span style={{ color: 'rgba(244,243,238,.4)' }}>({count})</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 30, padding: '14px 30px 34px' }}>

          {/* Items list */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {items.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: 16, padding: '18px 0', borderBottom: '1px solid #232327' }}>
                <div style={{ width: 88, height: 104, flexShrink: 0, borderRadius: 10, background: 'radial-gradient(120% 80% at 35% 20%, #2a2a30, #131316)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '9px ui-monospace, monospace', color: 'rgba(244,243,238,.3)' }}>
                  VISUEL
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ font: '10px ui-monospace, monospace', letterSpacing: '1.5px', color: '#d4f034', marginBottom: 5 }}>
                      {item.category}
                    </div>
                    <button onClick={() => remove(item.id)} style={{ background: 'none', border: 'none', color: 'rgba(244,243,238,.4)', cursor: 'pointer', fontSize: 13, padding: 0, lineHeight: 1 }}>
                      ✕
                    </button>
                  </div>
                  <div style={{ font: "600 15px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', marginBottom: 4 }}>
                    {item.name}
                  </div>
                  <div style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)', marginBottom: 3 }}>
                    Taille {item.size}
                    {item.flocage
                      ? <> · Flocage : <span style={{ color: '#d4f034' }}>{item.flocage}</span></>
                      : ' · Sans flocage'}
                    {item.note && ` · ${item.note}`}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #2f2f34', borderRadius: 8, color: '#f4f3ee' }}>
                      <button onClick={() => setQty(item.id, item.qty - 1)} style={{ padding: '6px 11px', background: 'none', border: 'none', color: '#f4f3ee', cursor: 'pointer', font: "13px var(--font-archivo), 'Archivo', sans-serif" }}>−</button>
                      <span style={{ padding: '6px 11px', borderLeft: '1px solid #2f2f34', borderRight: '1px solid #2f2f34', font: "13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>
                        {item.qty}
                      </span>
                      <button onClick={() => setQty(item.id, item.qty + 1)} style={{ padding: '6px 11px', background: 'none', border: 'none', color: '#f4f3ee', cursor: 'pointer', font: "13px var(--font-archivo), 'Archivo', sans-serif" }}>+</button>
                    </div>
                    <div style={{ font: "700 16px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>
                      {item.price * item.qty}€
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo code */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 22 }}>
              <input
                placeholder="Code promo"
                style={{ flex: 1, border: '1px solid #2f2f34', borderRadius: 8, padding: '12px 14px', font: '12px ui-monospace, monospace', color: 'rgba(244,243,238,.4)', background: 'none', outline: 'none' }}
              />
              <button style={{ border: '1px solid #2f2f34', borderRadius: 8, padding: '12px 20px', font: "600 12px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', background: 'none', cursor: 'pointer' }}>
                Appliquer
              </button>
            </div>
          </div>

          {/* Summary */}
          <div style={{ width: 330, flexShrink: 0 }}>
            <div style={{ border: '1px solid #232327', borderRadius: 14, padding: 20, background: '#141417' }}>
              <div style={{ font: "700 13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', letterSpacing: '.5px', marginBottom: 14 }}>
                RÉCAPITULATIF
              </div>
              <div style={rowStyle}><span>Sous-total</span><span>{total}€</span></div>
              {hasFlocage && (
                <div style={rowStyle}><span>Flocage</span><span style={{ color: '#d4f034' }}>Offert</span></div>
              )}
              <div style={rowStyle}><span>Livraison</span><span style={{ color: '#d4f034' }}>Gratuite</span></div>
              <div style={{ ...rowStyle, borderBottom: '1px solid #232327', marginBottom: 12 }}>
                <span>Remise</span><span>—</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                <span style={{ font: "700 15px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>Total</span>
                <span style={{ font: "700 24px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034' }}>{total}€</span>
              </div>
              <button
                onClick={() => router.push('/paiement')}
                style={{ display: 'block', width: '100%', background: '#d4f034', color: '#0e0e10', borderRadius: 10, padding: 14, textAlign: 'center', font: "700 14px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', border: 'none', cursor: 'pointer' }}
              >
                PASSER AU PAIEMENT
              </button>
              <div style={{ textAlign: 'center', font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.45)', marginTop: 12 }}>
                🔒 Paiement sécurisé · CB · PayPal · Apple Pay
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 14 }}>
              <Link href="#" style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)', borderBottom: '1px solid #2f2f34', paddingBottom: 2, textDecoration: 'none', display: 'inline-block' }}>
                ← Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      </main>
      <OnzeFooter />
    </div>
  )
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  font: "13px var(--font-archivo), 'Archivo', sans-serif",
  color: 'rgba(244,243,238,.7)',
  padding: '7px 0',
}
