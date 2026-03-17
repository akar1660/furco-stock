import { useStore } from '../../store/useStore'

const STYLES = {
  ok:   'bg-zinc-800 text-white border-white/10',
  warn: 'bg-red-500/15 text-red-300 border-red-500/30',
  blue: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
}

const ICONS = {
  ok:   '✓',
  warn: '⚠',
  blue: 'ℹ',
}

export function Toast() {
  const toast = useStore(s => s.toast)
  if (!toast) return null
  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium shadow-2xl anim-toast max-w-xs ${STYLES[toast.type]}`}>
      <span className="text-base">{ICONS[toast.type]}</span>
      <span>{toast.message}</span>
    </div>
  )
}
