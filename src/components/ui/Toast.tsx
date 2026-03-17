import { useStore } from '../../store/useStore'

const STYLES = {
  ok:   'bg-white text-slate-800 border-slate-200 shadow-lg',
  warn: 'bg-red-50 text-red-700 border-red-200 shadow-lg',
  blue: 'bg-blue-50 text-blue-700 border-blue-200 shadow-lg',
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
    <div className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium anim-toast max-w-xs ${STYLES[toast.type]}`}>
      <span className="text-base">{ICONS[toast.type]}</span>
      <span>{toast.message}</span>
    </div>
  )
}
