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
        <div className="bg-white/3 border border-white/8 rounded-3xl p-8 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🔐</span>
          </div>

          <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Admin Login</h2>
          <p className="text-sm text-white/35 mb-8">Enter your 4-digit PIN</p>

          {/* Dots */}
          <div className={`flex justify-center gap-4 mb-8 ${shake ? 'anim-shake' : ''}`}>
            {[0,1,2,3].map(i => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-150 ${
                  i < pin.length
                    ? error
                      ? 'bg-red-500 border-red-500'
                      : 'bg-amber-400 border-amber-400'
                    : 'border-white/20 bg-transparent'
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
                      ? 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                      : 'bg-white/8 text-white hover:bg-white/15 border border-white/8'
                  }`}
                >
                  {k === 'del' ? '⌫' : k}
                </button>
              )
            })}
          </div>

          {error && (
            <p className="text-xs text-red-400 font-medium">Incorrect PIN. Please try again.</p>
          )}
        </div>

        <p className="text-center text-xs text-white/15 mt-4">Furco Inventory Management System</p>
      </div>
    </div>
  )
}
