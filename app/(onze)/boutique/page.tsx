'use client'

import { useState } from 'react'
import Link from 'next/link'
import OnzeHeader from '../components/OnzeHeader'
import OnzeFooter from '../components/OnzeFooter'
import SearchOverlay from '../components/SearchOverlay'
import JerseyCard from '../components/JerseyCard'

const PRODUCTS = [
  { tag: 'CLUBS · LIGA', title: 'Domicile 25/26', sub: 'Édition authentique', price: '89€', badge: 'POPULAIRE', sizes: 'S·M·L', number: '10', slug: 'domicile-25-26' },
  { tag: 'CLUBS · LIGA', title: 'Extérieur 25/26', sub: 'Édition authentique', price: '89€', badge: 'NOUVEAU', sizes: 'S·M·L·XL', number: '7', slug: 'exterieur-25-26' },
  { tag: 'CLUBS · LIGA', title: 'Third 25/26', sub: 'Coupe joueur', price: '110€', badge: 'ÉDITION', sizes: 'M·L', number: '9', slug: 'third-25-26' },
  { tag: 'CLUBS · LIGA', title: 'Domicile 24/25', sub: 'Saison passée', price: '71€', oldPrice: '89€', badge: '-20%', sizes: 'S·M·L·XL', number: '11', slug: 'domicile-24-25' },
  { tag: 'CLUBS · LIGA', title: 'Gardien 25/26', sub: 'Édition authentique', price: '85€', badge: 'NOUVEAU', sizes: 'M·L', number: '1', slug: 'gardien-25-26' },
  { tag: 'CLUBS · LIGA', title: 'Rétro 2009', sub: 'Tirage limité', price: '99€', badge: 'RÉTRO', sizes: 'S·M·L', player: 'LÉGENDE', number: '99', slug: 'retro-2009' },
]

const CHAMPIONNATS = ['Ligue 1', 'Liga', 'Premier League', 'Serie A']
const SAISONS = ['2025/26', 'Rétro / vintage']
const TAILLES = ['S', 'M', 'L', 'XL']

export default function BoutiquePage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeChamp, setActiveChamp] = useState('Liga')
  const [activeTaille, setActiveTaille] = useState('M')
  const [activeUnivers, setActiveUnivers] = useState(['Clubs'])

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <OnzeHeader activeNav="CLUBS" showNouveautes onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <main style={{ flex: 1 }}>
        {/* Breadcrumb + title + sort */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 30px 6px' }}>
          <div>
            <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '1.5px', color: 'rgba(244,243,238,.45)', marginBottom: 8 }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>ACCUEIL</Link>
              {' / '}
              <Link href="/clubs" style={{ color: 'inherit', textDecoration: 'none' }}>CLUBS</Link>
              {' / LIGA'}
            </div>
            <div style={{ font: "40px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee' }}>MAILLOTS DE CLUBS</div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)' }}>248 résultats</span>
            <button style={{ border: '1px solid #2f2f34', borderRadius: 8, color: '#f4f3ee', font: "12px var(--font-archivo), 'Archivo', sans-serif", padding: '8px 12px', background: 'none', cursor: 'pointer' }}>
              Trier : Popularité ▾
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', padding: '18px 30px 34px', gap: 24 }}>
          {/* Sidebar */}
          <div style={{ width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>

            {/* Univers */}
            <div>
              <div style={filterTitle}>UNIVERS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Clubs', 'Nations', 'Fans'].map(u => {
                  const on = activeUnivers.includes(u)
                  return (
                    <div key={u} onClick={() => setActiveUnivers(on ? activeUnivers.filter(x => x !== u) : [...activeUnivers, u])} style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: on ? '#d4f034' : 'rgba(244,243,238,.65)', cursor: 'pointer' }}>
                      {on ? '▣' : '▢'} {u}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Championnat */}
            <div style={{ borderTop: '1px solid #232327', paddingTop: 18 }}>
              <div style={filterTitle}>CHAMPIONNAT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {CHAMPIONNATS.map(c => {
                  const on = c === activeChamp
                  return (
                    <div key={c} onClick={() => setActiveChamp(c)} style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: on ? '#d4f034' : 'rgba(244,243,238,.65)', cursor: 'pointer' }}>
                      {on ? '▣' : '▢'} {c}
                    </div>
                  )
                })}
                <div style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.4)', cursor: 'pointer' }}>+ voir plus</div>
              </div>
            </div>

            {/* Saison */}
            <div style={{ borderTop: '1px solid #232327', paddingTop: 18 }}>
              <div style={filterTitle}>SAISON</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SAISONS.map(s => (
                  <div key={s} style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.65)', cursor: 'pointer' }}>▢ {s}</div>
                ))}
              </div>
            </div>

            {/* Taille */}
            <div style={{ borderTop: '1px solid #232327', paddingTop: 18 }}>
              <div style={filterTitle}>TAILLE</div>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {TAILLES.map(t => {
                  const on = t === activeTaille
                  return (
                    <button key={t} onClick={() => setActiveTaille(t)} style={{ border: `1px solid ${on ? '#d4f034' : '#2f2f34'}`, background: on ? '#d4f034' : 'none', color: on ? '#0e0e10' : '#f4f3ee', borderRadius: 6, padding: '5px 10px', font: "12px var(--font-archivo), 'Archivo', sans-serif", cursor: 'pointer' }}>
                      {t}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Prix */}
            <div style={{ borderTop: '1px solid #232327', paddingTop: 18 }}>
              <div style={filterTitle}>PRIX</div>
              <div style={{ position: 'relative', height: 3, background: '#2f2f34', borderRadius: 2, marginBottom: 10 }}>
                <div style={{ position: 'absolute', left: '15%', right: '30%', height: 3, background: '#d4f034' }} />
                <div style={{ position: 'absolute', left: '15%', top: -5, width: 13, height: 13, borderRadius: '50%', background: '#d4f034', cursor: 'pointer' }} />
                <div style={{ position: 'absolute', left: '70%', top: -5, width: 13, height: 13, borderRadius: '50%', background: '#d4f034', cursor: 'pointer' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)', marginTop: 10 }}>
                <span>40€</span><span>140€</span>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {PRODUCTS.map(p => (
              <Link key={p.slug} href={`/boutique/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <JerseyCard {...p} />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <OnzeFooter />
    </div>
  )
}

const filterTitle: React.CSSProperties = {
  font: "700 12px var(--font-archivo), 'Archivo', sans-serif",
  color: '#f4f3ee',
  letterSpacing: '.5px',
  marginBottom: 10,
}
