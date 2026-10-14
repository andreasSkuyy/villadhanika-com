import type { RefObject } from 'react'
import { MessageCircle } from 'lucide-react'
import { waLink } from '../config/site'
import { useScrolledPast } from '../hooks/useScrolledPast'

export default function WhatsAppFab({
  sentinel,
}: { sentinel: RefObject<HTMLElement | null> }) {
  const visible = useScrolledPast(sentinel)

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed right-5 bottom-5 z-50 flex items-center gap-3 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
    >
      <span className="hidden rounded-full bg-sand-50 px-4 py-2 text-sm text-ink shadow-soft md:inline">
        Chat with us
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-wa text-white shadow-soft">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-wa" aria-hidden="true" />
        <MessageCircle className="relative size-7" aria-hidden="true" />
      </span>
    </a>
  )
}
