import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Figure from '../ui/Figure'

export default function Rooms() {
  return (
    <Section id="rooms" tone="sand-alt">
      <Eyebrow>Rooms &amp; Living Areas</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">
        Six bedrooms across three pavilions
      </h2>

      <div
        tabIndex={0}
        role="region"
        aria-label="Rooms and living areas, scrollable"
        className="themed-scrollbar mt-10 -mx-5 snap-x snap-mandatory overflow-x-auto px-5 pb-4 md:-mx-8 md:px-8"
      >
        <ul className="flex gap-5">
          {villa.rooms.map((room) => (
            <li
              key={room.name}
              className="w-[78%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
            >
              <Figure
                src={room.image}
                alt={room.alt}
                className="aspect-4/3 w-full rounded-2xl object-cover shadow-soft"
              />
              <h3 className="mt-4 font-display text-xl md:text-2xl">{room.name}</h3>
              <p className="mt-2 text-base/relaxed text-ink/80">{room.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <p aria-hidden="true" className="mt-2 text-sm text-ink/60 md:hidden">Swipe to see more</p>
    </Section>
  )
}
