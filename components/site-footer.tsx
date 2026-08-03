import { GraduationCap, Globe, Share2, Send, MapPin, Phone, Mail } from 'lucide-react'
import { school } from '@/lib/site-data'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Admissions', href: '#admission' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
]

const socials = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: Share2, label: 'Instagram', href: '#' },
  { icon: Send, label: 'YouTube', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
              <GraduationCap className="size-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-base font-bold">{school.name}</span>
              <span className="text-xs font-medium text-accent">{school.tagline}</span>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/75">
            A UP Board-affiliated school in Kanpur serving Playgroup to Class XII. Since 1999, we
            have delivered affordable excellence — blending future-ready learning with discipline
            and values for every child.
          </p>
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                <social.icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links" className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent">
            Quick Links
          </h3>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent">
            Reach Us
          </h3>
          <p className="flex items-start gap-2 text-sm text-primary-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {school.address}
          </p>
          <a href={`tel:${school.phone}`} className="flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-accent">
            <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {school.phoneDisplay}
          </a>
          <a href={`mailto:${school.email}`} className="flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-accent">
            <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {school.email}
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/70 sm:px-6">
          &copy; 2026 {school.name} | All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
