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

  const inputClass = 'w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100'
  const labelClass = 'text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1.5'

  return (
    <Modal
      open={true}
      onClose={onClose}
      title={isOut ? 'Quick Stock Out' : 'Adjust Stock'}
    >
      <p className="text-sm text-slate-500 mb-5">
        {product.name} · Current: <span className="text-slate-900 font-semibold">{product.qty} units</span>
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
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-red-50 text-red-600 border-red-300'
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {t === 'add' ? '+ Add' : '− Remove'}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3 mb-5">
        <div>
          <label className={labelClass}>
            {isOut ? 'Units Out' : 'Quantity (units)'}
          </label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(e.target.value)}
            placeholder="e.g. 5"
            className={inputClass}
            autoFocus
          />
        </div>
        {isOut && (
          <div>
            <label className={labelClass}>Note (optional)</label>
            <input
              type="text"
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Customer name, order #, etc."
              className={inputClass}
            />
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={confirm}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            isOut
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : adjType === 'add'
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
        >
          {isOut ? 'Confirm Out' : adjType === 'add' ? '+ Confirm Add' : '− Confirm Remove'}
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all"
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}
