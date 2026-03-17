import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'danger' | 'success' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-slate-900 text-white hover:bg-amber-600 active:scale-95',
  ghost:   'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 active:scale-95',
  danger:  'bg-red-50 text-red-600 ring-1 ring-red-200 hover:bg-red-500 hover:text-white active:scale-95',
  success: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-500 hover:text-white active:scale-95',
  outline: 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-amber-400 hover:text-amber-700 active:scale-95',
}

const SIZES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2   text-sm gap-2',
  lg: 'px-5 py-2.5 text-sm gap-2',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  loading?: boolean
  children: ReactNode
}

export function Button({ variant = 'ghost', size = 'md', icon, loading, children, className = '', ...props }: Props) {
  return (
    <button
      className={`inline-flex items-center font-semibold rounded-lg transition-all duration-150 cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <svg className="anim-spin w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      ) : icon}
      {children}
    </button>
  )
}
