'use client'

import { useState } from 'react'
import OnzeHeader from '../components/OnzeHeader'
import OnzeFooter from '../components/OnzeFooter'
import SearchOverlay from '../components/SearchOverlay'
import JerseyCard from '../components/JerseyCard'

const FAVORIS = [
  { tag: 'CLUBS · LIGA', title: 'Domicile 25/26', price: '89€', badge: '♥', sizes: 'S·M·L', number: '10' },
  { tag: 'NATIONS', title: 'Extérieur 25/26', price: '95€', badge: '♥', sizes: 'S·M·L·XL', number: '7' },
  { tag: 'FANS · RÉTRO', title: 'Édition 1998', price: '79€', badge: '♥', sizes: 'M·L', player: 'LÉGENDE', number: '98' },
  { tag: 'CLUBS · PL', title: 'Third 25/26', price: '110€', badge: '♥', sizes: 'S·M·L', number: '9' },
  { tag: 'NATIONS · RÉTRO', title: 'Mondial 1998', price: '89€', oldPrice: '99€', badge: '♥', sizes: 'L·XL', player: 'LÉGENDE', number: '10' },
]

export default function FavorisPage() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      <OnzeHeader showNouveautes onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <main style={{ flex: 1 }}>
        <div style={{ padding: '24px 30px 8px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ font: "42px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee' }}>
            MES FAVORIS{' '}
            <span style={{ color: 'rgba(244,243,238,.4)' }}>({FAVORIS.length})</span>
          </div>
          <button style={{ background: '#d4f034', color: '#0e0e10', borderRadius: 10, padding: '11px 18px', font: "700 12px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px', border: 'none', cursor: 'pointer' }}>
            TOUT AJOUTER AU PANIER
          </button>
        </div>

        <div style={{ padding: '18px 30px 34px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {FAVORIS.map(j => <JerseyCard key={j.title + j.tag} {...j} />)}
        </div>
      </main>

      <OnzeFooter />
    </div>
  )
}
