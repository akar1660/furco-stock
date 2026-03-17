import type { ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  width?: string
}

export function Modal({ open, onClose, title, children, width = 'max-w-md' }: ModalProps) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 anim-over"
      style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className={`w-full ${width} bg-white border border-slate-200 rounded-2xl shadow-2xl anim-up max-h-[90vh] overflow-y-auto`}
        onClick={e => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-all"
            >
              <X size={15} />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export function ConfirmModal({ open, onClose, onConfirm, title, message, danger = false }: {
  open: boolean; onClose: () => void; onConfirm: () => void
  title: string; message: ReactNode; danger?: boolean
}) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="text-sm text-slate-600 mb-6">{message}</p>
      <div className="flex gap-3">
        <button
          onClick={onConfirm}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${danger ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-slate-900 hover:bg-amber-600 text-white'}`}
        >
          Confirm
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
