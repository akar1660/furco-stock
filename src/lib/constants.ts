import type { Product, Container } from '../types'

export const CATEGORIES = [
  'Concept Design',
  'Sofa Set',
  'Deluxe Group',
  'Maxi Group',
  'Bedroom',
  'Accessories',
]

export const PUBLIC_CATEGORIES = ['Concept Design', 'Sofa Set', 'Deluxe Group', 'Maxi Group', 'Bedroom']

export const PUBLIC_BRANDS = [
  'PARMA', 'ZEN', 'MAXIM', 'MAXIMO', 'ROMANCE', 'NEW ROMANCE',
  'GALERIA', 'MILENYUM', 'STELLA', 'DREAMS', 'NEW DREAMS', 'NEVA',
  'ROYAL', 'ASPENIA', 'RESITAL',
  'BOSTON', 'CLARA',
  'MONZA',
]

export const HIDDEN_PRODUCTS = [
  'ROYAL SERVIS SEHPASI',
  'MAXIMO DINING TABLE',
  'NEW ROMANCE BEIGE CHAIR (SIENA 680)',
  'NEW ROMANCE GRAY DINING CHAIR (SIENA 680)',
  'ZEN BEIGE ARM (STAR 553 & GOLD)',
  'ZEN GRAY ARM (STAR 245 & KROM)',
]

export const ADMIN_PIN = '0482'

export function isPublicProduct(p: Product): boolean {
  const n = p.name.toUpperCase()
  if (!PUBLIC_CATEGORIES.includes(p.category)) return false
  if (!PUBLIC_BRANDS.some(b => n.startsWith(b + ' ') || n.startsWith(b + '-') || n === b)) return false
  if (HIDDEN_PRODUCTS.some(h => n.includes(h))) return false
  if (p.hidden) return false
  if (p.category === 'Sofa Set' && p.qty === 0) return false
  return true
}

export function getStockStatus(p: Product): 'in' | 'low' | 'out' {
  if (p.qty === 0) return 'out'
  if (p.qty <= p.minQty) return 'low'
  return 'in'
}

export function formatDate(d: string): string {
  if (!d) return '—'
  try {
    return new Date(d).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch {
    return d
  }
}

export function getContItems(products: Product[], contNumber: string) {
  return products
    .filter(p => (p.containerQtys || {})[contNumber] > 0)
    .map(p => ({ id: p.id, name: p.name, qty: p.containerQtys[contNumber] }))
}

export const INIT_CONTAINERS: Container[] = [
  { id:1, number:'MRSU 3311640', loadingDate:'2026-01-15', arrivalDate:'2026-03-09', arrived:false },
  { id:2, number:'MSDU 6732375', loadingDate:'2026-01-19', arrivalDate:'2026-03-06', arrived:false },
  { id:3, number:'MRKU 2779602', loadingDate:'2026-01-21', arrivalDate:'2026-03-17', arrived:false },
  { id:4, number:'TLLU 7802940', loadingDate:'2026-02-02', arrivalDate:'2026-04-14', arrived:false },
  { id:5, number:'MRSU 3833901', loadingDate:'2026-02-11', arrivalDate:'2026-04-02', arrived:false },
  { id:6, number:'CAAU 6959239', loadingDate:'2026-03-04', arrivalDate:'2026-04-15', arrived:false },
  { id:7, number:'MSDU 6936614', loadingDate:'2026-03-04', arrivalDate:'2026-04-15', arrived:false },
  { id:8, number:'MEDU 4410963', loadingDate:'2026-03-04', arrivalDate:'2026-04-15', arrived:false },
]
