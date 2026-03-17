import { useStore } from './store/useStore'
import { useFirebase } from './hooks/useFirebase'
import { Sidebar } from './components/layout/Sidebar'
import { Dashboard } from './components/features/Dashboard'
import { StockList } from './components/features/StockList'
import { Containers } from './components/features/Containers'
import { History } from './components/features/History'
import { Login } from './components/features/Login'
import { Toast } from './components/ui/Toast'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-50 flex items-center justify-center z-50">
      <div className="text-center">
        <img src="/furco-logo.png" alt="Furco" className="h-12 w-auto mx-auto mb-6 opacity-70" />
        <div className="flex gap-1.5 justify-center">
          {[0,1,2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-amber-500 anim-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function PageContent() {
  const page = useStore(s => s.page)
  switch (page) {
    case 'dashboard':  return <Dashboard />
    case 'list':       return <StockList />
    case 'containers': return <Containers />
    case 'history':    return <History />
    case 'login':      return <Login />
    default:           return <StockList />
  }
}

export default function App() {
  useFirebase()
  const loading = useStore(s => s.loading)

  if (loading) return <LoadingScreen />

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8 w-full">
          <PageContent />
        </main>
        <footer className="hidden lg:flex px-8 py-4 border-t border-slate-200 items-center justify-between bg-white">
          <div className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} Furco Wholesale Furniture · Toronto, Canada
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 anim-pulse" />
            <span className="text-xs text-slate-400">Live · Real-time Sync</span>
          </div>
        </footer>
      </div>
      <Toast />
    </div>
  )
}
