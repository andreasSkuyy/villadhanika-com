import { useRef, useState } from 'react'
import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Figure from '../ui/Figure'
import Lightbox from '../ui/Lightbox'

export default function Gallery() {
  const [openAt, setOpenAt] = useState<number | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Section id="gallery" tone="sand-alt">
      <Eyebrow>Gallery</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">The villa in pictures</h2>

      <div className="mt-10 columns-2 gap-4 md:columns-3">
        {villa.gallery.map((item, i) => (
          <button
            key={item.image}
            onClick={(e) => { triggerRef.current = e.currentTarget; setOpenAt(i) }}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            aria-label={`Open photo ${i + 1}: ${item.alt}`}
          >
            <Figure
              src={item.image}
              alt={item.alt}
              className="aspect-4/3 w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {openAt !== null && (
        <Lightbox
          images={villa.gallery}
          index={openAt}
          onClose={() => { setOpenAt(null); triggerRef.current?.focus() }}
          onIndexChange={setOpenAt}
        />
      )}
    </Section>
  )
}
