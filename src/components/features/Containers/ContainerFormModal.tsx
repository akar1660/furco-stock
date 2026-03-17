import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Modal } from '../../ui/Modal'
import { useStore } from '../../../store/useStore'
import type { Container } from '../../../types'

export function ContainerFormModal({ open, container, onClose }: {
  open: boolean
  container: Container | null
  onClose: () => void
}) {
  const { products, containers, saveContainers, saveProducts, showToast } = useStore()

  const [num, setNum]     = useState('')
  const [load, setLoad]   = useState('')
  const [eta, setEta]     = useState('')
  const [items, setItems] = useState<{ prodId: number; qty: number }[]>([])
  const [selProd, setSel] = useState('')
  const [selQty, setSelQ] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (open && container) {
      setNum(container.number)
      setLoad(container.loadingDate)
      setEta(container.arrivalDate)
      // Load existing items
      const existing = products
        .filter(p => (p.containerQtys || {})[container.number] > 0)
        .map(p => ({ prodId: p.id, qty: p.containerQtys[container.number] }))
      setItems(existing)
    } else if (open) {
      setNum(''); setLoad(''); setEta(''); setItems([])
    }
    setSel(''); setSelQ('')
  }, [open, container, products])

  const addItem = () => {
    const pid = parseInt(selProd)
    const q   = parseInt(selQty)
    if (!pid || !q || q <= 0) { showToast('Select product and enter quantity', 'warn'); return }
    setItems(prev => {
      const existing = prev.find(i => i.prodId === pid)
      if (existing) return prev.map(i => i.prodId === pid ? { ...i, qty: q } : i)
      return [...prev, { prodId: pid, qty: q }]
    })
    setSel(''); setSelQ('')
  }

  const removeItem = (pid: number) => setItems(prev => prev.filter(i => i.prodId !== pid))

  const save = async () => {
    if (!num.trim()) { showToast('Container number required', 'warn'); return }
    setSaving(true)
    try {
      // Update products' containerQtys
      const newContNumber = num.trim()
      const oldNumber = container?.number

      const updatedProducts = products.map(p => {
        const newQtys = { ...p.containerQtys }
        // Remove old reference
        if (oldNumber && oldNumber !== newContNumber) delete newQtys[oldNumber]
        // Remove new container reference first (will re-add if in items)
        delete newQtys[newContNumber]
        const item = items.find(i => i.prodId === p.id)
        if (item) newQtys[newContNumber] = item.qty
        return { ...p, containerQtys: newQtys }
      })

      let updatedContainers: Container[]
      if (container) {
        updatedContainers = containers.map(c =>
          c.id === container.id
            ? { ...c, number: newContNumber, loadingDate: load, arrivalDate: eta }
            : c
        )
      } else {
        const newId = Math.max(0, ...containers.map(c => c.id)) + 1
        updatedContainers = [...containers, { id: newId, number: newContNumber, loadingDate: load, arrivalDate: eta, arrived: false }]
      }

      await saveProducts(updatedProducts)
      await saveContainers(updatedContainers)
      showToast(container ? 'Container updated' : 'Container added', 'ok')
      onClose()
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={container ? 'Edit Container' : 'Add Container'} width="max-w-lg">
      <div className="space-y-4 mb-5">
        <div>
          <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">Container Number *</label>
          <input
            value={num}
            onChange={e => setNum(e.target.value)}
            placeholder="e.g. MRSU 1234567"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 font-mono"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">Loading Date</label>
            <input type="date" value={load} onChange={e => setLoad(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-amber-500/50 [color-scheme:dark]" />
          </div>
          <div>
            <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">ETA</label>
            <input type="date" value={eta} onChange={e => setEta(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-amber-500/50 [color-scheme:dark]" />
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="bg-white/3 rounded-xl p-4 mb-5">
        <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-3">Container Contents</div>
        {items.length > 0 && (
          <div className="space-y-1.5 mb-3">
            {items.map(item => {
              const p = products.find(x => x.id === item.prodId)
              return p ? (
                <div key={item.prodId} className="flex items-center justify-between text-sm bg-white/3 rounded-lg px-3 py-2">
                  <span className="text-white/70 truncate">{p.name}</span>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="text-amber-400 font-semibold">+{item.qty}</span>
                    <button onClick={() => removeItem(item.prodId)} className="w-5 h-5 flex items-center justify-center rounded bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 transition-all">
                      <X size={10} />
                    </button>
                  </div>
                </div>
              ) : null
            })}
          </div>
        )}
        <div className="flex gap-2">
          <select
            value={selProd}
            onChange={e => setSel(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white [&>option]:bg-zinc-900 outline-none focus:border-amber-500/50 cursor-pointer"
          >
            <option value="">Select product</option>
            {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <input
            type="number"
            min="1"
            value={selQty}
            onChange={e => setSelQ(e.target.value)}
            placeholder="Qty"
            className="w-20 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-amber-500/50"
          />
          <button
            onClick={addItem}
            className="px-3 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-amber-400 transition-all"
          >
            + Add
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={save}
          disabled={saving}
          className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-white hover:bg-amber-400 text-black transition-all disabled:opacity-50"
        >
          {saving ? 'Saving...' : container ? 'Save Changes' : 'Add Container'}
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}
