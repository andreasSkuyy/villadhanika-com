import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { villa } from '../../content/villa'
import { siteConfig, waLink } from '../../config/site'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <Section id="contact" tone="ink">
      <Eyebrow light>Contact</Eyebrow>
      <h2 className="mt-3 max-w-[18ch] font-display text-3xl md:text-5xl">
        Plan your stay at {villa.name}
      </h2>
      <p className="mt-4 max-w-[55ch] text-base/relaxed text-sand-100 md:text-lg/relaxed">
        Tell us your dates and we will come back to you with availability and rates.
      </p>

      <Button href={waLink()} variant="wa" className="mt-8">
        <MessageCircle className="size-5" aria-hidden="true" />
        Chat on WhatsApp
      </Button>

      <dl className="mt-12 grid gap-8 border-t border-sand-50/15 pt-8 sm:grid-cols-2">
        <div className="flex gap-3">
          <Mail className="mt-1 size-5 shrink-0 text-sand-100" aria-hidden="true" />
          <div>
            <dt className="text-sm text-sand-50/60">Email</dt>
            <dd>
              <a className="hover:text-amber" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </dd>
          </div>
        </div>
        <div className="flex gap-3">
          <MapPin className="mt-1 size-5 shrink-0 text-sand-100" aria-hidden="true" />
          <div>
            <dt className="text-sm text-sand-50/60">Address</dt>
            <dd>{siteConfig.address}</dd>
          </div>
        </div>
      </dl>
    </Section>
  )
}
