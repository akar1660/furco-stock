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
  if (!arrivalDate) return { days: null, label: '—', color: 'text-white/30' }
  const eta = new Date(arrivalDate)
  const today = new Date(); today.setHours(0,0,0,0)
  const days = Math.ceil((eta.getTime() - today.getTime()) / (1000*60*60*24))
  if (days < 0) return { days, label: `${Math.abs(days)}d overdue`, color: 'text-red-400' }
  if (days === 0) return { days, label: 'Today', color: 'text-amber-400' }
  if (days <= 7)  return { days, label: `${days}d left`, color: 'text-amber-400' }
  return { days, label: `${days}d left`, color: 'text-emerald-400' }
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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Incoming Containers
          </h1>
          <p className="text-xs text-white/35 mt-1">{pending.length} pending · {arrived.length} received</p>
        </div>
        {isAdmin && (
          <Button variant="primary" size="md" icon={<Plus size={14} />} onClick={() => { setEditCont(null); setFormOpen(true) }}>
            Add Container
          </Button>
        )}
      </div>

      {/* Pending containers */}
      {pending.length === 0 ? (
        <div className="bg-white/3 border border-white/8 rounded-2xl py-16 text-center">
          <Ship size={32} className="mx-auto mb-3 text-white/20" />
          <p className="text-white/30 text-sm">No pending containers</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {pending.map(c => {
            const items = getContItems(products, c.number)
            const totalPcs = items.reduce((s, i) => s + i.qty, 0)
            const eta = getEtaStatus(c.arrivalDate)
            return (
              <div key={c.id} className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-all group">
                {/* Top accent */}
                <div className="h-px bg-gradient-to-r from-amber-500/60 to-transparent mb-4 rounded" />

                {/* Number + ETA */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <Ship size={14} className="text-amber-400/60" />
                      <span className="text-sm font-bold text-white/85" style={{ fontFamily: 'monospace' }}>{c.number}</span>
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
                  <div className="bg-white/3 rounded-xl p-3 text-center">
                    <div className="text-xs text-white/25 uppercase tracking-widest mb-1">Loading</div>
                    <div className="text-xs font-semibold text-white/70">{formatDate(c.loadingDate)}</div>
                  </div>
                  <div className="bg-white/3 rounded-xl p-3 text-center">
                    <div className="text-xs text-white/25 uppercase tracking-widest mb-1">ETA</div>
                    <div className="text-xs font-semibold text-white/70">{formatDate(c.arrivalDate)}</div>
                  </div>
                </div>

                {/* Items */}
                <div className="max-h-24 overflow-y-auto mb-4 space-y-1">
                  {items.length ? items.map(i => (
                    <div key={i.id} className="flex justify-between text-xs">
                      <span className="text-white/45 truncate">{i.name}</span>
                      <span className="text-amber-400/70 font-semibold shrink-0 ml-2">+{i.qty}</span>
                    </div>
                  )) : <p className="text-xs text-white/20">No items listed</p>}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/6">
                  <Badge variant="blue">{totalPcs} pcs · {items.length} types</Badge>
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => setArriveTarget(c)}
                        className="ml-auto px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        ✓ Arrived
                      </button>
                      <button
                        onClick={() => { setEditCont(c); setFormOpen(true) }}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 text-white/30 hover:bg-amber-500/10 hover:text-amber-400 transition-all"
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
            <CheckCircle2 size={16} className="text-emerald-400" />
            <h2 className="text-sm font-semibold text-white/50 uppercase tracking-widest">Received Containers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {arrived.map(c => {
              const items = getContItems(products, c.number)
              return (
                <div key={c.id} className="bg-emerald-500/4 border border-emerald-500/12 rounded-2xl p-5">
                  <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent mb-4 rounded" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-white/70" style={{ fontFamily: 'monospace' }}>{c.number}</span>
                    <Badge variant="green">Received</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-white/3 rounded-xl p-2.5 text-center">
                      <div className="text-xs text-white/20 uppercase tracking-widest mb-0.5">Loading</div>
                      <div className="text-xs font-semibold text-white/50">{formatDate(c.loadingDate)}</div>
                    </div>
                    <div className="bg-white/3 rounded-xl p-2.5 text-center">
                      <div className="text-xs text-white/20 uppercase tracking-widest mb-0.5">Arrived</div>
                      <div className="text-xs font-semibold text-white/50">{formatDate(c.arrivalDate)}</div>
                    </div>
                  </div>
                  <div className="text-xs text-white/25">{items.slice(0,3).map(i => i.name).join(', ')}{items.length > 3 ? ` +${items.length-3} more` : ''}</div>
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
              <p className="text-sm text-white/50 mb-4">Container <strong className="text-white">{arriveTarget.number}</strong></p>
              <div className="bg-white/3 rounded-xl p-4 mb-4 max-h-48 overflow-y-auto">
                <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Products arriving:</div>
                {items.map(i => (
                  <div key={i.id} className="flex justify-between text-sm py-1 border-b border-white/5 last:border-0">
                    <span className="text-white/60">{i.name}</span>
                    <span className="text-emerald-400 font-semibold">+{i.qty}</span>
                  </div>
                ))}
                {items.length === 0 && <p className="text-sm text-white/25">No products listed</p>}
              </div>
              <p className="text-xs text-white/35 mb-5">All products will have their stock automatically updated.</p>
              <div className="flex gap-3">
                <button
                  onClick={confirmArrive}
                  disabled={confirming}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-white transition-all disabled:opacity-50"
                >
                  {confirming ? 'Processing...' : '✓ Confirm & Update Stock'}
                </button>
                <button
                  onClick={() => setArriveTarget(null)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
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
