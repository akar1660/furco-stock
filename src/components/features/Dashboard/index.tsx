import { useStore } from '../../../store/useStore'
import { CATEGORIES, getContItems } from '../../../lib/constants'
import { Badge } from '../../ui/Badge'
import { Button } from '../../ui/Button'
import { Download, Package, CheckCircle2, AlertTriangle, XCircle, Ship } from 'lucide-react'
import type { Product, Container } from '../../../types'

function exportQB(products: Product[]) {
  let csv = 'Name,SKU,Category,Quantity,MinQty,Price,Location,Note\n'
  products.forEach(p => {
    csv += `"${p.name}","${p.sku}","${p.category}",${p.qty},${p.minQty},${p.price},"${p.location}","${p.note}"\n`
  })
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  const a = document.createElement('a')
  a.href = url; a.download = `furco-stock-${new Date().toISOString().slice(0,10)}.csv`; a.click()
  URL.revokeObjectURL(url)
}

const STAT_ITEMS = (p: Product[], c: Container[]) => {
  const instock = p.filter(x => x.qty > x.minQty).length
  const low     = p.filter(x => x.qty > 0 && x.qty <= x.minQty).length
  const none    = p.filter(x => x.qty === 0).length
  const totalQty = p.reduce((s, x) => s + x.qty, 0)
  const pending  = c.filter(x => !x.arrived).length
  return [
    { label: 'Total SKUs',    value: p.length,                  icon: Package,       color: 'text-white/80',   bg: 'bg-white/5' },
    { label: 'Units on Hand', value: totalQty.toLocaleString(), icon: Package,       color: 'text-amber-300',  bg: 'bg-amber-500/8' },
    { label: 'In Stock',      value: instock,                   icon: CheckCircle2,  color: 'text-emerald-400',bg: 'bg-emerald-500/8' },
    { label: 'Low Stock',     value: low,                       icon: AlertTriangle, color: 'text-amber-400',  bg: 'bg-amber-500/8' },
    { label: 'Out of Stock',  value: none,                      icon: XCircle,       color: 'text-red-400',    bg: 'bg-red-500/8' },
    { label: 'Pending Containers', value: pending,              icon: Ship,          color: 'text-blue-400',   bg: 'bg-blue-500/8' },
  ]
}

const CAT_COLORS = [
  '#C8870A', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899',
]

export function Dashboard() {
  const { products, containers, showToast } = useStore()

  const today = new Date()
  const dateStr = today.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  const stats = STAT_ITEMS(products, containers)
  const instock = products.filter(p => p.qty > p.minQty).length
  const low     = products.filter(p => p.qty > 0 && p.qty <= p.minQty).length
  const none    = products.filter(p => p.qty === 0).length
  const total   = products.length || 1
  const healthPct = Math.round((instock / total) * 100)

  const catTotals = CATEGORIES.map(cat => ({
    cat,
    total: products.filter(p => p.category === cat).reduce((s, p) => s + p.qty, 0),
    oos:   products.filter(p => p.category === cat && p.qty === 0).length,
    lowC:  products.filter(p => p.category === cat && p.qty > 0 && p.qty <= p.minQty).length,
    count: products.filter(p => p.category === cat).length,
  }))
  const maxCat = Math.max(...catTotals.map(c => c.total), 1)

  const criticalProducts = products.filter(p => p.qty <= p.minQty).sort((a,b) => a.qty - b.qty)

  const pendingContainers = containers.filter(c => !c.arrived)
  const totalInbound = pendingContainers.reduce((s, c) => {
    return s + getContItems(products, c.number).reduce((a, i) => a + i.qty, 0)
  }, 0)

  const handleExport = () => {
    exportQB(products)
    showToast('CSV exported', 'ok')
  }

  return (
    <div className="anim-fade">
      {/* Page header */}
      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Stock Overview
          </h1>
          <p className="text-sm text-white/40">{dateStr}</p>
        </div>
        <Button variant="outline" size="md" icon={<Download size={14} />} onClick={handleExport}>
          Export CSV
        </Button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-8">
        {stats.map((s, i) => (
          <div key={i} className={`${s.bg} border border-white/8 rounded-2xl p-4 hover:border-white/15 transition-all`}>
            <div className="flex items-center gap-2 mb-3">
              <s.icon size={14} className={s.color} />
              <span className="text-xs text-white/35 font-medium">{s.label}</span>
            </div>
            <div className={`text-2xl font-bold ${s.color}`} style={{ fontFamily: 'Playfair Display, serif' }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Two col */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Category bars */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">Inventory by Category</div>
          <div className="space-y-4">
            {catTotals.filter(c => c.count > 0).map((c, i) => (
              <div key={c.cat}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-white/70">{c.cat}</span>
                  <div className="flex items-center gap-2">
                    {c.oos > 0 && <span className="text-xs bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded font-semibold">{c.oos} OOS</span>}
                    {c.lowC > 0 && <span className="text-xs bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded font-semibold">{c.lowC} LOW</span>}
                    <span className="text-xs text-white/30">{c.total} pcs</span>
                  </div>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${(c.total / maxCat) * 100}%`, background: CAT_COLORS[i % CAT_COLORS.length] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stock health */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <div className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">Stock Health</div>

          {/* Big % */}
          <div className="text-center mb-6">
            <div
              className={`text-5xl font-bold mb-1 ${healthPct >= 70 ? 'text-emerald-400' : healthPct >= 40 ? 'text-amber-400' : 'text-red-400'}`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {healthPct}%
            </div>
            <div className="text-xs text-white/30 uppercase tracking-widest">Products in Stock</div>
          </div>

          {/* Stacked bar */}
          <div className="h-2 rounded-full overflow-hidden flex mb-5">
            <div className="bg-emerald-500 transition-all duration-700" style={{ width: `${(instock/total)*100}%` }} />
            <div className="bg-amber-500 transition-all duration-700"  style={{ width: `${(low/total)*100}%` }} />
            <div className="bg-red-500 transition-all duration-700"    style={{ width: `${(none/total)*100}%` }} />
          </div>

          {/* Legend */}
          <div className="space-y-2.5">
            {[
              { label: 'In Stock',     count: instock, color: 'bg-emerald-500', text: 'text-emerald-400' },
              { label: 'Low Stock',    count: low,     color: 'bg-amber-500',   text: 'text-amber-400' },
              { label: 'Out of Stock', count: none,    color: 'bg-red-500',     text: 'text-red-400' },
            ].map(row => (
              <div key={row.label} className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-sm ${row.color}`} />
                  <span className="text-sm text-white/50">{row.label}</span>
                </div>
                <span className={`text-sm font-bold ${row.text}`}>{row.count}</span>
              </div>
            ))}
            {totalInbound > 0 && (
              <div className="flex justify-between items-center pt-2 border-t border-white/8">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-sm bg-blue-500" />
                  <span className="text-sm text-white/50">Inbound (containers)</span>
                </div>
                <span className="text-sm font-bold text-blue-400">+{totalInbound}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Critical stock table */}
      {criticalProducts.length > 0 && (
        <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
            <div className="flex items-center gap-2">
              <AlertTriangle size={15} className="text-amber-400" />
              <span className="text-sm font-semibold text-white/80">Critical Stock</span>
            </div>
            <Badge variant="yellow">{criticalProducts.length} products</Badge>
          </div>
          <div className="divide-y divide-white/5">
            {criticalProducts.slice(0, 10).map(p => (
              <div key={p.id} className="flex items-center justify-between px-6 py-3 hover:bg-white/2 transition-colors">
                <div>
                  <div className="text-sm font-medium text-white/80">{p.name}</div>
                  <div className="text-xs text-white/30 mt-0.5">{p.category} · {p.sku}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    {p.qty === 0
                      ? <Badge variant="red">0 units</Badge>
                      : <Badge variant="yellow">{p.qty} units</Badge>
                    }
                    <div className="text-xs text-white/20 mt-1">Min: {p.minQty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
