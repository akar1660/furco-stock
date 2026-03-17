import { LayoutDashboard, Package, Ship, History, LogOut, LogIn, X, Menu } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '../../store/useStore'
import type { Page } from '../../types'

const ADMIN_ITEMS = [
  { id: 'dashboard' as Page, label: 'Overview',    icon: LayoutDashboard },
  { id: 'list'      as Page, label: 'Stock List',  icon: Package },
  { id: 'containers'as Page, label: 'Containers',  icon: Ship },
  { id: 'history'   as Page, label: 'Activity Log',icon: History },
]

const PUBLIC_ITEMS = [
  { id: 'list' as Page, label: 'Product Catalogue', icon: Package },
]

export function Sidebar() {
  const { page, setPage, isAdmin, setAdmin, showToast } = useStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  const items = isAdmin ? ADMIN_ITEMS : PUBLIC_ITEMS

  const navigate = (id: Page) => {
    if (id === 'list' && !isAdmin) setPage('list')
    else setPage(id)
    setMobileOpen(false)
  }

  const logout = () => {
    setAdmin(false)
    setPage('list')
    showToast('Logged out', 'warn')
    setMobileOpen(false)
  }

  const NavItem = ({ item }: { item: typeof ADMIN_ITEMS[0] }) => {
    const active = page === item.id
    return (
      <button
        onClick={() => navigate(item.id)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left group
          ${active
            ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
      >
        <item.icon size={16} className={active ? 'text-amber-600' : 'text-slate-400 group-hover:text-slate-600'} />
        {item.label}
      </button>
    )
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <img src="/furco-logo.png" alt="Furco" className="h-8 w-auto" />
          <div className="w-px h-5 bg-slate-200" />
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none">Wholesale</div>
            <div className="text-xs text-amber-600 font-medium mt-0.5">Toronto, Canada</div>
          </div>
        </div>
      </div>

      {/* Admin badge */}
      {isAdmin && (
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-xl ring-1 ring-amber-200">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 anim-pulse" />
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest">Admin Mode</span>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {items.map(item => <NavItem key={item.id} item={item} />)}
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-5 border-t border-slate-100 pt-4 space-y-1">
        {isAdmin ? (
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:text-red-700 hover:bg-red-50 transition-all group"
          >
            <LogOut size={16} className="text-red-400 group-hover:text-red-600" />
            Logout
          </button>
        ) : (
          <button
            onClick={() => { setPage('login'); setMobileOpen(false) }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all group"
          >
            <LogIn size={16} className="text-slate-400 group-hover:text-slate-600" />
            Admin Login
          </button>
        )}
        <div className="px-3 pt-2">
          <div className="text-xs text-slate-300 font-medium">Furco Inventory v2.0</div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-white border-r border-slate-200 min-h-screen sticky top-0 h-screen shadow-sm">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between px-4 h-14 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <img src="/furco-logo.png" alt="Furco" className="h-7 w-auto" />
        <div className="flex items-center gap-2">
          {isAdmin && <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-full ring-1 ring-amber-200">ADMIN</span>}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 anim-over" style={{ background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setMobileOpen(false)}>
          <div className="w-72 h-full bg-white border-r border-slate-200 anim-up shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="pt-14 h-full">
              <SidebarContent />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
