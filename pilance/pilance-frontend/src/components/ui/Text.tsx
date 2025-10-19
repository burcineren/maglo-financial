import * as React from "react"
import { cn } from "@/lib/utils"

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'lead' | 'large' | 'small' | 'muted'

type TextProps = {
  variant?: TextVariant
  className?: string
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
} & React.HTMLAttributes<HTMLElement>

const variantClasses: Record<TextVariant, string> = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
}

const Text = ({
  variant = 'p',
  className,
  children,
  as: Component = 'p',
  ...props
}: TextProps) => {
  const baseClass = variantClasses[variant] || ''
  
  return (
    <Component className={cn(baseClass, className)} {...props}>
      {children}
    </Component>
  )
}

export { Text }
