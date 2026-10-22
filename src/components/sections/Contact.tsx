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
        <div className="flex gap-3">
          <svg
            className="mt-1 size-5 shrink-0 fill-sand-100"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.15.63c-.78.3-1.44.71-2.1 1.37-.66.66-1.07 1.32-1.37 2.1-.3.75-.5 1.63-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.9.3.78.71 1.44 1.37 2.1.66.66 1.32 1.07 2.1 1.37.75.3 1.63.5 2.9.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.9-.56.78-.3 1.44-.71 2.1-1.37.66-.66 1.07-1.32 1.37-2.1.3-.75.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.9-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.75-.3-1.63-.5-2.9-.56C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32m0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0" />
          </svg>
          <div>
            <dt className="text-sm text-sand-50/60">Instagram</dt>
            <dd>
              <a
                className="hover:text-amber"
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                @{siteConfig.instagram}
              </a>
            </dd>
          </div>
        </div>
      </dl>
    </Section>
  )
}
