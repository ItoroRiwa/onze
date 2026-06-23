'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/onze-cart'
import OnzeHeader from '../../components/OnzeHeader'
import OnzeFooter from '../../components/OnzeFooter'
import SearchOverlay from '../../components/SearchOverlay'

const THUMBS = ['FACE', 'DOS', 'DÉTAIL', 'PORTÉ']
const SIZES = ['S', 'M', 'L', 'XL'] as const
const OUT_OF_STOCK = ['XL']

export default function ProductPage() {
  const router = useRouter()
  const { items, setQty: updateQty } = useCart()
  const [searchOpen, setSearchOpen] = useState(false)
  const [thumb, setThumb] = useState(0)
  const [size, setSize] = useState<string>('M')
  const [qty, setQty] = useState(1)
  const [playerName, setPlayerName] = useState('')
  const [playerNum, setPlayerNum] = useState('')
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const price = 71
  const originalPrice = 89

  function handleAddToCart() {
    router.push('/panier')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <OnzeHeader activeNav="CLUBS" showNouveautes onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <main style={{ flex: 1 }}>
        {/* Breadcrumb */}
        <div style={{ padding: '14px 30px 8px', font: '11px ui-monospace, monospace', letterSpacing: '1.5px', color: 'rgba(244,243,238,.45)' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>ACCUEIL</Link>
          {' / '}
          <Link href="/clubs" style={{ color: 'inherit', textDecoration: 'none' }}>CLUBS</Link>
          {' / '}
          <Link href="/boutique" style={{ color: 'inherit', textDecoration: 'none' }}>LIGA</Link>
          {' / DOMICILE 25/26'}
        </div>

        <div style={{ display: 'flex', gap: 30, padding: '14px 30px 34px' }}>
          {/* Gallery */}
          <div style={{ display: 'flex', gap: 14, flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {THUMBS.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setThumb(i)}
                  style={{ width: 64, height: 64, border: `1px solid ${thumb === i ? '#d4f034' : '#2f2f34'}`, borderRadius: 10, background: 'radial-gradient(120% 80% at 35% 20%, #2a2a30, #131316)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '9px ui-monospace, monospace', color: 'rgba(244,243,238,.4)', cursor: 'pointer' }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div style={{ width: 380, height: 470, border: '1px solid #232327', borderRadius: 14, background: 'radial-gradient(120% 80% at 38% 22%, #2c2c33, #0f0f12)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '11px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.25)' }}>
              VISUEL MAILLOT · {THUMBS[thumb]}
            </div>
          </div>

          {/* Info */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: '#d4f034' }}>CLUBS · LIGA · 2025/26</div>

            <div style={{ font: "46px/.92 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee' }}>
              MAILLOT DOMICILE<br />SAISON 25/26
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ font: "700 30px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034' }}>{price}€</span>
              <span style={{ font: "16px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.4)', textDecoration: 'line-through' }}>{originalPrice}€</span>
              <span style={{ background: '#d4f034', color: '#0e0e10', borderRadius: 14, padding: '3px 10px', font: "700 11px var(--font-archivo), 'Archivo', sans-serif" }}>-20%</span>
            </div>

            <div style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)' }}>
              ★★★★☆ &nbsp;128 avis · Authentique sous licence
            </div>

            {/* Size selector */}
            <div style={{ borderTop: '1px solid #232327', paddingTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ font: "700 12px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', letterSpacing: '.5px' }}>TAILLE</div>
                <span style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034', borderBottom: '1px solid #d4f034', paddingBottom: 1, cursor: 'pointer' }}>Guide des tailles</span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {SIZES.map(s => {
                  const oos = OUT_OF_STOCK.includes(s)
                  const active = s === size
                  return (
                    <button
                      key={s}
                      onClick={() => !oos && setSize(s)}
                      style={{
                        border: `1px solid ${active ? '#d4f034' : oos ? '#232327' : '#2f2f34'}`,
                        background: active ? '#d4f034' : 'none',
                        color: active ? '#0e0e10' : oos ? 'rgba(244,243,238,.3)' : '#f4f3ee',
                        borderRadius: 8,
                        padding: '9px 16px',
                        font: `${active ? '700' : '400'} 13px var(--font-archivo), 'Archivo', sans-serif`,
                        cursor: oos ? 'not-allowed' : 'pointer',
                        textDecoration: oos ? 'line-through' : 'none',
                      }}
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Flocage */}
            <div style={{ border: '1px solid #2f2f34', borderRadius: 12, padding: 16 }}>
              <div style={{ font: "700 12px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034', letterSpacing: '.5px', marginBottom: 12 }}>
                ⚽ PERSONNALISATION — FLOCAGE
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <input
                  placeholder="NOM DU JOUEUR"
                  value={playerName}
                  onChange={e => setPlayerName(e.target.value)}
                  style={{ flex: 1, border: '1px solid #2f2f34', borderRadius: 8, padding: '11px 12px', font: '12px ui-monospace, monospace', color: 'rgba(244,243,238,.4)', background: 'none', outline: 'none' }}
                />
                <input
                  placeholder="N°"
                  value={playerNum}
                  onChange={e => setPlayerNum(e.target.value)}
                  style={{ width: 80, border: '1px solid #2f2f34', borderRadius: 8, padding: '11px 12px', font: '12px ui-monospace, monospace', color: 'rgba(244,243,238,.4)', background: 'none', outline: 'none' }}
                />
              </div>
              <div style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.45)', marginTop: 10 }}>
                Offert dès 80€ d&apos;achat · +12€ sinon
              </div>
            </div>

            {/* Qty + Add to cart */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #2f2f34', borderRadius: 10, color: '#f4f3ee', font: "13px var(--font-archivo), 'Archivo', sans-serif" }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '13px 15px', background: 'none', border: 'none', color: '#f4f3ee', cursor: 'pointer', font: 'inherit' }}>−</button>
                <span style={{ padding: '13px 15px', borderLeft: '1px solid #2f2f34', borderRight: '1px solid #2f2f34' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ padding: '13px 15px', background: 'none', border: 'none', color: '#f4f3ee', cursor: 'pointer', font: 'inherit' }}>+</button>
              </div>
              <button
                onClick={handleAddToCart}
                style={{ flex: 1, background: '#d4f034', color: '#0e0e10', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', font: "700 14px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', border: 'none', cursor: 'pointer' }}
              >
                AJOUTER AU PANIER — {price * qty}€
              </button>
            </div>

            {/* Reassurance */}
            <div style={{ display: 'flex', gap: 18, font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)' }}>
              <span>✓ Authentique</span>
              <span>✓ Livraison 48h</span>
              <span>✓ Retour 30 jours</span>
            </div>

            {/* Accordions */}
            <div style={{ borderTop: '1px solid #232327', paddingTop: 8, display: 'flex', flexDirection: 'column', font: "13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>
              {[
                { id: 'details', label: 'Détails & composition' },
                { id: 'livraison', label: 'Livraison & retours' },
              ].map(({ id, label }) => (
                <div key={id}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === id ? null : id)}
                    style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '12px 0', borderBottom: '1px solid #232327', background: 'none', border: 'none', borderBottomColor: '#232327', borderBottomWidth: 1, borderBottomStyle: 'solid', color: openAccordion === id ? '#f4f3ee' : 'rgba(244,243,238,.6)', font: "13px var(--font-archivo), 'Archivo', sans-serif", cursor: 'pointer', textAlign: 'left' }}
                  >
                    {label}
                    <span style={{ color: '#d4f034' }}>{openAccordion === id ? '−' : '+'}</span>
                  </button>
                  {openAccordion === id && (
                    <div style={{ padding: '12px 0', font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)', lineHeight: 1.6, borderBottom: '1px solid #232327' }}>
                      {id === 'details'
                        ? 'Maillot authentique sous licence officielle. Tissu technique Dri-Fit, broderie officielle, coupe joueur. 100% polyester recyclé.'
                        : 'Livraison standard 48h offerte dès 80€. Retours gratuits sous 30 jours en état neuf, étiquettes intactes.'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <OnzeFooter />
    </div>
  )
}
