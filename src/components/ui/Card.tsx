import type { ReactNode } from 'react'
import Figure from './Figure'

export default function Card({
  image, alt, title, className = '', children,
}: {
  image: string
  alt: string
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <article className={`overflow-hidden rounded-2xl bg-sand-50 shadow-soft ${className}`}>
      <Figure src={image} alt={alt} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-display text-xl md:text-2xl">{title}</h3>
        <div className="mt-3 text-base/relaxed text-ink/80">{children}</div>
      </div>
    </article>
  )
}
