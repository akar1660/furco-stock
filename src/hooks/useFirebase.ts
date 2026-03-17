import { useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { PROD_DOC, CONT_DOC, HIST_DOC } from '../lib/firebase'
import { useStore } from '../store/useStore'
import type { Product, Container, HistoryEntry } from '../types'
import { INIT_CONTAINERS } from '../lib/constants'

export function useFirebase() {
  const { setProducts, setContainers, setHistory, setLoading } = useStore()

  useEffect(() => {
    let loaded = { p: false, c: false }
    const checkDone = () => {
      if (loaded.p && loaded.c) setLoading(false)
    }

    const unsubP = onSnapshot(PROD_DOC, (snap) => {
      if (snap.exists()) {
        try {
          const data = JSON.parse(snap.data().data || '[]') as Product[]
          setProducts(data)
        } catch {}
      }
      loaded.p = true
      checkDone()
    }, () => { loaded.p = true; checkDone() })

    const unsubC = onSnapshot(CONT_DOC, (snap) => {
      if (snap.exists()) {
        try {
          const data = JSON.parse(snap.data().data || '[]') as Container[]
          setContainers(data)
        } catch {}
      } else {
        setContainers(INIT_CONTAINERS.map(c => ({ ...c })))
      }
      loaded.c = true
      checkDone()
    }, () => { loaded.c = true; checkDone() })

    const unsubH = onSnapshot(HIST_DOC, (snap) => {
      if (snap.exists()) {
        try {
          const data = JSON.parse(snap.data().data || '[]') as HistoryEntry[]
          setHistory(data)
          localStorage.setItem('furco_hist_local', JSON.stringify(data))
        } catch {}
      } else {
        const local = JSON.parse(localStorage.getItem('furco_hist_local') || '[]')
        setHistory(local)
      }
    }, () => {
      const local = JSON.parse(localStorage.getItem('furco_hist_local') || '[]')
      setHistory(local)
    })

    return () => { unsubP(); unsubC(); unsubH() }
  }, [setProducts, setContainers, setHistory, setLoading])
}
