'use client'

import Link from 'next/link'
import { useCart } from '@/lib/onze-cart'

interface OnzeHeaderProps {
  activeNav?: 'NATIONS' | 'CLUBS' | 'FANS' | 'SOLDES'
  onSearchOpen?: () => void
  showNouveautes?: boolean
}

export default function OnzeHeader({ activeNav, onSearchOpen, showNouveautes }: OnzeHeaderProps) {
  const { count } = useCart()

  const navItems = [
    { label: 'NATIONS', href: '#' },
    { label: 'CLUBS', href: '/clubs' },
    { label: 'FANS', href: '#' },
    showNouveautes
      ? { label: 'NOUVEAUTÉS', href: '#', muted: true }
      : { label: 'SOLDES', href: '/soldes' },
  ]

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 30px', borderBottom: '1px solid #232327' }}>
      <Link href="/" style={{ font: "30px/1 var(--font-anton), 'Anton', sans-serif", letterSpacing: 2, color: '#f4f3ee', textDecoration: 'none' }}>
        ONZE
      </Link>

      <nav style={{ display: 'flex', gap: 24, font: "600 12px var(--font-archivo), 'Archivo', sans-serif", letterSpacing: '.5px' }}>
        {navItems.map(item => {
          const isActive = activeNav === item.label || (!activeNav && item.label === 'SOLDES')
          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: isActive ? '#d4f034' : '#f4f3ee',
                opacity: 'muted' in item && item.muted ? 0.5 : 1,
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <button
          onClick={onSearchOpen}
          style={{ width: 32, height: 32, border: '1px solid #2f2f34', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', color: '#f4f3ee', cursor: onSearchOpen ? 'pointer' : 'default', fontSize: 14 }}
        >
          ⌕
        </button>
        <Link href="/panier" style={{ position: 'relative', width: 32, height: 32, border: '1px solid #d4f034', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4f034', textDecoration: 'none', fontSize: 14 }}>
          ⛒
          {count > 0 && (
            <span style={{ position: 'absolute', top: -5, right: -5, background: '#d4f034', color: '#0e0e10', font: "700 9px var(--font-archivo), 'Archivo', sans-serif", width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
