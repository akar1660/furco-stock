import { useStore } from '../../../store/useStore'
import { Button } from '../../ui/Button'
import { Trash2 } from 'lucide-react'

const TYPE_CONFIG = {
  add:    { label: 'Stock Added',       dot: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' },
  sub:    { label: 'Stock Out',         dot: 'bg-red-400',     text: 'text-red-600',     bg: 'bg-red-50' },
  edit:   { label: 'Edited',            dot: 'bg-amber-500',   text: 'text-amber-700',   bg: 'bg-amber-50' },
  arrive: { label: 'Container Arrived', dot: 'bg-blue-500',    text: 'text-blue-700',    bg: 'bg-blue-50' },
  out:    { label: 'Sales/Out',         dot: 'bg-red-400',     text: 'text-red-600',     bg: 'bg-red-50' },
}

export function History() {
  const { history, setHistory, showToast } = useStore()

  const clearHistory = () => {
    if (!confirm('Clear all activity history? This cannot be undone.')) return
    setHistory([])
    localStorage.setItem('furco_hist_local', '[]')
    showToast('History cleared', 'warn')
  }

  return (
    <div className="anim-fade">
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Activity Log</h1>
          <p className="text-xs text-slate-500 mt-1">{history.length} entries</p>
        </div>
        {history.length > 0 && (
          <Button variant="danger" size="md" icon={<Trash2 size={14} />} onClick={clearHistory}>
            Clear History
          </Button>
        )}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {history.length === 0 ? (
          <div className="py-16 text-center text-slate-400 text-sm">No activity recorded yet.</div>
        ) : (
          <div className="divide-y divide-slate-50">
            {history.map((r, i) => {
              const cfg = TYPE_CONFIG[r.type] || TYPE_CONFIG.edit
              const d = new Date(r.date)
              const ds = d.toLocaleDateString('tr-TR') + ' ' + d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
              const sign = r.type === 'sub' || r.type === 'out' ? '−' : '+'
              return (
                <div key={i} className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                  <div className="mt-2 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-800 truncate">{r.prodName}</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
                        {cfg.label}{r.qty ? ` ${sign}${r.qty} pcs` : ''}
                      </span>
                      {r.note && <span className="ml-1 text-slate-400"> · {r.note}</span>}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-slate-500 font-medium">{r.user}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{ds}</div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
