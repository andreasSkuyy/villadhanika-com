import { MapPin } from 'lucide-react'
import { villa } from '../../content/villa'
import { siteConfig } from '../../config/site'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Figure from '../ui/Figure'
import Button from '../ui/Button'

export default function Location() {
  const { eyebrow, heading, paragraphs, thingsToDo, image } = villa.location

  return (
    <Section id="location" tone="sand">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">{heading}</h2>
          <div className="mt-6 max-w-[65ch] space-y-4 text-base/relaxed md:text-lg/relaxed">
            {paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          </div>

          <h3 className="mt-10 font-display text-xl md:text-2xl">Things to do nearby</h3>
          <ul className="mt-4 space-y-2">
            {thingsToDo.map((item) => (
              <li key={item} className="flex gap-3 text-base/relaxed text-ink/80">
                <MapPin className="mt-1 size-4 shrink-0 text-wood" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Figure
            src={image}
            alt={`Aerial view of Villa Dhanika and its pool, surrounded by rice fields in ${siteConfig.address}`}
            className="aspect-4/3 w-full rounded-2xl object-cover shadow-soft"
          />
          <Button href={siteConfig.mapsUrl} variant="ghost" className="mt-4">
            <MapPin className="size-4" aria-hidden="true" />
            Open in Google Maps
          </Button>
        </div>
      </div>
    </Section>
  )
}
