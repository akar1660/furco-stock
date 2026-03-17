import { create } from 'zustand'
import { setDoc } from 'firebase/firestore'
import { PROD_DOC, CONT_DOC, HIST_DOC } from '../lib/firebase'
import type { Product, Container, HistoryEntry, Page, ToastState } from '../types'
import { INIT_CONTAINERS } from '../lib/constants'

interface State {
  // Auth
  isAdmin: boolean
  // Data
  products: Product[]
  containers: Container[]
  history: HistoryEntry[]
  // UI
  page: Page
  toast: ToastState | null
  loading: boolean

  // Actions
  setAdmin: (v: boolean) => void
  setProducts: (p: Product[]) => void
  setContainers: (c: Container[]) => void
  setHistory: (h: HistoryEntry[]) => void
  setPage: (p: Page) => void
  showToast: (msg: string, type?: ToastState['type']) => void
  setLoading: (v: boolean) => void

  saveProducts: (p: Product[]) => Promise<void>
  saveContainers: (c: Container[]) => Promise<void>
  addHistory: (entry: Omit<HistoryEntry, 'date' | 'user'>) => void
}

let toastTimer: ReturnType<typeof setTimeout> | null = null

export const useStore = create<State>((set, get) => ({
  isAdmin: false,
  products: [],
  containers: INIT_CONTAINERS.map(c => ({ ...c })),
  history: [],
  page: 'list',
  toast: null,
  loading: true,

  setAdmin: (v) => set({ isAdmin: v }),
  setProducts: (products) => set({ products }),
  setContainers: (containers) => set({ containers }),
  setHistory: (history) => set({ history }),
  setPage: (page) => set({ page }),
  setLoading: (loading) => set({ loading }),

  showToast: (message, type = 'ok') => {
    const id = Date.now()
    set({ toast: { message, type, id } })
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => set({ toast: null }), 3500)
  },

  saveProducts: async (products) => {
    set({ products })
    await setDoc(PROD_DOC, { data: JSON.stringify(products) })
  },

  saveContainers: async (containers) => {
    set({ containers })
    await setDoc(CONT_DOC, { data: JSON.stringify(containers) })
  },

  addHistory: (entry) => {
    const { isAdmin, history } = get()
    const newEntry: HistoryEntry = {
      ...entry,
      date: new Date().toISOString(),
      user: isAdmin ? 'Admin' : 'Warehouse',
    }
    const newHistory = [newEntry, ...history].slice(0, 200)
    set({ history: newHistory })
    // Persist to localStorage + Firebase
    localStorage.setItem('furco_hist_local', JSON.stringify(newHistory))
    setDoc(HIST_DOC, { data: JSON.stringify(newHistory) }).catch(() => {})
  },
}))
