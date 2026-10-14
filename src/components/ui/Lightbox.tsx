import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '../../types/content'
import { resolveImage } from '../../lib/images'

export default function Lightbox({
  images, index, onClose, onIndexChange,
}: {
  images: readonly GalleryImage[]
  index: number
  onClose: () => void
  onIndexChange: (next: number) => void
}) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const go = (step: number) =>
    onIndexChange((index + step + images.length) % images.length)

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Tab') {
        // Only three controls exist; keep focus inside by re-focusing the dialog.
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
    }
  })

  const current = images[index]
  const url = resolveImage(current.image)

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
        touchStartX.current = null
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        aria-label="Close gallery"
        className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-sand-50 hover:bg-sand-50/10"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); go(-1) }}
        aria-label="Previous photo"
        className="absolute left-2 flex size-11 items-center justify-center rounded-full text-sand-50 hover:bg-sand-50/10"
      >
        <ChevronLeft className="size-7" aria-hidden="true" />
      </button>

      {url ? (
        <img
          src={url}
          alt={current.alt}
          className="max-h-[85vh] max-w-full rounded-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <p className="text-sand-50">{current.alt}</p>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); go(1) }}
        aria-label="Next photo"
        className="absolute right-2 flex size-11 items-center justify-center rounded-full text-sand-50 hover:bg-sand-50/10"
      >
        <ChevronRight className="size-7" aria-hidden="true" />
      </button>

      <p className="absolute bottom-4 text-sm text-sand-50/70">
        {index + 1} / {images.length}
      </p>
    </div>
  )
}
