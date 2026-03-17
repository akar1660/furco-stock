import type { ReactNode } from 'react'

type Variant = 'green' | 'yellow' | 'red' | 'gray' | 'blue' | 'gold'

const VARIANTS: Record<Variant, string> = {
  green:  'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
  yellow: 'bg-amber-50   text-amber-700   ring-1 ring-amber-200',
  red:    'bg-red-50     text-red-600     ring-1 ring-red-200',
  gray:   'bg-slate-100  text-slate-500   ring-1 ring-slate-200',
  blue:   'bg-blue-50    text-blue-700    ring-1 ring-blue-200',
  gold:   'bg-amber-50   text-amber-700   ring-1 ring-amber-300',
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
