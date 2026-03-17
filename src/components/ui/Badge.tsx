import type { ReactNode } from 'react'

type Variant = 'green' | 'yellow' | 'red' | 'gray' | 'blue' | 'gold'

const VARIANTS: Record<Variant, string> = {
  green:  'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20',
  yellow: 'bg-amber-500/10  text-amber-400  ring-1 ring-amber-500/20',
  red:    'bg-red-500/10    text-red-400    ring-1 ring-red-500/20',
  gray:   'bg-white/5       text-white/40   ring-1 ring-white/8',
  blue:   'bg-blue-500/10   text-blue-400   ring-1 ring-blue-500/20',
  gold:   'bg-amber-500/10  text-amber-300  ring-1 ring-amber-400/25',
}

export function Badge({ variant = 'gray', children, className = '' }: {
  variant?: Variant
  children: ReactNode
  className?: string
}) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${VARIANTS[variant]} ${className}`}>
      {children}
    </span>
  )
}

export function StockBadge({ qty, minQty }: { qty: number; minQty: number }) {
  if (qty === 0) return <Badge variant="red">Out of Stock</Badge>
  if (qty <= minQty) return <Badge variant="yellow">Low Stock</Badge>
  return <Badge variant="green">In Stock</Badge>
}

export function StockQtyBadge({ qty, minQty }: { qty: number; minQty: number }) {
  if (qty === 0) return <Badge variant="red">{qty}</Badge>
  if (qty <= minQty) return <Badge variant="yellow">{qty}</Badge>
  return <Badge variant="green">{qty}</Badge>
}
