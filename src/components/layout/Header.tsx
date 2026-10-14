import { useRef, useState, type RefObject } from 'react'
import { Menu } from 'lucide-react'
import { NAV_ITEMS } from '../../config/site'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { villa } from '../../content/villa'
import logo from '../../assets/logo/Villa Dhanika Logo - CMYK.webp'
import MobileMenu from './MobileMenu'

export default function Header({ sentinel }: { sentinel: RefObject<HTMLDivElement | null> }) {
  const solid = useScrolledPast(sentinel)
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition ${
          solid ? 'bg-sand-50/95 shadow-soft backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#hero" aria-label={villa.name}>
            <img
              src={logo}
              alt={villa.name}
              className={`h-10 w-auto transition ${solid ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition hover:text-amber ${
                  solid ? 'text-ink' : 'text-sand-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`flex size-11 items-center justify-center rounded-full md:hidden ${
              solid ? 'text-ink' : 'text-sand-50'
            }`}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {open && (
        <MobileMenu
          onClose={() => {
            setOpen(false)
            menuButtonRef.current?.focus()
          }}
        />
      )}
    </>
  )
}
