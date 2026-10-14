import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Reveal from '../ui/Reveal'
import IconFor from '../ui/IconFor'

export default function Team() {
  const { eyebrow, heading, intro, roles } = villa.team
  return (
    <Section id="team" tone="sand-alt">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">{heading}</h2>
      <p className="mt-6 max-w-[65ch] text-base/relaxed md:text-lg/relaxed">{intro}</p>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {roles.map((role, i) => (
          <Reveal key={role.role} delay={i * 80}>
            <IconFor name={role.icon} className="size-6 text-wood" />
            <h3 className="mt-3 font-display text-xl md:text-2xl">{role.role}</h3>
            <p className="mt-2 text-base/relaxed text-ink/80">{role.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
