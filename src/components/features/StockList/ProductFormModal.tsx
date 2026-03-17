import { useState, useEffect } from 'react'
import { Modal } from '../../ui/Modal'
import { useStore } from '../../../store/useStore'
import { CATEGORIES } from '../../../lib/constants'
import type { Product } from '../../../types'

const EMPTY: Omit<Product, 'id'> = {
  name: '', sku: '', category: CATEGORIES[0], qty: 0, minQty: 3,
  price: 0, location: '', note: '', containerQtys: {}, hidden: false,
}

export function ProductFormModal({ open, product, onClose }: {
  open: boolean
  product: Product | null
  onClose: () => void
}) {
  const { products, saveProducts, addHistory, showToast } = useStore()
  const [form, setForm] = useState({ ...EMPTY })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (open) setForm(product ? { ...product } : { ...EMPTY })
  }, [open, product])

  const set = (k: string, v: string | number) => setForm(f => ({ ...f, [k]: v }))

  const save = async () => {
    if (!form.name.trim()) { showToast('Product name is required', 'warn'); return }
    setSaving(true)
    try {
      let updated: Product[]
      if (product) {
        updated = products.map(p => p.id === product.id ? { ...form, id: p.id } : p)
        addHistory({ type: 'edit', prodName: form.name, qty: form.qty, note: 'Product edited' })
      } else {
        const newId = Math.max(0, ...products.map(p => p.id)) + 1
        const status = form.qty === 0 ? 'No Stock' : form.qty <= form.minQty ? 'Low Stock' : 'In Stock'
        updated = [...products, { ...form, id: newId, note: status }]
        addHistory({ type: 'add', prodName: form.name, qty: form.qty, note: 'Product added' })
      }
      await saveProducts(updated)
      showToast(product ? 'Product updated' : 'Product added', 'ok')
      onClose()
    } finally {
      setSaving(false)
    }
  }

  const field = (label: string, key: string, type = 'text', placeholder = '') => (
    <div>
      <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">{label}</label>
      <input
        type={type}
        value={(form as any)[key]}
        onChange={e => set(key, type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 transition-all"
      />
    </div>
  )

  return (
    <Modal open={open} onClose={onClose} title={product ? 'Edit Product' : 'Add New Product'} width="max-w-lg">
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="col-span-2">{field('Product Name *', 'name', 'text', 'e.g. PARMA GRAY SOFA')}</div>
        {field('SKU', 'sku', 'text', 'FRC-0001')}
        <div>
          <label className="text-xs font-semibold text-white/35 uppercase tracking-widest block mb-1.5">Category</label>
          <select
            value={form.category}
            onChange={e => set('category', e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 [&>option]:bg-zinc-900 cursor-pointer"
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {field('Current Stock', 'qty', 'number', '0')}
        {field('Min Alert Level', 'minQty', 'number', '3')}
        {field('Unit Price (CAD)', 'price', 'number', '0.00')}
        {field('Location', 'location', 'text', 'e.g. A-01')}
        <div className="col-span-2">{field('Notes', 'note', 'text', 'Colour, condition, etc.')}</div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={save}
          disabled={saving}
          className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-white hover:bg-amber-400 text-black transition-all disabled:opacity-50"
        >
          {saving ? 'Saving...' : product ? 'Save Changes' : 'Add Product'}
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
