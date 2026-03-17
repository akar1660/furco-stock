import { LayoutDashboard, Package, Ship, History, LogOut, LogIn } from 'lucide-react'
import { useStore } from '../../store/useStore'
import type { Page } from '../../types'

const ADMIN_NAV = [
  { id: 'dashboard' as Page, label: 'Overview',   icon: LayoutDashboard },
  { id: 'list'      as Page, label: 'Stock',      icon: Package },
  { id: 'containers'as Page, label: 'Containers', icon: Ship },
  { id: 'history'   as Page, label: 'Log',        icon: History },
]

const PUBLIC_NAV = [
  { id: 'list' as Page, label: 'Products', icon: Package },
]

export function Sidebar() {
  const { page, setPage, isAdmin, setAdmin, showToast } = useStore()

  const navItems = isAdmin ? ADMIN_NAV : PUBLIC_NAV

  const navigate = (id: Page) => setPage(id)

  const logout = () => {
    setAdmin(false)
    setPage('list')
    showToast('Logged out', 'warn')
  }

  const NavItem = ({ item }: { item: typeof ADMIN_NAV[0] }) => {
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
        {navItems.map(item => <NavItem key={item.id} item={item} />)}
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
            onClick={() => setPage('login')}
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

  /* ── Mobile bottom tab bar ── */
  const MobileBottomNav = () => {
    const allTabs = isAdmin
      ? [...ADMIN_NAV, { id: 'logout' as Page, label: 'Logout', icon: LogOut }]
      : [...PUBLIC_NAV, { id: 'login' as Page, label: 'Login', icon: LogIn }]

    return (
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex items-stretch">
          {allTabs.map(tab => {
            const isLogout = tab.id === 'logout'
            const active = !isLogout && page === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (isLogout) { logout() }
                  else navigate(tab.id)
                }}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-semibold transition-all ${
                  isLogout
                    ? 'text-red-400 active:bg-red-50'
                    : active
                    ? 'text-amber-600'
                    : 'text-slate-400 active:bg-slate-50'
                }`}
              >
                <tab.icon
                  size={20}
                  className={active ? 'text-amber-600' : isLogout ? 'text-red-400' : 'text-slate-400'}
                  strokeWidth={active ? 2.5 : 1.8}
                />
                <span>{tab.label}</span>
                {active && <div className="absolute top-0 w-8 h-0.5 bg-amber-500 rounded-full" />}
              </button>
            )
          })}
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-white border-r border-slate-200 min-h-screen sticky top-0 h-screen shadow-sm">
        <SidebarContent />
      </aside>

      {/* Mobile: slim top bar (logo + admin badge only) */}
      <div className="lg:hidden flex items-center justify-between px-4 h-13 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm" style={{ height: '52px' }}>
        <div className="flex items-center gap-2.5">
          <img src="/furco-logo.png" alt="Furco" className="h-6 w-auto" />
          <div className="w-px h-4 bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium">Furco Wholesale</span>
        </div>
        {isAdmin && (
          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full ring-1 ring-amber-200 uppercase tracking-wide">
            Admin
          </span>
        )}
      </div>

      {/* Mobile: bottom nav bar */}
      <MobileBottomNav />
    </>
  )
}
