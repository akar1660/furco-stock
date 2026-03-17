import { useState } from 'react'
import { Plus, Download, Eye, EyeOff, Pencil, Trash2, Package } from 'lucide-react'
import { useStore } from '../../../store/useStore'
import { CATEGORIES, PUBLIC_CATEGORIES, isPublicProduct } from '../../../lib/constants'
import { Badge, StockBadge, StockQtyBadge } from '../../ui/Badge'
import { Button } from '../../ui/Button'
import { SearchInput, Select } from '../../ui/Input'
import { ConfirmModal } from '../../ui/Modal'
import { StockAdjustModal } from './StockAdjustModal'
import { ProductFormModal } from './ProductFormModal'
import type { Product } from '../../../types'

function exportCSV(products: Product[]) {
  let csv = 'Name,SKU,Category,Quantity,MinQty,Price,Location,Note\n'
  products.forEach(p => {
    csv += `"${p.name}","${p.sku}","${p.category}",${p.qty},${p.minQty},${p.price},"${p.location}","${p.note}"\n`
  })
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  const a = document.createElement('a'); a.href = url
  a.download = `furco-stock-${new Date().toISOString().slice(0,10)}.csv`; a.click()
  URL.revokeObjectURL(url)
}

export function StockList() {
  const { products, isAdmin, saveProducts, addHistory, showToast } = useStore()

  const [search, setSearch]   = useState('')
  const [catFilter, setCat]   = useState('')
  const [statusFilter, setSt] = useState('')
  const [sort, setSort]       = useState('name')
  const [activePill, setPill] = useState('')

  // Modals
  const [adjProduct, setAdj]         = useState<Product | null>(null)
  const [adjMode, setAdjMode]        = useState<'adj' | 'out'>('adj')
  const [editProduct, setEdit]       = useState<Product | null | 'new'>('new')
  const [editOpen, setEditOpen]      = useState(false)
  const [deleteTarget, setDelTarget] = useState<Product | null>(null)

  const base = isAdmin ? products : products.filter(isPublicProduct)

  let list = base
    .filter(p => !catFilter || p.category === catFilter)
    .filter(p => {
      if (!statusFilter) return true
      if (statusFilter === 'hidden') return p.hidden
      if (statusFilter === 'In Stock')  return p.qty > p.minQty
      if (statusFilter === 'Low Stock') return p.qty > 0 && p.qty <= p.minQty
      if (statusFilter === 'No Stock')  return p.qty === 0
      return true
    })
    .filter(p => {
      const q = search.toLowerCase()
      return p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
    })
    .filter(p => !activePill || p.category === activePill)

  if (sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name))
  else if (sort === 'qty') list.sort((a,b) => a.qty - b.qty)
  else if (sort === 'cat') list.sort((a,b) => a.category.localeCompare(b.category))

  const toggleHidden = (id: number) => {
    const updated = products.map(p => p.id === id ? { ...p, hidden: !p.hidden } : p)
    saveProducts(updated)
    const p = products.find(x => x.id === id)!
    showToast(p.hidden ? 'Visible to customers 👁' : 'Hidden from customers 🙈', p.hidden ? 'ok' : 'warn')
  }

  const deleteProduct = (p: Product) => {
    const updated = products.filter(x => x.id !== p.id)
    saveProducts(updated)
    addHistory({ type: 'sub', prodName: p.name, qty: p.qty, note: 'Product deleted' })
    showToast(`"${p.name}" deleted`, 'warn')
    setDelTarget(null)
  }

  const openEdit = (p: Product | null) => {
    setEdit(p)
    setEditOpen(true)
  }

  const openAdj = (p: Product) => { setAdj(p); setAdjMode('adj') }
  const openOut = (p: Product) => { setAdj(p); setAdjMode('out') }

  const inbound = (p: Product) =>
    Object.values(p.containerQtys || {}).reduce((s, v) => s + v, 0)

  return (
    <div className="anim-fade">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            {isAdmin ? 'Stock List' : 'Product Catalogue'}
          </h1>
          {!isAdmin && (
            <p className="text-xs text-white/35 mt-1">
              Real-time availability · Toronto, Ontario · Canada
            </p>
          )}
        </div>
        {isAdmin && (
          <div className="flex gap-2">
            <Button variant="outline" size="md" icon={<Download size={14} />} onClick={() => { exportCSV(products); showToast('Exported', 'ok') }}>
              Export
            </Button>
            <Button variant="primary" size="md" icon={<Plus size={14} />} onClick={() => openEdit(null)}>
              Add Product
            </Button>
          </div>
        )}
      </div>

      {/* Public: category pills */}
      {!isAdmin && (
        <div className="flex gap-2 overflow-x-auto pb-1 mb-4 scrollbar-none">
          {['', ...PUBLIC_CATEGORIES].map(c => (
            <button
              key={c || 'all'}
              onClick={() => setPill(c)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                activePill === c
                  ? 'bg-white text-black border-white'
                  : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {c || 'All Products'}
            </button>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className={`mb-4 ${isAdmin ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-white/3 border border-white/8 rounded-2xl' : ''}`}>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder={isAdmin ? 'Search by name or SKU...' : 'Search products...'}
        />
        {isAdmin && (
          <>
            <Select value={catFilter} onChange={e => setCat(e.target.value)}>
              <option value="">All Categories</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </Select>
            <Select value={statusFilter} onChange={e => setSt(e.target.value)}>
              <option value="">All Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="No Stock">No Stock</option>
              <option value="hidden">Hidden</option>
            </Select>
            <Select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="name">Sort by Name</option>
              <option value="qty">Sort by Quantity</option>
              <option value="cat">Sort by Category</option>
            </Select>
          </>
        )}
      </div>

      {/* Table */}
      <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
        {/* Table header */}
        {isAdmin ? (
          <div className="px-4 py-3 border-b border-white/8 flex items-center gap-2">
            <Package size={13} className="text-white/30" />
            <span className="text-xs text-white/30 font-semibold uppercase tracking-widest">{list.length} products</span>
          </div>
        ) : (
          <div className="grid grid-cols-[1fr_120px] px-4 py-3 border-b border-white/8 text-xs font-semibold text-white/30 uppercase tracking-widest">
            <span>Product</span>
            <span className="text-right">Availability</span>
          </div>
        )}

        {/* Rows */}
        {list.length === 0 ? (
          <div className="py-16 text-center text-white/25 text-sm">
            <Package size={32} className="mx-auto mb-3 opacity-30" />
            No products found
          </div>
        ) : isAdmin ? (
          <div className="divide-y divide-white/5">
            {list.map(p => {
              const ib = inbound(p)
              return (
                <div key={p.id} className="px-4 py-3.5 hover:bg-white/2 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-white/90">{p.name}</span>
                        {p.hidden && <Badge variant="yellow">Hidden</Badge>}
                      </div>
                      <div className="text-xs text-white/30 mt-0.5">{p.sku} · <span className="text-white/40">{p.category}</span></div>
                      {ib > 0 && (
                        <div className="text-xs text-blue-400/80 mt-1">📦 {ib} inbound</div>
                      )}
                    </div>
                    <StockQtyBadge qty={p.qty} minQty={p.minQty} />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => openOut(p)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/8 text-amber-400 border border-amber-500/15 hover:bg-amber-500/15 transition-all"
                    >
                      − Out
                    </button>
                    <button
                      onClick={() => openAdj(p)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-500/8 text-blue-400 border border-blue-500/15 hover:bg-blue-500/15 transition-all"
                    >
                      ± Stock
                    </button>
                    <button
                      onClick={() => toggleHidden(p.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 text-white/30 hover:bg-white/10 hover:text-white transition-all"
                      title={p.hidden ? 'Show to customers' : 'Hide from customers'}
                    >
                      {p.hidden ? <EyeOff size={13} /> : <Eye size={13} />}
                    </button>
                    <button
                      onClick={() => openEdit(p)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 text-white/30 hover:bg-amber-500/10 hover:text-amber-400 transition-all"
                    >
                      <Pencil size={13} />
                    </button>
                    <button
                      onClick={() => setDelTarget(p)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-500/5 text-red-400/40 hover:bg-red-500/10 hover:text-red-400 transition-all"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {list.map(p => {
              const ib = inbound(p)
              return (
                <div key={p.id} className="grid grid-cols-[1fr_120px] items-center px-4 py-3.5 hover:bg-white/2 transition-colors">
                  <div>
                    <div className="text-sm font-semibold text-white/85">{p.name}</div>
                    <div className="text-xs text-white/30 mt-0.5">{p.category}</div>
                    {ib > 0 && <div className="text-xs text-blue-400/70 mt-1">📦 {ib} inbound</div>}
                  </div>
                  <div className="flex justify-end">
                    <StockBadge qty={p.qty} minQty={p.minQty} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="mt-3 text-xs text-white/20 text-right font-medium">{list.length} products shown</div>

      {/* Modals */}
      {adjProduct && (
        <StockAdjustModal
          product={adjProduct}
          mode={adjMode}
          onClose={() => setAdj(null)}
        />
      )}

      <ProductFormModal
        open={editOpen}
        product={editProduct === 'new' ? null : editProduct}
        onClose={() => { setEditOpen(false); setEdit(null) }}
      />

      <ConfirmModal
        open={!!deleteTarget}
        onClose={() => setDelTarget(null)}
        onConfirm={() => deleteTarget && deleteProduct(deleteTarget)}
        title="Delete Product"
        message={deleteTarget ? <><strong className="text-white">"{deleteTarget.name}"</strong> will be permanently removed.</> : ''}
        danger
      />
    </div>
  )
}
