'use client'

import { useState } from 'react'
import OnzeHeader from '../components/OnzeHeader'
import OnzeFooter from '../components/OnzeFooter'
import SearchOverlay from '../components/SearchOverlay'
import JerseyCard from '../components/JerseyCard'

const CHAMPIONSHIPS = [
  { name: 'LIGUE 1', count: '86 maillots', size: 30 },
  { name: 'LIGA', count: '74 maillots', size: 30 },
  { name: 'PREMIER LEAGUE', count: '92 maillots', size: 28 },
  { name: 'SERIE A', count: '63 maillots', size: 30 },
  { name: 'BUNDESLIGA', count: '48 maillots', size: 30 },
  { name: 'AUTRES', count: 'Liga NOS, Eredivisie…', size: 30 },
]

const POPULAIRES = [
  { tag: 'CLUBS · LIGA', title: 'Domicile 25/26', price: '89€', badge: 'POPULAIRE', sizes: 'S·M·L', number: '10' },
  { tag: 'CLUBS · PL', title: 'Domicile 25/26', price: '95€', badge: 'NOUVEAU', sizes: 'S·M·L·XL', number: '7' },
  { tag: 'CLUBS · SERIE A', title: 'Third 25/26', price: '99€', badge: 'ÉDITION', sizes: 'M·L', number: '9' },
  { tag: 'CLUBS · LIGA', title: 'Rétro 2011', price: '105€', badge: 'RÉTRO', sizes: 'S·M·L', player: 'LÉGENDE', number: '30' },
]

export default function ClubsPage() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <OnzeHeader activeNav="CLUBS" showNouveautes onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <main style={{ flex: 1 }}>
        {/* Hero */}
        <div style={{ position: 'relative', minHeight: 200, background: 'radial-gradient(130% 100% at 75% 10%, #2c2c33, #0e0e10)', padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: '#d4f034', marginBottom: 10 }}>UNIVERS</div>
          <div style={{ font: "78px/.85 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', letterSpacing: 1 }}>CLUBS</div>
          <p style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.6)', maxWidth: 420, marginTop: 12, lineHeight: 1.6, margin: '12px 0 0' }}>
            Tous les championnats, toutes les époques. Maillots actuels &amp; pièces rétro des plus grands clubs.
          </p>
        </div>

        {/* Championships grid */}
        <div style={{ padding: '30px 30px 8px' }}>
          <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.45)', marginBottom: 16 }}>PAR CHAMPIONNAT</div>
        </div>
        <div style={{ padding: '0 30px 8px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {CHAMPIONSHIPS.map(ch => (
            <ChampionshipCard key={ch.name} name={ch.name} count={ch.count} size={ch.size} />
          ))}
        </div>

        {/* Popular rail */}
        <div style={{ padding: '30px 30px 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ font: "34px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee' }}>POPULAIRES EN CLUBS</div>
          <span style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', borderBottom: '1px solid #d4f034', paddingBottom: 3, cursor: 'pointer' }}>Tout voir</span>
        </div>
        <div style={{ padding: '18px 30px 34px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {POPULAIRES.map(j => <JerseyCard key={j.title + j.tag} {...j} />)}
        </div>
      </main>

      <OnzeFooter />
    </div>
  )
}

function ChampionshipCard({ name, count, size }: { name: string; count: string; size: number }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: 'relative', border: `1px solid ${hov ? '#d4f034' : '#232327'}`, borderRadius: 14, overflow: 'hidden', height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 18, background: 'radial-gradient(120% 90% at 30% 20%, #2a2a30, #131316)', cursor: 'pointer', transition: 'border-color .2s' }}
    >
      <div style={{ font: `${size}px/.9 var(--font-anton), 'Anton', sans-serif`, color: '#f4f3ee' }}>{name}</div>
      <div style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.5)', marginTop: 6 }}>{count}</div>
    </div>
  )
}
