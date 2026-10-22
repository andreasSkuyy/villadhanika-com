import { useEffect, useState, type RefObject } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { villa } from '../../content/villa'
import { siteConfig, waLink } from '../../config/site'
import Button from '../ui/Button'

/** Every image in assets/hero, ordered by filename (Hero1…Hero4). */
const heroImages = Object.entries(
  import.meta.glob('../../assets/hero/*.webp', { eager: true, import: 'default' }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string)

export default function Hero({ sentinel }: { sentinel: RefObject<HTMLDivElement | null> }) {
  const [slide, setSlide] = useState(0)

  // Modulo index, so the slide can never point past the last image (which rendered blank).
  useEffect(() => {
    if (heroImages.length < 2) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setTimeout(
      () => setSlide((i) => (i + 1) % heroImages.length),
      siteConfig.heroSlideMs,
    )
    return () => clearTimeout(id)
  }, [slide])

  return (
    <section id="hero" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      {heroImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          width={2000}
          height={1333}
          loading="eager"
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === slide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/30" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-24 md:px-8 md:pb-28">
        <p className="flex items-center gap-2 text-sm text-sand-100">
          <MapPin className="size-4" aria-hidden="true" />
          {villa.address}
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-tight text-sand-50 md:text-7xl">
          {villa.name}
        </h1>
        <p className="mt-4 max-w-[34ch] text-lg text-sand-100 md:text-xl">{villa.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={waLink()} variant="primary">Chat on WhatsApp</Button>
          <Button href="#about" variant="ghost-light">Explore the villa</Button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-2 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center text-sand-50/80 hover:text-sand-50"
      >
        <ChevronDown className="size-7 animate-bounce" aria-hidden="true" />
      </a>

      <div ref={sentinel} className="absolute bottom-0 h-px w-full" />
    </section>
  )
}
