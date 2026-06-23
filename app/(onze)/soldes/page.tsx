'use client'

import { useState, useEffect } from 'react'
import OnzeHeader from '../components/OnzeHeader'
import OnzeFooter from '../components/OnzeFooter'
import SearchOverlay from '../components/SearchOverlay'
import JerseyCard from '../components/JerseyCard'

const JERSEYS = [
  { tag: 'CLUBS · LIGA', title: 'Domicile 24/25', price: '62€', oldPrice: '89€', badge: '-30%', sizes: 'S·M·L', number: '10', pct: 30 },
  { tag: 'NATIONS', title: 'Extérieur 24/25', price: '48€', oldPrice: '95€', badge: '-50%', sizes: 'M·L·XL', number: '7', pct: 50 },
  { tag: 'FANS', title: 'Édition lifestyle', price: '55€', oldPrice: '79€', badge: '-30%', sizes: 'S·M·L', number: '11', pct: 30 },
  { tag: 'CLUBS · PL', title: 'Third 24/25', price: '72€', oldPrice: '110€', badge: '-35%', sizes: 'M·L', number: '9', pct: 35 },
  { tag: 'CLUBS · SERIE A', title: 'Domicile 23/24', price: '49€', oldPrice: '89€', badge: '-45%', sizes: 'S·M·L·XL', number: '22', pct: 45 },
  { tag: 'NATIONS', title: 'Domicile 24/25', price: '66€', oldPrice: '95€', badge: '-30%', sizes: 'S·M', number: '6', pct: 30 },
  { tag: 'FANS · RÉTRO', title: 'Vintage 1994', price: '59€', oldPrice: '99€', badge: '-40%', sizes: 'L·XL', player: 'LÉGENDE', number: '9', pct: 40 },
  { tag: 'CLUBS · LIGA', title: 'Gardien 24/25', price: '55€', oldPrice: '85€', badge: '-35%', sizes: 'M·L', number: '1', pct: 35 },
]

const END_DATE = new Date(Date.now() + (2 * 86400 + 14 * 3600 + 38 * 60) * 1000)

function useCountdown() {
  const [diff, setDiff] = useState(END_DATE.getTime() - Date.now())

  useEffect(() => {
    const id = setInterval(() => setDiff(END_DATE.getTime() - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const total = Math.max(0, diff)
  const days = Math.floor(total / 86400000)
  const hours = Math.floor((total % 86400000) / 3600000)
  const mins = Math.floor((total % 3600000) / 60000)
  return { days, hours, mins }
}

type Filter = 0 | 20 | 30 | 50

export default function SoldesPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [filter, setFilter] = useState<Filter>(0)
  const { days, hours, mins } = useCountdown()

  const visible = filter === 0 ? JERSEYS : JERSEYS.filter(j => j.pct >= filter)

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <OnzeHeader activeNav="SOLDES" onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <main style={{ flex: 1 }}>
        {/* Promo hero */}
        <div style={{ background: '#d4f034', color: '#0e0e10', padding: '34px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', marginBottom: 8 }}>OFFRE LIMITÉE</div>
            <div style={{ font: "72px/.82 var(--font-anton), 'Anton', sans-serif", letterSpacing: 1 }}>
              SOLDES<br />JUSQU'À -50%
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ font: "700 11px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '1px', marginBottom: 10 }}>FIN DANS</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[{ n: days, l: 'JOURS' }, { n: hours, l: 'HEURES' }, { n: mins, l: 'MIN' }].map(({ n, l }) => (
                <div key={l} style={{ background: '#0e0e10', color: '#d4f034', borderRadius: 8, padding: '10px 14px', textAlign: 'center' }}>
                  <div style={{ font: "26px/1 var(--font-anton), 'Anton', sans-serif" }}>{String(n).padStart(2, '0')}</div>
                  <div style={{ font: "9px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.6)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, padding: '20px 30px 6px', alignItems: 'center', flexWrap: 'wrap' }}>
          {([0, 20, 30, 50] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{ background: filter === f ? '#d4f034' : 'none', color: filter === f ? '#0e0e10' : '#f4f3ee', border: filter === f ? 'none' : '1px solid #2f2f34', borderRadius: 16, padding: '7px 14px', font: "600 12px var(--font-archivo), 'Archivo', sans-serif", cursor: 'pointer' }}
            >
              {f === 0 ? 'Tout' : `-${f}%`}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)' }}>
            {visible.length} maillots soldés
          </span>
        </div>

        {/* Grid */}
        <div style={{ padding: '14px 30px 34px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {visible.map(j => <JerseyCard key={j.title + j.tag} {...j} />)}
        </div>
      </main>

      <OnzeFooter />
    </div>
  )
}
