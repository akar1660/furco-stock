import { useState } from 'react'
import { Plus, Ship, CheckCircle2, Clock, AlertTriangle, Pencil } from 'lucide-react'
import { useStore } from '../../../store/useStore'
import { formatDate, getContItems } from '../../../lib/constants'
import { Badge } from '../../ui/Badge'
import { Button } from '../../ui/Button'
import { Modal } from '../../ui/Modal'
import { ContainerFormModal } from './ContainerFormModal'
import type { Container } from '../../../types'

function getEtaStatus(arrivalDate: string) {
  if (!arrivalDate) return { days: null, label: '—', color: 'text-slate-400' }
  const eta = new Date(arrivalDate)
  const today = new Date(); today.setHours(0,0,0,0)
  const days = Math.ceil((eta.getTime() - today.getTime()) / (1000*60*60*24))
  if (days < 0) return { days, label: `${Math.abs(days)}d overdue`, color: 'text-red-500' }
  if (days === 0) return { days, label: 'Today', color: 'text-amber-600' }
  if (days <= 7)  return { days, label: `${days}d left`, color: 'text-amber-600' }
  return { days, label: `${days}d left`, color: 'text-emerald-600' }
}

export function Containers() {
  const { products, containers, saveContainers, saveProducts, addHistory, showToast, isAdmin } = useStore()

  const [formOpen, setFormOpen] = useState(false)
  const [editContainer, setEditCont] = useState<Container | null>(null)
  const [arriveTarget, setArriveTarget] = useState<Container | null>(null)
  const [confirming, setConfirming] = useState(false)

  const pending = containers.filter(c => !c.arrived)
  const arrived = containers.filter(c => c.arrived)

  const confirmArrive = async () => {
    if (!arriveTarget) return
    setConfirming(true)
    const items = getContItems(products, arriveTarget.number)
    const updatedProducts = products.map(p => {
      const q = (p.containerQtys || {})[arriveTarget.number]
      if (!q) return p
      const newQty = p.qty + q
      const status = newQty === 0 ? 'No Stock' : newQty <= p.minQty ? 'Low Stock' : 'In Stock'
      const newContainerQtys = { ...p.containerQtys }
      delete newContainerQtys[arriveTarget.number]
      return { ...p, qty: newQty, note: status, containerQtys: newContainerQtys }
    })
    const updatedContainers = containers.map(c =>
      c.id === arriveTarget.id ? { ...c, arrived: true } : c
    )
    await saveProducts(updatedProducts)
    await saveContainers(updatedContainers)
    addHistory({ type: 'arrive', prodName: arriveTarget.number, qty: items.reduce((s,i) => s+i.qty, 0), note: `Container ${arriveTarget.number} arrived` })
    showToast(`Container ${arriveTarget.number} marked as arrived`, 'ok')
    setArriveTarget(null)
    setConfirming(false)
  }

  return (
    <div className="anim-fade">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Incoming Containers
          </h1>
          <p className="text-xs text-slate-500 mt-1">{pending.length} pending · {arrived.length} received</p>
        </div>
        {isAdmin && (
          <Button variant="primary" size="md" icon={<Plus size={14} />} onClick={() => { setEditCont(null); setFormOpen(true) }}>
            Add Container
          </Button>
        )}
      </div>

      {/* Pending containers */}
      {pending.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl py-16 text-center shadow-sm">
          <Ship size={32} className="mx-auto mb-3 text-slate-300" />
          <p className="text-slate-400 text-sm">No pending containers</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {pending.map(c => {
            const items = getContItems(products, c.number)
            const totalPcs = items.reduce((s, i) => s + i.qty, 0)
            const eta = getEtaStatus(c.arrivalDate)
            return (
              <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-slate-300 transition-all group">
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-200 mb-4 rounded-full" />

                {/* Number + ETA */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Ship size={14} className="text-amber-500" />
                      <span className="text-sm font-bold text-slate-800" style={{ fontFamily: 'monospace' }}>{c.number}</span>
                    </div>
                    <div className={`text-xs font-semibold ${eta.color}`}>
                      {eta.days !== null && (
                        eta.days < 0 ? <><AlertTriangle size={10} className="inline mr-1" />{eta.label}</> :
                        eta.days === 0 ? <><Clock size={10} className="inline mr-1" />{eta.label}</> :
                        eta.label
                      )}
                    </div>
                  </div>
                  <Badge variant={eta.days === null ? 'gray' : eta.days < 0 ? 'red' : eta.days <= 7 ? 'yellow' : 'green'}>
                    {eta.days === null ? 'No ETA' : eta.days < 0 ? 'Overdue' : eta.days === 0 ? 'Today' : `${eta.days}d`}
                  </Badge>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Loading</div>
                    <div className="text-xs font-semibold text-slate-700">{formatDate(c.loadingDate)}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">ETA</div>
                    <div className="text-xs font-semibold text-slate-700">{formatDate(c.arrivalDate)}</div>
                  </div>
                </div>

                {/* Items */}
                <div className="max-h-24 overflow-y-auto mb-4 space-y-1">
                  {items.length ? items.map(i => (
                    <div key={i.id} className="flex justify-between text-xs">
                      <span className="text-slate-500 truncate">{i.name}</span>
                      <span className="text-amber-600 font-semibold shrink-0 ml-2">+{i.qty}</span>
                    </div>
                  )) : <p className="text-xs text-slate-400">No items listed</p>}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <Badge variant="blue">{totalPcs} pcs · {items.length} types</Badge>
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => setArriveTarget(c)}
                        className="ml-auto px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        ✓ Arrived
                      </button>
                      <button
                        onClick={() => { setEditCont(c); setFormOpen(true) }}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:bg-amber-50 hover:text-amber-700 transition-all"
                      >
                        <Pencil size={12} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Arrived containers */}
      {arrived.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Received Containers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {arrived.map(c => {
              const items = getContItems(products, c.number)
              return (
                <div key={c.id} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <div className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-200 mb-4 rounded-full" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-slate-700" style={{ fontFamily: 'monospace' }}>{c.number}</span>
                    <Badge variant="green">Received</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-white rounded-xl p-2.5 text-center border border-emerald-100">
                      <div className="text-xs text-slate-400 uppercase tracking-widest mb-0.5">Loading</div>
                      <div className="text-xs font-semibold text-slate-600">{formatDate(c.loadingDate)}</div>
                    </div>
                    <div className="bg-white rounded-xl p-2.5 text-center border border-emerald-100">
                      <div className="text-xs text-slate-400 uppercase tracking-widest mb-0.5">Arrived</div>
                      <div className="text-xs font-semibold text-slate-600">{formatDate(c.arrivalDate)}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">{items.slice(0,3).map(i => i.name).join(', ')}{items.length > 3 ? ` +${items.length-3} more` : ''}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Arrive Confirmation Modal */}
      <Modal open={!!arriveTarget} onClose={() => setArriveTarget(null)} title="Mark Container as Arrived">
        {arriveTarget && (() => {
          const items = getContItems(products, arriveTarget.number)
          return (
            <>
              <p className="text-sm text-slate-500 mb-4">Container <strong className="text-slate-900">{arriveTarget.number}</strong></p>
              <div className="bg-slate-50 rounded-xl p-4 mb-4 max-h-48 overflow-y-auto border border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Products arriving:</div>
                {items.map(i => (
                  <div key={i.id} className="flex justify-between text-sm py-1 border-b border-slate-100 last:border-0">
                    <span className="text-slate-600">{i.name}</span>
                    <span className="text-emerald-700 font-semibold">+{i.qty}</span>
                  </div>
                ))}
                {items.length === 0 && <p className="text-sm text-slate-400">No products listed</p>}
              </div>
              <p className="text-xs text-slate-500 mb-5">All products will have their stock automatically updated.</p>
              <div className="flex gap-3">
                <button
                  onClick={confirmArrive}
                  disabled={confirming}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-all disabled:opacity-50"
                >
                  {confirming ? 'Processing...' : '✓ Confirm & Update Stock'}
                </button>
                <button
                  onClick={() => setArriveTarget(null)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all"
                >
                  Cancel
                </button>
              </div>
            </>
          )
        })()}
      </Modal>

      <ContainerFormModal
        open={formOpen}
        container={editContainer}
        onClose={() => { setFormOpen(false); setEditCont(null) }}
      />
    </div>
  )
}
