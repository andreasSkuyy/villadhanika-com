import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

export default function Reveal({
  delay = 0, className = '', children,
}: { delay?: number; className?: string; children: ReactNode }) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
      className={`${shown ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
