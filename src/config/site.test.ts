import { describe, expect, it } from 'vitest'
import { waLink, siteConfig } from './site'

describe('waLink', () => {
  it('uses the configured number', () => {
    expect(waLink()).toContain(`https://wa.me/${siteConfig.whatsappNumber}`)
  })

  it('sends the default message when no context is given', () => {
    expect(waLink()).toContain(
      "text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20Villa%20Dhanika.",
    )
  })

  it('appends the context to the default message', () => {
    const url = waLink('hosting a corporate retreat')
    expect(decodeURIComponent(url.split('text=')[1])).toBe(
      "Hi, I'd like to know more about hosting a corporate retreat at Villa Dhanika.",
    )
  })

  it('encodes characters that would break the query string', () => {
    expect(waLink('a stay in May & June')).not.toContain('& June')
  })

  it('ignores a context that is only whitespace', () => {
    expect(waLink('   ')).toBe(waLink())
  })
})
