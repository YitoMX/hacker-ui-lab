import { lazy, Suspense } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Navbar } from "./components/Navbar"
import { Loader2 } from "lucide-react"
import "./styles/globals.css"

const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((m) => ({ default: m.Dashboard }))
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function PageLoader() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase animate-pulse">
          Loading ui-lab...
        </span>
      </div>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
