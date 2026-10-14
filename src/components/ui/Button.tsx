import type { ReactNode } from 'react'

const VARIANTS = {
  primary: 'bg-amber text-ink hover:brightness-95',
  ghost: 'border border-wood/40 text-ink hover:bg-wood/10',
  'ghost-light': 'border border-sand-50/40 text-sand-50 hover:bg-sand-50/10',
  wa: 'bg-wa text-white hover:brightness-95',
} as const

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 ' +
  'text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-amber'

export default function Button({
  href, variant = 'primary', className = '', children, ...rest
}: {
  href?: string
  variant?: keyof typeof VARIANTS
  className?: string
  children: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return <button className={classes} {...rest}>{children}</button>
}
