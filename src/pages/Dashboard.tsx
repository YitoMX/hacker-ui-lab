import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { Sparkles, DollarSign, Users, Award, Percent } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/components/ProductCard"

// Lazy imports of heavy widgets
const ProductCard = lazy(() =>
  import("@/components/ProductCard").then((m) => ({ default: m.ProductCard }))
)
const DemoTable = lazy(() =>
  import("@/components/DemoTable").then((m) => ({ default: m.DemoTable }))
)
const LoginForm = lazy(() =>
  import("@/components/LoginForm").then((m) => ({ default: m.LoginForm }))
)

const sampleProducts: Product[] = [
  {
    id: "prod-1",
    name: "Quantum Nexus Server",
    category: "Infrastructure",
    price: 1499.00,
    rating: 4.9,
    imageGradient: "from-indigo-600 via-purple-600 to-pink-600",
    description: "Enterprise-grade high performance hardware server nodes with low latency data processing, virtual machine management and edge routing capabilities.",
    features: ["128 vCPUs Dedicated", "512GB ECC DDR5 RAM", "10Gbps Fiber Uplink", "99.999% High Uptime"],
  },
  {
    id: "prod-2",
    name: "CipherShield Firewall Gateway",
    category: "Security",
    price: 299.00,
    rating: 4.8,
    imageGradient: "from-teal-500 via-emerald-600 to-cyan-600",
    description: "Hardware firewall router containing deep packet scanning capabilities, dynamic threat identification and integrated Zero Trust local proxy gateways.",
    features: ["Intrusion Prevention", "Zero Trust Engine", "WireGuard Protocol", "Real-time Security log"],
  },
  {
    id: "prod-3",
    name: "Aura Cold Storage Key",
    category: "Storage Hardware",
    price: 89.00,
    rating: 4.7,
    imageGradient: "from-amber-500 via-orange-500 to-red-600",
    description: "Biometric USB security hardware token supporting decentralized key storage, secure firmware updates and Bluetooth low energy connections.",
    features: ["Biometric Sensor", "Dual Cryptographic Chips", "E-Ink High Resolution", "IP68 Water Resistance"],
  },
]

function ProductCardSkeleton() {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border bg-card animate-pulse">
      <div className="h-48 w-full bg-muted/40" />
      <div className="p-4 pb-1 space-y-2">
        <div className="flex justify-between">
          <div className="h-3 bg-muted/40 rounded w-1/4" />
          <div className="h-3 bg-muted/40 rounded w-1/12" />
        </div>
        <div className="h-5 bg-muted/40 rounded w-3/4 mt-2" />
      </div>
      <div className="p-4 pt-1 flex-grow">
        <div className="h-3 bg-muted/40 rounded w-full mt-2" />
        <div className="h-3 bg-muted/40 rounded w-5/6 mt-1.5" />
      </div>
      <div className="flex items-center justify-between border-t border-border/50 p-4 bg-muted/5">
        <div className="h-6 bg-muted/40 rounded w-1/4" />
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-muted/40 rounded" />
          <div className="h-8 w-16 bg-muted/40 rounded" />
        </div>
      </div>
    </Card>
  )
}

function ComponentSkeleton() {
  return (
    <Card className="w-full h-[400px] flex flex-col justify-between p-6 animate-pulse border-border bg-card">
      <div className="space-y-4">
        <div className="h-6 bg-muted/40 rounded w-1/3" />
        <div className="h-4 bg-muted/40 rounded w-2/3" />
        <div className="space-y-3 pt-6">
          <div className="h-8 bg-muted/40 rounded" />
          <div className="h-8 bg-muted/40 rounded" />
          <div className="h-8 bg-muted/40 rounded" />
          <div className="h-8 bg-muted/40 rounded" />
        </div>
      </div>
      <div className="h-10 bg-muted/40 rounded w-full mt-4" />
    </Card>
  )
}

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Hero Header Section */}
      <div className="relative overflow-hidden bg-muted/40 border-b border-border/80 py-10 sm:py-16">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4"
          >
            <Sparkles className="h-3 w-3" />
            <span>Developer Sandbox Environment</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground"
          >
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-purple-600 bg-clip-text text-transparent">
              ui-lab
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg"
          >
            A high-fidelity layout showcasing responsive navigation, animated cards, schema-validated forms, and custom sorted tables.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 space-y-8 sm:space-y-12">
        {/* Metric Cards Section */}
        <section id="dashboard" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground mt-0.5">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground mt-0.5">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground">Sales Conversions</CardTitle>
              <Percent className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12.2%</div>
              <p className="text-xs text-muted-foreground mt-0.5">+1.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground">Core Subscriptions</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground mt-0.5">+201 since yesterday</p>
            </CardContent>
          </Card>
        </section>

        {/* Product Catalog Grid */}
        <section id="products" className="space-y-6">
          <div className="border-b border-border/60 pb-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Interactive Products</h2>
            <p className="text-sm text-muted-foreground">
              Framer Motion animations. Click quick view to test Dialog modal.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProducts.map((prod) => (
              <Suspense key={prod.id} fallback={<ProductCardSkeleton />}>
                <ProductCard product={prod} />
              </Suspense>
            ))}
          </div>
        </section>

        {/* Transaction Table and Validation Form */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
          {/* Transaction Table - 2 columns wide on desktop */}
          <section id="sales" className="lg:col-span-2 space-y-6">
            <div className="border-b border-border/60 pb-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Recent Transactions</h2>
              <p className="text-sm text-muted-foreground">
                TanStack Table sorting and search filter.
              </p>
            </div>
            <Suspense fallback={<ComponentSkeleton />}>
              <DemoTable />
            </Suspense>
          </section>

          {/* Form validation card - 1 column wide on desktop */}
          <section id="form" className="space-y-6">
            <div className="border-b border-border/60 pb-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">System Access</h2>
              <p className="text-sm text-muted-foreground">
                Zod validation sandbox.
              </p>
            </div>
            <Suspense fallback={<ComponentSkeleton />}>
              <LoginForm />
            </Suspense>
          </section>
        </div>
      </div>
    </div>
  )
}
