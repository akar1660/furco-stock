import { useStore } from '../../../store/useStore'
import { Button } from '../../ui/Button'
import { Trash2 } from 'lucide-react'

const TYPE_CONFIG = {
  add:    { label: 'Stock Added',       dot: 'bg-emerald-500', text: 'text-emerald-400' },
  sub:    { label: 'Stock Out',         dot: 'bg-red-500',     text: 'text-red-400' },
  edit:   { label: 'Edited',            dot: 'bg-amber-500',   text: 'text-amber-400' },
  arrive: { label: 'Container Arrived', dot: 'bg-blue-500',    text: 'text-blue-400' },
  out:    { label: 'Sales/Out',         dot: 'bg-red-500',     text: 'text-red-400' },
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
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Activity Log</h1>
          <p className="text-xs text-white/35 mt-1">{history.length} entries</p>
        </div>
        {history.length > 0 && (
          <Button variant="danger" size="md" icon={<Trash2 size={14} />} onClick={clearHistory}>
            Clear History
          </Button>
        )}
      </div>

      <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
        {history.length === 0 ? (
          <div className="py-16 text-center text-white/25 text-sm">No activity recorded yet.</div>
        ) : (
          <div className="divide-y divide-white/5">
            {history.map((r, i) => {
              const cfg = TYPE_CONFIG[r.type] || TYPE_CONFIG.edit
              const d = new Date(r.date)
              const ds = d.toLocaleDateString('tr-TR') + ' ' + d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
              const sign = r.type === 'sub' || r.type === 'out' ? '−' : '+'
              return (
                <div key={i} className="flex items-start gap-4 px-5 py-4 hover:bg-white/2 transition-colors">
                  <div className="mt-1.5 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white/80 truncate">{r.prodName}</div>
                    <div className="text-xs text-white/35 mt-0.5">
                      <span className={`${cfg.text} font-semibold`}>
                        {cfg.label}{r.qty ? ` ${sign}${r.qty} pcs` : ''}
                      </span>
                      {r.note && <span> · {r.note}</span>}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-white/25">{r.user}</div>
                    <div className="text-xs text-white/20 mt-0.5">{ds}</div>
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
