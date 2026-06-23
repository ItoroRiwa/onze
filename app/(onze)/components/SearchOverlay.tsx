'use client'

import { useState } from 'react'
import JerseyCard from './JerseyCard'

const TRENDING = ['Maillot rétro', 'Édition third', 'Gardien', 'Coupe du monde']

const RESULTS = [
  { tag: 'FANS · RÉTRO', title: 'Édition 1998', price: '79€', badge: 'RÉTRO', sizes: 'M·L', player: 'LÉGENDE', number: '98' },
  { tag: 'CLUBS · RÉTRO', title: 'Vintage 2009', price: '99€', badge: 'RÉTRO', sizes: 'S·M·L', player: 'LÉGENDE', number: '10' },
  { tag: 'NATIONS · RÉTRO', title: 'Mondial 1998', price: '89€', badge: 'RÉTRO', sizes: 'L·XL', player: 'LÉGENDE', number: '10' },
]

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('maillot rétro')

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(7,7,8,.98)', zIndex: 100, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      {/* Input */}
      <div style={{ padding: '26px 30px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #232327', flexShrink: 0 }}>
        <span style={{ color: '#d4f034', fontSize: 18 }}>⌕</span>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ flex: 1, font: "22px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', background: 'none', border: 'none', outline: 'none' }}
        />
        <button
          onClick={onClose}
          style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #2f2f34', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f4f3ee', background: 'none', cursor: 'pointer', fontSize: 13, flexShrink: 0 }}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', padding: '26px 30px 34px', gap: 40 }}>
        {/* Left panel */}
        <div style={{ width: 280, flexShrink: 0 }}>
          <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.45)', marginBottom: 14 }}>RECHERCHES TENDANCES</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {TRENDING.map(t => (
              <span
                key={t}
                onClick={() => setQuery(t)}
                style={{ border: '1px solid #2f2f34', color: '#f4f3ee', borderRadius: 16, padding: '7px 13px', font: "12px var(--font-archivo), 'Archivo', sans-serif", cursor: 'pointer' }}
              >
                {t}
              </span>
            ))}
          </div>
          <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.45)', marginBottom: 14 }}>UNIVERS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, font: "14px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee' }}>
            {['Nations →', 'Clubs →', 'Fans →'].map(l => (
              <span key={l} style={{ cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ flex: 1 }}>
          <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.45)', marginBottom: 14 }}>
            SUGGESTIONS · 24 RÉSULTATS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {RESULTS.map(r => (
              <JerseyCard key={r.title} {...r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
