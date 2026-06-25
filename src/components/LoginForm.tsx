import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Loader2, Mail, Lock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    setSuccessMsg(null)
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setSuccessMsg(`Access granted for ${data.email}!`)
    reset()
  }

  return (
    <Card className="w-full max-w-md mx-auto border-border bg-card shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tight">Login Credentials</CardTitle>
        <CardDescription>
          Provide your enterprise email and password to log in.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Success Notification */}
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 p-3 text-sm text-emerald-800 dark:text-emerald-300"
            >
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span>{successMsg}</span>
            </motion.div>
          )}

          {/* Email input field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-1.5" htmlFor="email">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" />
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
              disabled={isLoading}
              {...register("email")}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-destructive flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* Password input field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5" htmlFor="password">
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                Password
              </label>
              <a href="#" className="text-xs text-primary hover:underline font-medium">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
              disabled={isLoading}
              {...register("password")}
            />
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-destructive flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.password.message}
              </motion.p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing request...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <div className="text-center text-xs text-muted-foreground mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">
              Contact Admin
            </a>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
