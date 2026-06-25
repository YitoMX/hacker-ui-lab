import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ShoppingCart, Eye, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

export interface Product {
  id: string
  name: string
  category: string
  price: number
  rating: number
  imageGradient: string
  description: string
  features: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className="flex h-full flex-col overflow-hidden border-border bg-card">
          {/* Card Image Area with custom premium gradient */}
          <div className={`relative h-48 w-full bg-gradient-to-tr ${product.imageGradient} flex items-center justify-center p-6 group`}>
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white"
            >
              <Sparkles className="h-10 w-10 drop-shadow" />
            </motion.div>

            {/* Quick badges */}
            <span className="absolute left-3 top-3 rounded-full bg-white/90 dark:bg-black/90 px-2.5 py-0.5 text-xs font-semibold text-foreground shadow-sm">
              {product.category}
            </span>
          </div>

          <CardHeader className="p-4 pb-1">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Verified Hardware</span>
              <div className="flex items-center gap-1 text-amber-500 font-medium">
                <Star className="h-3 w-3 fill-current" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
            </div>
            <CardTitle className="line-clamp-1 mt-1 text-base font-bold text-foreground">
              {product.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-4 pt-1 flex-grow">
            <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t border-border/50 p-4 bg-muted/20">
            <span className="text-lg font-extrabold text-foreground">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-2"
                onClick={() => setIsDialogOpen(true)}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" className="h-8 gap-1 px-3">
                <ShoppingCart className="h-3.5 w-3.5" />
                <span className="text-xs">Add</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Quick View Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
              {product.category}
            </span>
            <DialogTitle className="text-xl font-bold">{product.name}</DialogTitle>
            <DialogDescription className="text-xs">
              Review details and technical specs below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            {/* Modal Mini Banner */}
            <div className={`h-32 w-full rounded-lg bg-gradient-to-tr ${product.imageGradient} flex items-center justify-center`}>
              <Sparkles className="h-12 w-12 text-white drop-shadow-md" />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Description</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Key Specs</h4>
              <ul className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground list-disc list-inside">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="truncate">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <DialogFooter className="sm:justify-between items-center mt-2 pt-4 border-t border-border">
            <span className="text-xl font-extrabold text-foreground">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              <Button className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
