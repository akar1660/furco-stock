export interface Product {
  id: number
  name: string
  sku: string
  category: string
  qty: number
  minQty: number
  price: number
  location: string
  note: string
  containerQtys: Record<string, number>
  hidden: boolean
}

export interface Container {
  id: number
  number: string
  loadingDate: string
  arrivalDate: string
  arrived: boolean
}

export interface HistoryEntry {
  type: 'add' | 'sub' | 'edit' | 'arrive' | 'out'
  prodName: string
  qty: number
  note: string
  date: string
  user: 'Admin' | 'Warehouse'
}

export type Page = 'dashboard' | 'list' | 'containers' | 'history' | 'login'

export type ToastType = 'ok' | 'warn' | 'blue'

export interface ToastState {
  message: string
  type: ToastType
  id: number
}
