import { cn } from "@/lib/utils"
import React from "react"

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return <button ref={ref} className={cn("px-4 py-2 rounded-xl bg-black text-white", className)} {...props} />
  }
)
Button.displayName = "Button"
