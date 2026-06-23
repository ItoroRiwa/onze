'use client'

import { useState } from 'react'

export interface JerseyCardProps {
  tag: string
  title: string
  sub?: string
  price: string
  oldPrice?: string
  badge: string
  sizes: string
  player?: string
  number?: string
}

export default function JerseyCard({
  tag,
  title,
  sub = 'Édition authentique',
  price,
  oldPrice,
  badge,
  sizes,
  player = 'VOTRE NOM',
  number = '10',
}: JerseyCardProps) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? '#3a3a40' : '#232327'}`,
        borderRadius: 14,
        overflow: 'hidden',
        background: '#161619',
        cursor: 'pointer',
        transition: 'border-color .2s',
        fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
      }}
    >
      {/* Image area */}
      <div style={{ position: 'relative', height: 210, background: 'radial-gradient(120% 80% at 35% 20%, #2a2a30, #131316)', overflow: 'hidden' }}>
        {/* Front placeholder */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '10px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.22)' }}>
          VISUEL · FACE
        </div>

        {/* Back / flocage overlay */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(120% 90% at 50% 28%, #242429, #0d0d0f)', opacity: hov ? 1 : 0, transition: 'opacity .28s ease' }}>
          <div style={{ font: '10px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(212,240,52,.7)', marginBottom: 8 }}>DOS · FLOCAGE</div>
          <div style={{ font: "26px/1 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', letterSpacing: 1 }}>{player}</div>
          <div style={{ font: "52px/.85 var(--font-anton), 'Anton', sans-serif", color: '#d4f034' }}>{number}</div>
        </div>

        {/* Badge */}
        <div style={{ position: 'absolute', top: 12, left: 12, background: '#d4f034', color: '#0e0e10', font: "700 11px var(--font-archivo), 'Archivo', sans-serif", padding: '3px 9px', borderRadius: 20, zIndex: 3 }}>
          {badge}
        </div>

        {/* Heart */}
        <div style={{ position: 'absolute', top: 12, right: 12, width: 28, height: 28, borderRadius: '50%', border: '1px solid #34343a', background: 'rgba(14,14,16,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(244,243,238,.6)', fontSize: 12, zIndex: 3 }}>
          ♡
        </div>

        {/* Quick-add bar */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 10, display: 'flex', gap: 7, alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(transparent, rgba(8,8,10,.92))', opacity: hov ? 1 : 0, transition: 'opacity .28s ease', zIndex: 4 }}>
          <span style={{ font: '10px ui-monospace, monospace', letterSpacing: '1px', color: 'rgba(244,243,238,.55)' }}>AJOUT :</span>
          {sizes.split('·').map(s => <SizeChip key={s} size={s.trim()} />)}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: 14 }}>
        <div style={{ font: '10px ui-monospace, monospace', letterSpacing: '1.5px', color: '#d4f034', marginBottom: 7 }}>{tag}</div>
        <div style={{ font: "600 14px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', marginBottom: 3 }}>{title}</div>
        <div style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.45)', marginBottom: 12 }}>{sub}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ font: "700 18px var(--font-archivo), 'Archivo', sans-serif", color: '#d4f034' }}>{price}</span>
            {oldPrice && (
              <span style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.4)', textDecoration: 'line-through' }}>{oldPrice}</span>
            )}
          </div>
          <span style={{ font: "11px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.45)' }}>{sizes}</span>
        </div>
      </div>
    </div>
  )
}

function SizeChip({ size }: { size: string }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? '#d4f034' : '#3a3a40'}`, color: hov ? '#0e0e10' : '#f4f3ee', background: hov ? '#d4f034' : 'none', borderRadius: 6, padding: '3px 9px', font: "600 11px var(--font-archivo), 'Archivo', sans-serif", cursor: 'pointer', transition: 'all .15s' }}
    >
      {size}
    </span>
  )
}
