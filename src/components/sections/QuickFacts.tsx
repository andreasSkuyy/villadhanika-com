import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Reveal from '../ui/Reveal'
import IconFor from '../ui/IconFor'

export default function QuickFacts() {
  return (
    <Section id="facts" tone="sand">
      <Eyebrow>At a glance</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">Quick facts</h2>
      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {villa.facts.map((fact, i) => (
          <Reveal key={fact.label} delay={i * 80}>
            <IconFor name={fact.icon} className="size-6 text-wood" />
            <dt className="mt-3 font-display text-xl">{fact.label}</dt>
            <dd className="mt-1 text-sm/relaxed text-ink/80">{fact.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
