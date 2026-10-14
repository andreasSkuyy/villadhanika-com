import { villa } from '../../content/villa'
import { siteConfig } from '../../config/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-sand-50">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-2 border-t border-sand-50/15 pt-8 text-sm text-sand-50/70 md:flex-row md:items-center md:justify-between">
          <p>
            Managed &amp; marketed by {siteConfig.managedBy}.
          </p>
          <p>&copy; {new Date().getFullYear()} {villa.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
