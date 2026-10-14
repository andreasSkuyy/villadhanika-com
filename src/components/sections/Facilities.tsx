import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Reveal from '../ui/Reveal'
import IconFor from '../ui/IconFor'

export default function Facilities() {
  return (
    <Section id="facilities" tone="sand">
      <Eyebrow>Facilities</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">Everything already here</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-x-12">
        {villa.facilities.map((item, i) => (
          <Reveal key={item.label} delay={i * 80} className="flex gap-4">
            <IconFor name={item.icon} className="mt-1 size-6 shrink-0 text-wood" />
            <div>
              <h3 className="font-display text-xl md:text-2xl">{item.label}</h3>
              <p className="mt-2 text-base/relaxed text-ink/80">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
