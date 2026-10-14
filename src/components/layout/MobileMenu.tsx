import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { NAV_ITEMS, waLink } from '../../config/site'
import Button from '../ui/Button'

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] bg-sand-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex justify-end p-5">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex size-11 items-center justify-center rounded-full hover:bg-sand-100"
          autoFocus
        >
          <X className="size-6" aria-hidden="true" />
        </button>
      </div>
      <nav className="flex flex-col gap-1 px-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="py-3 font-display text-2xl hover:text-wood"
          >
            {item.label}
          </a>
        ))}
        <Button href={waLink()} variant="primary" className="mt-6 self-start">
          Chat on WhatsApp
        </Button>
      </nav>
    </div>
  )
}
