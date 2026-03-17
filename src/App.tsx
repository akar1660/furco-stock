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
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50">
      <div className="text-center">
        <img src="/furco-logo.png" alt="Furco" className="h-12 w-auto mx-auto mb-6 opacity-80" />
        <div className="flex gap-1.5 justify-center">
          {[0,1,2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-amber-400 anim-pulse"
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
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 lg:p-8 max-w-6xl w-full">
          <PageContent />
        </main>
        <footer className="px-6 lg:px-8 py-4 border-t border-white/5 flex items-center justify-between">
          <div className="text-xs text-white/15">
            © {new Date().getFullYear()} Furco Wholesale Furniture · Toronto, Canada
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 anim-pulse" />
            <span className="text-xs text-white/15">Live · Real-time Sync</span>
          </div>
        </footer>
      </div>
      <Toast />
    </div>
  )
}
