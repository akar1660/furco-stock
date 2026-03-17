import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react'

const BASE = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-150 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/15'

export function Input({ label, className = '', ...props }: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">{label}</label>}
      <input className={`${BASE} ${className}`} {...props} />
    </div>
  )
}

export function Select({ label, children, className = '', ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">{label}</label>}
      <select className={`${BASE} cursor-pointer [&>option]:bg-zinc-900 ${className}`} {...props}>
        {children}
      </select>
    </div>
  )
}

export function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative">
      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || 'Search...'}
        className={`${BASE} pl-10`}
      />
    </div>
  )
}
