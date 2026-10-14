import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Figure from '../ui/Figure'
import Reveal from '../ui/Reveal'

export default function About() {
  const { eyebrow, heading, paragraphs, image } = villa.about
  return (
    <Section id="about" tone="sand">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">{heading}</h2>
          <div className="mt-6 space-y-4 max-w-[65ch] text-base/relaxed md:text-lg/relaxed">
            {paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <Figure
            src={image}
            alt="Living pavilion at Villa Dhanika looking out over the rice fields"
            className="aspect-4/5 w-full rounded-2xl object-cover shadow-soft"
          />
        </Reveal>
      </div>
    </Section>
  )
}
