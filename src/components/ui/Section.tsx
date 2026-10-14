import type { ReactNode } from 'react'

const TONES = {
  sand: 'bg-sand-50 text-ink',
  'sand-alt': 'bg-sand-100 text-ink',
  leaf: 'bg-leaf text-sand-50',
  ink: 'bg-ink text-sand-50',
} as const

export type Tone = keyof typeof TONES

export default function Section({
  id, tone = 'sand', className = '', children,
}: {
  id: string
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`${TONES[tone]} py-16 md:py-28 [&_p]:text-justify ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  )
}
