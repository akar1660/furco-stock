import { useState } from 'react'
import { useStore } from '../../../store/useStore'
import { ADMIN_PIN } from '../../../lib/constants'

export function Login() {
  const { setAdmin, setPage, showToast } = useStore()
  const [pin, setPin]     = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const press = (d: number | 'del') => {
    setError(false)
    if (d === 'del') { setPin(p => p.slice(0, -1)); return }
    if (pin.length >= 4) return
    const newPin = pin + d
    setPin(newPin)
    if (newPin.length === 4) {
      if (newPin === ADMIN_PIN) {
        setAdmin(true)
        setPage('dashboard')
        showToast('Welcome, Admin 👑', 'ok')
      } else {
        setError(true)
        setShake(true)
        setTimeout(() => { setShake(false); setPin('') }, 400)
      }
    }
  }

  const KEYS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    ['empty',0,'del'],
  ] as const

  return (
    <div className="flex items-center justify-center min-h-[70vh] anim-fade">
      <div className="w-full max-w-xs">
        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-lg">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🔐</span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Admin Login</h2>
          <p className="text-sm text-slate-500 mb-8">Enter your 4-digit PIN</p>

          {/* Dots */}
          <div className={`flex justify-center gap-4 mb-8 ${shake ? 'anim-shake' : ''}`}>
            {[0,1,2,3].map(i => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-150 ${
                  i < pin.length
                    ? error
                      ? 'bg-red-400 border-red-400'
                      : 'bg-amber-500 border-amber-500'
                    : 'border-slate-300 bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-3 max-w-[200px] mx-auto mb-4">
            {KEYS.flat().map((k, i) => {
              if (k === 'empty') return <div key={i} />
              return (
                <button
                  key={i}
                  onClick={() => press(k === 'del' ? 'del' : Number(k))}
                  className={`w-full aspect-square rounded-2xl text-base font-bold transition-all duration-100 active:scale-90 ${
                    k === 'del'
                      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {k === 'del' ? '⌫' : k}
                </button>
              )
            })}
          </div>

          {error && (
            <p className="text-xs text-red-500 font-medium">Incorrect PIN. Please try again.</p>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">Furco Inventory Management System</p>
      </div>
    </div>
  )
}
