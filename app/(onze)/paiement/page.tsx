'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/lib/onze-cart'
import OnzeFooter from '../components/OnzeFooter'

type Shipping = 'standard' | 'express' | 'relais'
type PayMethod = 'card' | 'paypal' | 'apple'

const SHIPPING = [
  { id: 'standard' as Shipping, label: 'Standard · 48h', price: 0 },
  { id: 'express' as Shipping, label: 'Express · 24h', price: 9 },
  { id: 'relais' as Shipping, label: 'Point relais', price: 3 },
]

const PAY_METHODS: [PayMethod, string][] = [
  ['card', 'Carte bancaire'],
  ['paypal', 'PayPal'],
  ['apple', 'Apple Pay'],
]

export default function PaiementPage() {
  const router = useRouter()
  const { items, total } = useCart()
  const [shipping, setShipping] = useState<Shipping>('standard')
  const [payMethod, setPayMethod] = useState<PayMethod>('card')

  const shippingCost = SHIPPING.find(s => s.id === shipping)?.price ?? 0
  const grandTotal = total + shippingCost

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 30px', borderBottom: '1px solid #232327' }}>
        <Link href="/panier" style={{ font: "30px/1 var(--font-anton), 'Anton', sans-serif", letterSpacing: 2, color: '#f4f3ee', textDecoration: 'none' }}>
          ONZE
        </Link>
        <span style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)' }}>
          🔒 PAIEMENT SÉCURISÉ
        </span>
      </header>

      <main style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: 34, padding: '28px 30px 36px' }}>

          {/* Forms */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 26 }}>

            {/* 1. Contact */}
            <section>
              <StepTitle n={1} label="CONTACT" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input placeholder="Adresse e-mail" style={inp} />
                <input placeholder="Téléphone" style={inp} />
              </div>
            </section>

            {/* 2. Livraison */}
            <section style={{ borderTop: '1px solid #232327', paddingTop: 24 }}>
              <StepTitle n={2} label="LIVRAISON" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                <input placeholder="Prénom" style={inp} />
                <input placeholder="Nom" style={inp} />
                <input placeholder="Adresse" style={{ ...inp, gridColumn: 'span 2' }} />
                <input placeholder="Code postal" style={inp} />
                <input placeholder="Ville" style={inp} />
                <input placeholder="Pays — France" style={{ ...inp, gridColumn: 'span 2' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SHIPPING.map(opt => {
                  const active = shipping === opt.id
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setShipping(opt.id)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `1px solid ${active ? '#d4f034' : '#2f2f34'}`, borderRadius: 8, padding: '13px 14px', background: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', border: active ? '4px solid #d4f034' : '1px solid #4a4a50', flexShrink: 0 }} />
                        <span style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: active ? '#f4f3ee' : 'rgba(244,243,238,.7)' }}>
                          {opt.label}
                        </span>
                      </div>
                      <span style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: active ? '#d4f034' : 'rgba(244,243,238,.7)' }}>
                        {opt.price === 0 ? 'Gratuite' : `${opt.price}€`}
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>

            {/* 3. Paiement */}
            <section style={{ borderTop: '1px solid #232327', paddingTop: 24 }}>
              <StepTitle n={3} label="PAIEMENT" />
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {PAY_METHODS.map(([id, label]) => {
                  const active = payMethod === id
                  return (
                    <button
                      key={id}
                      onClick={() => setPayMethod(id)}
                      style={{ border: `1px solid ${active ? '#d4f034' : '#2f2f34'}`, background: active ? 'rgba(212,240,52,.08)' : 'none', borderRadius: 8, padding: '9px 16px', font: "600 12px var(--font-archivo), 'Archivo', sans-serif", color: active ? '#f4f3ee' : 'rgba(244,243,238,.6)', cursor: 'pointer' }}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
              {payMethod === 'card' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <input placeholder="Numéro de carte" style={{ ...inp, gridColumn: 'span 2' }} />
                  <input placeholder="MM / AA" style={inp} />
                  <input placeholder="CVC" style={inp} />
                </div>
              )}
              {payMethod === 'paypal' && (
                <div style={{ border: '1px solid #2f2f34', borderRadius: 8, padding: 20, textAlign: 'center', font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.6)' }}>
                  Tu seras redirigé vers PayPal pour finaliser le paiement.
                </div>
              )}
              {payMethod === 'apple' && (
                <div style={{ border: '1px solid #2f2f34', borderRadius: 8, padding: 20, textAlign: 'center', font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.6)' }}>
                  Utilise Face ID ou Touch ID pour payer avec Apple Pay.
                </div>
              )}
            </section>

            <button
              onClick={() => router.push('/confirmation')}
              style={{ background: '#d4f034', color: '#0e0e10', borderRadius: 10, padding: 16, textAlign: 'center', font: "700 15px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', border: 'none', cursor: 'pointer', width: '100%' }}
            >
              PAYER {grandTotal}€
            </button>
          </div>

          {/* Summary sidebar */}
          <div style={{ width: 330, flexShrink: 0 }}>
            <div style={{ border: '1px solid #232327', borderRadius: 14, padding: 20, background: '#141417' }}>
              <div style={{ font: "700 13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', letterSpacing: '.5px', marginBottom: 16 }}>
                TA COMMANDE
              </div>
              {items.map((item, idx) => (
                <div key={item.id} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: idx < items.length - 1 ? '1px solid #232327' : 'none' }}>
                  <div style={{ width: 48, height: 56, flexShrink: 0, borderRadius: 8, background: 'radial-gradient(120% 80% at 35% 20%, #2a2a30, #131316)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ font: "600 13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>{item.name}</div>
                    <div style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)' }}>
                      {item.size}{item.flocage ? ` · Flocage ${item.flocage}` : ''}
                    </div>
                  </div>
                  <div style={{ font: "600 13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>
                    {item.price * item.qty}€
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #232327', marginTop: 8, paddingTop: 12 }}>
                <div style={sRow}><span>Sous-total</span><span>{total}€</span></div>
                <div style={sRow}>
                  <span>Livraison</span>
                  <span style={{ color: shippingCost === 0 ? '#d4f034' : '#f4f3ee' }}>
                    {shippingCost === 0 ? 'Gratuite' : `${shippingCost}€`}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10 }}>
                  <span style={{ font: "700 15px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>Total</span>
                  <span style={{ font: "700 22px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034' }}>{grandTotal}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <OnzeFooter />
    </div>
  )
}

function StepTitle({ n, label }: { n: number; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#d4f034', color: '#0e0e10', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "700 12px var(--font-archivo), 'Archivo', sans-serif", flexShrink: 0 }}>
        {n}
      </div>
      <div style={{ font: "700 16px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', letterSpacing: '.3px' }}>
        {label}
      </div>
    </div>
  )
}

const inp: React.CSSProperties = {
  border: '1px solid #2f2f34',
  borderRadius: 8,
  padding: '13px 14px',
  font: '13px ui-monospace, monospace',
  color: 'rgba(244,243,238,.4)',
  background: 'none',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

const sRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  font: "13px var(--font-archivo), 'Archivo', sans-serif",
  color: 'rgba(244,243,238,.7)',
  padding: '5px 0',
}
