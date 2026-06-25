import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Navbar } from "./components/Navbar"
import { Dashboard } from "./pages/Dashboard"
import "./styles/globals.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Navbar />
        <main>
          <Dashboard />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
