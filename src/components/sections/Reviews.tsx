import { Quote } from 'lucide-react'
import { villa } from '../../content/villa'
import Section from '../ui/Section'
import Eyebrow from '../ui/Eyebrow'
import Reveal from '../ui/Reveal'

export default function Reviews() {
  const { eyebrow, heading, intro, items } = villa.reviews

  return (
    <Section id="reviews" tone="sand">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">{heading}</h2>
      <p className="mt-6 max-w-[65ch] text-base/relaxed md:text-lg/relaxed">{intro}</p>

      {/* Columns rather than a grid: the forms vary wildly in length and a
          masonry flow keeps the short thank-you notes from leaving dead space. */}
      <div className="mt-10 gap-6 md:columns-2 lg:columns-3">
        {items.map((review, i) => (
          <Reveal
            key={`${review.name}-${review.date}-${i}`}
            delay={(i % 3) * 80}
            className="mb-6 break-inside-avoid rounded-2xl bg-sand-100 p-6 shadow-soft"
          >
            <figure>
              <Quote className="size-5 text-wood" aria-hidden="true" />
              <blockquote className="mt-3 space-y-2 text-base/relaxed text-ink/80">
                {review.lines.map((line) => <p key={line}>{line}</p>)}
              </blockquote>

              {review.suggestions && (
                <div className="mt-4 border-t border-wood/20 pt-4">
                  <p className="font-display text-sm tracking-wide text-ink/70">
                    Suggestions that would have enhanced our experience
                  </p>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-base/relaxed text-ink/80">
                    {review.suggestions.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                </div>
              )}

              <figcaption className="mt-4 font-display text-lg">
                {review.name}
                {review.date && <span className="text-ink/60"> · {review.date}</span>}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
