import type { ReactNode } from 'react'

export default function Eyebrow({
  children, light = false,
}: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs uppercase tracking-[0.2em] ${light ? 'text-sand-50' : 'text-wood-deep'}`}>
      {children}
    </p>
  )
}
