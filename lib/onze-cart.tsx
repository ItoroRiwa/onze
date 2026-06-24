'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export interface CartItem {
  id: string
  category: string
  name: string
  size: string
  flocage?: string
  note?: string
  price: number
  qty: number
}

const SEED: CartItem[] = [
  { id: '1', category: 'CLUBS · LIGA', name: 'Maillot domicile 25/26', size: 'M', flocage: 'VOTRE NOM 10', price: 101, qty: 1 },
  { id: '2', category: 'NATIONS', name: 'Maillot extérieur 25/26', size: 'L', price: 95, qty: 1 },
  { id: '3', category: 'FANS · RÉTRO', name: 'Édition rétro 1998', size: 'M', note: 'Tirage limité', price: 79, qty: 1 },
]

interface CartCtx {
  items: CartItem[]
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  total: number
  count: number
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)
  const [items, setItems] = useState<CartItem[]>(SEED)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('onze-cart')
      if (saved) setItems(JSON.parse(saved))
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) localStorage.setItem('onze-cart', JSON.stringify(items))
  }, [items, hydrated])

  const setQty = useCallback((id: string, qty: number) => {
    if (qty < 1) return
    setItems(prev => prev.map(i => (i.id === id ? { ...i, qty } : i)))
  }, [])

  const remove = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return <Ctx.Provider value={{ items, setQty, remove, total, count }}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
