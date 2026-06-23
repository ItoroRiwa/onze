'use client'

import { useState } from 'react'
import Link from 'next/link'
import OnzeHeader from './(onze)/components/OnzeHeader'
import OnzeFooter from './(onze)/components/OnzeFooter'
import SearchOverlay from './(onze)/components/SearchOverlay'
import JerseyCard from './(onze)/components/JerseyCard'

const UNIVERS = [
  { n: '01', label: 'NATIONS', desc: 'Du monde entier', href: '#' },
  { n: '02', label: 'CLUBS', desc: 'Tous championnats', href: '/clubs' },
  { n: '03', label: 'FANS', desc: 'Éditions & lifestyle', href: '#' },
]

const TOP_VENTES = [
  { tag: 'CLUBS · LIGA', title: 'Domicile 25/26', sub: 'Édition authentique', price: '89€', badge: 'N°1', sizes: 'S·M·L', player: 'VOTRE NOM', number: '10' },
  { tag: 'NATIONS', title: 'Extérieur 25/26', sub: 'Coupe joueur', price: '95€', badge: 'N°2', sizes: 'S·M·L·XL', player: 'VOTRE NOM', number: '7' },
  { tag: 'FANS · RÉTRO', title: 'Édition 1998', sub: 'Tirage limité', price: '79€', badge: 'N°3', sizes: 'M·L', player: 'LÉGENDE', number: '98' },
  { tag: 'CLUBS · PL', title: 'Third 25/26', sub: 'Édition authentique', price: '110€', badge: 'N°4', sizes: 'S·M·L', player: 'VOTRE NOM', number: '9' },
]

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e10', display: 'flex', flexDirection: 'column' }}>
      {/* Announcement bar */}
      <div style={{ background: '#d4f034', color: '#0e0e10', textAlign: 'center', font: "600 11px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '1.5px', padding: 8 }}>
        FLOCAGE OFFERT DÈS 80€ · LIVRAISON 48H · RETOURS 30 JOURS
      </div>

      <OnzeHeader isHome onSearchOpen={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <main style={{ flex: 1 }}>
        {/* Hero */}
        <div style={{ padding: '32px 30px 8px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: '#d4f034', marginBottom: 10 }}>SAISON 2025/26 · EN STOCK</div>
            <div style={{ font: "74px/.86 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', letterSpacing: 1 }}>
              PORTE TES<br />COULEURS.
            </div>
          </div>
          <p style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)', maxWidth: 240, textAlign: 'right', lineHeight: 1.5, margin: 0 }}>
            Nations, clubs &amp; éditions fans.<br />Authentiques, floqués à la demande.
          </p>
        </div>

        {/* Universe cards */}
        <div style={{ padding: '20px 30px 8px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {UNIVERS.map(u => <UniversCard key={u.label} {...u} />)}
        </div>

        {/* Top ventes */}
        <div style={{ padding: '34px 30px 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ font: '11px ui-monospace, monospace', letterSpacing: '2px', color: '#d4f034', marginBottom: 8 }}>★ TOP DES VENTES</div>
            <div style={{ font: "46px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', letterSpacing: 1 }}>MEILLEURES VENTES</div>
          </div>
          <Link href="/boutique" style={{ font: "13px var(--font-archivo), 'Archivo', sans-serif", color: '#f4f3ee', borderBottom: '1px solid #d4f034', paddingBottom: 3, textDecoration: 'none' }}>
            Voir tout
          </Link>
        </div>
        <div style={{ padding: '20px 30px 34px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {TOP_VENTES.map(j => <JerseyCard key={j.badge} {...j} />)}
        </div>
      </main>

      <OnzeFooter />
    </div>
  )
}

function UniversCard({ n, label, desc, href }: typeof UNIVERS[0]) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: 'relative', border: `1px solid ${hov ? '#d4f034' : '#232327'}`, borderRadius: 14, overflow: 'hidden', minHeight: 360, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'radial-gradient(120% 80% at 32% 15%, #2c2c33, #131316)', transition: 'border-color .2s', textDecoration: 'none' }}
    >
      <div style={{ position: 'absolute', top: 16, left: 18, font: '11px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.45)' }}>
        {n} / {label}
      </div>
      <div style={{ position: 'absolute', top: '44%', left: 0, right: 0, textAlign: 'center', font: '10px ui-monospace, monospace', letterSpacing: '2px', color: 'rgba(244,243,238,.22)' }}>
        VISUEL MAILLOT
      </div>
      <div style={{ padding: 20, background: 'linear-gradient(transparent, rgba(8,8,10,.88))' }}>
        <div style={{ font: "52px/.9 var(--font-anton), 'Anton', sans-serif", color: '#f4f3ee', letterSpacing: 1 }}>{label}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
          <span style={{ font: "12px var(--font-archivo), 'Archivo', sans-serif", color: 'rgba(244,243,238,.55)' }}>{desc}</span>
          <span style={{ background: '#d4f034', color: '#0e0e10', font: "600 12px var(--font-archivo), 'Archivo', sans-serif", padding: '7px 14px', borderRadius: 30 }}>
            Explorer →
          </span>
        </div>
      </div>
    </Link>
  )
}
