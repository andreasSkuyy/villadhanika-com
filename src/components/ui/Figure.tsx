import { ImageIcon } from 'lucide-react'
import { resolveImage } from '../../lib/images'

export default function Figure({
  src, alt, className = '', priority = false, width = 1200, height = 900,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
}) {
  const url = resolveImage(src)

  if (!url) {
    return (
      <div
        role="img"
        aria-label={`${alt} — photo coming soon`}
        className={`flex items-center justify-center bg-sand-100 ${className}`}
      >
        <ImageIcon className="size-10 text-wood/40" aria-hidden="true" />
      </div>
    )
  }

  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
    />
  )
}
