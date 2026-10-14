export const siteConfig = {
  /** International format, digits only, no "+" and no spaces. REPLACE BEFORE LAUNCH. */
  whatsappNumber: '62812XXXXXXX',
  email: 'reservations@elitehavens.com',
  address: 'Batu Bolong, Canggu, Bali, Indonesia',
  managedBy: 'The Elite Havens Group',
  mapsUrl: 'https://www.google.com/maps/place/Villa+Dhanika/@-8.6494057,115.1369427,17z/data=!4m22!1m12!3m11!1s0x2dd23900598230b3:0xe12ea023838f9ac5!2sVilla+Dhanika!5m2!4m1!1i2!8m2!3d-8.649411!4d115.139523!9m1!1b1!16s%2Fg%2F11vwn81ch2!3m8!1s0x2dd23900598230b3:0xe12ea023838f9ac5!5m2!4m1!1i2!8m2!3d-8.649411!4d115.139523!16s%2Fg%2F11vwn81ch2?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D',
  heroSlideMs: 5000,
} as const

const DEFAULT_SUBJECT = 'Villa Dhanika'

/**
 * Build a wa.me link with a pre-filled message.
 * `context` is spliced into the sentence, so pass a fragment such as
 * "hosting a corporate retreat", not a whole sentence.
 */
export function waLink(context?: string): string {
  const topic = context?.trim()
  const message = topic
    ? `Hi, I'd like to know more about ${topic} at ${DEFAULT_SUBJECT}.`
    : `Hi, I'd like to know more about ${DEFAULT_SUBJECT}.`
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Villa', href: '#rooms' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Dining', href: '#dining' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
] as const
