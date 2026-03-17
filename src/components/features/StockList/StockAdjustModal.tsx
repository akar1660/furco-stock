import { useState } from 'react'
import { Modal } from '../../ui/Modal'
import { useStore } from '../../../store/useStore'
import type { Product } from '../../../types'

export function StockAdjustModal({ product, mode, onClose }: {
  product: Product
  mode: 'adj' | 'out'
  onClose: () => void
}) {
  const { products, saveProducts, addHistory, showToast } = useStore()
  const [adjType, setAdjType] = useState<'add' | 'sub'>('add')
  const [qty, setQty] = useState('')
  const [note, setNote] = useState('')

  const isOut = mode === 'out'

  const confirm = () => {
    const n = parseInt(qty)
    if (!n || n <= 0) { showToast('Enter a valid quantity', 'warn'); return }

    const type = isOut ? 'sub' : adjType
    const updated = products.map(p => {
      if (p.id !== product.id) return p
      const newQty = type === 'add' ? p.qty + n : Math.max(0, p.qty - n)
      const status = newQty === 0 ? 'No Stock' : newQty <= p.minQty ? 'Low Stock' : 'In Stock'
      return { ...p, qty: newQty, note: status }
    })
    saveProducts(updated)
    addHistory({ type, prodName: product.name, qty: n, note: note || '' })
    showToast(
      type === 'add' ? `+${n} added to ${product.name}` : `${n} removed from ${product.name}`,
      type === 'add' ? 'ok' : 'warn'
    )
    onClose()
  }

  return (
    <Modal
      open={true}
      onClose={onClose}
      title={isOut ? 'Quick Stock Out' : 'Adjust Stock'}
    >
      <p className="text-sm text-white/40 mb-5">
        {product.name} · Current: <span className="text-white font-semibold">{product.qty} units</span>
      </p>

      {!isOut && (
        <div className="flex gap-2 mb-5">
          {(['add', 'sub'] as const).map(t => (
            <button
              key={t}
              onClick={() => setAdjType(t)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                adjType === t
                  ? t === 'add'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-red-500/10 text-red-400 border-red-500/30'
                  : 'bg-white/3 text-white/30 border-white/8 hover:bg-white/6'
              }`}
            >
              {t === 'add' ? '+ Add' : '− Remove'}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3 mb-5">
        <div>
          <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">
            {isOut ? 'Units Out' : 'Quantity (units)'}
          </label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(e.target.value)}
            placeholder="e.g. 5"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
            autoFocus
          />
        </div>
        {isOut && (
          <div>
            <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">Note (optional)</label>
            <input
              type="text"
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Customer name, order #, etc."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10"
            />
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={confirm}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            isOut
              ? 'bg-red-500 hover:bg-red-400 text-white'
              : adjType === 'add'
              ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
              : 'bg-red-500 hover:bg-red-400 text-white'
          }`}
        >
          {isOut ? 'Confirm Out' : adjType === 'add' ? '+ Confirm Add' : '− Confirm Remove'}
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
