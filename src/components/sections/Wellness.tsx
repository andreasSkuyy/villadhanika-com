import { Sparkles } from 'lucide-react'
import { villa } from '../../content/villa'
import { waLink } from '../../config/site'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function Wellness() {
  const { eyebrow, heading, paragraphs, treatments, offers } = villa.wellness

  return (
    <Section id="wellness" tone="leaf">
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">{heading}</h2>
      <div className="mt-6 max-w-[65ch] space-y-4 text-base/relaxed text-sand-50 md:text-lg/relaxed">
        {paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {treatments.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className="h-full rounded-2xl bg-ink/10 p-6">
              <h3 className="font-display text-xl md:text-2xl">{t.name}</h3>
              <p className="mt-3 text-base/relaxed text-sand-50">{t.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-sand-50 p-6 text-ink md:p-10">
        <Eyebrow>
          <span className="flex items-center gap-2">
            <Sparkles className="size-4" aria-hidden="true" />
            Guest offers with Dermaster
          </span>
        </Eyebrow>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title}>
              <h3 className="font-display text-xl md:text-2xl">{offer.title}</h3>
              <p className="mt-2 text-base/relaxed text-ink/80">{offer.description}</p>
            </div>
          ))}
        </div>
        <Button href={waLink('the Dermaster wellness offers')} variant="primary" className="mt-8">
          Ask about wellness
        </Button>
      </div>
    </Section>
  )
}
